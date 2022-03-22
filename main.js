let canvas = document.getElementsByTagName('canvas')[0];
canvas.width = 640;
canvas.height = 336;
let ctx = canvas.getContext('2d');
let pointerX = 1, pointerY = 1;
let click;
canvas.addEventListener('mousemove', (e)=>
{
  let scale = canvas.offsetWidth/canvas.width;
  pointerX = e.offsetX/scale;
  pointerY = e.offsetY/scale;
});
canvas.addEventListener('mousedown', ()=>
{
  click = true;
});
canvas.addEventListener('mouseup', ()=>
{
  click = false;
});
canvas.addEventListener('touchstart', ()=>
{
  click = true;
});
canvas.addEventListener('touchend', ()=>
{
  click = false;
});
canvas.addEventListener('touchmove', (e)=>
{
  let scale = canvas.offsetWidth/canvas.width;
  let pointer = e.touches?e.touches[0]:e;
  pointerX =pointer.pageX/scale;
  pointerY = pointer.pageY/scale;
});
let player = new Player(canvas.width/2-8, canvas.height/2-8, 16, 16);
let lines = [];
canvas.addEventListener(('click'),(e)=>
{
  let scale = canvas.offsetWidth/canvas.width;
})
lines.push(new Line(canvas.width, 0, canvas.width, canvas.height));
lines.push(new Line(0, 0, canvas.width, 0));
lines.push(new Line(0, 0, 0, canvas.height));
lines.push(new Line(0, canvas.height, canvas.width, canvas.height));
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
      for(let i = 0;i<player.maxAngle;i++)
      {
        player.ray.lookAt(Math.atan2(pointerY-player.y, pointerX-player.x)+(i-player.maxAngle/2)/180*Math.PI);
        let record = Infinity;
        let closest = null;
        for(let line of lines)
        {
          const pt = player.ray.cast(line);
          if(pt)
          {
            const d = Math.hypot(pt.x-player.ray.x, pt.y-player.ray.y);
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
          ctx.moveTo(player.ray.x, player.ray.y);
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
