/**
 * Conway's Game of Life in processing.js
 *
 * @author  Y H
 * @date    27/06/2016
 *
 * @depends processing.js
 *
 * @desc Generate a grid of random values (1 or 0) and play Conway's Game of Life 
 * according to the rules specified at /en.wikipedia.org/wiki/Conway%27s_Game_of_Life
 * 
 * Interface: 
 *      Left Mouse Button:  Pause/Start
 *      Right Mouse Button: Start New Instance
 *      Right Key: Next Update
 *
 * Color Codes: 
 *      Orange:   Alive
 *      Yellow:   Born
 *      DarkBlue: Died
 *      Black:    Dead
 *
 * Code Columns: 100
 */
/***************************************************************************************************
 * Globals and Settings
 * ************************************************************************************************/
// width and height are re-defined as a PVector via the canvas global gCanvas
// define canvas if we didn't define it previously
var canvas = {};
if (typeof gCanvas === 'undefined') {
    canvas.size = new PVector(400, 400);
}
else {
    canvas.size = new PVector(gCanvas.width, gCanvas.height);
}

void setup() { //jshint ignore:line
    size(canvas.size.x, canvas.size.y);
}; //jshint ignore:line

// We only make use of settings in render functions and export objects, both of which are seperate
// from the core functionality. This way the main part of the module is not dependent on settings
var settings = {
    dimensions: {
        x: 200,           //   table x dimension: 3+
        y: 'aspectRatio'  //   table y dimension: 3+ or 'aspectRatio'
    },
    refreshRate: 15,     //  frames per second: 1-60 (recommended)
    cellRoundness: 0.25, //     cell roundness: 0.0 - 1.0
    showBorder: false,   //   show cell border: true, false
    emitLight: 0.25      //  neighbor strength: 0.0 - 1.0
};

if (settings.dimensions.y == 'aspectRatio') {
    var aspectRatio = canvas.size.y/canvas.size.x;
    settings.dimensions.y = round(settings.dimensions.x * aspectRatio);
}

//console.log(settings.dimensions);

/***************************************************************************************************
 * Helper Objects
 **************************************************************************************************/
/**
 * Track Frame per Second at a particular average
 * 
 * @type {Object}
 */
var fps = {
    current: 0,
    frameStart: millis(),
    framesToAverage: 60,
    /**
     * Update frames.current value according to this.framesToAverage
     */
    update: function(/*interval*/) {
        // measure fps every set number of frames. 50 in this case
        if (frameCount % this.framesToAverage === 0) {
            // divide number of sampled frames by actual seconds passed
            var secondsElapsed = (millis() - this.frameStart) / 1000;
            this.current = round(this.framesToAverage/secondsElapsed);
            this.frameStart = millis();
        }
    },
    /**
     * Reset frame tracking
     */
    reset : function() {
        this.frameStart = millis();
        this.current = 0;
    }
};

/**
 * Store and set keys
 * 
 * @type {Object}
 */
var keyboard = {
    keys: {},
    /**
     * Set key to boolean value
     * 
     * @param {string|number} key : key or keyCode to set
     * @param {boolean} boolean : state of key
     */
    setKey: function(key, boolean) {
        var k = key.toString();
        if (k.search(/^[\w\+\-\=]/g) === -1) {
            this.keys[keyCode] = boolean;
        } else {
            this.keys[k] = boolean;
        }
    },
    /**
     * Get key in keys object and return it's value
     *         
     * @param  {string|number} key : key or keyCode to get
     * @return {boolean} : whether or not the key is set
     */
    getKey: function(key) {
        return this.keys[key];
    }
};

/***************************************************************************************************
 * Namespace
 **************************************************************************************************/
// https://javascriptweblog.wordpress.com/2010/12/07/namespacing-in-javascript/

/**
 * Conway's Game of Life
 * @see /en.wikipedia.org/wiki/Conway%27s_Game_of_Life
 * 
 * @depends js/vendor/processing.js
 * @depends {
 *      dimensions: {x: number, y: number},
 *      refreshRate: number,
 *      cellRoundness: number,
 *      showBorder: boolean,
 *      emitLight: number
 * } settings
 * 
 * @depends {Object} fps
 * @type {Object}
 */
var gameOfLife = (function(settings) {
    'use strict';
    //console.log(settings);
    /***********************************************************************************************
     * Constructors and Prototypes
     * ********************************************************************************************/
    /**
     * Define Table Constructor which holds 2D array of cells
     * 
     * @param {number} w: Width of array (number of columns)
     * @param {number} h: Height of array (number of rows)
     * @constructor
     */
    var Table = function(w, h) {
        this.dimensions = new PVector(w, h);
        this.cells = this.populateRandom();
        //console.log(this.cells);
    };
    
    /**
     * Generate table of cells using random values of size this.size by this.size
     *
     * @depends {PVector} this.dimensions 
     * 
     * @return {Array.Array.<number>} : 2D array of cells of size this.size by this.size
     */
    Table.prototype.populateRandom = function() {
        var cellCoverage = random(0.25, 0.75);
        var cells = [];
        for (var i = 0; i < this.dimensions.y; i++) {
            for (var j = 0; j < this.dimensions.x; j++) {
                if (cells[i] === undefined) {
                    cells[i] = [];
                }
                cells[i][j] = parseInt(random(1) > cellCoverage, 10);
            }
        }
        return cells;
    };  
    
    /**
     * Iterate through all cells and run a method, passing in the cells array and cell location
     *
     * @depends {Array.Array.<number>} this.cells
     * 
     * @param {function(Array.Array.<number>, number, number)} method: method to run on each cell
     */
    Table.prototype.forAllCells = function(method) {
        for (var i = 0; i < this.cells.length; i++) {
            for (var j = 0; j < this.cells[i].length; j++) {  
                method(this.cells, i, j);
            }
        }
    };
    
    /**
     * Conway's Game of Life. 
     * 
     * Although we could theoretically define it as a regular object with nested functions, 
     * We Defined it as constructor in order to allow easy instancing and re-initializing
     * 
     * @param {number} w: Width of table (number of columns)
     * @param {number} h: Height of table (number of rows)
     * @constructor
     */
    var GameOfLife = function(w, h) {
        this.table = new Table(w, h);
        /* 
         * The following 2 tables are not needed for calculation and are recorded for the sake of
         * statistics and visualization. This way less computing might be done, but at the cost of
         * more memory usage
         */
        this.prevCells = this.table.cells;
        this.neighborCount = [];
    };
    
    /**
     * Update cells in the cells array according To the rules of Conway's Game of Life
     * @see https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
     *
     * @depends {Table} this.table
     * @depends {Array.Array.<number>} this.prevCells
     * @depends {Array.Array.<number>} this.neighborCount
     * 
     */
    GameOfLife.prototype.update = function() {
        //console.log('cells', this.cells, this.cells.length, this.size);
        // We could expose all of these functions in the prototype, but it might save 
        // resources if we do it this way, and this game is resource intensive
        var game = this;
        
        // Enumerator for state of cell
        var states = {
            DEAD: 0,
            ALIVE: 1
        };
    
        /**
         * Reference states Enum to determine if given cell Value is alive
         *
         * @depends {Function} : getCell
         * 
         * @param  {number} cellValue: the value of a cell
         * @return {boolean} : whether or not cell is alive
         */
        var isAlive = function(row, col) {
            return getCell(row, col) === states.ALIVE;
        };
    
        /**
         * @depends {Array.Array.<number>} game.table.cells
         * 
         * @param  {string} state: the value of a cell
         */    
        var getCell = function(row, col) {
            return game.table.cells[row][col];
        };

        /**
         * Roll over a value between min and max values
         * 
         * @param  {number} value : incoming value
         * @param  {number} min : minimum value in range
         * @param  {number} max : maximum value in range
         * @return {number} newValue : rolled-over value
         */                
        var rollOverValue = function (value, min, max) {
            var newValue = value < min? max + (value % max) + 1: (
                        value > max? min + (value % max): value
                    );            
            return newValue;
        };
        
        /**
         * Count the neighbors of a given cell and return the count
         *
         * @depends {PVector} game.table.dimensions
         * @depends {Function} rollOverValue
         * @depends {Function} isAlive
         * @depends {Function} getCell
         * 
         * @param  {number} row : row in table
         * @param  {number} col : column in table
         * @return {number} : number of neighbors
         */
        var countNeighbors = function(row, col) {
            var count = 0;
            //console.log(table.dimensions);
            var i, j;
            for (i = row - 1; i <= row + 1; i++) {
                for (j = col - 1; j <= col + 1; j++) {
                    var newRow = rollOverValue(i, 0, game.table.dimensions.y-1);
                    var newCol = rollOverValue(j, 0, game.table.dimensions.x-1);

                    count += getCell(newRow, newCol);
                }
            }
            //console.log('count', count);
            // we counted all cells including ourself, so exclude ourself now instead of
            // doing a logic check for every cell !(i === row && j === col)
            return count - getCell(row, col);
        };
        
        // store previous cells in table for display and analytics
        game.prevCells = game.table.cells;
        var newCells = [];
        var i, j;
        for (i = 0; i < game.table.dimensions.y; i++) {
            for (j = 0; j < game.table.dimensions.x; j++) {
                var value = getCell(i, j);
                var neighbors = countNeighbors(i, j);
                if (isAlive(i, j)) {
                    if (neighbors < 2 || neighbors > 3) {
                        value = states.DEAD;
                    }
                }
                else if (neighbors === 3) {
                    value = states.ALIVE;
                }
                if (!newCells[i]) {
                    newCells[i] = [];
                }
                newCells[i][j] = value;
                if (!game.neighborCount[i]) {
                    game.neighborCount[i] = [];
                }
                // store neighbor count in table for display and analytics
                game.neighborCount[i][j] = neighbors;
            }
        }
        game.table.cells = newCells;
    };
    
    /***********************************************************************************************
     * Render Functions (Nothing After this point is essential to the game's core)
     **********************************************************************************************/

    var colors = {
        WHITE: color(255),      
        BLUE: color(15, 36, 74),
        YELLOW: color(255, 246, 106),
        BLACK: color(0),
        ORANGE: color(254, 163, 58)
    };

    var renderOverlay = function(message, x, y) {
        fill(0, 150);
        rect(0, 0, canvas.size.x, canvas.size.y);
        textAlign(CENTER, CENTER);
        fill(colors.black);
        textSize(canvas.size.x * 0.02);
        text(message, x, y);
    };

    /**
     * Render Table according to cell Values
     *
     * @depends {{
     *      showBorder: boolean, 
     *      emitLight: number,
     *      cellRoundness: number
     * }} settings
     * 
     * @param  {Table|GameOfLife} table: Table or Table Child
     * @param  {PVector}: Processing Vector of Size in pixels to render the table at
     *
     * @depends {Object} colors: Enumerator object for colors
     */
    var renderGame = function(game) {
        // variables that go in the anonymous function are defined here as well, since the function
        // will be run in a loop and we don't want to intialize them over and over

        var cellSize = PVector.div(canvas.size, game.table.dimensions);
        var prevCells = game.prevCells;
        var neighborCount = game.neighborCount;
        
        var value;
        var prevValue;
        var born; 
        var died;
        var newColor;
        var neighbors;
        var x;
        var y;
        
        stroke(0);
        strokeWeight(1);
        if (!settings.showBorder) {
            noStroke();
        }
        background(colors.BLACK);
        game.table.forAllCells( 
            function(cells, i, j) {
              value = cells[i][j];
              prevValue = prevCells[i][j];
              born = (value > prevValue);
              died = (value < prevValue);
              newColor = color(0);
              
              newColor = born? colors.YELLOW: (
                            died? colors.BLUE: (
                                value? colors.ORANGE: 
                                    colors.BLACK
                            )
                        );

              if (neighborCount.length > 0) {
                neighbors = neighborCount[i][j];

                var neighborFactor = neighbors / 8;
                newColor = lerpColor(newColor, colors.WHITE, neighborFactor * settings.emitLight);
              }

              fill(newColor);
              y = cellSize.y * i;
              x = cellSize.x * j;
              var cornerRadius = settings.cellRoundness * min(cellSize.x, cellSize.y);
              rect(x, y, cellSize.x, cellSize.y, cornerRadius);

              // Uncomment this block to see the neighbor count displayed
              // We could have set it as an option, but we are trying to save resources
              /*
                textAlign(CENTER, CENTER);
                fill(255*!value)
                textSize( min(cellSize.x, cellSize.y) * 0.8);
                text(neighbors, x + cellSize.x/2, y + cellSize.y / 2); 
              */

            }
        );
    };
    /**
     * Generate new instance of GameOfLife, passing it dimensions settings
     *
     * @depends {{dimensions}} settings
     * 
     * @return {GameOfLife}
     */
    var createNewGame = function() {
        return new GameOfLife(settings.dimensions.x, settings.dimensions.y);
    };

    // Setup Environment    
    frameRate(settings.refreshRate);

    // Export Public Attributes
    var exports = {
        instance: createNewGame(),
        optimizing: true,
        /**
         * Update current instance
         *
         * @depends {Function} fps
         * @depends {Object} settings
         */
        update: function() {
            this.instance.update();
            var toleranceFactor = 0.9;

            // only run this once, to avoid optimizing on page sleeps
            if (frameCount == fps.framesToAverage && 
                fps.current < settings.refreshRate * toleranceFactor 
            ) {                
                // There isn't really a linear correlation so we compensate a bit
                // There is probably an exponential alogrithm for this
                var compensation = 1.3; 
                var performanceFactor = (fps.current/settings.refreshRate) * compensation;

                settings.dimensions.x = round(settings.dimensions.x * performanceFactor);
                settings.dimensions.y = round(settings.dimensions.y * performanceFactor);
                fps.reset();
                this.initialize();
                this.optimizing = true;
            }
        },

        /**
         * Render current instance
         *
         * @depends {Function} fps
         * @depends {Function} renderOverlay
         * @depends {Function} renderGame
         * @depends {Object} canvas
         */
        render: function() {
            //console.log('instance', this.instance);
            renderGame(this.instance);
            //console.log(fps.current);
            //console.log('rendering');
            if (this.optimizing) {
                renderOverlay('Optimizing ...', canvas.size.x/2, canvas.size.y/2);
                if (frameCount > fps.framesToAverage) {
                    this.optimizing = false;
                }
            }
        },

        /**
         * Get new instance and load it
         *
         * @depends {Function} createNewGame
         */
        initialize: function() {
          this.instance = createNewGame();
        }
    };
    return exports;
})(settings);

/***************************************************************************************************
 * Initialize Program
 * ************************************************************************************************/

//console.log(gameOfLife);
var drawing = true;

/***************************************************************************************************
 * Event Handling
 * ************************************************************************************************/

void draw() { //jshint ignore:line
    fps.update();
    gameOfLife.update();

    gameOfLife.render();
}; //jshint ignore:line

void mouseClicked() { //jshint ignore:line
    if (mouseButton === RIGHT) {
        gameOfLife.initialize();
        drawing = true;
    }
    else if (!gameOfLife.optimizing) {
        drawing = !drawing;
    }
    
    if (drawing) {
        fps.reset();
        loop();
    } else {
        noLoop();
    }
}; //jshint ignore:line

void keyPressed() { // jshint ignore:line
    keyboard.setKey(key, true);

    if ( keyboard.getKey(RIGHT) ) {
        gameOfLife.update();
        gameOfLife.render();
    }
}; //jshint ignore:line

void keyReleased() { // jshint ignore:line
    keyboard.setKey(key, false);
}; //jshint ignore:line