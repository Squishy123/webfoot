class Tile extends Actor {
  constructor() {
    super();
  }

  init() {
    super.init();
    let obj = this;
    obj.styleElement({
      "position": 'absolute',
      "background-color": 'yellow'
    });
    obj.setBounds({
      width: 50,
      height: 50, 
      x: Math.floor(Math.random() * 450),
      y: Math.floor(Math.random() * 450)
    });

  }

}
