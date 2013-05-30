var createEngine = require('voxel-engine');
var createTerrain = require('voxel-perlin-terrain');

// create the game
var game = createEngine({
  generateVoxelChunk: createTerrain({ scaleFactor: 10 }),
  chunkDistance: 2,
  materials: [
    'obsidian',
    ['whitewool', 'dirt', 'grass_dirt'],
    'grass',
    'plank'
  ],
  texturePath: './textures/',
  worldOrigin: [0, 0, 0],
  controls: { discreteFire: true }
});
var container = document.getElementById('container');
game.appendTo(container);

var createPlayer = require('voxel-player')(game);
var shama = createPlayer('textures/shama.png');
shama.yaw.position.set(0, 0, 0);
shama.possess();

var snow = require('../')({
  game: game,
  count: 2000,
  size: 20
});

game.on('tick', function() {
  snow.tick();
});

