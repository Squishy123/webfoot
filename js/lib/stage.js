/**require("js/lib/refresh.js");
require("js/lib/quadtree.js");
require("js/lib/webobject.js");
require("js/lib/bounds.js");
require("js/lib/actor.js");
**/
class Stage extends WebObject {
  constructor(element) {
    super(element);
    this.objectsInStage = [];
    this.defaultUpdateTicksPerSecond = 60;
    this.defaultRenderTicksPerSecond = 60;
  }


  start() {
    this.quad = new QuadTree(this, 0, {
      x: 0,
      y: 0,
      width: this.width,
      height: this.height
    });

    if (this.updateQuadTree) {
      let update = () => {
        this.updateQuadTree(this);
      };
      this.refreshUpdate = new Refresh(update, 60);
      this.refreshUpdate.start();
    } else console.log(new WebFootError("Actor has no update function"));


  }

  updateQuadTree(obj) {
    let quad = obj.quad;
  }

  //USES SAT
  checkCollision(object1, object2) {
    console.log(object1.getBounds());
    console.log(object2.getBounds());
    if (object1.x < object2.x + object2.width  && object1.x + object1.width  > object2.x &&
    		object1.y < object2.y + object2.height && object1.y + object1.height > object2.y) {
    return true;
    }
    return false;
  }

  addObject(actor) {
    actor.stage = this;
    this.objectsInStage.push({
      "actor": actor
    });
    this.element.appendChild(actor.element);
    //Add this actor to the quadtree
    this.quad.insert(actor, actor.getBounds());


    actor.start(this.defaultUpdateTicksPerSecond, this.defaultRenderTicksPerSecond);
  }

  removeObject(actor) {
    actor.stage = null;
    this.objectsInStage = this.objectsInStage.filter(function(element) {
      return element != actor;
    });
    this.element.removeChild(actor.element);
  }

  getObjects() {
    return this.objectsInStage;
  }
}
