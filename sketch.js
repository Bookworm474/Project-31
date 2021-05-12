const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//declare variables
var engine, world;
var lightning, lightningFrame = null;
var lightning1, lightning2, lightning3, lightning4;
var umbrella;
var rain = [];
var maxDrops = 100;

function preload(){
    //load images
    lightning1 = loadImage("images/thunderbolt/1.png");
    lightning2 = loadImage("images/thunderbolt/2.png");
    lightning3 = loadImage("images/thunderbolt/3.png");
    lightning4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    //set up canvas
    createCanvas(400,400);
    
    engine = Engine.create();
    world = engine.world;
    
    //create 100 raindrops
    for (var i = 0; i<maxDrops; i++){
        rain.push(new Drop(random(0,400),random(0,400)));
    }

    //create boy with umbrella
    umbrella = new Umbrella(200,225);
}

function draw(){
    //set background colour to black
    background("black");
    
    //update engine
    Engine.update(engine);
    
    for (var i = 0; i<maxDrops; i++){
        //draw 100 raindrops
        rain[i].display();
        //update position of raindrops when they fall out of canvas
        rain[i].update();
    }

    //display umbrella
    umbrella.display();

    //draw lightning if framecount is divisible by 80
    if (frameCount%80 === 0){
        drawLightning();
    }
    //destroy lightning after 10 frames
    if (lightningFrame != null && frameCount - lightningFrame === 10){
        lightning.destroy();
    }

    //display sprites
    drawSprites();
}

function drawLightning(){
    //create lightning sprite
    lightning = createSprite(random(10,370),random(10,30),10,10);
    
    //generate a random number between 1 & 4 and choose image accordingly
    rand = Math.round(random(1,4));
    switch(rand){
        case 1: lightning.addImage(lightning1);
            break;
        case 2: lightning.addImage(lightning2);
            break;
        case 3: lightning.addImage(lightning3);
            break;
        case 4: lightning.addImage(lightning4);
            break;
        default: break;
    }
    
    //randomly generate scale
    lightning.scale = random(0.3,0.6);
    
    //create marker for frame at which lightning is created 
    lightningFrame = frameCount;
}