function setup(){
    Canvas=createCanvas(300,300);
    Canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,modalloaded);
    posenet.on('pose',gotposes);
}
function preload() {
    clown_nose=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
    mustache=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
nose_x=0;
nose_y=0;
function modalloaded(){
    console.log('posenet is loaded');
}
function gotposes(result){
if(result.length>0){
    console.log(result);
    nose_x=result[0].pose.nose.x-15;
    nose_y=result[0].pose.nose.y-15;
    m_x=result[0].pose.nose.x-40;
    m_y=result[0].pose.nose.y;
}
}
function draw(){
    image(video,0,0,300,300)
image(clown_nose,nose_x,nose_y,30,30);
image(mustache,m_x,m_y,80,35);
}
function take_snapshot() {
    save('sonicboom.png');
}