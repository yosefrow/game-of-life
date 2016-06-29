/**
 * Conway's Game of Life in processing.js
 *
 * @see /en.wikipedia.org/wiki/Conway%27s_Game_of_Life
 * @author  Y H
 * @date    28/06/2016
 * 
 * @requires p5.js
 *
 * @desc Generate a grid of random values (1 or 0) and play Conway's Game of Life 
 * according to the rules specified at /en.wikipedia.org/wiki/Conway%27s_Game_of_Life
 * 
 * Interface: 
 *      Left Mouse Button:  Pause/Start
 *      R Key: (Restart) Start New Instance
 *      F Key: (Forward) Next Update 
 *      - / +: Zoom out / in
 *      { / }: Speed down / up
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
 * Namespace via IIFE (Immediately Invoked Function Expression)
 **************************************************************************************************/
// https://javascriptweblog.wordpress.com/2010/12/07/namespacing-in-javascript/
/**
 * Game Of Life Module
 *
 * MUST BE INITIALIZED WITH gameOfLife.sketch.load();
 *     
 * @param  {string} canvasContainer : id of canvas container
 * @param  {{x: width, y: height}} dimensions : dimensions of game
 * @return {{instance: Object, settings: Object, sketch: Object,}}} exports from module
 */
var gameOfLife = (function(canvasContainer, dimensions){
    /***********************************************************************************************
    * Settings
    * *********************************************************************************************/
    // We only make use of settings in render functions & combined logic, both of which are seperate
    // from core functionality. This way the main part of the module is not dependent on settings
    var settings = {
        dimensions: {
            x: 50,           //   table x dimension: 3+
            y: 'aspectRatio'  //   table y dimension: 3+ or 'aspectRatio'
        },
        refreshRate: 15,     //  frames per second: 1-60 (recommended)
        cellRoundness: 0.25, //     cell roundness: 0.0 - 1.0
        showBorder: false,   //   show cell border: true, false
        emitLight: 0.25      //  neighbor strength: 0.0 - 1.0
    };

    var exports = {};
    var sketch = {};
    var canvas = {};
    var render  = {};
    var performance = {};
    var fps = {};
    var game = {};
    var colors = {};

    var keyboard;
    
    if (typeof dimensions === 'object') {
        canvas.size = createVector(dimensions.x, dimensions.y);
    }

    sketch.setup = function(){
        if (typeof dimensions !== 'object') {
            canvas.size = createVector(windowWidth, windowHeight);
        }

        canvas.handle = createCanvas(canvas.size.x, canvas.size.y);
        canvas.handle.parent(canvasContainer);

        if (settings.dimensions.y == 'aspectRatio') {
            var aspectRatio = canvas.size.y/canvas.size.x;
            settings.dimensions.y = round(settings.dimensions.x * aspectRatio);
        }

        /*******************************************************************************************
         * Helper Objects
         ******************************************************************************************/
        /**
         * Track Frame per Second at a particular average
         * 
         * @type {Object}
         */
        fps = {
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
        keyboard = {
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
            keyIsDown: function(key) {
                return this.keys[key];
            }
        };

        /*******************************************************************************************
         * Constructors and Prototypes
         * ****************************************************************************************/
        /**
         * Define Table Constructor which holds 2D array of cells
         * 
         * @param {number} w: Width of array (number of columns)
         * @param {number} h: Height of array (number of rows)
         * @constructor
         */
        var Table = function(w, h) {
            this.dimensions = createVector(w, h);
            this.cells = this.populateRandom();
            //console.log(this.cells);
        };
        
        /**
         * Generate table of cells using random values of size this.size by this.size
         *
         * @depends {p5.Vector} this.dimensions 
         * 
         * @return {Array.Array.<number>} : 2D array of cells of size this.size by this.size
         */
        Table.prototype.populateRandom = function() {
            var cellCoverage = random(0.3, 0.75);
            var cells = [];
            for (var i = 0; i < this.dimensions.y; i++) {
                for (var j = 0; j < this.dimensions.x; j++) {
                    if (cells[i] === undefined) {
                        cells[i] = [];
                    }
                    var selected = random(1.0) > cellCoverage? 1: 0;
                    cells[i][j] = parseInt(selected, 10);
                    //console.log(cells[i][j]);
                }
            }
            return cells;
        };  
        
        /**
         * Iterate through all cells and run a method, passing in the cells array and cell location
         *
         * @depends {Array.Array.<number>} this.cells
         * 
         * @param {function(Array.Array.<number>, number, number)} method: method to run on cells
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
             * The following 2 tables are not needed for calculation and are recorded for sake of
             * statistics and visualization. This way less computing might be done, but at cost of
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
            var self = this;
            
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
             * @depends {Array.Array.<number>} self.table.cells
             * 
             * @param  {string} state: the value of a cell
             */    
            var getCell = function(row, col) {
                return self.table.cells[row][col];
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
             * @depends {p5.Vector} self.table.dimensions
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
                        var newRow = rollOverValue(i, 0, self.table.dimensions.y-1);
                        var newCol = rollOverValue(j, 0, self.table.dimensions.x-1);

                        count += getCell(newRow, newCol);
                    }
                }
                //console.log('count', count);
                // we counted all cells including ourself, so exclude ourself now instead of
                // doing a logic check for every cell !(i === row && j === col)
                count -= getCell(row, col);
                //console.log(count);
                return count;
            };
            
            // store previous cells in table for display and analytics
            self.prevCells = self.table.cells;
            var newCells = [];
            var i, j;
            for (i = 0; i < self.table.dimensions.y; i++) {
                for (j = 0; j < self.table.dimensions.x; j++) {
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
                    if (!self.neighborCount[i]) {
                        self.neighborCount[i] = [];
                    }
                    // store neighbor count in table for display and analytics
                    self.neighborCount[i][j] = neighbors;
                }
            }
            self.table.cells = newCells;
        };


        /*******************************************************************************************
         * Combined Logic Functions (Nothing After this point is essential to the game's core)
         ******************************************************************************************/

        /**
         * object to handle the current game instance
         *
         * @depends {Object} settings
         * @depends playing
         * 
         * @type {Object}
         */
        game = {
            current: undefined,
            playing: false,

            /**
             * Generate new instance of GameOfLife, passing it dimensions settings
             *
             * @depends {{dimensions}} settings
             * 
             * @return {GameOfLife}
             */
            initialize: function() {
                this.current = new GameOfLife(settings.dimensions.x, settings.dimensions.y);
                this.playing = true;
            }
        };

        /**
         * Optimize current settings according to fps during the first fps average. Don't run 
         * again because further optimization is buggy ie. false positive from unfocusing tab
         *
         * @depends {Function} fps
         * @depends {Object} settings
         */
        performance = {
            optimizing: true,
            optimize: function() {
                var toleranceFactor = 0.9;

                // only run this once, to asketch.optimizing on page sleeps
                if (frameCount <= fps.framesToAverage) {
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
                        game.initialize();
                        this.optimizing = true;
                    }
                }
                else {
                    this.optimizing = false;
                }
            }
        };
    
        /*******************************************************************************************
         * Render Functions 
         ******************************************************************************************/
        /**
         * Colors Enumerator
         * 
         * @type {Object}
         */
        colors = {
            WHITE: color(255),      
            BLUE: color(15, 36, 74),
            YELLOW: color(255, 246, 106),
            BLACK: color(0),
            ORANGE: color(254, 163, 58)
        };

        /**
         * Render a partial view blocking overlay with some text (white on black)
         * 
         * @param  {string} message :  the string to show in the overlay
         * @param  {number} x       : x position of overlay center
         * @param  {number} y       : y position of overlay center
         */
        render.overlay = function(message, x, y) {
            fill(0, 150);
            rect(0, 0, canvas.size.x, canvas.size.y);
            textAlign(CENTER, CENTER);
            fill(colors.WHITE);
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
         * @param  {p5.Vector}: Processing Vector of Size in pixels to render. the table at
         *
         * @depends {Object} colors: Enumerator object for colors
         */
        render.game = function(game) {
            // variables that go in the anonymous function are defined here as well, since the 
            // function will be run in a loop and we don't want to intialize them over and over

            //var cellSize = p5.Vector.div(canvas.size, game.table.dimensions);
            // ^ this not working for some reason
            var cellSize = createVector(
                canvas.size.x/game.table.dimensions.x, 
                canvas.size.y/game.table.dimensions.y
            );
            //console.log('cells', cellSize, 'canvas', canvas.size, 'table', game.table.dimensions);
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
                  //console.log(newColor);

                  if (neighborCount.length > 0) {
                    neighbors = neighborCount[i][j];

                    var neighborFactor = neighbors / 8;
                    newColor = lerpColor(
                      newColor, colors.WHITE, 
                      neighborFactor * settings.emitLight
                    );
                  }

                  fill(newColor);
                  y = cellSize.y * i;
                  x = cellSize.x * j;
                  var cornerRadius = settings.cellRoundness * min(cellSize.x, cellSize.y);
                  //console.log(rect, x, y, cellSize.x, cellSize.y);
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
         * Render an overlay when optimizing at the beginning
         *
         * @depends {Function} : render.overlay
         * @depends {Object} : canvas.size
         */
        render.optimizeOverlay = function() {
            if (performance.optimizing) {
                render.overlay('Optimizing ...', canvas.size.x/2, canvas.size.y/2);
            }
        };

        /*******************************************************************************************
         * Initialize Program
         * ****************************************************************************************/
        // Setup Environment    
        frameRate(settings.refreshRate);
        game.initialize();
        //console.log(game);
    };
    
    /**
     * keyCodes Enumerator
     * 
     * @type {Object}
     */
    var keyCodes = {
        PLUS: 187,
        MINUS: 189,
        LEFT_BRACKET: 219,
        RIGHT_BRACKET: 221
    };

    /**
     * Handle keyboard key presses in keyPressed Event Handler
     *
     * @depends {Object} keyboard
     * @depends {Object} settings
     * @depends {Object} render
     * @depends {Object} game
     */
    var handleKeyPresses = function() {        
        if ( keyboard.keyIsDown('F') ) {
            game.current.update();
            render.game(game.current);
        }
        else if ( keyboard.keyIsDown('R') ) {
            game.initialize();
        }
    };

    /**
     * Handle Long keyboard key presses in draw function
     *
     * @depends {Object} keyboard
     * @depends {Object} keyCodes
     * @depends {Object} settings
     */
    var handleLongKeyPresses = function() {
        if ( keyboard.keyIsDown(keyCodes.RIGHT_BRACKET) ) {
            settings.refreshRate++;
            frameRate(settings.refreshRate);
        }
        else if ( keyboard.keyIsDown(keyCodes.LEFT_BRACKET) ){
            settings.refreshRate--;
            frameRate(settings.refreshRate);
        }
        else if ( keyboard.keyIsDown(keyCodes.MINUS) ) {
            settings.dimensions.x = round(settings.dimensions.x * 1.1);
            settings.dimensions.y = round(settings.dimensions.y * 1.1);
            game.initialize();
        }
        else if ( keyboard.keyIsDown(keyCodes.PLUS) ){
            settings.dimensions.x = round(settings.dimensions.x * 0.9);
            settings.dimensions.y = round(settings.dimensions.y * 0.9);
            game.initialize();
        }
    };

    sketch.draw = function() {
        fps.update();
        if (game.playing) {
            performance.optimize();
            game.current.update();
            render.game(game.current);

            //console.log('instance', game);
            render.optimizeOverlay();
            //console.log(fps.current, 'rendering');
        }
        handleLongKeyPresses();
    };

    sketch.mouseClicked = function() {
        if (!performance.optimizing) {
            game.playing = !game.playing;
        }
    };

    sketch.keyPressed = function() {

        console.log("p5 keyCode: ", keyCode, "p5 key: ", key);
        keyboard.setKey(key, true);
        handleKeyPresses();
    };

    sketch.keyReleased = function() { // jshint ignore:line
        keyboard.setKey(key, false);
    };

    /**
     * Manually load the p5 sketch variables into globals. Only one sketch should be loaded globally
     * at a time. For p5 instances we can use the built in p5.js instancing
     */
    sketch.load = function() {        
        if (sketch.setup) {setup = sketch.setup;}
        if (sketch.draw) {draw = sketch.draw;}
        if (sketch.mouseClicked) {mouseClicked = sketch.mouseClicked;}
        if (sketch.keyReleased) {keyReleased = sketch.keyReleased;}   
        if (sketch.keyPressed) {keyPressed = sketch.keyPressed;}
    };

    // Export Public Attributes
    exports.instance = game;
    exports.setttings = settings;
    exports.sketch = sketch;

    return exports;
})('canvasContainer');

gameOfLife.sketch.load();