# voxel-snow

> Let it snow in [voxel.js](https://github.com/maxogden/voxel-engine).

[View this example](http://shama.github.com/voxel-snow)

## example

```js
var snow = require('voxel-snow')({
  // pass it a copy of the game
  game: game,

  // how many particles of snow
  count: 1000,

  // size of snowfall
  size: 20,

  // speed it falls
  speed: 0.1,

  // speed it drifts
  drift: 1,

  // material of the particle
  material: game.THREE.ParticleBasicMaterial({color: 0xffffff, size: 1})
});

game.on('tick', function() {
  // update the snow by calling tick
  snow.tick();
});
```

Later you can add more snow:

```js
snow.add(count, size, material);
```

Or access the snow particles directly:

```js
snow.particles.forEach(function(particle) {
  // particle === THREE.ParticleSystem
});
```

## run the demo

1. `git clone git://github.com/shama/voxel-snow && cd voxel-snow`
1. `npm install`
1. `npm start`

## install

With [npm](https://npmjs.org) do:

```
npm install voxel-snow
```

Use [browserify](http://browserify.org) to `require('voxel-snow')`.

## release history
* 0.1.1 - updates for voxel-engine@0.6.0
* 0.1.0 - initial release

## license
Copyright (c) 2013 Kyle Robinson Young<br/>
Licensed under the MIT license.
