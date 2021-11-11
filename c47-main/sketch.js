var backgroundImage
var goalpost1,goalpost1Img,goalpost2,goalpost2Img;
var player1,player1Img,player2,player2Img
var ball,ballImage







function preload(){
 backgroundImage=loadImage("football stadium.jpg")   
goalpost1Img = loadImage("goalpost no bg.png")
goalpost2Img = loadImage("goalpost2.png")
player1Img = loadImage("character1.png")
player2Img = loadImage("character2.png")
ballImage = loadImage ("football ball.png")

}


function setup(){
    createCanvas(1000,800)
    goalpost1 = createSprite(230,400,50,100)
    goalpost1.addImage(goalpost1Img)
    goalpost1.scale =0.5

    goalpost2 = createSprite(760,400,50,100)
    goalpost2.addImage(goalpost2Img)
    goalpost2.scale = 0.5


    player1 = createSprite(320,400,50,50)
    player1.addImage(player1Img)
    player1.scale = 0.3


    player2 = createSprite(630,400,50,50)
    player2.addImage(player2Img)
    player2.scale =  0.2


    ball = createSprite(500,400,20,20)
    ball.addImage(ballImage);
    ball.scale = 0.2
}




function draw(){
background(backgroundImage)
drawSprites()
}