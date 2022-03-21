let canvas = document.getElementsByTagName('canvas')[0];
canvas.width = 640;
canvas.height = 336;
let ctx = canvas.getContext('2d');
let mouseX, mouseY;
let click;
canvas.addEventListener('mousemove', (e)=>
{
  let scale = canvas.offsetWidth/canvas.width;
  mouseX = e.offsetX/scale;
  mouseY = e.offsetY/scale;
});
canvas.addEventListener('mousedown', (e)=>
{
  click = true;
});
canvas.addEventListener('mouseup', (e)=>
{
  click = false;
});
let player = new Player(canvas.width/2-8, canvas.height/2-8, 16, 16);
let obsts = [];
let lines = [];
canvas.addEventListener(('click'),(e)=>
{
  let scale = canvas.offsetWidth/canvas.width;
  //player.x = e.offsetX/scale;
  //player.y = e.offsetY/scale;
})
//let rays = [];
/*for(let i = 0;i<360;i+=0.6)
{
  rays.push(new Ray(canvas.width/2, canvas.height/2, i/180*Math.PI));
}*/
lines.push(new Line(canvas.width, 0, canvas.width, canvas.height));
lines.push(new Line(0, 0, canvas.width, 0));
lines.push(new Line(0, 0, 0, canvas.height));
lines.push(new Line(0, canvas.height, canvas.width, canvas.height));
//lines.push(new Line(canvas.width*Math.random(), canvas.height*Math.random(), canvas.width*Math.random(), canvas.height*Math.random()))
for(let i = 0;i<5;i++)
obsts.push(new Obstacle(Math.random()*canvas.width, Math.random()*canvas.height, 64, 64));
for(let j = 0;j<obsts.length;j++)
{
  for(let i = 0;i<obsts[j].lines.length;i++)
  {
    lines.push(obsts[j].lines[i]);
  }
}
function update()
{
  player.update();

}
function render()
{
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  player.render(ctx);
  if(click)
  {
    for(let i = 0;i<player.lamp.length;i++)
    {
      let record = Infinity;
      let closest = null;
      for(let line of lines)
      {
        const pt = player.lamp[i].cast(line);
        if(pt)
        {
          const d = Math.hypot(pt.x-player.lamp[i].x, pt.y-player.lamp[i].y);
          if(d<record)
          {
            record = d;
            closest = pt;
          }
        }
      }
      if(closest)
      {
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.moveTo(player.lamp[i].x, player.lamp[i].y);
        ctx.lineTo(closest.x, closest.y);
        if(player.lightPower>32)
        ctx.strokeStyle = '#FFFFFF'+Number.parseInt(player.lightPower/2).toString(16);
        else
        ctx.strokeStyle = '#FFFFFF'+'0'+Number.parseInt(player.lightPower/2).toString(16);
        ctx.stroke();
      }
    }
    for(let line of lines)
    {
      line.render(ctx);
    }
  }
}
let then = Date.now();
let now;
window.onload = function load()
{
  now = Date.now();
  let difference = now - then;
  if(difference>1000/60)
  {
    then = now;
    update();
  }
  render();
  requestAnimationFrame(load);
}
