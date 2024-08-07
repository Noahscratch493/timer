sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    music.play(music.stringPlayable("C5 - - - C5 - - - ", 120), music.PlaybackMode.LoopingInBackground)
    game.splash("Time Up!")
})
sprites.onCreated(SpriteKind.Player, function (sprite) {
    sprite.lifespan = Number2
})
let Number2 = 0
game.splash("Timer App", "Press A to Open")
Number2 = game.askForNumber("How many seconds? (Can be over 60)") * 1000
let Timer = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Player)
forever(function () {
    Timer.sayText(Timer.lifespan / 1000)
})
