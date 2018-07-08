var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
      default: 'arcade'
  },
  scene: {
      preload: preload,
      create: create
  }
};

var game = new Phaser.Game(config);

function preload ()
{
    //this.load.setBaseURL('http://localhost:8080');

    this.load.image('planet', './mars.jpg');
    this.load.image('ship', './spaceship1.png');
    //this.load.image('blue', 'assets/particles/red.png');
}

function create ()
{
  this.add.image(800, 600, 'planet');
/*
  var particles = this.add.particles('red');

  var emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD'
  });
*/

  var ship = this.physics.add.image(400, 100, 'ship');

  ship.setVelocity(100, 200);
  ship.setBounce(1, 1);
  ship.setCollideWorldBounds(true);

  //emitter.startFollow(logo);
}