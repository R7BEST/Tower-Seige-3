const Engine= Matter.Engine;
const World =Matter.World;
const Bodies = Matter.Bodies
const Constraint= Matter.Constraint;
var score=0

var engine, world;

var ground, box1,box2,box3,box4,box5,box6;
var bgColour="white"

function preload()
{
    polygon_img=loadImage("polygon.png")
}

function setup() 
{
createCanvas(1000,500);

engine= Engine.create();
world = engine.world;

ground1 = new Ground(490,300,250,20);
ground2=new Ground(500,470,1000,15);
ground3= new Ground(790, 200, 250,20);


box1= new Box(400,275,30,40);
box2= new Box(430,275,30,40);
box3= new Box(460,275,30,40);
box4= new Box(490,275,30,40);
box5= new Box(520,275,30,40);
box6= new Box(550,275,30,40);
box7 = new Box(580,275,30,40);

box8 = new Box(430,235,30,40);
box9 = new Box(460,235,30,40);
box10= new Box(490,235,30,40);
box11= new Box(520,235,30,40);
box12= new Box(550,235,30,40);


box13= new Box(460,195,30,40);
box14= new Box(490,195,30,40);
box15= new Box(510,195,30,40);
box16= new Box(490,185,30,40);
console.log(box16.speed)


box17= new Box(700,175,30,40);
box18= new Box(730,175,30,40);
box19= new Box(760,175,30,40);
box20= new Box(790,175,30,40);
box21= new Box(810,175,30,40);
box22= new Box(840,175,30,40);
box23= new Box(870,175,30,40);


box24= new Box(730,185,30,40);
box25= new Box(760,185,30,40);
box26= new Box(790,185,30,40);
box27= new Box(810,185,30,40);
box28= new Box(840,185,30,40);

box29= new Box(760,195,30,40);
box30= new Box(790,195,30,40);
box31= new Box(810,195,30,40);

box32= new Box(790,105,30,40)

ball = Bodies.circle(50,200,20);
World.add(world,ball);
rope = new Rope(this.ball,{x:100,y:200});
}

function draw() {
  gbg();
  background(bgColour);

  noStroke();
  textSize(35)
  fill("blue")
  text("Score:  " + score, width-500, 50)
  

  Engine.update(engine) 
  
  ground1.display();
  ground2.display();
  ground3.display();

  fill("blue")
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()

  fill("red ")
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()

  fill("yellow")
  box13.display()
  box14.display()
  box15.display()
  box16.display()

  fill("cyan")
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  box21.display()
  box22.display()
  box23.display()

  fill("turquoise")
  box24.display()
  box25.display()
  box26.display()
  box27.display()
  box28.display()

  fill("green")
  box29.display()
  box30.display()
  box31.display()

  fill("red")
  box32.display()

  //ball.display();
  
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);
  rope.display();
  
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();box1.score();
  box25.score();
  box26.score();
  box27.score();
  box28.score();
  box29.score();
  box30.score();
  box31.score();
  box32.score();
}


function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  rope.fly();
}

async function gbg ()
{
   var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
   var responseJSON= await response.json();
   console.log(responseJSON.datetime)
    datetime= responseJSON.datetime;
   var hour = datetime.slice(11,13);
   
   if(hour >=12 && hour <=19)
   {
       bgColour="black"
   }
   else
   {
       bgColour="white"
   }
   /*backgroundImg = loadImage(bg)
   console.log(backgroundImg)*/

   
}