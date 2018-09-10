function gameLoop(){
  currentTime = (new Date()).getTime();
  dt = (currentTime - lastTime) / 1000;
  globalTimer += dt;
  stateTimer += dt;

  if(delegate !== null && pause == false){
    delegate.update();
    ctx.save();
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, W, H);
    ctx.restore();

    delegate.draw();
    drawPostProcessing();
  }

  lastTime = currentTime;
  reqId = window.requestAnimationFrame(gameLoop);
}
