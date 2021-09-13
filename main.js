noseX = 0;
noseY = 0;
difference = 0;
right_wristX = 0;
left_wristX = 0;

function setup()
{
  video = createCapture(VIDEO);
  video.size(550 , 500);

  canvas = createCanvas(550 , 550);
  canvas.position(560 , 150);
  
  poseNet = ml5.poseNet(video , modelLoaded);
  poseNet.on('pose' , gotPoses);
}

function draw()
{
  background('#da95ed');
}

function modelLoaded()
{
  console.log('PoseNet is inishlized');
}

function gotPoses(results)
{
  if(results.length > 0)
{
  console.log(results);
}
}