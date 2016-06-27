/***************************************************************************************************
 * Globals and Settings
 * ************************************************************************************************/
var refreshRate = 20;

var canvas = {
    size: new PVector(width, height)
};

/***************************************************************************************************
 * Helper Functions
 **************************************************************************************************/
 
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
        this.size = new PVector(w, h);
        this.cells = this.populateRandom();
        //debug(this.cells);
    };
    
    /**
     * Populate The Table Constructor using random values
     * 
     * @return {Array.Array.<number>} : 2D array of cells of size this.size by this.size
     */
    Table.prototype.populateRandom = function() {
        var cells = [];
        for (var i = 0; i < this.size.y; i++) {
            for (var j = 0; j < this.size.x; j++) {
                if (cells[i] === undefined) {
                    cells[i] = [];
                }
                cells[i][j] = round(random(1));
            }
        }
        return cells;
    };  
    
    /**
     * Iterate through all cells and run a method, passing in the cells array and cell location
     * 
     * @param {function(Array.Array.<number>, number, number)} method: method to run on each cell
     * @depends forEachIn2DArray
     */
    Table.prototype.forAllCells = function(method) {
        forEachIn2DArray(this.cells, method);
    };
    
    /**
     * Conway's Game of Life. Defined as constructor in order to allow instancing and initializing
     * 
     * @param {number} w: Width of array (number of columns)
     * @param {number} h: Height of array (number of rows)
     * @constructor
     * @extends {Table}
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
         * @param  {number} cellValue: the value of a cell
         * @return {boolean} : whether or not cell is alive
         */
        var isAlive = function(row, col) {
            return game.table.cells[row][col] === states.ALIVE;
        };
    
        /**
         * @param  {string} state: the value of a cell
         */    
        var setCell = function (i, j, state) {
            game.table.cells[i][j] = states[state];
        };
        
        /**
         * Count the neighbors of a given cell and return the count
         *
         * @depends {PVector} game.table.size
         * 
         * @param  {number} row : row in table
         * @param  {number} col : column in table
         * @return {number} : number of neighbors
         */
        
        var rollOverValue = function (value, min, max) {
            var newValue = value < min? max + value + 1: (
                        value > max? min + (value - max - 1): value
                    );
            //debug(value, 'new', newValue, 'min', min, max);
            
            return newValue;
        };

        var countNeighbors = function(row, col) {
            var count = 0;
            //debug(table.size);
            var i, j;
            for (i = row - 1; i <= row + 1; i++) {
                for (j = col - 1; j <= col + 1; j++) {
                    var newRow = rollOverValue(i, 0, game.table.size.y-1);
                    var newCol = rollOverValue(j, 0, game.table.size.x-1);

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
        
        game.prevCells = game.table.cells;
        var newCells = [];
        var i, j;
        for (i = 0; i < game.table.size.y; i++) {
            for (j = 0; j < game.table.size.x; j++) {
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
                game.neighborCount[i][j] = neighbors;
            }
        }
        game.table.cells = newCells;
    };
    
    /***********************************************************************************************
     * Render Functions
     * ********************************************************************************************/
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
        
        var cellSize = PVector.div(canvas.size, game.table.size);
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
                newColor = lerpColor(newColor, color(255), neighborFactor * 0.5);
              }

              fill(newColor);
              x = cellSize.x * j;
              y = cellSize.y * i;
              rect(x, y, cellSize.x, cellSize.y);
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
frameRate(refreshRate);
var game = {
    instance: gameOfLife.create(100, 100),
    render: gameOfLife.render
};

//debug(game);

/***************************************************************************************************
 * Event Handling
 * ************************************************************************************************/
var draw = function() {
    game.render(game.instance, canvas.size);
    game.instance.update();
};

var mouseClicked = function() {
    game.instance.update();
};