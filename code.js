var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","3221caad-ae37-4eec-92a8-56bae4769e66","c4e310e0-8174-4127-a46e-0cbcc94b488b","5e04fa17-794a-4c78-ba81-7de0f32936fe","da21d507-4c71-42a6-9a85-bce02941576e"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"PN8mW8VSEp_Ig5o4.5Gd1tH85JtnH8Cv","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"rVfL3x.W_soOgKcF28VHkclOKJ61qZiH","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"r.yv.ovjTWUmb3dNOpcdUz5RoldFRv5B","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"},"5e04fa17-794a-4c78-ba81-7de0f32936fe":{"name":"ceu","sourceUrl":"assets/api/v1/animation-library/gamelab/OGMmhuYDozWZhjtNHQkjhdvs2Ge_Q0UF/category_backgrounds/city.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"OGMmhuYDozWZhjtNHQkjhdvs2Ge_Q0UF","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/OGMmhuYDozWZhjtNHQkjhdvs2Ge_Q0UF/category_backgrounds/city.png"},"da21d507-4c71-42a6-9a85-bce02941576e":{"name":"aviao","sourceUrl":"assets/api/v1/animation-library/gamelab/4so2OhIxXvwQjaRs2XE9yuUnUGnubZj3/category_vehicles/planefront_02.png","frameSize":{"x":372,"y":218},"frameCount":1,"looping":true,"frameDelay":2,"version":"4so2OhIxXvwQjaRs2XE9yuUnUGnubZj3","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":372,"y":218},"rootRelativePath":"assets/api/v1/animation-library/gamelab/4so2OhIxXvwQjaRs2XE9yuUnUGnubZj3/category_vehicles/planefront_02.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var ceu = createSprite(200,200);
ceu.setAnimation("ceu");
 
var aviao = createSprite(200,345,200,345);
aviao.shapeColor="red"

var enemy1 = createSprite(200,250,10,10)
enemy1.shapeColor="red"

var enemy2 = createSprite(200,150,10,10)
enemy2.shapeColor="red"

var enemy3 = createSprite(200,50,10,10)
enemy3.shapeColor="red"

var net = createSprite(200,5,200,20)
net.shapeColor="red"

var goal =0;
var death = 0

aviao.setAnimation("aviao");
aviao.scale=.2;
enemy1.setAnimation("dream");
enemy1.scale=.1;
enemy2.setAnimation("dream");
enemy2.scale=.1;
enemy3.setAnimation("dream");
enemy3.scale=.1;

enemy1.setVelocity(-10,0);
enemy2.setVelocity(10,0);
enemy3.setVelocity(-10,0);


function draw() {
  
//plano de fundo(b);

createEdgeSprites()




enemy1.bounceOff(edges)
enemy2.bounceOff(edges)
enemy3.bounceOff(edges)

if(keyDown(UP_ARROW)){
  aviao.y=aviao.y-3
}

if(keyDown(DOWN_ARROW)){
  aviao.y=aviao.y+3
}

if(keyDown(LEFT_ARROW)){
  aviao.x=aviao.x-3
}

if(keyDown(RIGHT_ARROW)){
  aviao.x=aviao.x+3
}

if(aviao.isTouching(enemy1)|| aviao.isTouching(enemy2)|| aviao.isTouching(enemy3)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3")
  aviao.x=200
  aviao.y=350
  death = death+1
}
if(aviao.isTouching(net)){
  playSound("assets/category_pop/puzzle_game_bonus_bubble_large_01.mp3");
  aviao.x=200
  aviao.y=345
  goal=goal+1
}
textSize(20)
  fill("blue")
  text("Objetivos:"+goal,320,350);
  

textSize(20)
  fill("blue")
  text("mortes:"+death,20,350);
  
drawSprites()
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
