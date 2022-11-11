video = "";
status1 = "";

function preload()
{
    video = createVideo("video.mp4");
    video.hide();
}

function setup()
{
    canvas = createCanvas(480 , 380);
    canvas.center();
}

function draw()
{
    image(video , 0 , 0 , 480 , 380);
}

function start()
{
    objectDetector = ml5.objectDetector('cocoSSD' , modelLoaded);
    document.getElementById("status").innerHTML = "STATUS : Object Detecting";
}

function modelLoaded()
{
    console.log("modelLoaded");
    status1 = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}