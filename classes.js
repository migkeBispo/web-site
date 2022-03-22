class Player{
    xSpeed = 4;
    ySpeed = 4;
    lightPower = 25;
    maxAngle = 70;
    ray;
    constructor(x, y, width, height)
    {
      this.x = x;
      this.y = y;
      this.height = height;
      this.width = width;
      this.ray = new Ray(this.x+width/2, this.y+height/2, 0);
    }
    update()
    {
      this.x+=this.xSpeed;
      this.y+=this.ySpeed;
      this.bounceInWalls();
      this.ray.x = this.x+this.width/2;
      this.ray.y = this.y+this.height/2;
    }
    render(ctx)
    {
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    bounceInWalls()
    {
      if(this.y+16>canvas.height)
      {
        this.ySpeed*=-1;
      }
      else if(this.y< 0)
      {
        this.ySpeed*=-1;
      }
      if(this.x+16>canvas.width)
      {
        this.xSpeed*=-1;
      }
      else if(this.x<0)
      {
        this.xSpeed*=-1;
      }
    }
    bounceInLine(line)
    {

    }
  }
  class Ray{

    dir = {x:0, y:0};
    constructor(x, y, angle)
    {
      this.x = x;
      this.y = y;
      this.dir.x = Math.cos(angle);
      this.dir.y = Math.sin(angle);
    }
    lookAt(angle)
    {
      this.dir.x = Math.cos(angle);
      this.dir.y = Math.sin(angle);
    }
    cast(wall)
    {
      const x1 = wall.a.x;
      const y1 = wall.a.y;
      const x2 = wall.b.x;
      const y2 = wall.b.y;
      const x3 = this.x;
      const y3 = this.y;
      const x4 = this.x+this.dir.x;
      const y4 = this.y+this.dir.y;
      const den = (x1-x2)*(y3-y4)-(y1-y2)*(x3-x4);
      if(den == 0)
      {
        return null;
      }

      const t = ((x1-x3)*(y3-y4)-(y1-y3)*(x3-x4))/den;
      const u = -((x1-x2)*(y1-y3)-(y1-y2)*(x1-x3))/den;
      if(t>0&&t<1&&u>0)
      {
        let pt = {x:0,y:0};
        pt.x = x1+t*(x2-x1);
        pt.y = y1+t*(y2-y1);
        return pt;

      }
      return null
    }
    render(ctx)
    {
      ctx.strokeStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x+Number.parseInt(Math.cos(this.angle)*10), this.y+Number.parseInt(Math.sin(this.angle)*10));
      ctx.closePath();
      ctx.stroke();
    }
  }
  class Line{

    a = {
      x: 0,
      y: 0
    };
    b = {
      x: 0,
      y: 0
    };
    constructor(x1, y1, x2, y2)
    {
      this.a.x = x1;
      this.a.y = y1;
      this.b.x = x2;
      this.b.y = y2;
    }
    render(ctx = canvas.getContext('2d'))
    {
      let freeLight = [];
      let freeLightB = [];
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
        for(let line of lines)
        {
          if(line!=this&&player.ray.cast(line)&&closest.x == player.ray.cast(line).x&&closest.y == player.ray.cast(line).y&&freeLightB.length>0)
          {
            freeLight.push(freeLightB.splice(0, freeLightB.length));
            break;
          }
          else if(player.ray.cast(this)&&closest.x == player.ray.cast(this).x&&closest.y == player.ray.cast(this).y)
          {
            freeLightB.push(player.ray.cast(this));
            break;
          }
        }
      }
      if(freeLightB.length>0)
      {
        freeLight.push(freeLightB.splice(0, freeLightB.length));
      }
      for(let j = 0;j<freeLight.length;j++)
      {
        if(freeLight[j][0]&&freeLight[j][freeLight[j].length-1])
        {
          let distance = Math.hypot((freeLight[j][0].x+freeLight[j][freeLight[j].length-1].x)/2-player.ray.x, (freeLight[j][0].y+freeLight[j][freeLight[j].length-1].y)/2-player.ray.y);
          let power = Math.min(Number.parseInt(player.lightPower*10/2/distance*255), 255);
          if(power>=30)
          ctx.strokeStyle = '#FFFFFF'+power.toString(16).substring(0, 2);
          else
          ctx.strokeStyle = '#000'
          this.drawLine(ctx, freeLight[j][0].x, freeLight[j][0].y, freeLight[j][freeLight[j].length-1].x, freeLight[j][freeLight[j].length-1].y);
        }
      }
      if(freeLight.length==1&&freeLight[0][0]&&freeLight[0][freeLight[0].length-1])
      {
        let distance = Math.hypot((freeLight[0][0].x+freeLight[0][freeLight[0].length-1].x)/2-player.ray.x, (freeLight[0][0].y+freeLight[0][freeLight[0].length-1].y)/2-player.ray.y);
        let power = Math.min(Number.parseInt(player.lightPower*10/2/distance*255), 255);
        ctx.strokeStyle = '#FFFFFF'+power.toString(16).substring(0, 2);
        if(power>=30)
        ctx.strokeStyle = '#FFFFFF'+power.toString(16).substring(0, 2);
        else
        ctx.strokeStyle = '#000'
        this.drawLine(ctx, freeLight[0][0].x, freeLight[0][0].y, freeLight[0][freeLight[0].length-1].x, freeLight[0][freeLight[0].length-1].y);
      }
    }
    drawLine(ctx, x1, y1, x2, y2)
    {
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
  }
  