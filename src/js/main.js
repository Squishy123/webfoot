let c = new Stage(document.getElementById("stage"));
c.styleElement({
  "background-color": "#000000",
  "position": "relative",
  "border-style": "solid",
  "border-color": "white"
});

c.setBounds({
  width: 300,
  height:300,
  x: 0,
  y: 0
});

c.start(60, 60);

let tiles = [new Tile(), new Tile(), new Tile()];
tiles.forEach(function(t) {
  c.addActor(t);
});

let p1 = new Player();
c.addActor(p1);
