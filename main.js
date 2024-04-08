music.mp3 = 0;
music2.mp3 = 0;
leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;

function preload()
{
    loadSound()
    {
        music.mp3
        music2.mp3
    }
}

function setup()
{
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
    
}

function gotPoses(results)
{
 results coming > 0
}