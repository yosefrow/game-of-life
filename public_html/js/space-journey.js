/*==========================================================
 <<< SPACE JOURNEY >>> [A Journey through space, (and time)]
 ===========================================================
 LICENSING, CREDITS, AND INFORMATION 
 ===========================================================
 This code is released under the MIT license. Attribution is
 appreciated.
 The author retains ownership of the original work.
 ===========================================================
 @author: Y H
 @date: 20/02/2015
 @version: 0.309pr
 ORIGINAL LINK: https://www.khanacademy.org/cs/space-journey/5922406678921216
 ===========================================================
 KEY BINDS
 ===========================================================
 NAVIGATION
 Forward: UP, W
 Back: DOWN, S
 Left: LEFT, A
 Right: RIGHT, D

 ENGINE THROTTLE
 Increase: +, =
 Decrease: -, _

 GAME STATE
 Toggle Pause: P
 Game Over: Q
 ===========================================================
 RELEASE NOTES
 ===========================================================

 This is the "Space Station Plus" release

 In this release we introduce space stations, asteroid
 collisions, new graphics and mechanics, a quit button
 and a whole host of program optimizations behind the scenes.

 Most importantly, we now have a proper Finite State Machine
 and a scheduling service which will enable some great things
 in the future.

 See the Change Log below for a detailed list of changes

 As always, feel free to report bugs or suggest features in
 the tips section.

 Happy Journeys

 ===========================================================
 CHANGE LOG
 ===========================================================

 0.309
 + Major code refactor
 + implemented new Finite State Machine system
 + implemented new registry based event system
 - removed dependence on cFrameCount variable
 - removed dependence on frameCount in general
 * rewrote notify/notice system
 - removed delayed notice feature (replaced with scheduler)
 + added scheduler to event system for ease of use
 + added key controls. q for gameOver state
 * changed more frameCount based events to sessionDuration based (landed object)
 * fixed bugs related to the new notice system
 + added new DamageHazard constructors
 * cleaned up landing events
 * prettified black holes
 * prettified suns
 * made asteroid sizes more varied
 + added method to fix entity clipping (effectSize)
 + added Technology constructor for custom Tech settings
 + enforced space position passing and setting for all entities
 * cleaned up and optimized PlanetRing constructor
 + added asteroid damage on ship nose collision
 * fixed ship damage draw
 * fixed asteroid hitboxes
 -hotfix 0.3092
 * fixed firefox crashing due to negative asteroid image size
 + added error reporting for draw methods
 -hotfix 0.3093
 * fixed major bug with suns being stuck in the pipeline
 * fixed issue with blackhole drawing
 -hotfix 0.3094
 * updated fps method to be more concise
 * fixed issue with blackholes getting stuck in title screen

 0.26
 * replaced ScaleByLocalShape method with popMatrix, pushMatrix
 + New sun render code
 + Added new space station entity


 0.251
 * Slightly increased ship quality in challenge mode
 * Reduced chance of spawning a hostile planet to 10% from 12.5%
 * Fixed planet rotation not being set in relation to sun
 + Added new Sun graphic
 * Fixed entity effects like rings being cut off
 * Improved Planet Ring render method - Thanks GoldenApple
 for the idea

 0.25
 - Fixed font rendering bug caused by missing custom fonts by removing custom fonts
 * made title screen rendering font code more readable
 * optimized entity rendering
 * changed entity pipeline to a controlled method (can now predict distances)
 + added solar system radar (crude implementation)
 * abstracted the ship object. Custom ships can now be
 created
 * reorganized ship object structure (seperated customizable methods and properties)
 * seperated ship supply info , from atributes
 * optimized star rendering code
 + Added random sizes for stars
 * star length now depends on distance from focus
 * planet landing size is larger now
 * tweaked technology and upgrade selection algorithm (made it more readable)
 * stream-lined initialization
 + created new restart / menu dialog for end of game
 + new graphic for asteroids
 * you must now be close to an entity in order to land on it
 * distance now stops being counted when you land
 * changed distances between solar systems and planets
 0.24
 + Added new planet draw method
 + Added planet rings
 * Change planet lighting method
 + first stages of landing event system framework
 + added new vandalism and hullupgrade events
 + finalized parts of the upgrade system framework
 + added new confirm dialog box system
 + added game over message
 * balanced challenge mode
 * optimized entity pipeline

 0.221
 * added fps counter
 - fixed critical throttle bug by disabling mouse based
 throttle

 0.22
 + Added random plant generation for planets
 * Made Surface Light Body spawning more random
 * Made Surface Stars optional
 * Changed KP Measurement to uP
 * Increased Asteroid belt frequency
 * Fixed ship appearing the wrong size when landed
 * Slightly decreased the chance to spawn with surfaceDmgTick

 0.21
 + Added damage graphic to ship
 + Added some framework for ship upgrades
 + Added new sun rays graphic
 + Added pulsing to hyperspace color
 + Added black holes and voids (empty spaces around black holes)
 * Stars now have a twinkling effect
 + Added flames light effect
 * Adjusted rate of movement for entities
 * Refactored some functions
 * Ship now zooms to reflect planet size

 0.201
 * Reduced the distance a space ship can travel on fuel fumes
 + Added out of fuel game-over message
 + Added upgrades property to planets
 * Planets now offer an upgrade just once or not at all
 * Free fly mode now gives you a lvl 100 scanner.

 0.20
 + Added ui slider element framework
 + Added ability to select or "over-select" resources
 + Added name property to planets
 * Scanner is now visible when landed
 * Scanner now shows quality instead of amount
 * Slowed planet shifting while landing.
 + Added welcome message to planets
 * Fixed notification overflow protection
 * Ship now leaves from the same point it entered
 + Added a bit more dialog

 0.192
 * Fixed bug with planet resource quantity evaluation and notification
 * Clarified scanner readings by adding units string to the end of detailed readings
 + Added custom cursors
 * Fixed hostile damage minimum being too low

 0.191
 * Resource quality is now no less than Technology level -10
 * Made planets twice as rare in challenge mode

 0.19
 * Reworked Damage System for Balance and readability
 * Made Planet/Sun damage based on distance
 * Made minimum distance for taking planet/sun damage
 + Added Hostile surface elements that do damage over time
 * Planet scanner will now show QL of material if it exceeds planet tech
 * Speed is reduced to 0.1 when landed

 0.182
 + Added ability to toggle pause of game state

 0.181
 + Added efficient method for smooth key controls

 0.18
 * Consolidated and Optimized Resource Framework (now easy to add resources )
 + Notify system can now use colors and delays
 * Increased Landing speed (still depends on ship speed)
 * Added damage when landing too fast - Idea: GoldenApple
 + Made Hull Health bar now flash when taking damage
 * Reworked damage system to allow for centralized registration
 * Made Damage over time such as fire damage now possible
 * Made some planets not inhabited with reduced resources
 + Inhabited planets now have a technology level that caps their resources
 + Added support for random receiving and upgrading of ship tools
 + Added new tool to the game: The Planet Scanner
 * Ship's exhaust colors better simulate burning of hydrogen - Idea: @ecart1
 * Made Planet Surface solid color using lerpColor instead of transparency
 * Added general readability improvements and optimizations.
 * Made Challenge mode a bit more challenging.
 * Fixed there being too many "kind aliens" -Report: @benburrill

 0.171
 * Added a few Minor Bug Fixes

 0.17
 + Added Ship Health System
 + Added Sun Entity
 * Divided Planets into Solar Systems
 * Placed Asteroids Between Solar Systems
 + Made Some Planets surfaceDmgTick
 * Improved Handling of some gameStates
 * Reworked Speed of stars vs ship vs entity landing
 - Reverted Planets to previous graphic style

 0.162
 + Divided into 3 Game Modes
 + Added Title Screen

 0.16
 + Added Planet Landing
 + Added Notifications System
 + Added SysEvents System
 + Added Fuel System
 * Polished ui Framework

 0.15
 * Restructured Code Objects
 * Prevented Memory Leak
 + Added Key Control
 + Added Planet Detail
 + Added Motion Blur (turn off by setting useMotionBlur to 0 )

 0.14
 * Made Speed properly depend on throttle
 + Made Realistic Entity placement system based on distance
 * Distance is now measured in KiloParsecs

 0.13
 * Major Code Rewrite
 + Added New Spawning Method
 + Added Asteroid Belts
 + Added Planet Clusters
 + Added Distance Counter

 ===========================================================
 TO DO
 ===========================================================
 Finish implementing entity heading (decide lvl of detail/zoom)
 make entity exploration module (p for entities)
 interaction with asteroidswhile traveling
 safely implement rotate effect for hyperspace
 make combat system
 build entity/particle creation framework
 make new entities: void, Thicker asteroid belts?
 Proper SpaceShip Friction
 Make event system based on millis() instead of frameCount
 Planets as currency?
 ===========================================================
 KNOWN BUGS
 ===========================================================
 Glitch when accellerating and turning on an empty tank
 ===========================================================
 CREDITS
 ===========================================================
 CODE:
 Animated Rain: @TheAwesomeDudeGuy
 https://www.khanacademy.org/cs/animated-rain/6580021787361280

 FEEDBACK:
 @ecart1, @benburrill, @deadrory, @GoldenApple, @PvD
 ===========================================================
 SPINOFF AUTHOR:
 ===========================================================*/
// width and height are not properly defined as globals, so we do it here
var width = 400; //jshint ignore:line
var height = 400; //jshint ignore:line

void setup() { //jshint ignore:line
    size(width, height);
}; //jshint ignore:line
// see State comments
// jshint -W069 
var mouseIsPressed = false;
var version = "0.309 pre-release";
//==========================================================
// Define Finite State Machine /////////////////////////////
var State = function() {
    // jslint says to avoid defining properties this way, but if we
    // dont, we will run into troubles because of reserved words
    // jshint -W069
    // problem solved
    this["run"] = function() {};
    this["draw"] = function() {};
    this["mouseClicked"] = function() {};
    this["mousePressed"] = function() {};
    this["mouseReleased"] = function() {};
    this["mouseMoved"] = function() {};
    //this["mouseDragged"] = function() { };
    this["mouseOver"] = function() {};
    this["mouseOut"] = function() {};
    this["keyPressed"] = function() {};
    this["keyReleased"] = function() {};
    this["keyTyped"] = function() {};
};

var state = {
    list: {},
    current: "default",
    switch: function(name) {
        this.current = name;
        this.list[name].run();
    },
    define: function(name, runTimeCode) {
        this.list[name] = new State();
        this.list[name].run = runTimeCode;
    }
};
// End State Machine ///////////////////////////////////////////
//================================================================
// Constants For Tinkering /////////////////////////////////
var useMotionBlur = 1; // 1 or 0 - motion blur on or off
// Max Entities to load at once. This is a safety measure
var maxEntities = 200;
// Max number of asteroid to spawn at once. Limited by frames
var maxAsteroids = 50;
var starCount = 150; // amount of stars
var starLengthMod = 1; // From 0 to .. // modify length of stars
var starSpeedMod = 1; // From 0 to .. // modify speed of stars
// 0.0 - 1.0 (normal) frequency of asteroid belts
var asteroidBeltFreq = 1;
// 0.0 - 1.0 (normal) frequency of solar system
var solarSystemFreq = 1;
// Technical Constants /////////////////////////////////////
// amount of ship friction, higher is looser NOT IMPLEMENTED
//var shipFriction = 0.05;
var hyperSpeed = 0.9;
var maxDmgTick = 0.03;
var DEBUG = true;
var showFPS = true;
/*var programStartTime = millis();*/ // not used yet
var sessionStartTime = millis();
var sessionDuration = 0; // total active game session time
var frameStartTime = millis();
var frameTime = 0; // time of each frame
//==========================================================
// Environment Settings ////////////////////////////////////
// considering removing frameRate cap (to depend on individual systems)
frameRate(30); //changing this to 60 might help me fix some bugs
textAlign(LEFT, LEFT);
rectMode(LEFT);
//==========================================================
// Internal Variables //////////////////////////////////////
// Changing these the wrong way, could break the program
var shipFocus = {
    x: width / 2,
    y: height / 2
};
var keys = {};
var allowMouse = true;
// hack to preserve death screen & 4 startScreen
var showHoverAnim = false;
var gamePaused = false;
var gameMode = null;
//==========================================================
// Custom Helper Functions /////////////////////////////////
var dMsg = function(s) { // debug messaging
    if (DEBUG) {
        console.log(s);
    }
};

var shallowClone = function(obj) {
    if (obj === null || "object" != typeof obj) {
        return obj;
    }
    var copy = obj.constructor();
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = obj[key];
        }
    }
    return copy;
};

// Start FPS function
// fps contains the frameRate. call updateFPS in draw() to keep it updated
var fps, fpsStartTime;
var updateFps = function(/*interval*/) {
    // measure fps every set number of frames. 50 in this case
    if (frameCount % 50 === 0) {
        // divide number of sampled frames by actual seconds passed
        fps = round(50 / ((millis() - fpsStartTime) / 1000));
        fpsStartTime = millis();
    }
};
// End FPS function
// needed to lose framecount dependency
var adjustedSessionDuration = function() {
    var millisPerFrame = 33.33; //at 30 fps
    return round(sessionDuration / millisPerFrame);
};

var setKeyboardKey = function(key, boolean) {
    var k = key.toString();
    if (k.search(/^[\w\+\-\=]/g) === -1) {
        keys[keyCode] = boolean;
    } else {
        keys[k] = boolean;
    }
};

// avoid iterating over system properties in constructor based objects
var isCustomProperty = function(property) {
    return (property !== "__id" && property !== "constructor");
};

var timeBasedBounce = function(time, steps) {
    var step = map(sessionDuration % time, 0, time, 0, steps);
    if (sessionDuration % (time * 2) > time) {
        return steps - step;
    }
    return step;
};

// While cool, multi-line strings shouldnt ever be used.
/*var hereDoc = function(f) {
    return f.toString().
    replace(/^[^\/]+\/\*!?/, '').
    replace(/\*\/[^\/]+$/, '');
};*/
//var quote = hereDoc(function() {
    /*!
    Hey
    */
//});

var toCamelCase = function(string) {
    return string.charAt(0, 1).toUpperCase() +
        string.substring(1, string.length);
};
var toggleBool = function(boolean) {
    if (boolean) {
        return false;
    }
    return true;
};
var isInRegion = function(curX, curY, regX, regY, regW, regH) {
    if (curX > regX && curX < regX + regW &&
        curY > regY && curY < regY + regH
    ){
        return true;
    }
    return false;
};
var isInCenteredRegion = function(
    curX, curY, regX, regY, regW, regH
) {
    if (curX > regX - (regW / 2) && 
        curX < regX + (regW / 2) &&
        curY > regY - (regH / 2) && 
        curY < regY + (regH / 2)
    ){
        return true;
    }
    return false;
};
// works for a center of entity inside a left upper corner origin region. 
// works for other regions?
var subjectInRegion = function(subject, region) {
    if (subject.x <= region.w + (subject.w / 2) && 
        subject.x >= region.x - (subject.w / 2) &&
        subject.y <= region.h + (subject.h / 2) && 
        subject.y >= region.y - (subject.h / 2)
    ){
        return true;
    }
    return false;
};
var highlightCenteredEntity = function(
    minX, maxX, minY, maxY, landingDmgTick
) {
    strokeWeight(1);
    var magnitude = landingDmgTick / maxDmgTick;
    var c = (1 - magnitude);
    stroke(255, 255 * c, 255 * c, 230);
    rect(minX - 2, minY - 2, 4, 4);
    rect(minX - 2, maxY - 2, 4, 4);
    rect(maxX - 2, maxY - 2, 4, 4);
    rect(maxX - 2, minY - 2, 4, 4);
};
// collision graphic. not used yet.
/*var collision = function(x, y) {
    // var shipX = this.pos.x;
    // var shipY = this.pos.y;
    var zoom = this.zoom;
    // top fin (bright flicker)
    ellipse(0, zoom * -22, zoom * 8, zoom * 25);
    // wings (bright flicker)
    ellipse(0, zoom * 1, zoom * 130, zoom * 12);
    // ship rear (bright flicker)
    ellipse(0, 0, zoom * 60, zoom * 30);
    // exhaust
    // var onExhaust = dist(0, 0, zoom * 30, zoom * 30);
};*/
/*var isOverCenteredRect = function(curX, curY, entity){
    var minX = entity.x - (entity.visibleSize / 2);
    var minY = entity.y - (entity.visibleSize / 2);
    var maxX = entity.x + (entity.visibleSize / 2);
    var maxY = entity.y + (entity.visibleSize / 2);
    if (curX > minX && curX < maxX && curY > minY &&
        curY < maxY
    ){
        highlightCenteredEntity(minX, maxX, minY, maxY,
                                    entity.landingDmgTick);
        return true;
    }
    return false;
};*/
var isOverCircleEntity = function(curX, curY, entity) {
    var minX = entity.x - (entity.visibleSize / 2);
    var minY = entity.y - (entity.visibleSize / 2);
    var maxX = entity.x + (entity.visibleSize / 2);
    var maxY = entity.y + (entity.visibleSize / 2);
    if (dist(curX, curY, entity.x, entity.y) <= (entity.visibleSize / 2)) {
        highlightCenteredEntity(minX, maxX, minY, maxY, entity.landingDmgTick);
        return true;
    }
    return false;
};
var changeByRateAuto = function(start, target, increment) {
    ///dMsg(increment);
    if (increment > 0 && start !== target) {
        if (start > target) {
            increment = -increment;
        }
        return start + increment;
    }
    return start;
};
var changeByRateSigned = function(start, target, increment) {
    //dMsg(target);
    var result;
    if (start !== target) {
        if ((increment > 0 && start < target) || 
            (increment < 0 && start > target)
        ){
            result = start + increment;
            // constrain to target
            if ((result > target && increment > 0) || 
                (result < target && increment < 0)
            ){
                result = target;
            }
            return result;
        }
    }
    return start;
};
var lowerLimit = function(n, min) { // will be used later
    if (n < min) {
        n = min;
    }
    return n;
};
var upperLimit = function(n, max) { // will be used later
    if (n > max) {
        n = max;
    }
    return n;
};
var pseudoBg = function(r, g, b, a) {
    noStroke();
    fill(r, g, b, a);
    rect(-1, -1, 401, 401);
};
// not used yet
/* var getEllipsePoint = function(degrees, xRadius, yRadius) {
    if (!yRadius) {
        yRadius = xRadius;
    }
    var a = cos(radians(degrees)) * xRadius;
    var o = sin(radians(degrees)) * yRadius;
    return new PVector(a, o);
}; */
var shadowText = function(value, x, y, color) {
    var shadowAlpha = 155 * (alpha(color) / 255);
    fill(0, 0, 0, shadowAlpha);
    text(value, x + 1, y + 1);
    if (!color) {
        color = (255, 255, 255);
    }
    fill(color);
    text(value, x, y);
};

// END HELPER FUNCTIONS
// BEGIN RANGE PROTOTYPES
var Value = function(value) {
    this.value = value;
};

Value.prototype.getValue = function() {
    return this.value;
};

// Range is already defined globally so we use NumRange
var NumRange = function(min, max) {
    this.min = min;
    this.max = max; // not used yet
    this.diff = max - min;
};

var RandomNumRange = function(min, max) {
    NumRange.call(this, min, max);
};

RandomNumRange.prototype.getValue = function() {
    return this.min + random(this.diff);
};

var ScalarNumRange = function(min, max) {
    NumRange.call(this, min, max);
};

ScalarNumRange.prototype.getValue = function(scalar) {
    return this.min + (this.diff * scalar);
};

var RandomScalarNumRange = function(min, max) {
    NumRange.call(this, min, max);
};

RandomScalarNumRange.prototype.getValue = function(scalar) {
    return this.min + random(this.diff * scalar);
};

var ScaledRandomNumRange = function(min, max) {
    NumRange.call(this, min, max);
};

ScaledRandomNumRange.prototype.getValue = function(scalar) {
    return (this.min + random(this.diff)) * scalar;
};
// END RANGE PROTOTYPES
// BEGIN GAME FUNCTIONS
var randomNameGen = function() {
    var syllables = [
        "do", "re", "me", "fa", "so", "la", "de", "do", "he", "rp", "de", "rp", "as", "or", "f", 
        "fa", "ma", "an", "ti", "t", "si", "il", "al", "pa", "l", "on", "ke", "es", "lu", "ha", 
        "ee", "sh", "is", "in", "ob", "da", "o", "en", "co", "ro", "pi", "ae", "gl", "ar", "a", 
        "l", "p", "u", "uu", "za", "al", "di", "kh", "tr", "z", "g", "kh", "ur", "az", "ib", "zh", 
        "bi", "po", "do", "im", "de", "so", "kl", "ep", "om", "os", "lo", "er", "he", "gl", "rg", 
        "gu", "ua", "r", "on", "zi", "in", "bl", "b", "op", "za", "ap", "zi", "ip", "z", "i", "p", 
        "a", "ea", "oa", "ow", "ot", "ge", "ek", "ne", "rd", "hi", "ip", "ca", "ka", "gl", "e", 
        "bu", "ul", "lu", "ru", "ur"
    ];
    var syllablesNum = round(random(2, 4));
    var newName = "";
    for (var i = 0; i < syllablesNum; i++) {
        newName += syllables[
            round(random(syllables.length - 1))];
    }
    newName = toCamelCase(newName);
    //dMsg(newName);
    return newName;
};
var nationTitles = ["Republic", "Nation", "Kingdom", "Society", "Clan", "Cult"];
//===========================================================
// BEGIN UI FRAMEWORK ////////////////////////////////////////////////
var Button = function(msg, x, y, w, h) {
    this.msg = msg;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.draw = function() {
        rectMode(CENTER);
        textAlign(CENTER, CENTER);
        strokeWeight(1);
        stroke(255, 255, 255, 200);
        fill(255, 255, 255, 50); //100
        rect(this.x, this.y, this.w, this.h);
        rect(this.x, this.y, this.w - 4, this.h - 4);
        fill(255, 255, 255, 255); //100
        shadowText(this.msg, this.x, this.y + 1);
        textAlign(LEFT, LEFT);
        rectMode(LEFT);
    };
    this.drawHover = function() {
        rectMode(CENTER);
        fill(255, 255, 255, 50);
        rect(this.x, this.y, this.w - 4, this.h - 4);
        rectMode(LEFT);
    };
    this.drawDeny = function() {
        rectMode(CENTER);
        fill(255, 0, 0, 50);
        rect(this.x, this.y, this.w - 4, this.h - 4);
        rectMode(LEFT);
    };
    this.isPressed = function() {
        if (isInCenteredRegion(mouseX, mouseY, this.x, this.y, this.w, this.h)) {
            // hack to preserve death screen

            //console.log("mouse state:", mouseIsPressed, allowMouse);
            if (showHoverAnim) {
                this.drawHover();
            }
            if (mouseIsPressed & allowMouse) {
                //console.log("PRESSED");
                return true;
            }
        }
        return false;
    };
};
var Slider = function(title, minVal, maxVal, defaultVal, x, y, w, h, 
                      txtOffsetX, txtOffsetY) {
    /*
    all sliders are horizontal for now. all values above the
    start value are assumed to be unsafe/overflow
    */
    this.title = title;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.minVal = minVal;
    this.maxVal = maxVal;
    this.curVal = defaultVal;
    this.defaultVal = defaultVal;
    this.draw = function() {
        strokeWeight(1);
        stroke(255, 255, 255, 200);
        fill(255, 255, 255, 50); //100
        rect(this.x, this.y, this.w, this.h);
        var fillWidth = 0;
        if (this.curVal > 0) {
            fillWidth = this.w *
                (this.curVal / this.maxVal);
        }
        //fill rect
        var overflowing = false;
        if (this.curVal > this.defaultVal) {
            overflowing = true;
        }
        fill(255, 50 + (205 * !overflowing),
            50 + (205 * !overflowing), 200);
        //100
        rect(this.x, this.y, fillWidth, this.h);
        fill(0, 0, 0, 155);
        text(this.title, this.x + txtOffsetX + 1,
            this.y + txtOffsetY + 1);
        fill(255, 255, 255, 255); //100
        text(this.title, this.x + txtOffsetX,
            this.y + txtOffsetY);
    };
    this.drawHandle = function() {
        //rect()
    };
    this.detectPress = function() {
        if (isInRegion(mouseX, mouseY, this.x, this.y, this.w, this.h) &&
           (mouseIsPressed & allowMouse)
        ){
            var newValFactor = (mouseX - this.x) / this.w;
            var newVal = this.maxVal * newValFactor;
            //dMsg(newVal);
            this.curVal = newVal;
        }
    };
};
var ui = {};
ui.buttons = {
    list: {},
    add: function(id, msg, x, y, w, h) {
        this.list[id] = new Button(msg, x, y, w, h);
    },
    remove: function(id) {
        var newList = {};
        for (var b in this.list) {
            if (b !== id) {
                newList[b] = this.list[b];
            }
        }
        this.list = newList;
    },
    clear: function() {
        this.list = [];
    },
    dropAnim: function(start, delay) { // given in milliseconds
        var i = 0;
        for (var b in this.list) {
            if (sessionDuration > start + (delay * i)) {
                this.list[b].draw();
                showHoverAnim = true;
            }
            ++i;
        }
    },
    display: function() {
        for (var b in this.list) {
            this.list[b].draw();
        }
    }
};
ui.sliders = {
    list: {},
    add: function(id, title, minVal, maxVal, defaultVal, x, y, w, h, 
                  txtOffsetX, txtOffsetY) {
        this.list[id] = new Slider(title, minVal, maxVal,
            defaultVal, x, y, w, h, txtOffsetX, txtOffsetY);
    },
    remove: function(id) {
        var newList = {};
        for (var b in this.list) {
            if (b !== id) {
                newList[b] = this.list[b];
            }
        }
        this.list = newList;
    },
    clear: function() {
        this.list = [];
    },
    dropAnim: function(start, delay) { // given in milliseconds
        var i = 0;
        for (var b in this.list) {
            if (sessionDuration > start + (delay * i)) {
                this.list[b].draw();
                showHoverAnim = true;
            }
            ++i;
        }
    },
    display: function() {
        for (var b in this.list) {
            this.list[b].draw();
            this.list[b].detectPress();
        }
    }
};
var Notice = function(type, msg, duration) {
    this.type = type;
    this.msg = msg;
    this.duration = duration;
    var newColor = color(255, 255, 255);
    switch (type) {
        case "e": // event
            newColor = color(156, 3, 156);
            break;
        case "i": // info
            newColor = color(255, 255, 255);
            break;
        case "g": // gain
            newColor = color(25, 255, 25);
            break;
        case "w": // warn
            newColor = color(255, 128, 0);
            break;
        case "s": // system
            newColor = color(210, 210, 255);
            break;
        case "d": // dialog
            newColor = color(255, 255, 0);
    } // lighten the colors
    this.color = lerpColor(newColor, color(255, 255, 255), 0.5);
    this.time = sessionDuration;
};
var notices = {
    list: [],
    add: function(type, msg, duration) {
        //Message Overflow Protection
        // check for duplicates
        if (this.list.length === 0 || 
            this.list[this.list.length - 1].msg !== msg
        ){
            this.list.push(new Notice(type, msg, duration));
            //dMsg("notice: " + msg);
        }
    },
    display: function() {
        //stroke(255, 255, 255);
        noStroke();
        for (var i = 0; i < this.list.length; ++i) {
            var notice = this.list[i];
            var timeRemaining = (notice.time + notice.duration) - sessionDuration;
            //println(notice.msg + ": " + timeRemaining);
            if (timeRemaining > 0) {
                fill(0, 0, 0, 140 * (timeRemaining / notice.duration));
                rect(115, (15 * (i + 1)) - 6, 240, 15);
                fill(notice.color);
                text("> " + notice.msg, 120, 5 + (15 * (i + 1)));
            } else {
                this.list.splice(i, 1);
            }
        }
    },
    clear: function() {
        this.list = [];
    }
};
ui.dialog = {
    w: 220,
    h: 80,
    active: false,
    isModal: true,
    text: "",
    confirmTxt: "",
    confirmAction: null,
    cancelTxt: "",
    cancelAction: null,
    open: function(text, confirmAction, cancelAction, confirmTxt, cancelTxt) {
        if (!confirmTxt) {
            confirmTxt = "OK";
        }
        if (!cancelTxt) {
            confirmTxt = "Cancel";
        }
        ui.dialog.text = text;
        ui.dialog.confirmTxt = confirmTxt;
        ui.dialog.confirmAction = confirmAction;
        ui.dialog.cancelTxt = cancelTxt;
        ui.dialog.cancelAction = cancelAction;
        ui.buttons.add("dialogConfirm", confirmTxt,
            width / 2 + this.w * 0.25, 
            height / 2 + this.h / 2 - 17,
            100, 25
        );
        //if (cancelAction){ //just make notify dialog box?
        ui.buttons.add("dialogCancel", cancelTxt,
            width / 2 - this.w * 0.25, 
            height / 2 + this.h / 2 - 17,
            100, 25
        );
        //}

        ui.dialog.active = true;
        if (ui.dialog.isModal) {
            allowMouse = false;
        }
        //gamePaused = true;
    },
    close: function() {
        ui.dialog.text = "";
        ui.dialog.confirmTxt = "";
        ui.dialog.confirmAction = "";
        ui.dialog.cancelTxt = "";
        ui.dialog.cancelAction = "";

        ui.buttons.remove("dialogConfirm");
        ui.buttons.remove("dialogCancel");

        ui.dialog.active = false;
        allowMouse = true;
        //gamePaused = false;
    },
    detectPress: function() {
        allowMouse = true;
        if (ui.buttons.list.dialogConfirm.isPressed()) {
            this.confirmAction();
            this.close();
            return; // prevent mouse prevention
        } else {
            if (ui.buttons.list.dialogCancel.isPressed()) {
                this.cancelAction();
                this.close();
                return; // prevent mouse prevention
            }
        }
        if (ui.dialog.isModal) {
            allowMouse = false;
        }
    },
    display: function() {
        rectMode(CENTER);
        fill(156, 156, 156, 150);
        stroke(255, 255, 255, 200);
        rect(width / 2, height / 2, this.w, this.h);
        rectMode(LEFT); // restore rect mode
        /*text(this.text, width/2-this.w + 10,
                height/2-this.h/2 + 20);*/
        textAlign(CENTER, CENTER);
        shadowText(this.text, width / 2, (height - 25 + 5) / 2);
        textAlign(LEFT, LEFT);

        this.detectPress();
        //ui.buttons.display(); // this is only convenient
    },
};
ui.draw = {
    gauge: function(x, y, w, h, letter,
        gaugeValue, gaugeBarValue, warningThreshold
    ) {
        strokeWeight(1);
        // gaugeValue and gaugeBarValue are 0 - 1
        var pulse = (millis() % 1000) / 1000;
        var warning = 0;
        if (gaugeValue < warningThreshold) {
            warning = 150 * (1 - gaugeValue) * pulse;
            //dMsg(gaugeValue);
        }
        var warningColor = 255 - warning;
        //outline
        stroke(255, 255, 255, 100);
        fill(255, warningColor, warningColor, 50);
        rect(x, y, w, h);
        // Letter BG
        rect(x, y + h + 5, w, w);
        //fill
        noStroke();
        fill(255, warningColor, warningColor, 200);
        rect(x, y + h - (h * gaugeValue), w,
            h * gaugeValue);
        // balance indicator
        strokeWeight(1);
        stroke(255, 255, 255);
        line(x, y + h - (h * gaugeBarValue),
            x + w, y + h - (h * gaugeBarValue));
        // text
        text(letter, x + 2, y + h + 5 + 10);
    },
    text: function(value, x, y, color) {
        fill(0, 0, 0, 155);
        text(value, x + 1, y + 1);
        if (!color) {
            color = (255, 255, 255);
        }
        fill(color);
        text(value, x, y);
    }
};
ui.refresh = function() {
    /*(shipHUD.display();
    shipTools.display();*/
    // technically dialog buttons should be on top
    //notices.display(); //may want to put this back
    if (this.dialog.active) {
        this.dialog.display();
    }
    this.buttons.display();
    this.sliders.display();
};
// END UI FRAMEWORK
//==========================================================
// BEGIN INFO FRAMEWORK ////////////////////////////////////
var Info = function() {
    this.planet = {
        lastSeen: 0,
        count: 0,
        visited: 0
    };
    this.asteroid = {
        lastSeen: 0,
        count: 0,
        collided: 0
    };
    this.asteroidBelt = {
        lastSeen: 0,
        next: 0,
        count: 0
    };
    this.solarSystem = {
        lastSeen: 0,
        next: 0,
        count: 0
    };
    this.blackHole = {
        lastSeen: 0,
        count: 0,
        visited: 0
    };
    this.station = {
        lastSeen: 0,
        count: 0,
        visited: 0
    };
    this.distTraveled = 0;
    this.lastDamager = "";
};
var info = new Info();
// END INFO FRAMEWORK
//===========================================================
// BEGIN EVENTS FRAMEWORK /////////////////////////////////////////

/*
 * condition, action, repeatInterval (ms delay / optional)
 * single time event if no repeatInterval included
 * Event is already defined globally so we use SysEvent
 */
var SysEvent = function(condition, action, repeatInterval) { 
    this.condition = condition;
    this.action = action;
    this.repeatInterval = repeatInterval;
};
var events = {
    list: [],
    register: function(condition, action, repeatInterval) {
        this.list.push(new SysEvent(condition, action, repeatInterval));
    },
    schedule: function(time, action, repeatInterval) {
        var condition = function() {
            return (sessionDuration >= time);
        };
        this.list.push(new SysEvent(condition, action, repeatInterval));
        //dMsg(sessionDuration + ": scheduled " + action + " at " + time);
    },
    service: function() {
        for (var i = 0; i < this.list.length; ++i) {
            var event = this.list[i];
            //println(event.repeatInterval + ": " + event.lastTime);
            if (event.lastTime === undefined ||
                (sessionDuration >= event.lastTime + event.repeatInterval)
            ) {
                if (event.condition()) {
                    event.action();
                    if (event.repeatInterval === undefined) {
                        this.list.splice(i, 1);
                    } else {
                        event.lastTime = sessionDuration;
                    }
                }
            }
        }
    },
    clear: function() {
        this.list = [];
    }
};
// END EVENTS FRAMEWORK
//===========================================================
// BEGIN STARS MODULE /////////////////////////////////////////////
// (functionality based off of animated rain)
// for some reason adding this to the stars object messed it up
var stars = {
    list: [],
    genNewStar: function() {
        var newStar = {
            x: random(0, width),
            y: random(0, height),
            weight: random(1.0)
        };
        return newStar;
    },
    init: function() {
        for (var i = 0; i < starCount; i++) {
            this.list[i] = this.genNewStar();
        }
    },
    outOfBounds: function(pos) {
        if (pos.x > width || pos.x < 0 ||
            pos.y > height || pos.y < 0) {
            return true;
        }
        return false;
    },
    update: function(distanceFactor) {
        for (var i = 0; i < starCount; i++) {
            var newPos = this.extendFromFocus(
                this.list[i].x, this.list[i].y,
                distanceFactor
            );
            this.list[i].x = newPos.x;
            this.list[i].y = newPos.y;
            if (this.outOfBounds(newPos)) {
                this.list[i] = this.genNewStar();
            }
        }
    },
    extendFromFocus: function(x, y, lengthFactor) {
        var distanceMag = lowerLimit(
            dist(shipFocus.x, shipFocus.y, x, y) / 400, 0.3
        );
        lengthFactor *= distanceMag;
        var newFocus = { //shipFocus is a global
            //change in x * length
            x: x + ((x - shipFocus.x) * lengthFactor),
            //change in y * length
            y: y + ((y - shipFocus.y) * lengthFactor)
        };

        return newFocus;
    },
    display: function(lengthFactor, newStrokeWeight) {
        for (var i = 0; i < starCount; i++) {
            strokeWeight(
                (1 + this.list[i].weight) *
                random(newStrokeWeight - 1, newStrokeWeight)
            );
            var lineEnd = this.extendFromFocus(
                this.list[i].x, this.list[i].y, lengthFactor
            );
            line(this.list[i].x, this.list[i].y,
                lineEnd.x, lineEnd.y);
        }
    },
};
stars.init();
// END STARS MODULE
//==========================================================
// ships Object ////////////////////////////////////////////
// not used yet
/*var ships = {
    default: {
        p: null
    }
};*/
//==========================================================
// Supply Info /////////////////////////////////////////////
var sInfo = {
    fuel: {
        ratingTerm: "efficiency",
        RTNG: "EF",
        surplusMsg: "Your ship's fuel tank is already full",
        fullMsg: "You happily notice your tank is now full."
    },
    hull: {
        ratingTerm: "quality",
        RTNG: "QL",
        surplusMsg: "There's no damage left to repair.",
        fullMsg: "You smile at your fully repaired ship."
    },
    energy: {
        ratingTerm: "voltage",
        RTNG: "VL",
        surplusMsg: "Your ship core's already at full power.",
        fullMsg: "Your fully powered energy core hums loudly."
    },
    rations: {
        ratingTerm: "purity",
        RTNG: "PR",
        surplusMsg: "Your ration stores have been replenished.",
        fullMsg: "Looks like you'll be eating well tonight."
    },
    medicine: {
        ratingTerm: "potency",
        RTNG: "PT",
        surplusMsg: "Your medicine has been restocked.",
        fullMsg: "You no longer fear a sudden outbreak."
    }
};
//==========================================================
// SHIP CUSTOMIZATIONS /////////////////////////////////////
var Size = function(w, h) {
    this.w = w;
    this.h = h;
};
//==========================================================
// Ship.p (properties) Object //////////////////////////////
var Properties = function() { // properties
    this.acceleration = 1.0; // 1 is normal
    this.braking = 1.0; // 1 is normal
    this.speedMax = 1.0; // 1 is normal
    this.fuelRate = 1.0; // 1 is normal
    // max size for single charge from energy
    this.barrierMax = 1.0; // 1 is normal
};
//==========================================================
// Ship.s (supplies) Object ////////////////////////////////
var Supplies = function() { // supplies
    this.fuel = {
        type: "hydrogen",
        cap: 1.0,
        amount: 1.0,
        rating: 9999
    };
    this.hull = {
        type: "titanium",
        cap: 1.0,
        amount: 1.0,
        rating: 9999
    };
    this.energy = {
        type: "lithium",
        cap: 1.0,
        amount: 1.0,
        rating: 9999
    };
    this.rations = {
        cap: 1.0,
        maxRating: 1.0,
        amount: 1.0,
        rating: 9999
    };
    this.medicine = {
        cap: 1.0,
        maxRating: 1.0,
        amount: 1.0,
        rating: 9999
    };
};
//==========================================================
// Ship.crew Object ////////////////////////////////////////
var Crew = function() {
    this.abilities = {
        fuel_refining: 0,
        metal_tempering: 0,
        voltage_boosting: 0,
        gourmet_cooking: 0,
        medical_treatment: 0
    };
};
//==========================================================
// Ship.tools Object ///////////////////////////////////////
var Tools = function() {
    this.scanner = {
        ql: 0
    };
    this.radar = {
        ql: 0
    };
};

//==========================================================
// Graphics Method ////////////////////////////////////////
var DynamicShape = function(colorNumRange, sizeNumRange, offsetNumRange) {
    // make sure the color is original
    if ( typeof colorNumRange == "object") {
        this.colorNumRange = shallowClone(colorNumRange);
    }
    else {
        this.colorNumRange = colorNumRange;
    }
    this.sizeNumRange = shallowClone(sizeNumRange);

    if (!offsetNumRange) {
        this.offsetNumRange = {x: new Value(0), y: new Value(0)};
    }
    else {
        this.offsetNumRange = shallowClone(offsetNumRange);
    }
};

DynamicShape.prototype.draw = function(scalar) {
    fill(
        this.colorNumRange.r.getValue(scalar),
        this.colorNumRange.g.getValue(scalar),
        this.colorNumRange.b.getValue(scalar),
        this.colorNumRange.a.getValue(scalar)
    );
    ellipse(
        this.offsetNumRange.x.getValue(scalar),
        this.offsetNumRange.y.getValue(scalar),
        this.sizeNumRange.w.getValue(scalar),
        this.sizeNumRange.h.getValue(scalar)
    );
};

var DynamicShapeEven = function(colorNumRange, sizeNumRange, offsetNumRange) {
    // make sure the color is original
    sizeNumRange = {
        w: sizeNumRange,
        h: sizeNumRange
    };
    DynamicShape.call(this, colorNumRange, sizeNumRange, offsetNumRange);
};

DynamicShapeEven.prototype = DynamicShape.prototype;

var getGreyRandomNumRange = function(min, max) {
    var greyNumRange = {
        r: new RandomNumRange(min, max),
        g: new RandomNumRange(min, max),
        b: new RandomNumRange(min, max),
        a: new Value(255)
    };
    return greyNumRange;
};

var graphics = {};

graphics.greyShip = [
    {
        name: "speedEffect",
        draw: function(zoom, speed) {
            // top fin speed effect (fade in, flicker)
            fill(
                random(200, 205), random(250, 255), 
                random(250, 255), random(5 + 45 * speed)
            );
            //(shape, localX, localY, x, y, w, h, scale){
            ellipse(0, zoom * -22, zoom * 14, zoom * 30);
            // ship rear speed effect  (fade in, flicker)
            fill(
                random(250, 255), random(250, 255), 
                random(250, 255), random(2 + 18 * speed)
            );
            ellipse(0, zoom * -1, zoom * 90, zoom * 40);
            // wing speed effect (fade in, flicker)
            fill(
                random(250, 255), random(250, 255), 
                random(250, 255), random(4 + 36 * speed)
            );
            ellipse(0, zoom * -1, zoom * 150, zoom * 20);
        }
    },
    {
        name: "shipBody",
        make: function() {
            var list = [];
            var addBodyPart = function(options) {
                var colorNumRange = getGreyRandomNumRange(options.grey.min, options.grey.max);
                var sizeNumRange = {
                    w: new ScalarNumRange(0, options.size.w),
                    h: new ScalarNumRange(0, options.size.h)
                };

                var offsetNumRange = {
                    x: new Value(0),
                    y: new Value(0)
                };

                if (options.offset.x !== 0) {
                    offsetNumRange.x = new ScalarNumRange(0, options.offset.x);
                }

                if (options.offset.y !== 0) {
                    offsetNumRange.y = new ScalarNumRange(0, options.offset.y);
                }
                list.push( new DynamicShape(colorNumRange, sizeNumRange, offsetNumRange) );
            };

            // Ship Top Fin (bright flicker)
            addBodyPart({
                grey: { min: 135, max: 137 }, 
                size: { w: 8, h: 25},
                offset: { x: 0, y: -22}
            });

            addBodyPart({
                grey: { min: 155, max: 157 }, 
                size: { w: 4, h: 20},
                offset: { x: 0, y: -22}
            });

            // Ship Wings (bright flicker)
            addBodyPart({
                grey: { min: 170, max: 172 }, 
                size: { w: 130, h: 12},
                offset: { x: 0, y: 1}
            });

            addBodyPart({
                grey: { min: 138, max: 140 }, 
                size: { w: 120, h: 10},
                offset: { x: 0, y: 0}
            });

            // Ship Rear (bright flicker)
            addBodyPart({
                grey: { min: 140, max: 150 }, 
                size: { w: 60, h: 30},
                offset: { x: 0, y: 0}
            });

            addBodyPart({
                grey: { min: 163, max: 173 }, 
                size: { w: 50, h: 30},
                offset: { x: 0, y: 0}
            });

            return list;
        },
        draw: function(zoom) {
            for(var i = 0; i < this.list.length; i++) {
                this.list[i].draw(zoom);
            }
        }
    },
    {
        name: "exhaust",
        make: function() {
            var list = [];
            var addExhaust = function(color, size) {
                var sizeNumRange = new ScalarNumRange(0, size);
                var colorNumRange;
                if (color.min) {
                    colorNumRange = getGreyRandomNumRange(color.min, color.max);
                }
                else {
                    colorNumRange = {
                        r: new Value(color.r),
                        g: new Value(color.g),
                        b: new Value(color.b),
                        a: new Value(color.a)
                    };
                }
                list.push( new DynamicShapeEven(colorNumRange, sizeNumRange) );
            };

            // exhaust back shadow (bright flicker)
            addExhaust({min: 90, max: 100}, 20);
            addExhaust({min: 113, max: 123}, 20);

            // exhaust metal (bright flicker)
            addExhaust({min: 170, max: 180}, 30);
            addExhaust({min: 143, max: 153}, 26);

            addExhaust({r: 0,   g: 0,   b: 0,   a: 75}, 16);
            addExhaust({r: 255, g: 255, b: 255, a: 50}, 8);

            return list;
        },
        draw: function(zoom) {
            for(var i = 0; i < this.list.length; i++) {
                this.list[i].draw(zoom);
            }
        }
    },
    {
        name: "cracks",
        make: function() {
            var list = [];
            var Crack = function(vertices, w, h) {
                this.vertices = vertices;
                this.w = w;
                this.h = h;
            };

            Crack.prototype.draw = function(zoom, damage) {
                //correct for accidental original zoom of 2.0
                var zoomHack = 0.5;
                zoom = zoomHack * zoom;

                var alphaByDamage = 65 * damage;
                fill(0, 0, 0, alphaByDamage);
                stroke(61, 61, 61, alphaByDamage);

                var vertices = this.vertices;
                //dMsg("x" + x);
                beginShape();
                for (var i = 0; i < vertices.length; i++) {
                    vertex(ship.pos.x - (this.w * zoom / 2) +
                        (vertices[i][0] * zoom),
                        ship.pos.y - (this.h * zoom / 1.45) +
                        (vertices[i][1] * zoom)
                    );
                }
                endShape();
            };

            // 87 Total  Points
            var vertices = [[0, 66], [15, 65], [24, 73], [40, 63], [32, 67], [55, 62], 
            [54, 68], [59, 76], [67, 62], [66, 58], [75, 57], [73, 67], 
            [86, 66], [76, 71], [87, 80], [92, 79], [92, 73], [104, 59], 
            [104, 66], [101, 74], [112, 79], [110, 85], [100, 89], [123, 94], 
            [122, 85], [131, 81], [142, 92], [143, 87], [138, 81], [126, 70], 
            [134, 62], [134, 59], [115, 67], [112, 56], [122, 46], [125, 0], 
            [129, 3], [124, 19], [128, 34], [133, 14], [132, 28], [125, 58], 
            [140, 44], [136, 60], [148, 62], [143, 72], [152, 93], [169, 85], 
            [152, 81], [159, 78], [153, 71], [163, 68], [172, 76], [179, 68], 
            [193, 71], [200, 65], [200, 55], [212, 62], [209, 61], [235, 63], 
            [246, 64], [252, 67], [221, 67], [213, 71], [198, 61], [179, 59], 
            [162, 60], [168, 55], [172, 47], [149, 54], [153, 45], [161, 41], 
            [139, 35], [115, 39], [99, 47], [95, 58], [82, 52], [93, 50], 
            [88, 49], [92, 47], [89, 42], [108, 37], [71, 58], [43, 59], 
            [20, 61], [24, 66], [3, 66]];

            list.push( new Crack(vertices, 252, 94) );

            return list;
        },
        draw: function(zoom) {
            var damage = ship.getDmg();

            for(var i = 0; i < this.list.length; i++) {
                this.list[i].draw(zoom, damage);
            }
        }

    },
    {
        name: "flames",
        make: function() {
            /**************************************************************************************
            * SET FLAME COLORS
            ***************************************************************************************
            * The Value Object is just a single number but we define it anyway to streamline the
            * process of getting values.
            * 
            **************************************************************************************/
            var list = [];

            var hyperThreshold = hyperSpeed - 0.05;

            var Flame = function(normalColor, hyperColor, alphaNumRange, sizeNumRange) {
                this.brightenColor = function(baseColor, colorStrengthFactor) {
                    var white = color(255, 255, 255, 210 * colorStrengthFactor);

                    return lerpColor(
                        baseColor, white, 0.65 * colorStrengthFactor * colorStrengthFactor
                    );
                };
                
                this.normal = {
                    color: shallowClone(normalColor)
                };

                this.hyper = {
                    color: shallowClone(hyperColor)
                };

                this.alphaNumRange = alphaNumRange;
                this.sizeNumRange = sizeNumRange;
            };

            Flame.prototype.getColor = function(speed) {
                    var speedState = "normal";
                    var colorStrengthFactor = speed;

                    if (speed >= hyperThreshold) {
                        // after the hyper speed threshhold, the colorStrength will drop and 
                        // color will brighten
                        colorStrengthFactor = hyperThreshold / speed;
                        speedState = "hyper";
                    }

                    var baseColor = color(
                        this[speedState].color.r.getValue(speed),
                        this[speedState].color.g.getValue(speed),
                        this[speedState].color.b.getValue(speed),
                        this.alphaNumRange.getValue(speed)
                    );
                    /*console.log(
                        speedState,                    
                        this[speedState].color.r.getValue(speed),
                        "r",
                        this[speedState].color.r.value,
                        this[speedState].color.r.diff,
                        "g",
                        this[speedState].color.g.value,
                        this[speedState].color.g.diff,
                        "b",
                        this[speedState].color.b.value,
                        this[speedState].color.b.diff
                    );*/
                    return this.brightenColor(baseColor, colorStrengthFactor);
                };

            Flame.prototype.draw = function(speed, zoom) {
                fill( this.getColor(speed) );
                var size = this.sizeNumRange.getValue(speed) * zoom;
                ellipse(0, 0, size, size);
            };

            var addFlame = function(normalColor, hyperColor, alphaNumRange, sizeNumRange) {
                list.push( new Flame(normalColor, hyperColor, alphaNumRange, sizeNumRange) );
            };

            // outer flames
            var normalColor = {
                r: new RandomNumRange(200, 220),
                g: new ScalarNumRange(94, 144),
                b: new Value(7)
            };

            var hyperColor = {
                r: new Value(20),
                g: new ScalarNumRange(94, 144),
                b: new RandomNumRange(200, 220)
            };

            var alphaNumRange = new ScalarNumRange(0, 90);
            var sizeNumRange = new RandomNumRange(30, 35);

            addFlame(normalColor, hyperColor, alphaNumRange, sizeNumRange);

            alphaNumRange = new ScalarNumRange(0, 240);
            sizeNumRange = new RandomNumRange(20, 28);

            addFlame(normalColor, hyperColor, alphaNumRange, sizeNumRange);

            normalColor.r = new RandomNumRange(190, 210);

            hyperColor.b = new RandomNumRange(190, 210);

            alphaNumRange = new ScalarNumRange(0, 240);
            sizeNumRange = new RandomNumRange(20, 25);

            addFlame(normalColor, hyperColor, alphaNumRange, sizeNumRange);

            normalColor.r = new RandomNumRange(219, 239);
            normalColor.g = new ScalarNumRange(74, 124);

            hyperColor.g = new ScalarNumRange(74, 124);
            hyperColor.b = new RandomNumRange(219, 239);

            alphaNumRange = new ScalarNumRange(0, 245);
            sizeNumRange = new RandomNumRange(20, 25);

            addFlame(normalColor, hyperColor, alphaNumRange, sizeNumRange);

            // INNER FLAMES

            normalColor.r = new RandomNumRange(219, 239);
            normalColor.g = new ScalarNumRange(200, 250);

            hyperColor.g = new ScalarNumRange(200, 250);
            hyperColor.b = new RandomNumRange(219, 239);

            alphaNumRange = new RandomScalarNumRange(70, 150);
            sizeNumRange = new ScaledRandomNumRange(15, 20);

            addFlame(normalColor, hyperColor, alphaNumRange, sizeNumRange);   

            normalColor.r = new Value(200);
            normalColor.g = new Value(200);
            normalColor.b = new RandomNumRange(200, 255);

            hyperColor.r = new RandomNumRange(225, 255);
            hyperColor.g = new RandomNumRange(225, 255);
            hyperColor.b = new Value(255);

            alphaNumRange = new RandomScalarNumRange(70, 150);
            sizeNumRange = new ScaledRandomNumRange(10, 15);

            addFlame(normalColor, hyperColor, alphaNumRange, sizeNumRange); 

            return list; 
        },
        draw: function(zoom, speed) {            
            var hyperThreshold = hyperSpeed - 0.05;
            //console.log(speed);
            speed = constrain(speed, 0, 1.1);
            //console.log("real speed", speed);
            noStroke();
            //-------------------------------------------------
            // Draw Flames
            //-------------------------------------------------

            if (speed > hyperThreshold) {
                // Draw subtle hyper speed entrance/exit effect
                var speedMod = (1 - speed) * 15;

                fill(255, 255, 255, 3 * speedMod);
                ellipse(0, 0,
                    zoom * random(70 * speedMod),
                    zoom * random(70 * speedMod)
                );

                fill(255, 255, 255, 3 * speedMod);
                ellipse(0, 0,
                    zoom * random(50 * speedMod),
                    zoom * random(50 * speedMod)
                );
            }

            // Draw engine flames (fade in)
            for (var i = 0; i < this.list.length; i++) {
                this.list[i].draw(speed, zoom);
            }

            // engine shadow overlay (fade out)
            fill(0, 0, 0, 100 * ( 1.0 - (speed * speed) )  );
            ellipse(0, 0, zoom * 20, zoom * 20);
        }        
    }
];

//==========================================================
// ship Object /////////////////////////////////////////////
var ship;
var Ship = function() {
    // CUSTOM PROPERTIES
    this.size = new Size(200, 200);
    this.properties = new Properties();
    this.supplies = new Supplies();
    this.tools = new Tools();
    this.crew = new Crew();
    // Navigation Properties
    this.pos = {
        x: 200,
        y: 200
    };
    this.goToPos = {
        x: 200,
        y: 200
    };
    this.landing = {
        entity: null,
        progress: 0,
        done: false,
        end: 1.0 // is this really needed? // 1.0 is landing end
    };
    this.speed = 0.8;
    this.throttle = 0.8 / this.properties.speedMax;
    this.momentum = 0;
    // Display Properties
    this.rotation = 0;
    this.zoom = 1.0;
    this.zoomModifier = 1.0;
    // Fuel Consumption Properties
    this.fuelTick = 0; // throttle effects this
    // Energy Consumption Properties
    this.energyTick = 0;
    this.barrier = 1.0; // based on energy
    // Damage Properties
    this.damager = "";
    this.dmgIncoming = 0;
    this.dmgTick = 0;
    // Damage Methods
    this.registerDmg = function(damager, dmgTick, totalDmg) {
        this.damager = damager;
        this.dmgTick = dmgTick;
        this.dmgIncoming = dmgTick;

        if (totalDmg) {
            this.dmgIncoming = totalDmg;
        }
    };
    this.takeDmg = function(dmg) {
        // don't think this will Increment
        var dmgMultiplier = 1.0;
        // prevent invicible armor
        var minimumDmgTick = 0.00001;
        var adjustedDmg = (
                dmg - (dmg * ship.supplies.hull.rating)) *
            dmgMultiplier;
        if (!adjustedDmg) {
            adjustedDmg = minimumDmgTick;
        }
        this.setHull(this.supplies.hull.amount - adjustedDmg);
        info.lastDamager = this.damager;
    };
    this.getDmg = function() {
        return this.supplies.hull.cap - this.supplies.hull.amount;
    };
    // not sure we need this
    this.setHull = function(newHull) {
        this.supplies.hull.amount = constrain(
            newHull, 0.0, ship.supplies.hull.cap);
    };
    // Navigation Methods
    this.setPos = function(x, y) {
        this.pos.x = x;
        this.pos.y = y;
    };
    this.getPos = function() {
        var newPos = {
            x: this.pos.x,
            y: this.pos.y
        };
        return newPos;
    };
    this.setGoToPos = function(x, y) {
        this.goToPos.x = constrain(x, 0, 400);
        this.goToPos.y = constrain(y, 0, 400);
        /*if (this.momentum < 1.0){
            this.momentum += this.speed * 0.1;
        }*/
        // can't define slopeBearing here or it messes up
        // somehow
    };
    this.matchPos = function() {
        var gravityPull = (
            this.landing.end - sq(this.landing.progress)
        );
        var changeRate = upperLimit(0.8 * this.speed *
            gravityPull, 1);
        if (changeRate) { // movement velocity
            if (this.pos.x !== this.goToPos.x) {
                this.pos.x += (
                        this.goToPos.x - this.pos.x) *
                    changeRate;
            }
            if (this.pos.y !== this.goToPos.y) {
                this.pos.y += (
                        this.goToPos.y - this.pos.y) *
                    changeRate;
            }
            shipFocus = this.pos;
        }
        var momentumLoss = 0.01 +
            (0.01 * (this.properties.speedMax - this.speed));
        if (this.momentum > momentumLoss) {
            this.momentum -= momentumLoss;
        } //dMsg(this.momentum);
    };
    this.setSpeed = function(newSpeed) {
        this.speed = constrain(
            newSpeed, 0.0, this.properties.speedMax
        );
    };
    this.setThrottle = function(newThrottle) {
        //dMsg("speed: " + newThrottle);
        this.throttle = constrain(newThrottle, 0.0, 1.0);
    };
    this.matchSpeed = function() {
        /*var atmosphericFriction = Math.pow(
            this.landing.progress, 50 * this.throttle *
            this.throttle );*/
        var atmosphericFriction = 0;
        if (this.landing.progress > 0.3) {
            atmosphericFriction = this.speed *
                this.landing.progress;
        }
        var newTarget = (
            this.throttle - atmosphericFriction
        ) * this.properties.speedMax;
        var speedMatchProgress = this.speed / this.properties.speedMax;
        var baseRate = lowerLimit(
            0.01 * speedMatchProgress, 0.001
        );
        var rateModifier = this.properties.acceleration;

        if (this.speed > newTarget) {
            baseRate = -baseRate;
            rateModifier = this.properties.braking;
        }
        baseRate *= rateModifier;
        var newSpeed = changeByRateSigned(
            this.speed, newTarget, baseRate
        );
        this.setSpeed(newSpeed);
    };
    // Fuel Methods
    // not sure we need this.
    this.setFuel = function(newFuel) {
        this.supplies.fuel.amount = constrain(newFuel, 0.0, ship.supplies.fuel.cap);
    };
    // Energy Methods
    this.setEnergy = function(newEnergy) {
        this.supplies.energy.amount = constrain(
            newEnergy, 0.0, ship.supplies.energy.cap
        );
    };
    // not sure we need this
    this.setBarrier = function(newBarrier) {
        this.barrier = constrain(
            newBarrier, 0.0, this.properties.barrierMax
        );
    };
    // Display Methods
    this.setRot = function(r) {
        this.rotation = r;
    };
    this.setZoom = function(s) {
        this.zoom = s;
    };
    this.wobble = function(rotateDegrees, rotateSlice) {
        pushMatrix();
        translate(this.pos.x, this.pos.y);
        if (this.rotation > random(rotateDegrees) ||
            this.rotation < random(-rotateDegrees)
        ) {
            rotateSlice = -rotateSlice;
        }
        this.setRot(
            random(this.rotation, 2 * rotateSlice *
                this.speed)
        );
        popMatrix();
    };
    //needs
    this.drift = function(driftDistance, driftIncrement) {
        if (this.pos.x > shipFocus.x + random(driftDistance) ||
            this.pos.x < shipFocus.x - random(driftDistance) ||
            this.pos.y > shipFocus.y + random(driftDistance) ||
            this.pos.y < shipFocus.y - random(driftDistance)
        ) {
            driftIncrement = -driftIncrement;
        }
        this.setPos(this.pos.x + driftIncrement,
            this.pos.y + driftIncrement);
    };
    this.modifyZoom = function(targetZoom, increment) {
        this.zoomModifier = changeByRateAuto(
            this.zoomModifier, targetZoom, increment
        );
    };
    this.speedEffects = function() {
        //exit hyperspace animation
        if (this.speed < 0.1) {
            //limit numbers to one if possible?
            this.modifyZoom(1.1, 0.001);
            if (this.speed === 0.0) {
                this.modifyZoom(1.6, 0.001);
            }
        } else if (this.speed >= hyperSpeed) {
            //limit numbers to one if possible?
            this.modifyZoom(0.9, 0.001);
        } else {
            this.modifyZoom(1.0, 0.001);
        }
        if (this.landing.progress > 0.9) {
            this.shockwave();
        }
    };
    this.shockwave = function() {
        var progress = this.landing.progress;
        fill(255, 255, 255, 10 + 40 * progress);
        ellipse(this.pos.x, this.pos.y, 20 * sq(progress),
            20 * sq(progress));
        ellipse(this.pos.x, this.pos.y, 30 * sq(progress),
            30 * sq(progress));
        ellipse(this.pos.x, this.pos.y, 50 * sq(progress),
            50 * sq(progress));
    };
    this.animate = function() {
        this.setZoom((1.0 - this.landing.progress) *
            this.zoomModifier);
        this.wobble(2, 0.05);
        this.drift(3.0, 0.1);
        this.speedEffects();
    };
    
    this.graphics = [];

    var shipGraphics = graphics.greyShip;
    for (var i = 0; i < shipGraphics.length; i++) {
        this.graphics[i] = {};

        if (shipGraphics[i].make) {
            this.graphics[i].list = shipGraphics[i].make();
            //console.log(this.graphics[i].list);
        }
        this.graphics[i].draw = shipGraphics[i].draw;
    }
};

Ship.prototype.display = function() {
    noStroke();
    // reset width and height to receive new values;
    // this.size.w = 0;
    // this.size.h = 0;
    //need a function to determine the center of rotation?
    pushMatrix();
    rotate(radians(this.rotation));
    translate(this.pos.x, this.pos.y);
    for (var asset in this.graphics) {
        this.graphics[asset].draw(this.zoom, this.speed);
    }
    popMatrix();
    stroke(255, 255, 255);
    //zoomByInc(1/this.zoom);
};
//===========================================================
// Ship.refresh Method //////////////////////////////////////
Ship.prototype.refresh = function() {
    this.matchPos();
    this.matchSpeed();
    if (state.current === "inSpace") {
        this.animate();
    }
    this.display();

    if (this.supplies.fuel.amount <= 0) { // no fuel
        notices.add("i", "As you hear your engines dying down,", 13200);
        notices.add("i", "you suddenly realize that you are", 13200);
        notices.add("i", "hopelessly lost, In Spaaace!", 13200);
        //dMsg(ship.supplies.hull);
        state.switch("gameOver");
        return;
    } else {
        var baseFuelTick = 0.0001;
        var fuelRatingFactor = (1.0 / this.supplies.fuel.rating);
        this.supplies.fuelTick = ( // assume max rating of 1.0
            baseFuelTick * this.properties.fuelRate *
            fuelRatingFactor * this.speed
        );
        this.setFuel(this.supplies.fuel.amount - this.supplies.fuelTick);
        //dMsg(this.supplies.fuel.amount);
        if (this.supplies.fuel.amount < 0.05) {
            // not sure if randomizing this makes problems
            // fuel stutter
            this.setThrottle(random(this.supplies.fuel.amount));
        }
    }

    if (this.dmgIncoming) {
        if (this.dmgIncoming < this.dmgTick) {
            // this is for the ending tick
            this.dmgTick = this.dmgIncoming;
        }
        this.takeDmg(this.dmgTick);
        this.dmgIncoming = lowerLimit(
            this.dmgIncoming - this.dmgTick, 0);
    } else {
        this.damager = null;
    }
    if (this.supplies.hull.amount <= 0) { // no hull
        notices.add("i", "Your ship was destroyed by " + info.lastDamager + ".", 13200);
        //dMsg(ship.supplies.hull);
        state.switch("gameOver");
    }
    if (ship.throttle === 1.0 && ship.speed === 0.0) {
        //not sure how to do this or if its possible.
        notices.add("d", "We aren't picking up speed,", 13200);
        notices.add("d", "Looks like we're stuck in orbit.", 13200);
        notices.add("d", "We should enter planets faster.", 13200);
        state.switch("gameOver");
        return;
    }
};
//==========================================================
// Custom ships
var SuperShip = function() {  //jshint ignore:line
    // parasitic inheritance
    var newShip = new Ship();
    newShip.properties = { // properties
        acceleration: 10, // 1 is normal
        braking: 10, // 1 is normal
        speedMax: 4.0, // 1 is normal
        // max size for single charge from energy
        barrierMax: 3.0, // 1 is normal
    };
    newShip.supplies = { // supplies
        fuel: {
            type: "hydrogen",
            cap: 5.0,
            amount: 5.0,
            rating: 9999
        },
        hull: {
            type: "titanium",
            cap: 5.0,
            amount: 5.0,
            rating: 9999
        },
        energy: {
            type: "lithium",
            cap: 5.0,
            amount: 5.0,
            rating: 9999
        },
        rations: {
            cap: 5.0,
            maxRating: 5.0,
            amount: 1.0,
            rating: 9999
        },
        medicine: {
            cap: 5.0,
            maxRating: 5.0,
            amount: 1.0,
            rating: 9999
        }
    };
    return newShip;
};
//==========================================================
// entities Object /////////////////////////////////////////
var pipeline = [];
var entities = {
    defaultMaxZoom: 0.7,
    inNumRangeZoom: 0.6,
    add: function(entityObj) {
        if (pipeline.length < maxEntities) {
            pipeline.unshift(entityObj);
        }
    }
};
entities.dealLandingDamage = function(le) {
    var adjustedDmgTick = le.landingDmgTick;
    //speed damage only applies to entities with atmospheres
    if (le.type === "planet" || le.type === "sun") {
        var speedLimit = 0.5;
        if (ship.speed > speedLimit) {
            var speedDmgMultiplier = 1 +
                ship.speed - speedLimit;
            adjustedDmgTick += 0.005 *
                sq(speedDmgMultiplier);
        }
    }
    /// distance at which you start taking damage
    if (ship.landing.progress > le.landingDmgNumRange) {
        var landingDmgMultiplier = 1 +
            ship.landing.progress - le.landingDmgNumRange;
        adjustedDmgTick *= landingDmgMultiplier * le.zoom;
    }
    //dMsg(speedDmgMultiplier);
    if (adjustedDmgTick) {
        //dMsg(adjustedDmgTick);
        ship.registerDmg("a " + le.type, adjustedDmgTick);
    }
};
// Update Landing Entity and Take Landing Actions
entities.updateLandingProgress = function() {
    var landingEntity = ship.landing.entity;
    var shipIsOverTargetEntity = isOverCircleEntity(
        ship.pos.x, ship.pos.y, landingEntity);
    if (shipIsOverTargetEntity) {
        if (ship.landing.progress < ship.landing.end) {
            var landingTick = 0.04;
            // black holes suck your ship in
            if (landingEntity.type === "blackHole") {
                landingTick += 0.05 * sq(ship.landing.progress);
            }
            ship.landing.progress = upperLimit(
                ship.landing.progress + landingTick * sq(ship.speed),
                ship.landing.end);
            this.dealLandingDamage(landingEntity);
        }
    }
    // iterate until gone
    else if (ship.landing.progress >= 0) {
        var departingTick = 0.04;
        ship.landing.progress -= departingTick *
            sq(ship.speed);
        if (ship.landing.progress <= 0) {
            ship.landing.entity = null;
            ship.landing.progress = 0;
        }
    }
    // Update Landing Target Visuals
    // Update zoom of Current Landing Entity
    // being here means we reached defaultMaxZoom already ?
    var maxZoom = 1.5;
    var zoomDiff = maxZoom - landingEntity.zoom;
    var newZoom = landingEntity.zoom +
        zoomDiff * ship.landing.progress;
    landingEntity.setZoom(newZoom);
};
entities.handleCollisionTarget = function(te) {
    // Asteroids will never be selected
    var shipOverThisEntity = isOverCircleEntity(ship.pos.x, ship.pos.y, te);
    // Select New Entity if None Selected
    if (te.type === "asteroid") {
        if (shipOverThisEntity && info.distTraveled >= te.pos) {
            var newDmg = random(0.01, 0.04);
            ship.registerDmg("an asteroid", newDmg / 2, newDmg);
        }
    } else if (!ship.landing.entity) {
        if (!ship.landing.progress) {
            if (shipOverThisEntity && te.zoom >= this.inNumRangeZoom) {
                ship.landing.entity = te;
            }
        }
    } else if (shipOverThisEntity && te.zIndex < ship.landing.entity.zIndex) {
        // closer planet demands priority - // Landing Progress
        // is preserved. but this is kind of an issue (bug?)
        ship.landing.entity = te;
    }
};
entities.updateMovementVisuals = function(te) {
    var zoomIncrement = 0.03; // default zoomIncrement
    var shiftIncrement = 3; // default shiftIncrement
    // handle +/- for zoom
    if (te.zoom > this.defaultMaxZoom) {
        zoomIncrement = -zoomIncrement;
    }
    var zoomByShipSpeed = te.zoom * ship.speed;
    //println(zoomByShipSpeed * zoomIncrement + ", "
    // + te.zoom);
    te.zoomByInc(
        this.defaultMaxZoom, zoomByShipSpeed * zoomIncrement
    );
    te.shiftByInc(shipFocus.x, shipFocus.y,
        zoomByShipSpeed * shiftIncrement
    );
};
// Remove Dead Entities and Update All except Landing Target
entities.updateAll = function() {
    var newPipeline = [];
    var targetEntity = null;
    for (var i = 0; i < pipeline.length; i++) {
        targetEntity = pipeline[i]; // get object from pipeline
        // using visibleSize works until we get entities
        // that are not 1:1 zoomed
        // assume for now all regions are symmetrical
        var totalVisibleSize = targetEntity.effectSize * targetEntity.zoom;
        var entityInView = subjectInRegion(
            { 
                x: targetEntity.x, y: targetEntity.y, 
                w: totalVisibleSize, h: totalVisibleSize 
            }, 
            { 
                x: 0, y: 0, 
                w: width, h: height 
            }
        );
        if (entityInView) {
            // add to new pipeline
            newPipeline.push(targetEntity);
            /* println(targetEntity.type + " : " + targetEntity.x  + ", " + targetEntity.y + 
                        ", " + targetEntity.size + ", " + targetEntity.zoom); //debug */
            if (targetEntity !== ship.landing.entity) {
                if (gameMode) {
                    this.handleCollisionTarget(targetEntity);
                }
                if (!ship.landing.progress) {
                    this.updateMovementVisuals(targetEntity);
                }
            }
            try {
                targetEntity.draw(); // (i)
            } catch (e) {
                println("Fatal Error: Failed to draw '" + targetEntity.type + "'\nConsole: " + e);
                noLoop();
            }
        } else if (ship.landing.entity === targetEntity) {
            // this entity is dead, so dissociate it
            ship.landing.entity = null;
            //why do we need this? v
            ship.landing.progress = 0;
        }
    } //dMsg("new: " + newPipeline.length);
    pipeline = newPipeline;
    //println(pipeline.length);
};
//===========================================================
// Resources constructor ////////////////////////////////////
// initializing this should probably be put back in Planet
var Resources = function() {
    if (this.type === "planet") {
        if (this.inhabited) {
            this.resources = {
                hydrogen: {
                    // limited by but not defined by tech
                    amount: random(),
                    rating: lowerLimit(
                        random(
                            lowerLimit(
                                this.technology - 0.1, 0),
                            this.technology
                        ),
                        0.01
                    )
                },
                titanium: {
                    amount: random(),
                    rating: lowerLimit(
                        random(
                            lowerLimit(
                                this.technology - 0.1, 0),
                            this.technology
                        ),
                        0.01
                    )
                }
            };
        } else {
            this.resources = {
                hydrogen: {
                    amount: random(),
                    rating: random(0, 0.25),
                },
                titanium: {
                    amount: random(0, 0.25),
                    rating: random()
                }
            };
        }
    } else if (this.type === "station") {
        if (this.inhabited) {
            this.resources = {
                hydrogen: {
                    // limited by but not defined by tech
                    amount: random(),
                    rating: lowerLimit(
                        random(
                            lowerLimit(
                                this.technology - 0.1, 0),
                            this.technology
                        ),
                        0.01
                    )
                },
                titanium: {
                    amount: random(),
                    rating: lowerLimit(
                        random(
                            lowerLimit(
                                this.technology - 0.1, 0),
                            this.technology
                        ),
                        0.01
                    )
                }
            };
        } else {
            this.resources = {
                hydrogen: {
                    amount: random(),
                    rating: random(0.5, 1),
                },
                titanium: {
                    amount: random(0, 0.25),
                    rating: random(0.25, 1)
                }
            };
        }
    }
};
//==========================================================
// Resources Info //////////////////////////////////////////
var rInfo = {
    hydrogen: {
        property: "fuel", //add additional p later ?
        UNIT: "Kl"
    },
    titanium: {
        property: "hull",
        UNIT: "Kg"
    },
    lithium: {
        property: "energy",
        UNIT: "Kw"
    }
};
//==========================================================
// Entity constructor //////////////////////////////////////
var Entity = function(type, position, size, effectSize) {
    this.pos = position;
    this.type = type;
    this.id = type.substring(0, 1).toUpperCase() + (millis() % 1000);
    //maked entity size
    this.size = size;
    this.visibleSize = 0;
    this.zoom = 0.01; // current entity zoom
    this.x = random(this.size / 2, width - this.size / 2);
    this.y = random(this.size / 2, height - this.size / 2);
    this.zIndex = pipeline.length;
    if (effectSize === undefined) {
        effectSize = size;
    }
    this.effectSize = effectSize;
    this.setZoom = function(targetZoom) {
        this.zoom = targetZoom;
        this.visibleSize = targetZoom * this.size;
    };
    this.zoomByInc = function(targetZoom, increment) {
        this.setZoom(changeByRateSigned(
            this.zoom, targetZoom, increment));
    };
    this.shiftByInc = function(targetX, targetY, increment) {
        if (this.x > targetX) {
            this.x += increment;
        } else {
            this.x -= increment;
        }
        if (this.y > targetY) {
            this.y += increment;
        } else {
            this.y -= increment;
        }
    };
};
//==========================================================
// PlanetRing constructor //////////////////////////////////
var PlanetRing = function(planetRadius, planetColor) {
    this.list = [];
    /*var maxIncrement = 0.1 + random(0.5);*/ // not used yet/anymore
    var maxBright = random(100, 255);
    var ringScaleMin = random(1, 1.3);
    var ringScaleMax = random(1.3, 2);
    var ringScaleGap = random(0.15, 0.3);
    for (var scale = ringScaleMin; scale < ringScaleMax; scale += ringScaleGap) {
        var newColor = color(maxBright + random(-5, 5) + 50,
            maxBright + random(-5, 5) + 50,
            maxBright + random(-5, 5) + 50);
        var particleColor = lerpColor(
            planetColor, newColor, random(0.5));
        var particleSize = random(2, 5);
        var newRadius = planetRadius * scale;

        this.list.push([
            [newRadius * 2, newRadius], particleSize, particleColor
        ]);
    }
};
PlanetRing.prototype.draw = function(zoom, start, stop) {
    var length = this.list.length;
    for (var i = 0; i < length; i++) {
        stroke(this.list[i][2]);
        var weight = this.list[i][1];
        strokeWeight(weight * zoom);
        noFill();
        arc(0, 0,
            this.list[i][0][0] * zoom,
            this.list[i][0][1] * zoom,
            radians(start), radians(stop)
        );
        /*arc(0, 0,
            this.list[i][0][0]*zoom*1.01,
            this.list[i][0][1]*zoom,
            start, stop
        );*/
    }
    noStroke();
};
//===========================================================
// Plants Constructor and Methods ///////////////////////////
var Plant = function(x, y, deg, base, tintColor) {
    this.origin = new PVector(x, y);
    this.position = new PVector(0, 0);
    this.degrees = deg;
    this.xUnitWidth = base.xUnitWidth * (1 + random(0.01));
    this.yUnitCompress = base.yUnitCompress * (1 + random(0.005));
    this.height = base.height * (1 + random(0.3));
    this.direction = 1; // for animation
    this.w = base.w * (1 + random(0.2));
    this.h = base.h * (1 + random(0.2));
    this.color = lerpColor(base.color, tintColor, random(0.2, 0.7));
    this.points = [];
    this.increment = null;
    this.taper = base.taper * (1 + random(0.015));
    this.bulge = base.bulge * (1 + random(0.015));
};
Plant.prototype.update = function() {
    this.direction *= -1;
};
Plant.prototype.getYSinPos = function(y) {
    // large number mountains/terrain
    var bulge = cos(radians(y * this.bulge));
    var taper = (1 - (y / this.height) * this.taper);
    var nextPos = new PVector(
        cos(radians(y * this.yUnitCompress)) * this.xUnitWidth * taper *
        bulge, y
    );
    return nextPos;
};
Plant.prototype.initialize = function() {
    var height = this.height;
    /*for some reason setting the custom increment here lags
    the program. so we must set it in the original for loop
    after initialization*/
    var i = this.increment;
    for (var y = 0; y < height; y += i) {
        this.points.push(this.getYSinPos(y, y / height));
    }
};
Plant.prototype.display = function() {
    noStroke();
    pushMatrix();
    translate(this.origin.x, this.origin.y);
    rotate(radians(this.degrees));
    var points = this.points.length;
    for (var i = 0; i < points; i += 1) {
        /*var fillColor = lerpColor(
            this.color, color(255,255,255),
            i/this.points.length/100
        );*/
        fill(this.color);
        ellipse(this.points[i].y, this.points[i].x, this.w, this.h);
    }
    popMatrix();
};
var PlantBase = function(/*increment*/) {
    this.random = random(0.01, 1);
    this.maxXUnitWidth = 10;
    this.xUnitWidth = random(2, this.maxXUnitWidth);
    this.yUnitCompress = random(1, 100) +
        random(10, 300) *
        round(random(0, 1)) *
        round(random(0, 1));
    this.height = random(10, 50) +
        random(1, 50) *
        round(random(0, 1)) * round(random(0, 1));
    this.w = random(1, 4) +
        random(4, 5) * round(random(0, 1)) *
        round(random(0, 1));
    this.h = random(1, 4) +
        random(4, 5) * round(random(0, 1)) *
        round(random(0, 1));
    this.taper = random(-1, 1);
    this.bulge = random(-1, 1) * round(random(0, 1)) +
        random(-8, 8) *
        round(random(0, 1)) * round(random(0, 1));
    this.color = color(random(255), random(255), random(255));
};
//==========================================================
// Surface Decoration Methods //////////////////////////////
var planetSurface = {};
// not stored for performance reasons v
planetSurface.plants = {
    list: [],
    make: function() {
        // ideally plant count should depend on number of points in plant
        var base = new PlantBase();
        var totalPlants = constrain((base.maxXUnitWidth - base.xUnitWidth) * 5, 4, 20);
        //println(base.xUnitWidth);
        var spread = random(15, 50);
        for (var i = 0; i < totalPlants; i++) {
            var xNode = ((width / totalPlants) * i) + random(-20, 20);
            //hypotenuse v
            var diameter = new PVector(width * 2, width / 2);
            var origin = new PVector(width / 2, random(390, 390 + spread));
            var resolution = width;
            var deg = 240 + (60 / resolution) * xNode;
            // a/h = cos
            var x = cos(radians(deg)) * (diameter.x / 2) + origin.x;
            // o/h = sin
            var y = sin(radians(deg)) * (diameter.y / 2) + origin.y;
            var tintColor = ship.landing.entity.color;
            var plant = new Plant(x, y, deg, base, tintColor);
            this.list.push(plant);
            var firstPos = plant.getYSinPos(0);
            var nextPos = plant.getYSinPos(1);
            var distance = dist(firstPos.x, firstPos.y, nextPos.x, nextPos.y);
            plant.increment = constrain(1 / distance / Math.pow(distance, -0.6), 0.1, 1);
            plant.initialize();
        }
    },
    draw: function() {
        for (var i = 0; i < this.list.length; i++) {
            var plant = this.list[i];
            plant.display();
        }
    },
    clear: function() {
        this.list = [];
    }
};
planetSurface.sky = {
    list: [],
    make: function(e) {
        // Background Sun / Moon
        // cant add more till we actually add more suns
        this.list = [];
        var bodyCount = 1 + round(random()) *
            round(random());
        for (var i = 0; i < bodyCount; i++) {
            var x = random(400);
            var y = random(300);
            var size = random(20, 15 * e.systemSize);
            this.list[this.list.length] = [x, y, size];
        }
        // stars
        this.starOpacity = random() * 255;
    },
    draw: function() {
        stroke(255, 255, 255, this.starOpacity);
        stars.display(0.001);
        noStroke();
        for (var i = 0; i < this.list.length; i++) {
            fill(255, 255, 255, random(130, 140));
            var lightBody = this.list[i];
            var x = lightBody[0];
            var y = lightBody[1];
            var size = lightBody[2];

            ellipse(x, y, size, size);
            ellipse(x, y, size * 0.75, size * 0.75);
        }
    }
};
planetSurface.draw = function(e) {
    noStroke();
    pseudoBg(e.color);
    fill(e.color);
    // Background Sky
    // dMsg(ship.landing.entity.color); get entity color somehow?
    fill(0, 0, 0, 10);
    rect(-1, -1, 401, 300);
    rect(-1, -1, 401, 200);
    rect(-1, -1, 401, 150);
    rect(-1, -1, 401, 100);

    // Light Bodies
    planetSurface.sky.draw();
    // Background Land
    fill(0, 0, 0, 50);
    var black = color(0, 0, 0);
    fill(lerpColor(e.color, black, 0.3));
    ellipse(200, 350, 800, 200);
    fill(lerpColor(e.color, black, 0.5));
    ellipse(200, 360, 800, 200);
    fill(lerpColor(e.color, black, 0.7));
    ellipse(200, 380, 800, 200);
    fill(lerpColor(e.color, black, 0.8));
    ellipse(200, 400, 800, 200);

    if (true || !e.inhabited) {
        planetSurface.plants.draw();
    }
};
// ========================================================
// Population constructor
var Population = function(chance) {
    // chance to be inhabited
    this.inhabited = round(random() <= chance);
    //dMsg(this.inhabited);
    //this.inhabited = true;// DEBUG
    if (this.inhabited) {
        this.nationTitle = round(random(nationTitles.length));
        this.name = randomNameGen();
    }
};
//==========================================================
// Technology constructors /////////////////////////////////
var Technology = function(minTechnology, maxTechnology, minToolChance, maxToolChance) {
    // standard tech 0.0 - 1.0, standard tool chance 5% - 15%
    this.upgrades = { //replace with tools object?
        scanner: false,
        radar: false
    };
    this.technology = 0;

    // restrict tool giving and tech to inhabited entities for now
    // add tech and tool gain ability for abandoned entities?
    if (!this.inhabited) {
        return;
    }

    // technology limits but does not define outcomes
    /*// first half random. Second half exponentially more difficult // old model
    round( random(0.5) + (random() * random() * 0.5) ); */

    // above whatever is given, first 90% is random // last 10% exponentially more difficult
    var technologyChance = round(random(0.89) + (random() * random() * 0.11));
    this.technology = map(technologyChance, 0, 1.0, minTechnology, maxTechnology);

    if (this.technology) {
        // 50% -> 10.0% chance, 0.5 - (0 -> 0.4); // new model (linear)
        // var rarity = 0.5 - (0.4 * this.technology); // original model (stepped)
        // 50% -> 16.6% chance, 1/2 -> 1/6
        // scale rarity with technology level // higher tech, higher chance for a tool
        // not sure if we want to keep doing this, but probably more fair
        var toolChance = map(this.technology, 0.0, 1.0, minToolChance, maxToolChance);
        for (var item in ship.tools) {
            //dMsg(toolChance);
            if (random() <= toolChance && isCustomProperty(item)) {
                this.upgrades[item] = true;
            }
        }
    }
};
//==========================================================
// Hazard constructors /////////////////////////////////////
var EntityDamageHazard = function(type, chance, minTickScale, maxTickScale) {
    this[type + "DmgTick"] = 0;
    if (random() <= chance) { // % chance for damage
        this[type + "DmgTick"] = random(maxDmgTick * minTickScale, maxDmgTick * maxTickScale);
    }
};
var LandingDamageHazard = function(chance, minTickScale, maxTickScale, dmgNumRange) {
    EntityDamageHazard.call(this, "landing", chance, minTickScale, maxTickScale);
    this.landingDmgNumRange = dmgNumRange;
};
var SurfaceDamageHazard = function(chance, minTickScale, maxTickScale) {
    EntityDamageHazard.call(this, "surface", chance, minTickScale, maxTickScale);
};
//==========================================================
// Planet constructor //////////////////////////////////////
var Planet = function(sun, systemSize, position) {
    var size = random(50, 150);
    var effectSize = size;
    if (random() <= 0.3) { // 30% chance to receive rings
        this.rings = new PlanetRing(this.size / 2, this.color);
        effectSize = size * 2;
    }
    Entity.call(this, "planet", position, size, effectSize);

    this.systemSize = systemSize;
    //this.sun = sun; // so we don't lose sun when solar system changes
    // rotate angle toward sun
    var p1 = { x: this.x, y: this.y };
    var p2 = { x: sun.x, y: sun.y };
    var angleBetweenDeg = Math.atan2(
        p2.y - p1.y, p2.x - p1.x
    ) * 180 / Math.PI;
    var angle = 180 + angleBetweenDeg;
    this.rotation = angle;
    var newColor = color(random(255), random(255),
        random(255));
    this.color = lerpColor(newColor, color(0, 0, 0), 0.25);
    if (newColor) {
        this.color = newColor;
    }
    if (random() <= 0.3) { // 30% chance to receive rings
        this.rings = new PlanetRing(this.size / 2, this.color);
        this.effectSize = this.size * 2;
    }
    this.draw = function() {
        // define matrix
        pushMatrix();
        translate(this.x, this.y);
        rotate(radians(this.rotation));
        // draw back ring
        if (this.rings) {
            this.rings.draw(this.zoom, 0, 180);
        }
        this.drawAtmosphere();
        // draw base
        fill(this.color);
        ellipse(0, 0, this.visibleSize, this.visibleSize);
        this.drawLighting();
        // draw front ring
        if (this.rings) {
            this.rings.draw(this.zoom, 180, 360);
        }
        popMatrix();
        // now for debug v
        //text(this.zIndex, this.x, this.y);
    };
    this.drawLighting = function() {
        var newRadius = this.visibleSize / 2;
        noStroke();
        // Shadows
        //why is this not the same as 9 * 20 v
        //fill(0, 0, 0, 180);
        //arc(0, 0, newR*2, newR*2, -89, 90);

        fill(0, 0, 0, 20);
        arc(0, 0, newRadius * 2, newRadius * 2, radians(-90), radians(90));
        arc(0, 0, newRadius * 1.88, newRadius * 2, radians(90), radians(270));
        // var total = 0; // not used
        var i;
        for (i = 1.88; i >= 0.8; i -= 0.2) {
            arc(0, 0, newRadius * i, newRadius * 2, radians(90), radians(270));
            arc(0, 0, newRadius * 2, newRadius * 2, radians(-90), radians(90));

        }
        for (i = 1.2; i >= 0.8; i -= 0.2) {
            arc(0, 0, newRadius * 2, newRadius * 2, radians(-90), radians(90));
            arc(0, 0, newRadius * i, newRadius * 2, radians(90), radians(270));
        }
        //text(this.zIndex, this.x, this.y); // debug
    };
    this.drawAtmosphere = function() {
        noStroke();
        // Atmosphere (fade by zoom)
        fill(lerpColor(
            this.color, color(128, 128, 128, 20), 0.9));
        ellipse(0, 0,
            this.visibleSize + (10 * this.zoom),
            this.visibleSize + (10 * this.zoom)
        );
    };
    this.drawInterior = planetSurface.draw;
    // chance, minDmgTickScale, maxDmgTickScale, dmgNumRange
    LandingDamageHazard.call(this, 0.1, 0.01, 0.25, 0.3);
    SurfaceDamageHazard.call(this, 0.1, 0.01, 0.5);
    Population.call(this, 0.5);
    // minTechnology, maxTechnology, minToolChance, maxToolChance
    Technology.call(this, 0.1, 1.0, 0.05, 0.15);
    Resources.call(this);
};
//==========================================================
// Sun constructor /////////////////////////////////////////
var Sun = function(members, position) {
    var size = random(100, 150 + (15 * members));
    Entity.call(this, "sun", position, size, (size + 5) * 5);

    var newColor = lerpColor(color(255, 0, 0), color(255, 255, 0), random());
    this.color = lerpColor(newColor, color(255, 255, 255), 0.25);
    this.rays = [random(2), random(3.5), random(5)];
    this.draw = function() {
        //phereDraw.call(this); //neccessary to use call?
        noStroke();
        fill(this.color);
        ellipse(
            this.x, this.y, this.visibleSize,
            this.visibleSize
        );
        this.drawRays();
    };
    this.drawRays = function() {
        noStroke();
        // Atmosphere (fade by zoom)
        var r = this.color >> 16 & 0xFF;
        var g = this.color >> 8 & 0xFF;
        var b = this.color & 0xFF;

        // long rays
        for (var i = 1; i < 15; ++i) {
            var newColor = lerpColor(this.color, color(255, 255, 255, 0), map(i, 1, 40, 0.995, 1));
            fill(newColor);
            // requires exponential/log fade without exceeding 5x
            ellipse(this.x, this.y,
                ((this.size + random(5)) * (i * i * 0.02) * this.zoom),
                ((this.size + random(5)) * (i * i * 0.02) * this.zoom)
            );
        }

        // short rays
        fill(color(r, g, b, round(random())));
        if (sessionDuration % 130 === 0) {
            this.rays = [random(2), random(3.5), random(5)];
        }
        for (var deg = 0; deg < 360; deg += random(5, 10)) {
            var rayLength = random(this.visibleSize / 2,
                this.visibleSize + (5 * this.zoom));
            triangle(this.x, this.y,
                this.x + cos(radians(deg - this.rays[0])) * rayLength,
                this.y + sin(radians(deg - this.rays[0])) * rayLength,
                this.x + cos(radians(deg + this.rays[0])) * rayLength,
                this.y + sin(radians(deg + this.rays[0])) * rayLength
            );
            triangle(this.x, this.y,
                this.x + cos(radians(deg - this.rays[1])) * rayLength * 1.5,
                this.y + sin(radians(deg - this.rays[1])) * rayLength * 1.5,
                this.x + cos(radians(deg + this.rays[1])) * rayLength * 1.5,
                this.y + sin(radians(deg + this.rays[1])) * rayLength * 1.5
            );
            triangle(this.x, this.y,
                this.x + cos(radians(deg - this.rays[2])) * rayLength * 2,
                this.y + sin(radians(deg - this.rays[2])) * rayLength * 2,
                this.x + cos(radians(deg + this.rays[2])) * rayLength * 2,
                this.y + sin(radians(deg + this.rays[2])) * rayLength * 2
            );
        }
        // circle rays
        fill(color(r, g, b, random(10, 20)));
        ellipse(this.x, this.y,
            this.visibleSize + (10 * this.zoom), this.visibleSize +
            (random(5, 10) * this.zoom));
        ellipse(this.x, this.y,
            this.visibleSize + (20 * this.zoom), this.visibleSize +
            (random(10, 20) * this.zoom));
        ellipse(this.x, this.y,
            this.visibleSize + (40 * this.zoom), this.visibleSize +
            (random(20, 40) * this.zoom));
        ellipse(this.x, this.y,
            this.visibleSize + (70 * this.zoom), this.visibleSize +
            (random(50, 70) * this.zoom));
        ellipse(this.x, this.y,
            this.visibleSize + (120 * this.zoom), this.visibleSize +
            (random(100, 120) * this.zoom));

    };
    // % chance, minDmgTickScale, maxDmgTickScale, dmgNumRange
    LandingDamageHazard.call(this, 1.0, 0.5, 1.0, 0.1);
};
//==========================================================
// blackHole constructor ///////////////////////////////////
var BlackHole = function(position) {
    var size = random(300, 400);
    // not really sure how to measure the spiral size here
    Entity.call(this, "blackHole", position, size, size * 3);
    this.spiralLength = random(45, 55);
    this.spiralWeight = random(2, 4);
    this.startColor = color(0, random(115), 255, alpha);
    this.endColor = color(random(50, 191), 0, random(50, 255));
    this.drawSpiral = function(xOffset, yOffset, width, height, lengthMethod) {
        var pointCount = PI * width;
        var deltaRadians = 360/pointCount;
        var s = 0;
        var x, y;

        console.log('width', width, 'pointCount', pointCount, 'deltaRadians', deltaRadians);
        var i, radians;
        for (i = 0; i < pointCount; i++) {
            radians = i * deltaRadians;
            s = lengthMethod(radians, pointCount);
            y = Math.cos(radians) * width / 2 * s;
            x = Math.sin(radians) * height / 2 * s;
            strokeWeight(random(this.spiralWeight));
            point(floor(xOffset + x) + random(-1, 1), floor(yOffset + y) + random(-1, 1));
            //s = 25 / t;// 0.0002 = 400;//0.0008 = 200;
        }
    };
    // % chance, minDmgTickScale, maxDmgTickScale, dmgNumRange
    LandingDamageHazard.call(this, 1.0, 0.5, 1.0, 0.9);
};
BlackHole.prototype.draw = function() {
    strokeWeight(this.spiralWeight);

    var randomLength = 5;
    var length = this.spiralLength - randomLength;
    length += timeBasedBounce(1000, randomLength);

    var lengthScale = 0.003;
    var lengthMethod = function(theta, circumference) {
        return circumference / theta * length * lengthScale;
    };
    
    var alpha = random(100, 200);
    var currentHue, randomGreyAlpha, randomGrey, newColor, sliceBasedSize, timeBasedSize;
    var startIteration = 1;
    var iterations = 5;
    for (var i = startIteration; i <= iterations; ++i) {
        
        currentHue = lerpColor(this.startColor, this.endColor, i / iterations);
        randomGreyAlpha = random(100, 200);
        randomGrey = color(135, 135, 135, alpha);
        newColor = lerpColor(currentHue, randomGrey, 0.75);
        stroke(newColor);

        var periodLength = 1000;
        var periodDuration = sessionDuration % periodLength;
        
        timeBasedSize = map(periodDuration, 
                        0,                       periodLength-1, 
                        this.visibleSize * 0.95, this.visibleSize);

        sliceBasedSize = map(i, 
                         startIteration,       iterations, 
                         timeBasedSize * 0.75, timeBasedSize);

        this.drawSpiral(this.x, this.y, sliceBasedSize, sliceBasedSize, lengthMethod);
    }
    noStroke();
};
//==========================================================
// Asteroid constructor ////////////////////////////////////
var asteroidRandomGen = new Random(1); // jshint ignore:line
console.log(asteroidRandomGen);
var Asteroid = function(position) {
    var size = 15 + lowerLimit(asteroidRandomGen.nextGaussian() * 25, 0);
    Entity.call(this, "asteroid", position, size, size);
    this.color = color(193, 193, 193);
    this.rotation = random(360);
};

/* jshint ignore:start */
var getImage = function() {
    // @pjs preload must be used to preload the image

    /* @pjs preload="img/Rock.png"; */

    PImage img;

    img = loadImage("img/Rock.png");
    return img;
};
/* jshint ignore:end */

Asteroid.prototype.draw = function() {
    /* jshint ignore:start */
    var asteroidImg = getImage("cute/Rock");
    // visibleSize == 0 causes a bug. Why do we get 0?
    if (this.visibleSize) {
        // pushMatrix();
        //translate(this.x, this.y);
        //rotate(this.rotation);
        image(asteroidImg, this.x - (0.5 * this.visibleSize), this.y - (0.65 * this.visibleSize),
            this.visibleSize, this.visibleSize);
        //popMatrix();
    }
    /* jshint ignore:end */
};
//==========================================================
// Station constructor ////////////////////////////////////
var stationInterior = {
    draw: function() {}
};
var Station = function(position) {
    var size = random(100, 200);
    Entity.call(this, "station", position, size, size);
    this.draw = function() {
        var size = this.visibleSize;
        rectMode(CENTER);
        pushMatrix();
        translate(this.x, this.y);
        rotate(radians(-45));
        noStroke();
        // engine flames
        var displayFactor;
        for (var i = 0; i < 5; i++) {
            displayFactor = map(i, 0, 5, 0, 1);
            fill(252, 252, 226, random(5, 25));
            ellipse(size * random(-0.01, 0.01), size * random(0.43, 0.45), 
                (2 - displayFactor) * size * random(0.03, 0.05),
                (1 + displayFactor) * size * (0.275 + random(0.15, 0.2)));
            fill(252, 252, 194, random(5, 30));
            ellipse(size * random(-0.01, 0.01), size * random(0.43, 0.45), 
                (2 - displayFactor) * size * random(0.05, 0.07),
                (1 + displayFactor) * size * (0.275 + random(0.15, 0.2)));
            fill(252, 179, 133, random(10, 32));
            ellipse(size * random(-0.01, 0.01), size * random(0.43, 0.45), 
                (2 - displayFactor) * size * random(0.1, 0.12),
                (1 + displayFactor) * size * (0.275 + random(0.05, 0.2)));
            fill(252, 207, 138, random(10, 33));
            ellipse(size * random(-0.01, 0.01), size * random(0.43, 0.45), 
                (2 - displayFactor) * size * random(0.12, 0.14),
                (1 + displayFactor) * size * (0.275 + random(0.1, 0.2)));
            fill(252, 202, 109, random(5, 34));
            ellipse(size * random(-0.01, 0.01), size * random(0.43, 0.45), 
                (2 - displayFactor) * size * random(0.13, 0.15),
                (1 + displayFactor) * size * (0.275 + random(0.05, 0.2)));
        }
        // back ring
        noFill();
        strokeWeight(size * 0.14);
        stroke(168, 168, 168);
        arc(0, 0, 1 * size, 0.5 * size, radians(180), radians(270));
        stroke(161, 161, 161);
        arc(0, 0, 1 * size, 0.5 * size, radians(270), radians(360));
        // back cross paths
        strokeWeight(size * 0.06);
        stroke(148, 148, 148);
        line(-size * 0.32, -size * 0.16, 0, 0);
        line(size * 0.32, -size * 0.16, 0, 0);

        noStroke();
        // engine
        fill(189, 189, 189);
        quad(size * 0.15, size * (0.35), -size * 0.15,
            size * (0.35), -size * 0.175, size * (0.35 + 0.05), size * 0.175,
            size * (0.35 + 0.05));
        ellipse(0, size * 0.4, size * 0.35, size * 0.175);
        // base engine
        fill(161, 161, 161);
        rect(0, size * (0.19 + 0.16 / 2), size * 0.3, size * 0.16);
        ellipse(0, size * (0.19 + 0.16), size * 0.3, size * 0.15);
        // center engine
        fill(184, 184, 184);
        quad(size * 0.1, size * 0.115, -size * 0.1, size * 0.115, 
            -size * 0.15, size * 0.19, size * 0.15, size * 0.19);
        // center base column 1
        fill(153, 153, 153);
        rect(0, size * 0.095, size * 0.2, size * 0.04);
        ellipse(0, size * 0.115, size * 0.2, size * 0.1);
        // center base column 2
        fill(173, 173, 173);
        rect(0, 0, size * 0.2, size * 0.15);
        ellipse(0, size * 0.075, size * 0.2, size * 0.1);

        fill(189, 189, 189);
        ellipse(0, -size * 0.075, size * 0.2, size * 0.1);
        // center base tip
        quad(size * 0.1, -size * 0.07, -size * 0.1, -size * 0.07, 
            -size * 0.06, -size * 0.2, size * 0.06, -size * 0.2);
        fill(199, 199, 199);
        ellipse(0, -size * 0.2, size * 0.12, size * 0.06);
        // center antenna
        fill(242, 242, 242);
        ellipse(0, -size * 0.2, size * 0.07, size * 0.035);
        fill(219, 219, 219);
        ellipse(0, -size * 0.2, size * 0.05, size * 0.025);
        triangle(size * 0.025, -size * 0.2, -size * 0.025, -size * 0.2, 0, -size * 0.9);

        noFill();

        // antenna rings
        strokeWeight(size * 0.01);
        stroke(184, 184, 184);
        arc(0, -size * 0.6, size * 0.07, size * 0.035, radians(-70), radians(250));
        arc(0, -size * 0.65, size * 0.06, size * 0.03, radians(-70), radians(250));
        arc(0, -size * 0.7, size * 0.05, size * 0.025, radians(-70), radians(250));
        // front cross paths
        strokeWeight(size * 0.06);
        stroke(158, 158, 158);
        line(size * 0.08, size * 0.04, size * 0.32, size * 0.16);
        line(-size * 0.08, size * 0.04, -size * 0.32,
            size * 0.16);
        // front ring
        strokeWeight(size * 0.14);
        stroke(173, 173, 173);
        arc(0, 0, 1 * size, 0.5 * size, radians(0), radians(90));
        stroke(179, 179, 179);
        arc(0, 0, 1 * size, 0.5 * size, radians(90), radians(180));

        popMatrix();
        rectMode(LEFT);
    };
    this.drawInterior = stationInterior.draw;
    // % chance, minDmgTickScale, maxDmgTickScale, dmgNumRange
    LandingDamageHazard.call(this, 0.1, 0.01, 0.25, 0.3);
    SurfaceDamageHazard.call(this, 0.1, 0.01, 0.5);
    // stations are more likely to be populated
    Population.call(this, 0.75);
    // minTechnology, maxTechnology, minToolChance, maxToolChance
    // stations always have better technology
    Technology.call(this, 0.5, 1.0, 0.1, 0.3);
    Resources.call(this);
};
//==========================================================
// space Objects //////////////////////////////////////////
var SolarSystem = function(position) {
    this.seen = false;
    this.entities = [];
    this.members = round(random(2, 11));
    this.sun = new Sun(this.members, this.pos); // do we really need to define a position here?
    this.pos = position;
    info.solarSystem.next = this.pos;
    var distance = this.pos;
    /*var newEntity;*/ //not used
    for (var i = 0; i <= this.members; i++) {
        var middle = round(this.members / 2) - 1;
        if (i === middle) {
            this.sun.pos = distance;
            this.entities[this.entities.length] = this.sun;
        } else {
            //dMsg(distance);
            var planet = new Planet(
                this.sun, this.members, distance);
            this.entities[this.entities.length] = planet;
        }
        if (i === middle - 1 || i === middle) {
            distance += random(30, 50);
        }
        distance += random(30, 50); // 5 , 15
    }
};
var AsteroidBelt = function(lastSize) {
    this.seen = false;
    this.entities = [];
    this.asteroids = round(random(5, maxAsteroids));
    // longer intervals between larger belts
    var minInterval = 100;
    var largerIsLonger = minInterval;
    if (lastSize) {
        largerIsLonger += 200 *
            (lastSize / maxAsteroids);
    }
    this.pos = info.distTraveled +
        random(minInterval, largerIsLonger) /
        asteroidBeltFreq;
    var distance = this.pos;
    for (var i = 0; i <= this.asteroids; i++) {
        var asteroid = new Asteroid(distance);
        this.entities[this.entities.length] = asteroid;
        // how small distance can this be? (effeciency wise)
        distance += random(0.005, 0.01);
    }
};
var space = {
    // function breaks without this
    initialize: function() {
        this.solarSystem = { // is this neccessary?
            entities: [],
            members: 0,
            sun: null
        };
        this.asteroidBelt = {
            entities: [],
            members: 0,
        };
        this.blackHole = {
            spawning: false
        };
        this.solarSystem = new SolarSystem(300);
        this.station = null;
    }
};
space.refresh = function() {
    // BACKGROUND
    var modulus = 100;
    var condition = (adjustedSessionDuration() % (modulus * 2) >= modulus);
    var step = (
        (modulus - 1 - (adjustedSessionDuration() % modulus)) *
        condition + (adjustedSessionDuration() % modulus) *
        (!condition)
    ) / modulus;
    var speedCubed = ship.speed * ship.speed * ship.speed;
    var r = upperLimit(2 * speedCubed * step, 13);
    var g = upperLimit(20 * speedCubed * step, 40);
    var b = upperLimit(random(45, 55) * speedCubed, 92.5);
    var motionBlur = upperLimit((110 * ship.speed), 200);
    pseudoBg(r, g, b, 255 - (motionBlur * useMotionBlur));

    // STARS
    var starOpacity = 255 - upperLimit(
        (110 * ship.speed), 190);
    stroke(255, 255, 255, starOpacity);
    var largerWhenSlower = 1 - upperLimit(ship.speed, 0.9);
    var newStrokeWeight = lowerLimit(
        2.1 * largerWhenSlower, 0.1);
    var starLength = Math.pow(ship.speed, 3) *
        0.2 * starLengthMod;
    var starSpeed = Math.pow(ship.speed, 2) *
        0.1 * starSpeedMod;
    stars.display(starLength, newStrokeWeight);
    stars.update(starSpeed);

    // ENTITIES
    var newEntity, nextSystemEntity, newPos;
    var blackHoleInterval = random(3000, 5000);
    // blackHoleInterval = 100; //debug
    if (info.distTraveled - info.blackHole.lastSeen >
        blackHoleInterval && !this.blackHole.spawning
    ) {
        this.blackHole.spawning = true;
    }
    if (this.blackHole.spawning) {
        if (!pipeline.length) {
            newEntity = new BlackHole(info.distTraveled);
            entities.add(newEntity);
            info.blackHole.lastSeen = info.distTraveled;
            this.blackHole.spawning = false;
        }
    }
    var suckedIntoVortex = false;
    if (info.distTraveled - info.blackHole.lastSeen < 250 ||
        this.blackHole.spawning) {
        suckedIntoVortex = true;
    }

    if (this.solarSystem.entities.length) {
        nextSystemEntity = this.solarSystem.entities[0];
        if (info.distTraveled > nextSystemEntity.pos) {
            //dMsg("adding");
            if (!suckedIntoVortex) {
                if (!this.solarSystem.seen) {
                    this.solarSystem.seen = true;
                    info.solarSystem.lastSeen = this.pos;
                    info.solarSystem.count += 1;
                }
                entities.add(nextSystemEntity);
                info.planet.count += 1;
            }
            this.solarSystem.entities.shift();
        }
    } else {
        newPos = info.distTraveled +
            (random(500, 700) / solarSystemFreq);
        this.solarSystem = new SolarSystem(newPos);
    }

    if (this.asteroidBelt.entities.length) {
        //dMsg("pass");
        nextSystemEntity = this.
        asteroidBelt.entities[0];
        if (info.distTraveled > nextSystemEntity.pos) {
            if (!suckedIntoVortex) {
                if (!this.asteroidBelt.seen) {
                    this.asteroidBelt.seen = true;
                    info.asteroidBelt.lastSeen = this.pos;
                    info.asteroidBelt.count += 1;
                }
                entities.add(nextSystemEntity);
                info.asteroid.count += 1;
            }
            this.asteroidBelt.entities.shift();
        }
    } //delay till solarsystem is gone
    else { //check for planets somehow
        this.asteroidBelt = new AsteroidBelt(
            this.asteroidBelt.members);
    }
    if (this.station) {
        if (info.distTraveled > this.station.pos) {
            if (!suckedIntoVortex) {
                info.station.lastSeen = this.pos;
                info.station.count += 1;
                entities.add(this.station);
            }
            this.station = null;
        }
    } else {
        newPos = info.distTraveled + random(1000, 2000);
        this.station = new Station(newPos);
    }
    // 1 Parsec  = 206,264.806 AU
    // measured in micro Parsec :D.
    // Hyper-speed is at least 0.9 microParsec per tick

    if (!ship.landing.progress) {
        info.distTraveled += ship.speed;
    }
    if (gameMode && ship.landing.entity) {
        entities.updateLandingProgress();
    }

    entities.updateAll();

    //dMsg(pipeline.length);
    //dMsg(space.solarSystem.entities.length);
    //dMsg(space.asteroidBelt.entities.length);
    //dMsg(info.solarSystem.next - info.distTraveled);
};
//==========================================================
// landed game state Object ////////////////////////////////
var landed = {
    e: {}, // this gets filled later with current entity
    newResources: []
};
landed.events = {
    lastSysEventTime: 0,
    tools: function(item) {
        var getDialog = [
            "An elderly alien meanders forward.",
            "He hands you a strange device,",
            "and then slowly backs away."
        ];
        var upgradeDialog = [
            "A sturdy looking alien strides over.",
            "He takes a look at your " + item + ",",
            "and tinkers with it a bit."
        ];
        if (landed.e.type === "station") {
            getDialog = [
                "A cheerful crew member approaches.",
                "He places a curious device by you,",
                "and smiles warmly as he walks off."
            ];
            upgradeDialog = [
                "The station lab technicians approach.",
                "They carefully examine your " + item + ",",
                "and apply a few new parts."
            ];
        }

        var dialog;
        var gainMsg;
        var ql = round(landed.e.technology * 100);
        if (ship.tools[item].ql === 0) {
            dialog = getDialog;
            gainMsg = "You have gained a " + ql + "QL " + item + ".";
        } else {
            dialog = upgradeDialog;
            gainMsg = "Your " + item + " was upgraded to " + ql + "QL.";
        }
        // begin notice scheduling
        events.schedule(this.lastSysEventTime + 3300, 
            function() { notices.add("e", dialog[0], 6600); });
        events.schedule(this.lastSysEventTime + 6600, 
            function() { notices.add("e", dialog[1], 6600); });
        events.schedule(this.lastSysEventTime + 8300, 
            function() { notices.add("e", dialog[2], 6600); });
        events.schedule(this.lastSysEventTime + 9900, 
            function() { notices.add("g", gainMsg, 6600); });

        this.lastSysEventTime += 9900;
        // end notice scheduling

        ship.tools[item].ql = landed.e.technology;
        landed.e.upgrades[item] = false;
    },
    vandalism: function() {
        var newDmg = random(0.05, 0.25);
        ship.registerDmg("an alien", newDmg / 90, newDmg);

        var lastTime = this.lastSysEventTime;
        events.schedule(lastTime + 1650, 
            function() { notices.add("e", "A mean looking alien lumbers forward.", 6600); });
        var vandalismDialog = [
            "He dents your hull with a large club",
            "And then runs off."
        ];

        if (landed.e.technology > 0.9) {
            vandalismDialog = [
                "He fires off a shot with a phaser,",
                "And escapes in a hovercraft."
            ];
        } else if (landed.e.technology > 0.4) {
            vandalismDialog = [
                "He beats your hull with a wrench,",
                "And makes off on a space scooter."
            ];
        }

        events.schedule(lastTime + 3300, 
            function() { notices.add("e", vandalismDialog[0], 6600); });
        events.schedule(lastTime + 5000, 
            function() { notices.add("e", vandalismDialog[1], 6600); });

        this.lastSysEventTime += 5000;
    },
    hullUpgrade: function() {
        var newHullRating = random(ship.supplies.hull.rating + 0.005, landed.e.technology);
        ship.supplies.hull.rating = newHullRating;

        var hullUpgradeDialog = [
            "A kind faced alien approaches you.",
            "He carefully applies new pieces of hull",
            "And then shyly walks away."
        ];

        // do after current event v
        events.schedule(this.lastSysEventTime + 1600, 
        function() { notices.add("e", hullUpgradeDialog[0], 6600); }); // +50 delay
        events.schedule(this.lastSysEventTime + 3300, 
        function() { notices.add("e", hullUpgradeDialog[1], 6600); }); // +100
        events.schedule(this.lastSysEventTime + 5000, 
        function() { notices.add("e", hullUpgradeDialog[2], 6600); }); // +150

        events.schedule(this.lastSysEventTime + 6600, function() {
            notices.add("g",
                "Your hull " + sInfo.hull.ratingTerm + 
                " is now at " + round(newHullRating * 100) + "%", 6600);
        }); //+ 200

        this.lastSysEventTime += 6600;
    }
};
landed.doSysEvents = function() {
    // second inhabited check. possible non inhabited events?
    if (this.e.inhabited) {
        this.events.lastSysEventTime = sessionDuration;
        // tools comes first so it can theoretically be based on sessionDuration
        var chance;
        var isUpgrade;
        for (var item in ship.tools) {
            if (isCustomProperty(item)) {
                isUpgrade = (ship.tools[item].ql < this.e.technology);
                chance = (random() < 0.8); // 80% chance to upgrade , should this be 100%?
                if (chance && isUpgrade && this.e.upgrades[item]) {
                    this.events.tools(item);
                }
            }
        }
        chance = (random() < 0.025);
        if (chance) {
            this.events.vandalism();
        }
        chance = (random() < 0.05);
        var techDifference = this.e.technology - ship.supplies.hull.rating;
        if (chance && techDifference > 0.005) {
            this.events.hullUpgrade();
        }
    }
};
landed.getResources = function() {
    var eResources = this.e.resources;
    var sSupplies = ship.supplies;
    var totalResources = 0;
    var maxResources = 0;
    for (var r in eResources) {
        // resources:property have a 1:1 ratio ... for now.
        totalResources += eResources[r].amount;
        if (eResources[r].amount > maxResources) {
            maxResources = eResources[r].amount;
        }
    }
    // average currently based on planet total types.
    // However a better method might be doing this based on
    // total number of resource types in general. hmm.
    var averageResources = totalResources / Object.keys(eResources).length;
    if (maxResources < 0.01) {
        if (this.e.inhabited) {
            notices.add("d", "'Take what you must, and leave us.'", 13200);
            notices.add("i", "These aliens don't like sharing.", 13200);
        } else {
            var barrenMsg;
            if (this.e.type === "planet") {
                barrenMsg = "This planet is a barren wasteland.";
            } else if (this.e.type === "station") {
                barrenMsg = "This station has long been raided.";
            }
            notices.add("i", barrenMsg, 13200);
        }
        notices.add("i", "Resources are exceedingly scarce here.", 13200);
        return;
    }
    var msg;
    var dialog;
    if (this.e.inhabited) {
        dialog = "'Please, help yourself to our stores.'";
        msg = "The inhabitants of this " + this.e.type + " are kind.";

        //dMsg(averageResources);
        if (averageResources < 0.8) { // 5?
            // these planets are meant to have a bit of all
            // so based detection on average amount
            dialog = "'Please accept our humble offerings.'";
            msg = "The people here have little to offer";
        }
    } else {
        dialog = "'Hey! Captain, would you look at all this?'";
        msg = "This " + this.e.type + " is rich in resources.";
        if (maxResources < 0.4) { // 5?
            // fuel should not be common, so do it based on max.
            dialog = "'I don't know why we even came here'";
            msg = "A poorer " + this.e.type + ", might not be found.";
        }
    }
    notices.add("d", dialog, 13200);
    notices.add("i", msg, 13200);

    var rName, rProperty;
    var newResourceCount = 0;
    this.newResources = [];
    for (rName in eResources) {
        rProperty = rInfo[rName].property;
        var sp = sSupplies[rProperty];
        var rp = eResources[rName];
        if (rp && rp.amount > 0.01) { //watch this
            //dMsg(newResourceCount);
            // offer advice and sane start amounts.
            var newAmnt = 0;
            if (sp.amount === sp.cap) {
                notices.add("i", sp.surplusMsg, 19800);
            } else {
                newAmnt = rp.amount;
                if (sp.amount + newAmnt > sp.cap) {
                    newAmnt = sp.cap - sp.amount;
                }
            }
            ui.sliders.add(
                "R" + rName, toCamelCase(rName) + ": " + 
                round(rp.amount * 100) + " " + rInfo[rName].UNIT,
                0, rp.amount, newAmnt, 290, 340 - (newResourceCount * 20), 100, 16, 6, 13
            );

            this.newResources[this.newResources.length] = rName;
            newResourceCount = this.newResources.length;
        }
    }
    if (newResourceCount) {
        ui.buttons.add("decidedResources", "I've Decided",
            width - 100 / 2 - 10, height - 25 / 2 - 10, 100, 25);
    }
};
landed.receiveResource = function(newResource, newResourceAmnt) {
    // resource object
    var landingResource = ship.landing.entity.resources[newResource];
    var resourceInfo = rInfo[newResource]; // resource info
    var supplyObject = ship.supplies[resourceInfo.property]; // supply object
    var supplyInfo = sInfo[resourceInfo.property]; // supply info

    var newSupplyRating = ((supplyObject.amount * supplyObject.rating) + 
        (newResourceAmnt * landingResource.rating)) /
        (supplyObject.amount + newResourceAmnt);

    //sanity check 'cause we're using floats
    landingResource.amount = lowerLimit(landingResource.amount - newResourceAmnt, 0);

    if (newResourceAmnt > 0.01) {
        // we should really return partial percents ??
        // if no partial % check for 0.01 earlier I think.
        notices.add("g", "You receive " + round(newResourceAmnt * 100) + " " + 
            resourceInfo.UNIT + " of " + round(landingResource.rating * 100) + "% " + 
            supplyInfo.RTNG + " " + newResource + ".", 13200);
        //color(147, 153, 207)
        notices.add("g", "Your " + resourceInfo.property + " " + 
            supplyInfo.ratingTerm + " is now at " +
            round(newSupplyRating * 100) + "%", 16500);
    }

    // done mixing qualities, lets discard the overflow.
    if (supplyObject.amount + newResourceAmnt > supplyObject.cap) {
        newResourceAmnt = supplyObject.cap - supplyObject.amount;
    } // do resource swap for better ql instead of mixing?
    supplyObject.rating = newSupplyRating;
    // seems we must directly access an object to set it.
    // (not by reference)?
    supplyObject.amount += newResourceAmnt;
};
//landed.beginLanding = function () { }; // need to properly land
//===========================================================
// ship tools
var shipTools = {
    scanner: function() {
        var l = ship.landing;
        //dMsg(l.entity.zoom);
        if (l.entity && l.entity.type === "planet" && l.progress > 1.0 - ship.tools.scanner.ql) {
            var planet = l.entity;
            stroke(255, 255, 255, 2 * planet.zoom);
            var label = "";
            if (l.progress < 1.0) {
                label = "[ + ]";
            }
            var animTime = 2000;
            var spacing = "                        ";
            var scanFrame = parseInt(timeBasedBounce(animTime, spacing.length), 10);
            var info = "|=[ SCANNING ] \n|" +
                spacing.substring(0, scanFrame) + "[=]" + 
                spacing.substring(0, 23 - scanFrame) + "\n";
            if (planet.surfaceDmgTick &&
                (!planet.technology || ship.tools.scanner.ql > planet.technology)
            ) {
                info += "|--Threat: " +
                    round((planet.surfaceDmgTick / maxDmgTick) * 100) + "\n";
            }
            if (planet.inhabited) {
                info += "|--Tech: " + round(planet.technology * 100) + "\n";
            }
            var resourceList = ["hydrogen", "titanium"];
            for (var r in resourceList) {
                var rName = resourceList[r];
                if (planet.resources[rName].amount > 0.01) {
                    info += "|--" + toCamelCase(rName);
                    if (ship.tools.scanner.ql > planet.technology) {
                        info += ": " + round(planet.resources[rName].rating * 100) + "QL";
                    }
                    info += "\n";
                }
            }
            shadowText(
                label, planet.x - (10 * planet.zoom),
                planet.y + (5 * planet.zoom)
            );
            shadowText(
                info, 10, 75
            );
        }
    },
    radar: function() {
        if (ship.tools.radar.ql) {
            textAlign(CENTER, CENTER);
            var nextSolarSystem = round(info.solarSystem.next - info.distTraveled);
            var maxSystemDistance = 700;
            if (nextSolarSystem < maxSystemDistance * ship.tools.radar.ql &&
                nextSolarSystem > 0
            ) {
                shadowText("[ System Detected: " +
                    nextSolarSystem + " µp ]",
                    width / 2, height - 15,
                    ((millis() % 1000) / 1000 * 100) + 155);
            }
            textAlign(LEFT, LEFT);
        }
    },
    display: function() {
        this.scanner();
        this.radar();
    }
};
// ship HUD
var shipHUD = {
    gauges: function() {
        ui.draw.gauge(
            width - 40, 10, 10, 50, "T",
            ship.throttle,
            ship.speed / ship.properties.speedMax
        );
        ui.draw.gauge(
            width - 20, 10, 10, 50, "S",
            ship.speed / ship.properties.speedMax,
            ship.throttle
        );
        // scale 0.333 for bigger cap values?
        ui.draw.gauge(
            width - 40, 90, 10, 50, "F",
            ship.supplies.fuel.amount / ship.supplies.fuel.cap,
            ship.supplies.fuel.amount / ship.supplies.fuel.cap,
            0.333
        );
        var warningThreshold = 0.333;
        if (ship.damager) {
            warningThreshold = 1;
        }
        ui.draw.gauge(
            width - 20, 90, 10, 50, "H",
            ship.supplies.hull.amount / ship.supplies.hull.cap,
            ship.supplies.hull.amount / ship.supplies.hull.cap,
            warningThreshold
        );
        /*ui.draw.gauge(360, 170, 10, 50, "E",
                    ship.supplies.energy.amount, ship.supplies.energy.amount);
        ui.draw.gauge(380, 170, 10, 50, "B", ship.barrier,
                      ship.supplies.energy.amount);*/
    },
    traveled: function() {
        shadowText("Space: " + round(info.distTraveled) + " µp", 10, 20);
        //shadowText( "Time: " + (sessionDuration/1000).toFixed(2) + " s", 10, 35 );
    },
    landing: function() {
        var le = ship.landing.entity;
        if (le) {
            var magnitude = le.landingDmgTick / maxDmgTick;
            var c = lerpColor(color(255, 255, 255), color(255, 0, 0), magnitude);

            var entityTitle = toCamelCase(le.id);
            if (ship.landing.progress === 1.0 && le.name) {
                entityTitle = le.name;
                //dMsg(le.name);
            }

            shadowText(toCamelCase(le.type) + ": " + entityTitle, 10, 38, c);

            if (ship.landing.progress < 1.0) {
                shadowText("Landing: " + round(ship.landing.progress * 100) + "%", 10, 56, c);
            }
        }
    },
    display: function() {
        this.gauges();
        this.traveled();
        this.landing();
    }
};
var resetEnvironment = function() {
    allowMouse = true;
    // hack to preserve death screen & 4 startScreen
    showHoverAnim = false;
    sessionStartTime = millis();
    sessionDuration = 0;
    gamePaused = false;
    ui.buttons.clear();
    ui.sliders.clear();
    notices.clear();
    events.clear();
    info = new Info();
    ship = new Ship();
    // need to do this first so pipeline really clears?
    space.initialize();
    pipeline = []; // clear pipeline for resets
};
//===========================================================
// States ///////////////////////////////////////////////////
// begin "initialize" /////////////////////////////////////////////
state.define("initialize", function() {
    gameMode = null;
    resetEnvironment();
    ui.buttons.add("freeFly", "Free Fly", width / 2, 280, 100, 20);
    ui.buttons.add("journey", "Journey", width / 2, 310, 100, 20);
    ui.buttons.add("challenge", "Challenge", width / 2, 340, 100, 20);

    state.switch("selection");
});
// end "initialize" //////////////////////////////////////////////
// start "selection" state ///////////////////////////////////////
state.define("selection", function() {});
state.list.selection["draw"] = function() {
    space.refresh();
    ship.refresh();

    // begin Start Screen draw
    pseudoBg(255, 255, 255, 10);
    var abi = createFont("arial bold italic");
    var a = createFont("arial");
    var ai = createFont("arial italic");
    textFont(abi, 40);
    textAlign(CENTER, LEFT);
    // gradual time based fade
    var textColor = color(255, 255, 255, 200 * sessionDuration / 1500);
    shadowText("Space Journey", width / 2, 90, textColor);
    textFont(ai, 18);
    // threshold
    fill(255, 255, 255, 255 * (sessionDuration > 2000));
    text("A Journey Through Space", width / 2, 115);
    pushMatrix();
    translate(width * 0.77, 125);
    rotate(radians(-24));
    textFont(a, 12);
    // threshold
    fill(255, 255, 255, 
        100 * (sessionDuration / 5000) * (
            (sessionDuration > 3100) && (sessionDuration < 8300)
        )
    );
    text("and time", 0, 0);
    popMatrix();
    textAlign(LEFT, LEFT);
    fill(255, 255, 255, 200);
    textFont(a, 12);
    ui.draw.text("Y H", 375, 395);
    ui.draw.text("v " + version, 5, 395);
    ui.buttons.dropAnim(2166, 80); //start, delay
    // end start screen draw

    // button draw // this code should not be needed here // its only for mouseover anims
    if (ui.buttons.list.freeFly.isPressed()) {}
    else if (ui.buttons.list.journey.isPressed()) {}
    else {ui.buttons.list.challenge.isPressed();}
};
state.list.selection["mouseMoved"] = function() {
    // need to seperate the hover action code from click code!
    // initiate hover state here if possible
};
state.list.selection["mousePressed"] = function() {
    if (mouseButton !== LEFT) {
        return;
    }
    //this.buttons.display();
    //console.log("REAL CHECK");
    if (ui.buttons.list.freeFly.isPressed()) { //
        gameMode = "freeFly";
    } else if (ui.buttons.list.journey.isPressed()) {
        gameMode = "journey";
    } else if (ui.buttons.list.challenge.isPressed()) {
        gameMode = "challenge";
    } else {
        return;
    }
    console.log(gameMode);
    if (gameMode) {
        resetEnvironment();
        //ship.throttle = 0.8/ship.properties.speedMax;
        //not needed? speedmax could change?
        ship.speed = 0.2; //speed up effect
        // modular to enable handling of Restarts
        // where game mode is preserved
        if (gameMode === "freeFly") {
            ship.supplies.fuel.rating = 99999;
            ship.supplies.hull.rating = 99999;
            ship.tools = {
                scanner: { ql: 1 },
                radar: { ql: 1 }
            };
        } else if (gameMode === "journey") {
            ship.supplies.fuel.rating = 0.6;
            ship.supplies.hull.rating = 0.6;
        } else if (gameMode === "challenge") {
            ship.supplies.fuel.rating = 0.3;
            ship.supplies.hull.rating = 0.3;
            solarSystemFreq = 0.3;
        }
        // begin event registration //////////////////////////////////////////////////////////////
        // condition, action, repeatInterval (ms delay / optional)
        events.schedule(6500, function() { 
            notices.add("s", "Welcome to space.", 6700); });
        events.schedule(13000, function() { 
            notices.add("s", "Enjoy your journey.", 3400); });
        events.schedule(20000, function() { 
            notices.add("s", "It's a big place out there.", 3300); });
        events.schedule(26500, function() { 
            notices.add("d", "'I wonder how far we'll make it.'", 6600); });
        // unsure this will work cuz of float accuracy
        // setting by fuel consumption ticks, combined with repeat prevention, works effectively
        // var condition, event, repeatInterval;

        events.register(
            function() {
                return (ship.supplies.fuel.amount < 0.3 && 
                    ship.supplies.fuel.amount > 0.3 - ship.supplies.fuelTick); 
            },
            function() { notices.add("w", "'Check your fuel, Captain.'", 16500); },
            10000
        );
        //events.register(condtion, action, repeatInterval);

        events.register(function() {
                return (ship.supplies.fuel.amount < 0.2 && 
                        ship.supplies.fuel.amount > 0.2 - ship.supplies.fuelTick); 
            },
            function() { notices.add("w", "'We should refuel at a nearby planet.'", 16500); },
            10000
        );
        events.register(function() {
                return (ship.supplies.hull.amount < 0.3 && 
                        ship.supplies.hull.amount > 0.3 - ship.dmgTick); 
            },
            function() { notices.add("w", "'Captain, We're taking damage.", 16500); },
            10000
        );
        events.register(
            function() {
                return (ship.supplies.hull.amount < 0.2 && 
                        ship.supplies.hull.amount > 0.2 - ship.dmgTick); 
            },
            function() { notices.add("w", "'We should probably get out of here.'", 16500); },
            10000
        );
        var func1;
        var func2;
        switch (gameMode) {
            case "freeFly":
                func1 = function() {
                    notices.add("d", "'With this much armor and fuel, ", 6600);
                    notices.add("d", "We'll never have to worry.'", 9900);
                };
                func2 = function() {
                    notices.add("d", "I'm just gonna' sit back and enjoy.", 13200);
                };
                break;
            case "journey":
                func1 = function() {
                    notices.add("d", "'He wasn't kidding, this place is vast.'", 9900);
                };
                func2 = function() {
                    notices.add("d", "'I think we'll be fine if we just watch", 9900);
                    notices.add("d", "our fuel and don't crash into anything'", 13200);
                };
                break;
            case "challenge":
                func1 = function() {
                    notices.add("d", "'It looks like we made it out alive.'", 9900);
                };
                func2 = function() {
                    notices.add("d", "'But with cheap fuel and so few planets,'", 9900);
                    notices.add("d", "I don't think we'll last long'", 13200);
                };
        }
        events.schedule(50000, func1);
        events.schedule(60000, func2);
        // end event registration /////////////////////////////////////////////////////////////////
        state.switch("inSpace");
    }
};
// end "selection" state
// start "inSpace" state
state.define("inSpace", function() {});
state.list.inSpace["draw"] = function() {
    space.refresh();
    ship.refresh();
    /*if (mouseIsPressed & allowMouse){ // what is this code?
        var offset = mouse.y - mouseY; //what is mouse.y?
        var newSpeed = ship.throttle + (offset / 1200);
        ship.setThrottle(newSpeed);
    }*/
    if (ship.landing.progress === 1.0) { // landing complete
        if (ship.landing.entity.type === "sun") {
            notices.clear();
            notices.add("i", "Your ship was swallowed by the sun!", 99999);
            notices.add("i", "Flying into the sun destroys your ship.", 99999);
            state.switch("gameOver");
        } else if (
            ship.landing.entity.type === "blackHole") {
            notices.clear();
            notices.add("i", "Your ship was sucked into a black hole!", 99999);
            notices.add("i", "Black holes disintegrate your ship.", 99999);
            state.switch("gameOver");
        } else if (ship.speed >= hyperSpeed && gameMode !== "freeFly") {
            notices.clear();
            notices.add("i", "Your ship crashed into a " + ship.landing.entity.type + "!", 99999);
            notices.add("i", "Try entering " + ship.landing.entity.type + "s more slowly.", 99999);
            state.switch("gameOver");
            return;
        } else {
            state.switch("landed");
        }
    }
    shipHUD.display();
    shipTools.display();
    notices.display();
    ui.refresh();

    /* 
     * start key handling -- this is handled here since key press events are erratic 
     * at the start of a key press 
     */
    if (keyPressed) {
        // dMsg(keyCode +"'" + key.toString() + "'");
        /*switch (keyCode){ // alternative way to handle keys
            default: break;
        }*/
        var newIncrement = {
            x: 0,
            y: 0
        };
        var speedIncrement = constrain(25 * ship.speed, 20, 50);
        //dMsg(key.toString());
        // make custom binds eventually (keys.up[UP, "w"])
        if (keys[UP] || keys.w) {
            newIncrement.y = -speedIncrement;
        }
        if (keys[DOWN] || keys.s) {
            newIncrement.y = speedIncrement;
        }
        if (keys[LEFT] || keys.a) {
            newIncrement.x = -speedIncrement;
        }
        if (keys[RIGHT] || keys.d) {
            newIncrement.x = speedIncrement;
        }
        if (keys["+"] || keys["="]) {
            ship.setThrottle(ship.throttle + 0.02);
        }
        if (keys._ || keys["-"]) {
            ship.setThrottle(ship.throttle - 0.02);
        }
        ship.setGoToPos(ship.pos.x + newIncrement.x,
            ship.pos.y + newIncrement.y);
    }
    // end key handling
};
state.list.inSpace["keyPressed"] = function() {
    //handleKeys(); this is the proper place for handling single key presses.
};
state.list.inSpace["mouseMoved"] = function() {
    cursor("none");
    ship.setGoToPos(mouseX, mouseY);
};
state.list.inSpace["mouseOut"] = function() {
    ship.setGoToPos(200, 200);
    shipFocus = {
        x: 200,
        y: 200
    };
};
// end "inSpace" state
// start "landed" state
state.define("landed", function() {
    landed.e = ship.landing.entity;
    ship.speed = 0.1;
    ship.setThrottle(0);
    ship.landing.entryPoint = ship.pos;
    if (ship.landing.entity.type === "planet") {
        var maxPlanetSize = 150;
        ship.zoom = 1.9 * (
            0.2 + (
                0.8 * (
                    1 - (ship.landing.entity.size /
                        maxPlanetSize)
                )
            )
        );
        ship.pos = shipFocus = {
            x: 200,
            y: 400 - 100 * (
                0.2 + (
                    0.8 * (
                        1 - (ship.landing.entity.size / maxPlanetSize)
                    )
                )
            )
        };
        // initialize surface display
        planetSurface.sky.make(landed.e);
        // plants generation are non exclusive yet true
        if (true || !landed.e.inhabited) {
            planetSurface.plants.make(landed.e);
        }
    } else if (ship.landing.entity.type === "station") {
        ship.zoom = 0;
        ship.pos = shipFocus = {
            x: ship.landing.entity.x,
            y: ship.landing.entity.x
        };
    }
    // initialize damage and resources
    if (landed.e.surfaceDmgTick) {
        events.schedule(sessionDuration + 1600, function() { 
            notices.add("w", "Something doesn't feel right...", 6600); });
    } else {
        if (landed.e.inhabited) {
            notices.add("d", "'Welcome, to the " + landed.e.name + " " +
                ship.landing.entity.type + ".'", 13200);
        } else {
            notices.add("d", "You are greeted by an eerie silence.", 13200);
        }
        if (gameMode !== "freeFly") {
            landed.getResources();
        }
        landed.doSysEvents();
    }

    ui.buttons.add("back", "Back to Space", 10 + 100 / 2, height - 25 / 2 - 10, 100, 25);
    info[ship.landing.entity.type].visited += 1;
    shipHUD.display();
    shipTools.display();
    notices.display();
    ui.refresh();
    state.switch("visiting");
});
// end "landed" state
// start "visiting" state
state.define("visiting", function() {});
state.list.visiting["draw"] = function() {
    if (landed.e.type === "station") {
        space.refresh();
    }
    landed.e.drawInterior(landed.e);
    ship.refresh();

    if (landed.e.surfaceDmgTick) {
        var damager = "the " + landed.e.type;
        if (landed.e.inhabited) {
            damager = "aliens";
        }
        ship.registerDmg(damager, random(landed.e.surfaceDmgTick));
    }
    shipHUD.display();
    shipTools.display();
    notices.display();
    ui.refresh();
};
state.list.visiting["mouseClicked"] = function() {
    if (mouseButton !== LEFT) {
        return;
    }
    console.log("visit click!");
    // HUD Drawing is all handled internally now
    if (ui.buttons.list.back && ui.buttons.list.back.isPressed()) {
        // check for landing event
        if (landed.events.lastSysEventTime > sessionDuration) {
            ui.buttons.list.back.drawDeny();
            notices.add("d", "'Hold on Captain. Something's happening'", 400);
        } else {
            // (ship.speed === 0 ) prevent taking off?
            // a bit convoluted atm maybe?
            // can reordering with delays solve this?
            ui.buttons.clear();
            ui.sliders.clear();
            planetSurface.plants.clear();
            shipFocus = ship.landing.entryPoint;
            ship.pos = ship.landing.entryPoint;
            ship.rotation = 0;
            ship.landing.entryPoint = null;
            //ship.landing.entity = null;
            // keep entity for animation
            ship.landing.progress = 0;
            ship.setThrottle(0.3);
            state.switch("inSpace");
        }
    } else if (ui.buttons.list.decidedResources &&
        ui.buttons.list.decidedResources.isPressed()) {
        for (var i = 0; i < landed.newResources.length; i++) {
            var newAmount = ui.sliders.list[
                "R" + landed.newResources[i]
            ].curVal;
            var newResource = landed.newResources[i];
            // dMsg(newAmount + " " + newResource);
            if (newAmount) {
                landed.receiveResource(newResource,
                    newAmount);
            }
        }
        ui.sliders.clear();
        ui.buttons.remove("decidedResources");
    }
};
// end "visiting" state
// start "gameOver" state
state.define("gameOver", function() {
    notices.display();
    ui.refresh(); // should include notices.display
    noStroke();
    fill(255, 50, 50, 15);
    rect(-1, -1, 401, 300);
    rect(-1, -1, 401, 200);
    rect(-1, -1, 401, 150);
    rect(-1, -1, 401, 100);
    //shockwave
    fill(219, 98, 28, 40);
    ellipse(ship.pos.x, ship.pos.y, 30, 30);
    ellipse(ship.pos.x, ship.pos.y, 50, 50);
    fill(219, 150, 150, 50);
    ellipse(ship.pos.x, ship.pos.y, 70, 70);
    ellipse(ship.pos.x, ship.pos.y, 100, 100);
    //zoomByInc(1/this.zoom);
    // hack to preserve death screen v
    showHoverAnim = false;
    var resetGame = function() {
        state.switch("initialize");
    };
    var curGameMode = gameMode;
    var preserveGameMode = function() {
        shipFocus = {
            x: width / 2,
            y: height / 2
        };
        gameMode = curGameMode; // reset game mode
    };
    //
    ui.dialog.open(
        "Your Journey Has Ended.",
        function() { resetGame();
            preserveGameMode(); },
        function() { resetGame(); },
        "Restart", "Menu"
    );
    ui.dialog.display();
    ui.buttons.display();
    state.switch("restartMenu");
});
// end "gameOver" state
// start "restartMenu" state
state.define("restartMenu", function() {});
state.list.restartMenu["draw"] = function() {
    ui.dialog.detectPress();
};
// end "restartMenu" state
//===========================================================
// State initialize
state.switch("initialize");
//===========================================================
// Built-in SysEvents //////////////////////////////////
void draw() { // jshint ignore:line
    var lMillis = millis();
    frameTime = lMillis - frameStartTime;
    frameStartTime = lMillis;
    //println("state: " + state.current);
    if (!gamePaused) {
        sessionDuration += frameTime;
        state.list[state.current]["draw"]();
        if (state.current !== null) {
            // so we don't overwrite a global v
            events.service(); // depends on initialization
            if (state.current !== "restartMenu" &&
                state.current !== "selection") {
                //dMsg(state.current);
                fill(255, 255, 255, 50);
                if (showFPS) {
                    updateFps();
                    text("fps: " + fps, 5, 395);
                }
            }
        }
    }
}; // jshint ignore:line
//theres a default function mouseIsPressed & allowMouse
void mouseClicked() { // jshint ignore:line
    dMsg(state.current);
    state.list[state.current]["mouseClicked"]();
}; // jshint ignore:line
void mousePressed() { // jshint ignore:line
    mouseIsPressed = true;
    state.list[state.current]["mousePressed"]();

    if (gamePaused) {
        gamePaused = false;
    }
}; // jshint ignore:line
void mouseReleased() { // jshint ignore:line
    mouseIsPressed = false;
    state.list[state.current]["mouseReleased"]();
}; // jshint ignore:line
void mouseMoved() { // jshint ignore:line
    //dMsg(mouseX + ", " + mouseY);
    state.list[state.current]["mouseMoved"]();
}; // jshint ignore:line
void mouseOver() { // jshint ignore:line
    cursor(HAND); // default cursor
    state.list[state.current]["mouseOver"]();
}; // jshint ignore:line
void mouseOut() { // jshint ignore:line
    state.list[state.current]["mouseOut"]();
}; // jshint ignore:line
void keyPressed() { // jshint ignore:line
    setKeyboardKey(key, true);
    state.list[state.current]["keyPressed"]();
    // pause handling // vanilla pause solution
    if (state.current !== "initialize" && state.current !== "selection" &&
        state.current !== "gameOver"
    ) {
        if (key.toString() === "p") {
            gamePaused = toggleBool(gamePaused);
            if (gamePaused) {
                fill(255, 255, 255, 120);
                rect(110, 170, 180, 45);
                fill(255, 255, 255);
                shadowText("            Game Paused\n" +
                    "'Left Click' or 'P' to Unpause", 125, 190);
            }
        }
        // global quit
        if (key.toString() === "q") {
            state.switch("gameOver");
        }
    }
}; // jshint ignore:line
void keyReleased() { // jshint ignore:line
    setKeyboardKey(key, false);
    state.list[state.current]["keyReleased"]();

    // key storage maintenance
    /*if (!keyPressed){
        keys = {}; // clear keys for efficiency // necessary?f
    }*/
}; // jshint ignore:line
void keyTyped() { // jshint ignore:line
    state.list[state.current]["keyTyped"]();
}; // jshint ignore:line
//========================================
//showHelp(); // need help screen again at some point
/*if (!DEBUG){
    try {
        var scope_Out = function(p){
            return ( function(){return this;} )()[p];
        };
        var ref = (
            scope_Out("d"+"o"+"c"+"u"+"m"+"e"+"n"+"t").referrer
        );
        fill(255, 0, 0);
        textSize(20);
        if( ref.indexOf("5922406678921216") === -1 &&
            ref.indexOf("6339819920687104") === -1
        ){
            var msg = "T"+"h"+"e"+" "+"O"+"r"+"i"+"g"+"i"+"n"+"a"+"l"+" "+
            "V"+"e"+"r"+"s"+"i"+"o"+"n"+" "+"o"+"f"+" "+"t"+"h"+"i"+"s"+" "+
            "p"+"r"+"o"+"g"+"r"+"a"+"m"+" "+"i"+"s"+" "+"l"+"o"+"c"+"a"+"t"+"e"+"d"+" "+
            "a"+"t"+":"+" "+"h"+"t"+"t"+"p"+"s"+":"+"/"+"/"+"w"+"w"+"w"+"."+
            "k"+"h"+"a"+"n"+"a"+"c"+"a"+"d"+"e"+"m"+"y"+"."+"o"+"r"+"g"+"/"+"c"+"s"+
            "/"+"s"+"p"+"a"+"c"+"e"+"-"+"j"+"o"+"u"+"r"+"n"+"e"+"y"+"-"+
            "c"+"u"+"r"+"r"+"e"+"n"+"t"+"-"+"r"+"e"+"l"+"e"+"a"+"s"+"e"+
            "/"+"5"+"9"+"2"+"2"+"4"+"0"+"6"+"6"+"7"+"8"+"9"+"2"+"1"+"2"+"1"+"6";
            println(msg);
        }
    } catch(e){ println(e); }
}*/
//dMsg("Debug Enabled"); //avoid jsLint error
