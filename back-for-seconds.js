function makeCBTA(name,x,y) {
  Game.BankAchievement(name)
  Game.Achievements[name].icon = [x,y,'https://file.garden/aRv22xnkRhEaeVoP/bfs%202']
  Game.Achievements[name].pool = [x,y,'back for seconds']
  BFSachievements.push(Game.Achievements[name])
  AllBFS.push(Game.Achievements[name])
  
}

function makeShadow(name,desc,[x,y,sheet]) {
  new Game.Achievement(name,desc,[x,y,sheet])
  Game.Achievements[name].pool = 'shadow'
  Game.Achievements[name].order = 67001
  BFSshadows.push(name)
  AllBFS.push(Game.Achievements[name])
}

function addBFSPool(achievs,pool) {
  for (let i = 0; i < achievs.length; i++) {
    achievs[i].pool = pool
  }
}

function checkIndustrialSprawl() {
  for (let i in Game.buffs) {
    if (Game.buffs[i].type.name == 'building buff' && Game.buffs[i].maxTime >= 54000) return true
  }
  return false
}

function loadGfrChecker() {
  M = Game.Objects["Wizard tower"].minigame
  GFRloaded = true;
  eval('M.spells["gambler\'s fever dream"].win='+M.spells["gambler\'s fever dream"].win.toString().replace("var out=M.castSpell(spell,{cost:cost,failChanceMax:0.5,passthrough:true});","var out=M.castSpell(spell,{cost:cost,failChanceMax:0.5,passthrough:true});\nif (out) incrementGfthof(spell,Date.now())"))
}  

function incrementGfthof(spell,time) {
  while (time-GfthofTimes[0] > 1000) GfthofTimes.shift(0);
  if (spell.name == 'Force the Hand of Fate') GfthofTimes.push(time)
  if (GfthofTimes.length >= 7) Game.Win("Gambler's raving fantasy")
}

function resetBFSProgress() {
  trigAscends = 0
  gotTrig = 0
  GFRloaded = false
  GfthofTimes = [ ]
  lumpTimes = [ ]
  for (let i in AllBFS) AllBFS[i].won=0
}

var trigAscends = 0
var gotTrig = 0

var GFRloaded = false
var GfthofTimes = [ ]
var lumpTimes = [ ]

var BFSachievements = [ ]
var BFSnames = [ ]
var AllBFS = [ ]
var BFSshadows = [ ]

Game.registerMod("BackForSeconds", {
  init:function(){
    
    const customStyle = document.createElement('style')
    customStyle.type = 'text/css'
    customStyle.textContent = `
    .icon, .crate
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
    makeCBTA("Dangerously out of balance",4,1)
    makeCBTA("Bake it or break it",5,1)
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

    // BFS "semishadows" get their own separate count and crates
    eval("Game.UpdateMenu="+Game.UpdateMenu.toString().replace("var achievementsOwnedOther=0;","var achievementsOwnedBFS = 0;\nvar achievementsOwnedOther=0;"))
    eval("Game.UpdateMenu="+Game.UpdateMenu.toString().replace("else achievementsOwnedOther++;","else if (me.pool == 'back for seconds') achievementsOwnedBFS++;\nelse achievementsOwnedOther++;"))
    eval("Game.UpdateMenu="+Game.UpdateMenu.toString().replace("+(achievementsOwnedOther>0?","+(achievementsOwnedBFS>0?('<span style=\"font-weight:bold;font-size:10px;color:#c94;\"> (+'+achievementsOwnedBFS+')</span>'):'')+(achievementsOwnedOther>0?"))

    // achievements display in the right place but don't count to milk or achievement total
    eval("Game.UpdateMenu="+Game.UpdateMenu.toString().replace("if (Game.CountsAsAchievementOwned(me.pool)) achievementsTotal++;","if (me.icon[2]=='https://file.garden/aRv22xnkRhEaeVoP/bfs%202' && !BFSshadows.includes(me.name)) me.pool='back for seconds';\nif (Game.CountsAsAchievementOwned(me.pool)) achievementsTotal++;\nif (me.icon[2]=='https://file.garden/aRv22xnkRhEaeVoP/bfs%202' && !BFSshadows.includes(me.name)) me.pool='normal';"))
    eval("Game.UpdateMenu="+Game.UpdateMenu.toString().replace("if (Game.CountsAsAchievementOwned(me.pool)) achievementsOwned++;","if (me.icon[2]=='https://file.garden/aRv22xnkRhEaeVoP/bfs%202' && !BFSshadows.includes(me.name)) me.pool='back for seconds';\nif (Game.CountsAsAchievementOwned(me.pool)) achievementsOwned++;\n"))
    eval("Game.UpdateMenu="+Game.UpdateMenu.toString().replace("else achievementsOwnedOther++;","else achievementsOwnedOther++;\n if (me.icon[2]=='https://file.garden/aRv22xnkRhEaeVoP/bfs%202' && !BFSshadows.includes(me.name)) me.pool='normal';"))
    
    eval("Game.UpdateMenu="+Game.UpdateMenu.toString().replace("if (Game.CountsAsAchievementOwned(it.pool)) Game.AchievementsOwned++;","if (Game.CountsAsAchievementOwned(it.pool) && !(me.icon[2]=='https://file.garden/aRv22xnkRhEaeVoP/bfs%202' && !BFSshadows.includes(me.name))) Game.AchievementsOwned++;"))
    eval("Game.UpdateMenu="+Game.UpdateMenu.toString().replace("if (Game.CountsAsAchievementOwned(Game.Achievements[what].pool)) Game.AchievementsOwned--;","if (Game.CountsAsAchievementOwned(Game.Achievements[what].pool) && !(me.icon[2]=='https://file.garden/aRv22xnkRhEaeVoP/bfs%202' && !BFSshadows.includes(me.name))) Game.AchievementsOwned--;"))
    
    eval("Game.UpdateMenu="+Game.UpdateMenu.toString().replace("achievements[pool]+=Game.crate(me,'stats');","achievements[pool]+=Game.crate(me,'stats');\nif (me.icon[2]=='https://file.garden/aRv22xnkRhEaeVoP/bfs%202' && !BFSshadows.includes(me.name)) me.pool='back for seconds';"))
    eval("Game.UpdateMenu="+Game.UpdateMenu.toString().replace("var achievementsStr='';","addBFSPool(BFSachievements,'back for seconds');\nvar achievementsStr='';"))
    
    makeShadow("Gambler's raving fantasy","Cast Force the Hand of Fate from Gambler's Fever Dream <b>7 times</b> in the span of <b>1 second</b>. <q>Finnlesser see, finnlesser do.</q>",[0,5,'https://file.garden/aRv22xnkRhEaeVoP/bfs%202'])
    makeShadow("Refined multitabber","You have <b>1 chance in 1 billion</b> every second of earning this achievement. <q>Does this count as a hardware advantage?</q>",[1,5,'https://file.garden/aRv22xnkRhEaeVoP/bfs%202'])
    makeShadow("Tolerance","Harvest <b>32 coalescing sugar lumps</b> in the span of <b>1 hour</b>. <q>Man, you really gotta quit this sugar stuff. It's ruining your life. I mean, this is the third time this week you've blown all your magic just to buy some low-quality sugar off the streets. This isn't sustainable, and I know it's easy for me to say, but you gotta do something before it gets worse. It's just been real worrying to see you like this, and your family'd probably agree.<br><br>...<br><br>Ah, what the hell, one more won't hurt. Here you go.</q>",[2,5,'https://file.garden/aRv22xnkRhEaeVoP/bfs%202'])
    makeShadow("Hawking radiation","Ascend with <b>1 trigintillion cookies</b> baked <b>100 times</b>. <q>Anything and everything, big or small, will eventually dissolve with the passage of time. Especially your sanity.</q>",[3,5,'https://file.garden/aRv22xnkRhEaeVoP/bfs%202'])
    makeShadow("Industrial sprawl","Obtain a single building special with a duration of <b>30 minutes</b>. <q>Who the hell starts a combo like that? I just sat down!</q>",[4,5,'https://file.garden/aRv22xnkRhEaeVoP/bfs%202'])
    makeShadow("Sans Undertale","Bake <b>100 trequinquagintillion</b> cookies in one ascension. <q>* my brother has a very special combo.</q>",[9,5,'https://file.garden/aRv22xnkRhEaeVoP/bfs%202'])
    
    // sand under table
    Game.BankAchievements.push(Game.Achievements["Sans Undertale"])
    Game.Achievements["Sans Undertale"].threshold = 10**164
    
    LocalizeUpgradesAndAchievs()
    Game.Achievements["Back for seconds"].ddesc+=" <q>Oh, so <i>that's</i> why they call it that.</q>"
    Game.Achievements["Event horizon"].ddesc+=" <q>I'm sure all those prisms you bought are real damn useful now...</q>"
    Game.Achievements["It doesn't matter if they hate you if they all say your name"].ddesc+=" <q>We're all part of this old cookie game...</q>"
    Game.Achievements["Better than Linus"].ddesc+=" <q>If you are Linus, please tell XYntercept that this achievement is outdated. Apologies for any inconvenience.</q>"

    // industrial sprawl
    Game.registerHook('logic',function(){if (checkIndustrialSprawl()) Game.Win("Industrial sprawl")})

    // refined multitabber
    eval("Game.Logic="+Game.Logic.toString().replace("if (Game.T%(Game.fps)==0 && Math.random()<1/1000000) Game.Win('Just plain lucky');","if (Game.T%(Game.fps)==0)\nvar JPLnum = Math.random()\nif (JPLnum<1/1000000) Game.Win('Just plain lucky');\nif (JPLnum<1/1000000000) Game.Win('Refined multitabber');"))
  
    // hawking radiation
    Game.registerHook('check',function(){if (Game.cookiesEarned >= 10**93) gotTrig = 1})
    Game.registerHook('reincarnate',function(){if (gotTrig==1) {trigAscends++; gotTrig = 0; console.log("after this ascend: " + trigAscends)}})
    Game.registerHook('reincarnate',function(){if (trigAscends >= 100) Game.Win("Hawking radiation")})
    Game.registerHook('reset',function(wipe){if (wipe) {trigAscends = 0; gotTrig = 0}})

    // gambler's raving fantasy
    Game.registerHook('logic',function(){if (Game.Objects["Wizard tower"].minigameLoaded && !GFRloaded) loadGfrChecker()})
    
    // tolerance
    eval("Game.gainLumps="+Game.gainLumps.toString().replace("Game.lumpsTotal+=total;","Game.lumpsTotal+=total\nfor (let i = 0; i < total; i++) lumpTimes.push(Date.now());"))
    eval("Game.loadLumps="+Game.loadLumps.toString().replace("Game.computeLumpType();","Game.computeLumpType();\nif (Date.now()-lumpTimes[lumpTimes.length-1] > 3600000) lumpTimes = [ ]"))
    Game.registerHook('check',function(){while (Date.now()-lumpTimes[0] > 3600000) lumpTimes.shift()})
    Game.registerHook('check',function(){if (lumpTimes.length >= 32) Game.Win("Tolerance")})
    Game.registerHook('reset',function(wipe){if (wipe) lumpTimes = [ ]})
  },

  save:function(){
    let str = ""
    for (let i of AllBFS) str+=i.won
    str+="|"+trigAscends+"|"
    str+=gotTrig
    for(let i of lumpTimes) str+="|"+i
    console.trace(str)
    return str;
  },

  load: function(str){
    for (let i in AllBFS) AllBFS[i].won=Number(str[i])
    trigAscends = parseInt(str.split("|")[1])
    gotTrig = parseInt(str.split("|")[2])
    lumpTimes = [ ]
    for (let i in str.split("|").slice(3)) {lumpTimes.push(str.split("|").slice(3)[i]); console.log(str.split("|").slice(3)[i])}
  }
  })
