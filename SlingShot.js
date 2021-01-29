class Slingshot{
    constructor( bodyA, pointB){
        var options ={
            bodyA : bodyA,
           pointB : pointB,
            length: 20,
            stiffness: 0.12
        }
       this.sling = Constraint.create(options)
       this.pointB = pointB
       World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null
   }

    display(){

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB
            push();
            strokeWeight(10);
            stroke(50); 
            line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);  
            
            pop();
           
        }
    }
}