/**
 * Conway's Game of Life in P5.js
 *
 * @author  Y H
 * @date    27/06/2016
 *
 * Generate a grid of random values (1 or 0) and play Conway's Game of Life 
 * according to the rules specified at /en.wikipedia.org/wiki/Conway%27s_Game_of_Life
 * 
 * Interface: 
 *      Left Mouse Button:  Pause/Start
 *      Right Mouse Button: Start New Instance
 *
 * Color Codes: Orange:   Alive
 *              Yellow:   Born
 *              DarkBlue: Died
 *              Black:    Dead
 * 
 */
/***************************************************************************************************
 * Globals and Settings
 * ************************************************************************************************/
 // We only make use of settings in render functions and export objects, both of which are seperate
 // from the core functionality. This way the main part of the module is not dependent on settings
var settings = {
    dimensions: {
        x: 50,           //   table x dimension: 3+
        y: 50            //   table y dimension: 3+
    },
    refreshRate: 20,     //  frames per second: 1-60 (recommended)
    cellRoundness: 0.25, //     cell roundness: 0.0 - 1.0
    showBorder: false,   //   show cell border: true, false
    emitLight: 0.25      //  neighbor strength: 0.0 - 1.0
};

var canvas = {
    size: new PVector(width, height)
};

/***************************************************************************************************
 * Namespace
 **************************************************************************************************/
// https://javascriptweblog.wordpress.com/2010/12/07/namespacing-in-javascript/

/**
 * Conway's Game of Life
 * @see /en.wikipedia.org/wiki/Conway%27s_Game_of_Life
 * 
 * @depends p5.js
 * @depends {
 *      dimensions: {x: number, y: number},
 *      refreshRate: number,
 *      cellRoundness: number,
 *      showBorder: boolean,
 *      emitLight: number
 * } settings
 *
 */
var gameOfLife = (function(settings){
    'use strict';
    //debug(settings);
    /***********************************************************************************************
     * Helper Functions
     **********************************************************************************************/
    /**
     * Extends one class with another.
     * 
     * @see http://oli.me.uk/2013/06/01/prototypical-inheritance-done-right/
     * 
     * @param {Function} child: The class that should be inheriting things.
     * @param {Function} parent: The parent class that should be inherited from.
     * @return {Object} The prototype of the parent.
     */
    var extend = function(child, parent) {
        child.prototype = Object.create(parent.prototype);
        child.prototype.constructor = child;
        return parent.prototype;
    };

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
        //debug(this.cells);
    };
    
    /**
     * Generate table of cells using random values of size this.size by this.size
     *
     * @depends {PVector} this.size 
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
         * statistics and visualization. This way less computing must be done, but at the cost of
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
        //debug('cells', this.cells, this.cells.length, this.size);
        // We could expose all of these functions in the prototype, but it's probably better not to
        // unless absolutely neccessary - since this game is potentially resource intensive.
        var game = this;
        
        // Enumerator for state of cell
        var states = {
            DEAD: 0,
            ALIVE: 1
        };
    
        /**
         * Reference states Enum to determine if given cell Value is alive
         *
         * @depends {Array.Array.<number>} game.table.cells
         * 
         * @param  {number} cellValue: the value of a cell
         * @return {boolean} : whether or not cell is alive
         */
        var isAlive = function(row, col) {
            return game.table.cells[row][col] === states.ALIVE;
        };
    
        /**
         * @depends {Array.Array.<number>} game.table.cells
         * 
         * @param  {string} state: the value of a cell
         */    
        var setCell = function (i, j, state) {
            game.table.cells[i][j] = states[state];
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
         * 
         * @param  {number} row : row in table
         * @param  {number} col : column in table
         * @return {number} : number of neighbors
         */
        var countNeighbors = function(row, col) {
            var count = 0;
            //debug(table.dimensions);
            var i, j;
            for (i = row - 1; i <= row + 1; i++) {
                for (j = col - 1; j <= col + 1; j++) {
                    var newRow = rollOverValue(i, 0, game.table.dimensions.y-1);
                    var newCol = rollOverValue(j, 0, game.table.dimensions.x-1);

                    count += game.table.cells[newRow][newCol];
                }
            }
            //debug('count', count);
            // we counted all cells including ourself, so exclude ourself now instead of
            // doing a logic check for every cell !(i === row && j === col)
            return count - game.table.cells[row][col];
        };
        
        // store previous cells in table for display and analytics
        game.prevCells = game.table.cells;
        var newCells = [];
        var i, j;
        for (i = 0; i < game.table.dimensions.y; i++) {
            for (j = 0; j < game.table.dimensions.x; j++) {
                var value = game.table.cells[i][j];
                var neighbors = countNeighbors(i, j);
                if (isAlive(i, j)) {
                    if (neighbors < 2 || neighbors > 3) {
                        value = states.DEAD;
                    }
                }
                else if (neighbors === 3) {
                    value = states.ALIVE;
                }
                if (!newCells[i]){
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
     * Render Functions
     **********************************************************************************************/
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
     */
    var renderGame = function(game) {
        var colors = {
            WHITE: color(255),      
            BLUE: color(15, 36, 74),
            YELLOW: color(255, 246, 106),
            BLACK: color(0),
            ORANGE: color(254, 163, 58)
        };

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
    return {
        instance: createNewGame(),

        /**
         * Update current instance
         */
        update: function() {
            this.instance.update();
        },

        /*
         * Render current instance
         */
        render: function() {
            //debug('instance', this.instance);
            renderGame(this.instance);
            //debug('rendering');
        },

        /*
         * Get new instance and load it
         */
        new: function() {
          this.instance = createNewGame();
        }
    };
})(settings);

/***************************************************************************************************
 * Initialize Program
 * ************************************************************************************************/

//debug(gameOfLife);
var drawing = true;

/***************************************************************************************************
 * Event Handling
 * ************************************************************************************************/

var draw = function() {
    gameOfLife.render();
    gameOfLife.update();
};

var mouseClicked = function() {
    if (mouseButton === RIGHT) {
        gameOfLife.new();
        drawing = true;
    }
    else {
        drawing = !drawing;
    }
    
    if (drawing) {
        loop();
    } else {
        noLoop();
    }
};