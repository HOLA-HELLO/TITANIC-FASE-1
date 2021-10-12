var titanic, titanicAnimation,titanicSinkingAnimation;
var iceberg, icebergIMG, icebergWasapGroup;
var ocean, oceanAnimation;
var titanicFog, titanicFogImg;

function preload(){

    titanicAnimation = loadAnimation("Imagenes/Titanic2.gif",
    "Imagenes/Titanic3.gif","Imagenes/Titanic4.gif","Imagenes/Titanic5.gif",
    "Imagenes/Titanic6.gif","Imagenes/Titanic7.gif","Imagenes/Titanic8.gif",
    "Imagenes/Titanic9.gif","Imagenes/Titanic10.gif",
    "Imagenes/Titanic11.gif","Imagenes/Titanic12.gif","Imagenes/Titanic13.gif",
    "Imagenes/Titanic14.gif","Imagenes/Titanic15.gif","Imagenes/Titanic16.gif",
    "Imagenes/Titanic17.gif","Imagenes/Titanic18.gif","Imagenes/Titanic19.gif",
    "Imagenes/Titanic20.gif","Imagenes/Titanic21.gif","Imagenes/Titanic22.gif",
    "Imagenes/Titanic23.gif");

}

function setup(){
    createCanvas(1000,1000);

    ocean = createSprite(500,500,1000,1000);
    ocean.shapeColor = ("lightBlue");

    titanic = createSprite(500,800,10,10);

    titanic.addAnimation("Titanic",titanicAnimation);

    icebergWasapGroup = new Group();

}

function draw(){

    ocean.velocityY = (0.1);

    //TITANIC MOVIMIENTO
    if(keyDown("A")||keyDown("left")){

        titanic.x = titanic.x -2.5;
    
    }

    if(keyDown("D")||keyDown("right")){

        titanic.x = titanic.x +2.5;
    
    }

    iceberSpawn();

drawSprites();
}

function iceberSpawn(){
    if(frameCount % 60 == 0){
        iceberg = createSprite(500,100,50,20);
        iceberg.x = random(500,1000);
        iceberg.velocityY = 2;


    }

}