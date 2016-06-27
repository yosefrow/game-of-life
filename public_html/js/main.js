/**
 * Conway's Game of Life
 * @see /en.wikipedia.org/wiki/Conway%27s_Game_of_Life
 *
 * Word Wrap Column: 100
 */

/***************************************************************************************************
 * Globals and Settings
 * ************************************************************************************************/
var refreshRate = 20;

var canvas = {
    size: new PVector(width, height)
};

/***************************************************************************************************
 * Helper Functions
 * ************************************************************************************************/
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
 * Constructors and Prototypes
 * ************************************************************************************************/
/**
 * Define Grid Constructor which holds 2D array of cells
 * 
 * @param {number} w: Width of array (number of columns)
 * @param {number} h: Height of array (number of rows)
 * @constructor
 */
var Grid = function(w, h) {
    this.size = new PVector(w, h);
    this.cells = this.populate('random');
    //debug(this.cells);
};

/**
 * Populate The Grid Constructor using random values
 * 
 * @param {string} type: type of method to use as defined in methods
 */
Grid.prototype.populate = function(type) {
    var cells = [];
    var methods = {
        random: function() {
            return round(random(1));    
        }
    };

    for (var i = 0; i < this.size.y; i++) {
        for (var j = 0; j < this.size.x; j++) {
            if (cells[i] === undefined) {
                cells[i] = [];
            }
            cells[i][j] = methods[type]();
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
Grid.prototype.forAllCells = function(method) {
    forEachIn2DArray(this.cells, method);
};

/**
 * Recursively clone array and return clone 
 * @see http://blog.andrewray.me/how-to-clone-a-nested-array-in-javascript/
 * 
 * @param  {Array} array: array to copy
 * @return {Array} nested copy of array
 */
var cloneArray = function(array) {
    var i, copy;

    if( Array.isArray(array) ) {
        copy = array.slice( 0 );
        for(i = 0; i < copy.length; i++) {
            copy[i] = cloneArray( copy[i] );
        }
        return copy;
    } else if(typeof array === 'object') {
        throw 'Cannot clone array containing an object!';
    } else {
        return array;
    }
};

/**
 * Conway's Game of Life. Defined as constructor in order to allow instancing and fast initializing
 * 
 * @param {number} w: Width of array (number of columns)
 * @param {number} h: Height of array (number of rows)
 * @constructor
 * @extends {Grid}
 */
var GameOfLife = function(w, h) {
    this.grid = new Grid(w, h);
    this.prevCells = this.grid.cells;
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
        return game.grid.cells[row][col] === states.ALIVE;
    };

    /**
     * Reference states Enum to set a cell to a specific state 
     * @param  {string} state: the value of a cell
     */    
    var setCell = function (i, j, state) {
        game.grid.cells[i][j] = states[state];
    };
    
    var countNeighbors = function(row, col) {
        var count = 0;
        //debug(grid.size);
        for (var i = row - 1; i <= row + 1; i++) {
            for (var j = col - 1; j <= col + 1; j++) {
                if (
                    !(i === row && j === col) &&  
                    i >= 0 && i < game.grid.size.y && 
                    j >= 0 && j < game.grid.size.x &&
                    isAlive(i, j)
                ){
                    count++;
                }
            }
        }
        return count;
    };
    
    this.prevCells = game.grid.cells;
    var newCells = [];
    for (var i = 0; i < game.grid.size.y; i++) {
        for (var j = 0; j < game.grid.size.x; j++) {
            var value = game.grid.cells[i][j];
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
        }
    }
    game.grid.cells = newCells;
};

/***************************************************************************************************
 * Render Functions
 * ************************************************************************************************/
 /**
  * Render Grid according to cell Values
  * 
  * @param  {Grid|GameOfLife} grid: Grid or Grid Child
  * @param  {PVector}: Processing Vector of Size in pixels to render the grid at
  */
var renderGame = function(game) {
    stroke(0);
    strokeWeight(1);
    var cellSize = PVector.div(canvas.size, game.grid.size);
    var prevCells = game.prevCells;
    game.grid.forAllCells( 
        function(cells, i, j) {
          var value = cells[i][j];
          var prevValue = prevCells[i][j];
          var born = (value > prevValue);
          var died = (value < prevValue);
          fill(255*value, 100*value + 155*born, 100*value + 155*died);
          rect(cellSize.x * j, cellSize.y * i, cellSize.x, cellSize.y);
        }
    );
};

/***************************************************************************************************
 * Initialize Program
 * ************************************************************************************************/
frameRate(refreshRate);

var game = new GameOfLife(100, 100);

/***************************************************************************************************
 * Event Handling
 * ************************************************************************************************/
var draw = function() {
    renderGame(game, canvas.size);
    game.update();
};