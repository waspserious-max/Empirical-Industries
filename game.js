const canvas=document.getElementById('gameCanvas');
const ctx=canvas.getContext('2d');
function resize(){canvas.width=innerWidth;canvas.height=innerHeight-96;}
addEventListener('resize',resize);resize();
const cam={x:0,y:0,speed:8},keys={};
addEventListener('keydown',e=>keys[e.key.toLowerCase()]=true);
addEventListener('keyup',e=>keys[e.key.toLowerCase()]=false);
function update(){
if(keys.w||keys.arrowup)cam.y-=cam.speed;
if(keys.s||keys.arrowdown)cam.y+=cam.speed;
if(keys.a||keys.arrowleft)cam.x-=cam.speed;
if(keys.d||keys.arrowright)cam.x+=cam.speed;
}
function draw(){
ctx.fillStyle='#6bbf59';ctx.fillRect(0,0,canvas.width,canvas.height);
ctx.strokeStyle='#4d9440';
const t=32,sx=Math.floor(cam.x/t),sy=Math.floor(cam.y/t);
for(let y=sy;y<sy+Math.ceil(canvas.height/t)+2;y++)
for(let x=sx;x<sx+Math.ceil(canvas.width/t)+2;x++)
ctx.strokeRect(x*t-cam.x,y*t-cam.y,t,t);
ctx.fillStyle='white';ctx.fillText('Empirical Industries v0.1.0',10,20);
}
(function loop(){update();draw();requestAnimationFrame(loop);})();