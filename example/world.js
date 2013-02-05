var createEngine = require('voxel-engine');
var createTerrain = require('voxel-perlin-terrain');

// create the game
var game = createEngine({
  generateVoxelChunk: createTerrain({scaleFactor:10}),
  materials: [
    'obsidian',
    ['whitewool', 'dirt', 'grass_dirt'],
    'grass',
    'plank'
  ],
  texturePath: './textures/',
  startingPosition: [35, -1200, 35],
  worldOrigin: [0, 0, 0],
  //fogDisabled: true,
  //lightsDisabled: true
});
var hasLock = false;
var container = document.getElementById('container');
game.appendTo(container);
container.addEventListener('click', function() {
  game.requestPointerLock(container);
  hasLock = true;
});


var snow = require('../')({
  game: game,
  count: 2000,
  size: 250
});

game.on('tick', function() {
  snow.tick();
});

