function makeCBTA(name,x,y) {
  Game.BankAchievement(name)
  Game.Achievements[name].icon = [x,y,'https://file.garden/aRv22xnkRhEaeVoP/BFSspritesheet.png?v=1763442527821']
  Game.Achievements[name].desc = "Bake <b>" + Game.Achievements[name].threshold + " cookies</b> in one ascension."
}
Game.registerMod("BackForSeconds", {
  init:function(){
    
  const customStyle = document.createElement('style')
  customStyle.type = 'text/css'
  customStyle.textContent = `
  .note .icon
  {
    image-rendering: optimizeSpeed;             /* Older versions of FF          */
    image-rendering: -moz-crisp-edges;          /* FF 6.0+                       */
    image-rendering: -webkit-optimize-contrast; /* Safari                        */
    image-rendering: -o-crisp-edges;            /* OS X & Windows Opera (12.02+) */
    image-rendering: pixelated;                 /* Future-browsers                 */
    -ms-interpolation-mode: nearest-neighbor;   /* IE                            */
  }`
  document.head.appendChild(customStyle)

  const customStyle = document.createElement('style')
  customStyle.type = 'text/css'
  customStyle.textContent = `
  .crate
  {
    image-rendering: optimizeSpeed;             /* Older versions of FF          */
    image-rendering: -moz-crisp-edges;          /* FF 6.0+                       */
    image-rendering: -webkit-optimize-contrast; /* Safari                        */
    image-rendering: -o-crisp-edges;            /* OS X & Windows Opera (12.02+) */
    image-rendering: pixelated;                 /* Future-browsers                 */
    -ms-interpolation-mode: nearest-neighbor;   /* IE                            */
  }`
  document.head.appendChild(customStyle)

  makeCBTA("Back for seconds",0,0)
  makeCBTA("Unstoppable force",1,0)
  makeCBTA("Gastronomical unit",2,0)
  makeCBTA("Hole in your pocket",3,0)
  makeCBTA("The holy grail",4,0)
  makeCBTA("Hypercookie",5,0)
  makeCBTA("Don't think, just bake",6,0)
  makeCBTA("More than you can chew",7,0)
  makeCBTA("Go big or go home",8,0)
  makeCBTA("The yield of your greed",9,0)
  makeCBTA("Motes of dust",0,1)
  makeCBTA("Not because it is easy, but because it is tasty",1,1)
  makeCBTA("Accretion disk",2,1)
  makeCBTA("Event horizon",3,1)
  makeCBTA("Make it or bake it",4,1)
  makeCBTA("Dangerously out of balance",5,1)
  makeCBTA("Hard to swallow",6,1)
  makeCBTA("The baker's oven cannot be stopped",7,1)
  makeCBTA("The googologist",8,1)
  makeCBTA("33% infinite",9,1)
  makeCBTA("It doesn't matter if they hate you if they all say your name",0,2)
  makeCBTA("Good, keep baking",1,2)
  makeCBTA("Omnipotent obesity",2,2)
  makeCBTA("The way the cookie crumbles",3,2)
  makeCBTA("Dessert stomach",4,2)
  makeCBTA("Lightning in a bottle",5,2)
  makeCBTA("Better than Linus",6,2)
  makeCBTA("Life, liberty, and pursuit of cookies",7,2)
  makeCBTA("Immovable object",8,2)
  makeCBTA("Call of the void",9,2)
  }
  })
