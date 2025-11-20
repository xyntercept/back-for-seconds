function makeCBTA(name,x,y) {
  Game.BankAchievement(name)
  Game.Achievements[name].icon = [x,y,'https://file.garden/aRv22xnkRhEaeVoP/bfs.png?v=1763635316528']
  BFSachievements.push(Game.Achievements[name])
}

function makeShadow(name,desc,[x,y,sheet]) {
  new Game.Achievement(name,desc,[x,y,sheet])
  Game.Achievements[name].pool = 'shadow'
  BFSshadows.push(Game.Achievements[name])
}

function addPool(achievs,pool) {
  for (var i = 0; i < achievs.length; i++) {
    achievs[i].pool = pool
  }
}

Game.registerMod("BackForSeconds", {
  init:function(){
    
  const customStyle = document.createElement('style')
  customStyle.type = 'text/css'
  customStyle.textContent = `
  .icon
  {
    image-rendering: optimizeSpeed;             /* Older versions of FF          */
    image-rendering: -moz-crisp-edges;          /* FF 6.0+                       */
    image-rendering: -webkit-optimize-contrast; /* Safari                        */
    image-rendering: -o-crisp-edges;            /* OS X & Windows Opera (12.02+) */
    image-rendering: pixelated;                 /* Future-browsers                 */
    -ms-interpolation-mode: nearest-neighbor;   /* IE                            */
  }`
  document.head.appendChild(customStyle)

  const customStyle2 = document.createElement('style')
  customStyle2.type = 'text/css'
  customStyle2.textContent = `
  .crate
  {
    image-rendering: optimizeSpeed;             /* Older versions of FF          */
    image-rendering: -moz-crisp-edges;          /* FF 6.0+                       */
    image-rendering: -webkit-optimize-contrast; /* Safari                        */
    image-rendering: -o-crisp-edges;            /* OS X & Windows Opera (12.02+) */
    image-rendering: pixelated;                 /* Future-browsers                 */
    -ms-interpolation-mode: nearest-neighbor;   /* IE                            */
  }`
  document.head.appendChild(customStyle2)

  BFSachievements = [ ]

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

  eval("Game.UpdateMenu="+Game.UpdateMenu.toString().replace("if (Game.CountsAsAchievementOwned(me.pool)) achievementsTotal++;","if (BFSachievements.includes(me)) me.pool='back for seconds';\nif (Game.CountsAsAchievementOwned(me.pool)) achievementsTotal++;\nif (BFSachievements.includes(me)) me.pool='normal';"))
  eval("Game.UpdateMenu="+Game.UpdateMenu.toString().replace("achievements[pool]+=Game.crate(me,'stats');","achievements[pool]+=Game.crate(me,'stats');\nif (BFSachievements.includes(me)) me.pool='back for seconds';"))
  eval("Game.UpdateMenu="+Game.UpdateMenu.toString().replace("var achievementsStr='';","addPool(BFSachievements,'normal');\nvar achievementsStr='';"))

  BFSshadows = [ ]
    
  makeShadow("Gambler's raving fantasy","Cast Force the Hand of Fate from Gambler's Fever Dream <b>7 times</b> in the span of <b>1 second</b>.",[0,5,'https://file.garden/aRv22xnkRhEaeVoP/bfs.png?v=1763635316528'])
  makeShadow("Refined multitabber","You have <b>1 chance in 1 billion</b> every second of earning this achievement.",[1,5,'https://file.garden/aRv22xnkRhEaeVoP/bfs.png?v=1763635316528'])
  makeShadow("Tolerance","Harvest <b>32 coalescing sugar lumps</b> in the span of <b>1 hour</b>.",[2,5,'https://file.garden/aRv22xnkRhEaeVoP/bfs.png?v=1763635316528'])
  makeShadow("Hawking radiation","Ascend with <b>1 trigintillion cookies</b> baked <b>100 times</b>.",[3,5,'https://file.garden/aRv22xnkRhEaeVoP/bfs.png?v=1763635316528'])
  makeShadow("Industrial sprawl","Obtain a single building special with a duration of <b>40 minutes</b>.",[4,5,'https://file.garden/aRv22xnkRhEaeVoP/bfs.png?v=1763635316528'])
  makeShadow("Sans Undertale","Bake <b>100 trequinquagintillion</b> cookies in one ascension.",[9,5,'https://file.garden/aRv22xnkRhEaeVoP/bfs.png?v=1763635316528'])
    
  LocalizeUpgradesAndAchievs()
  },

  save:function(){
  let str = ""
  for(let i of BFSachievements)str+=i.won
  for(let i of BFSshadows)str+=i.won
  return str;
  },

  load: function(str){
  for(let i in BFSachievements)BFSachievements[i].won=Number(str[i])
  for(let i in BFSshadows)BFSshadows[i].won=Number(str[i])
  }
  })
