/**
 * Conway's Game of Life in P5.js
 *
 * @author  Yosef Harrow
 * @date    27/06/2016
 *
 * Generate a grid of random values (1|0) and play Conway's Game of Life 
 * according to the rules specified at /en.wikipedia.org/wiki/Conway%27s_Game_of_Life
 *
 * Color Codes: Orange:   Alive
 *              Yellow:   Born
 *              DarkBlue: Died
 *              DarkBlue: Dead
 * 
 */
/***************************************************************************************************
 * Globals and Settings
 * ************************************************************************************************/
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
 * @author Y H
 * 
 * @depends {Object{ size: PVector }} canvas
 * @depends {Function} forEachIn2DArray
 * @depends {Function} extend
 *
 */
var gameOfLife = (function(){
    'use strict';
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

    /**
     * Iterate through 2D Array and run a method, passing in the array and 2D index
     *
     * @param {Array.Array} array: array of arrays
     * @param {function(Array.Array.<number>, number, number)} method: method to run on each cell
     * @depends forEachIn2DArray
     */

    var forEachIn2DArray = function(array, method) {
        for (var i = 0; i < array.length; i++) {
            for (var j = 0; j < array[i].length; j++) {  
                method(array, i, j);
            }
        }
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
     * @depends {Function} forEachIn2DArray
     * 
     * @param {function(Array.Array.<number>, number, number)} method: method to run on each cell
     */
    Table.prototype.forAllCells = function(method) {
        forEachIn2DArray(this.cells, method);
    };
    
    /**
     * Conway's Game of Life. Defined as constructor in order to allow instancing and initializing
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

                    if ( isAlive(newRow, newCol) ) {
                        count++;
                    }
                }
            }
            //debug('count', count);
            // we counted all cells including ourself, so exclude ourself now instead of
            // doing a logic check for every cell !(i === row && j === col)
            return count - isAlive(row, col);
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
    
    var createNewGame = function(w, h) {
        return new GameOfLife(w, h);
    };
    
    // Namespace Exports
    return {
        create: createNewGame,
        render: renderGame
    };
})();

/***************************************************************************************************
 * Initialize Program
 * ************************************************************************************************/
frameRate(settings.refreshRate);
var game = {
    instance: gameOfLife.create(settings.dimensions.x, settings.dimensions.y),
    render: gameOfLife.render
};

//debug(game);

/***************************************************************************************************
 * Event Handling
 * ************************************************************************************************/
var drawing = true;
var draw = function() {
    game.render(game.instance, canvas.size);
    game.instance.update();
};

var mouseClicked = function() {
    drawing = !drawing;
    if (drawing) {
        loop();
    } else {
        noLoop();
    }
};