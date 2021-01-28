  var starImg, fairyImg, bgImg;
	var fairy , fairyVoice;
	var star, starBody;
	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body
	function preload(){
		starImg = loadImage("images/star.png");
		fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
		bgImg = loadImage("images/starNight.png");
		fairyVoice = loadSound("sound/JoyMusic.mp3");
	}
	function setup() {
		createCanvas(800, 750);
		fairy = createSprite(130, 520);
		fairy.addAnimation("fairyflying",fairyImg);  
		fairy.scale =0.25;
		engine = Engine.create();
		world = engine.world;
		starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
		World.add(world, starBody);
		star.y = starBody.position.y
		star.x = starBody.position.x
		star.addImage(starImg);
		star.scale = 0.2;
		Engine.run(engine);
	}
	function draw() {
	  background(bgImg);
	  if(starBody.position.y <470){
		  Matter.Body.setStatic(starBody,true)
	  }
	  drawSprites();
	}
	function keyPressed() {
		if(keyDown(65)){
			fairy.x = fairy.x-30
			fairy.scale = 0.25
		}
		 if(keyDown(66)){
			 fairy.x  = fairy.x+30
			 fairy.scale = 0.25
		 }
		 if(keyDown(69)){
			 star.velocityY = +6
			 star.scale = 0.6
		 }
		}