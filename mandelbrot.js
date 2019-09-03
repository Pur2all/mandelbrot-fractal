function mandelbrot(imaginaryNumber)
{
  const iters=200;
  const contrast=20;
  var imgNumber=math.Complex(0, 0);

  for(var i=0; i<iters; i++)
  {
    imgNumber=math.add(math.multiply(imgNumber, imgNumber), imaginaryNumber);
    if(imgNumber.abs()>2)
      return "#000";
  }

  return "#fff";
}

function draw(context)
{
  const xmin=ymin=-2;
  const xmax=ymax=2;
  const width=height=1024;

  for(var pixelY=0; pixelY<height; pixelY++)
  {
    var y=pixelY/height * (ymax-ymin) + ymin;
    for(var pixelX=0; pixelX<width; pixelX++)
    {
      var x=pixelX/width * (xmax-xmin) + xmin;
      var z=math.Complex(x, y);

      context.fillStyle=mandelbrot(z);
      context.fillRect(pixelX, pixelY, 1, 1);
    }
  }
}

function setup()
{
  var canvas=document.getElementById("canvas");
  var canvasContext=canvas.getContext("2d");

  canvas.width=1024;
  canvas.height=1024;
  draw(canvasContext);
  console.log("gay")
}
