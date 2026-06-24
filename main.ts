namespace SpriteKind {
    export const logo = SpriteKind.create()
    export const Cursor = SpriteKind.create()
}
function selecttheimage () {
    selectedplayerimage = list[currentvalue]
    mySprite = sprites.create(selectedplayerimage, SpriteKind.Player)
    controller.moveSprite(mySprite, 100, 100)
    selected = true
    if (currentvalue == 0) {
        mySprite.sayText("HARI")
        movingleft = assets.animation`myAnim159`
        movingright = assets.animation`myAnim159`
        notmoving = assets.animation`myAnim1`
        movingup = assets.animation`myAnim3`
        movingdown = assets.animation`myAnim5`
    } else if (currentvalue == 1) {
        mySprite.sayText("DON")
        movingleft = assets.animation`myAnim10`
        movingright = assets.animation`myAnim10`
        notmoving = assets.animation`myAnim12`
        movingup = assets.animation`myAnim14`
        movingdown = assets.animation`myAnim16`
    } else if (currentvalue == 2) {
        mySprite.sayText("HARMONY")
        movingleft = assets.animation`myAnim21`
        movingright = assets.animation`myAnim21`
        notmoving = assets.animation`myAnim23`
        movingup = assets.animation`myAnim25`
        movingdown = assets.animation`myAnim27`
    } else if (currentvalue == 3) {
        mySprite.sayText("APPEAR")
        movingleft = assets.animation`myAnim34`
        movingright = assets.animation`myAnim34`
        notmoving = assets.animation`myAnim41`
        movingup = assets.animation`myAnim43`
        movingdown = assets.animation`myAnim45`
    } else if (currentvalue == 4) {
        mySprite.sayText("NIVEK")
        movingleft = assets.animation`myAnim123`
        movingright = assets.animation`myAnim123`
        notmoving = assets.animation`myAnim121`
        movingup = assets.animation`myAnim122`
        movingdown = assets.animation`myAnim120`
    } else if (currentvalue == 5) {
        mySprite.sayText("RADAR")
        movingleft = assets.animation`myAnim6`
        movingright = assets.animation`myAnim6`
        notmoving = assets.animation`myAnim0`
        movingup = assets.animation`myAnim2`
        movingdown = assets.animation`myAnim4`
    } else if (currentvalue == 6) {
        mySprite.sayText("RAIJIN")
        movingleft = assets.animation`myAnim13`
        movingright = assets.animation`myAnim13`
        notmoving = assets.animation`myAnim15`
        movingup = assets.animation`myAnim17`
        movingdown = assets.animation`myAnim19`
    } else if (currentvalue == 7) {
        mySprite.sayText("HALEY")
        movingleft = assets.animation`myAnim115`
        movingright = assets.animation`myAnim115`
        notmoving = assets.animation`myAnim117`
        movingup = assets.animation`myAnim118`
        movingdown = assets.animation`myAnim116`
    } else if (currentvalue == 8) {
        mySprite.sayText("SIR LUKINGTON")
        movingleft = assets.animation`myAnim107`
        movingright = assets.animation`myAnim107`
        notmoving = assets.animation`myAnim103`
        movingup = assets.animation`myAnim104`
        movingdown = assets.animation`myAnim105`
    } else if (currentvalue == 9) {
        mySprite.sayText("SKITTLES")
        movingleft = assets.animation`myAnim114`
        movingright = assets.animation`myAnim114`
        notmoving = assets.animation`myAnim110`
        movingup = assets.animation`myAnim111`
        movingdown = assets.animation`myAnim112`
    } else if (currentvalue == 10) {
        mySprite.sayText("TAJINE")
        movingleft = assets.animation`myAnim138`
        movingright = assets.animation`myAnim138`
        notmoving = assets.animation`myAnim139`
        movingup = assets.animation`myAnim140`
        movingdown = assets.animation`myAnim141`
    } else if (currentvalue == 11) {
        mySprite.sayText("DOBBER")
        movingleft = assets.animation`myAnim132`
        movingright = assets.animation`myAnim132`
        notmoving = assets.animation`myAnim137`
        movingup = assets.animation`myAnim133`
        movingdown = assets.animation`myAnim134`
    } else if (currentvalue == 12) {
        mySprite.sayText("SEVERED SHANE")
        movingleft = assets.animation`myAnim42`
        movingright = assets.animation`myAnim42`
        notmoving = assets.animation`myAnim51`
        movingup = assets.animation`myAnim44`
        movingdown = assets.animation`myAnim46`
    } else if (currentvalue == 13) {
        mySprite.sayText("IZANAMI")
        movingleft = assets.animation`myAnim53`
        movingright = assets.animation`myAnim53`
        notmoving = assets.animation`myAnim57`
        movingup = assets.animation`myAnim71`
        movingdown = assets.animation`myAnim75`
    } else if (currentvalue == 14) {
        mySprite.sayText("AIM")
        movingleft = assets.animation`myAnim26`
        movingright = assets.animation`myAnim26`
        notmoving = assets.animation`myAnim28`
        movingup = assets.animation`myAnim30`
        movingdown = assets.animation`myAnim32`
    } else if (currentvalue == 15) {
        mySprite.sayText("JACK SMITH")
        movingleft = assets.animation`myAnim36`
        movingright = assets.animation`myAnim36`
        notmoving = assets.animation`myAnim37`
        movingup = assets.animation`myAnim38`
        movingdown = assets.animation`myAnim39`
    } else if (currentvalue == 16) {
        mySprite.sayText("MASTER CHEESFU")
        movingleft = assets.animation`myAnim131`
        movingright = assets.animation`myAnim131`
        notmoving = assets.animation`myAnim127`
        movingup = assets.animation`myAnim128`
        movingdown = assets.animation`myAnim129`
    } else if (currentvalue == 17) {
        mySprite.sayText("OSCAT")
        movingleft = assets.animation`myAnim146`
        movingright = assets.animation`myAnim146`
        notmoving = assets.animation`myAnim147`
        movingup = assets.animation`myAnim148`
        movingdown = assets.animation`myAnim149`
    } else if (currentvalue == 18) {
        mySprite.sayText("CHEESE")
        movingleft = assets.animation`myAnim202`
        movingright = assets.animation`myAnim202`
        notmoving = assets.animation`myAnim61`
        movingup = assets.animation`myAnim59`
        movingdown = assets.animation`myAnim59`
    } else if (currentvalue == 19) {
        mySprite.sayText("BROTHER CHEESE")
        movingleft = assets.animation`myAnim207`
        movingright = assets.animation`myAnim207`
        notmoving = assets.animation`myAnim209`
        movingup = assets.animation`myAnim208`
        movingdown = assets.animation`myAnim208`
    } else if (currentvalue == 20) {
        mySprite.sayText("ANGRY FLAT CHEESE")
        movingleft = assets.animation`myAnim204`
        movingright = assets.animation`myAnim204`
        notmoving = assets.animation`myAnim206`
        movingup = assets.animation`myAnim205`
        movingdown = assets.animation`myAnim212`
    } else if (currentvalue == 21) {
        mySprite.sayText("SPEEDRAM YOW")
        movingleft = assets.animation`myAnim74`
        movingright = assets.animation`myAnim74`
        notmoving = assets.animation`myAnim88`
        movingup = assets.animation`myAnim58`
        movingdown = assets.animation`myAnim78`
    } else if (currentvalue == 22) {
        mySprite.sayText("MR. MORTY")
        movingleft = assets.animation`myAnim157`
        movingright = assets.animation`myAnim157`
        notmoving = assets.animation`myAnim47`
        movingup = assets.animation`myAnim154`
        movingdown = assets.animation`myAnim158`
    } else if (currentvalue == 23) {
        mySprite.sayText("TEST 5P33DR4M")
        movingleft = assets.animation`myAnim67`
        movingright = assets.animation`myAnim67`
        notmoving = assets.animation`myAnim35`
        movingup = assets.animation`myAnim66`
        movingdown = assets.animation`myAnim68`
    } else if (currentvalue == 24) {
        mySprite.sayText("SANDY POW")
        movingleft = assets.animation`myAnim69`
        movingright = assets.animation`myAnim69`
        notmoving = assets.animation`myAnim106`
        movingup = assets.animation`myAnim69`
        movingdown = assets.animation`myAnim69`
    } else if (currentvalue == 25) {
        mySprite.sayText("SPEEDRAM MEOW")
        movingleft = assets.animation`myAnim70`
        movingright = assets.animation`myAnim70`
        notmoving = assets.animation`myAnim73`
        movingup = assets.animation`myAnim155`
        movingdown = assets.animation`myAnim156`
    } else if (currentvalue == 26) {
        mySprite.sayText("MAHŌ")
        movingleft = assets.animation`myAnim7`
        movingright = assets.animation`myAnim7`
        notmoving = assets.animation`myAnim22`
        movingup = assets.animation`myAnim18`
        movingdown = assets.animation`myAnim18`
    } else if (currentvalue == 27) {
        mySprite.sayText("CHŌ")
        movingleft = assets.animation`myAnim193`
        movingright = assets.animation`myAnim193`
        notmoving = assets.animation`myAnim195`
        movingup = assets.animation`myAnim194`
        movingdown = assets.animation`myAnim194`
    } else if (currentvalue == 28) {
        mySprite.sayText("KUROI RAIJIN")
        movingleft = assets.animation`myAnim95`
        movingright = assets.animation`myAnim95`
        notmoving = assets.animation`myAnim97`
        movingup = assets.animation`myAnim100`
        movingdown = assets.animation`myAnim100`
    } else if (currentvalue == 29) {
        mySprite.sayText("SURVIVOR")
        movingleft = assets.animation`myAnim65`
        movingright = assets.animation`myAnim65`
        notmoving = assets.animation`myAnim91`
        movingup = assets.animation`myAnim94`
        movingdown = assets.animation`myAnim94`
    } else if (currentvalue == 30) {
        mySprite.sayText("ROCK AAYANSH")
        movingleft = assets.animation`myAnim60`
        movingright = assets.animation`myAnim60`
        notmoving = assets.animation`myAnim63`
        movingup = assets.animation`myAnim62`
        movingdown = assets.animation`myAnim62`
    } else if (currentvalue == 31) {
        mySprite.sayText("THE JOKER")
        movingleft = assets.animation`myAnim64`
        movingright = assets.animation`myAnim64`
        notmoving = assets.animation`myAnim211`
        movingup = assets.animation`myAnim210`
        movingdown = assets.animation`myAnim210`
    } else if (currentvalue == 32) {
        mySprite.sayText("ROMAN RODENT")
        movingleft = assets.animation`myAnim214`
        movingright = assets.animation`myAnim214`
        notmoving = assets.animation`myAnim224`
        movingup = assets.animation`myAnim223`
        movingdown = assets.animation`myAnim223`
    } else if (currentvalue == 33) {
        mySprite.sayText("TUFF LUKE")
        movingleft = assets.animation`myAnim215`
        movingright = assets.animation`myAnim215`
        notmoving = assets.animation`myAnim218`
        movingup = assets.animation`myAnim217`
        movingdown = assets.animation`myAnim217`
    } else if (currentvalue == 34) {
        mySprite.sayText("LAMP DUDE")
        movingleft = assets.animation`myAnim178`
        movingright = assets.animation`myAnim178`
        notmoving = assets.animation`myAnim190`
        movingup = assets.animation`myAnim183`
        movingdown = assets.animation`myAnim183`
    } else if (currentvalue == 35) {
        mySprite.sayText("HERMIT MAN")
        movingleft = assets.animation`myAnim181`
        movingright = assets.animation`myAnim181`
        notmoving = assets.animation`myAnim191`
        movingup = assets.animation`myAnim186`
        movingdown = assets.animation`myAnim186`
    } else if (currentvalue == 36) {
        mySprite.sayText("VITAL GREG")
        movingleft = assets.animation`myAnim185`
        movingright = assets.animation`myAnim185`
        notmoving = assets.animation`myAnim180`
        movingup = assets.animation`myAnim189`
        movingdown = assets.animation`myAnim189`
    } else if (currentvalue == 37) {
        mySprite.sayText("DANDRUFF MAN")
        movingleft = assets.animation`myAnim182`
        movingright = assets.animation`myAnim182`
        notmoving = assets.animation`myAnim192`
        movingup = assets.animation`myAnim187`
        movingdown = assets.animation`myAnim187`
    } else if (currentvalue == 38) {
        mySprite.sayText("IQ MAN")
        movingleft = assets.animation`myAnim184`
        movingright = assets.animation`myAnim184`
        notmoving = assets.animation`myAnim179`
        movingup = assets.animation`myAnim188`
        movingdown = assets.animation`myAnim188`
    } else if (currentvalue == 39) {
        mySprite.sayText("DETECTIVE KROSHIV")
        movingleft = assets.animation`myAnim199`
        movingright = assets.animation`myAnim199`
        notmoving = assets.animation`myAnim203`
        movingup = assets.animation`myAnim200`
        movingdown = assets.animation`myAnim200`
    } else if (currentvalue == 40) {
        mySprite.sayText("DETECTIVE RODENT")
        movingleft = assets.animation`myAnim197`
        movingright = assets.animation`myAnim197`
        notmoving = assets.animation`myAnim201`
        movingup = assets.animation`myAnim198`
        movingdown = assets.animation`myAnim198`
    } else if (currentvalue == 41) {
        mySprite.sayText("MR. BEE")
        movingleft = assets.animation`myAnim113`
        movingright = assets.animation`myAnim113`
        notmoving = assets.animation`myAnim113`
        movingup = assets.animation`myAnim113`
        movingdown = assets.animation`myAnim113`
    } else if (currentvalue == 42) {
        mySprite.sayText("JAQUAIL")
        movingleft = assets.animation`myAnim227`
        movingright = assets.animation`myAnim227`
        notmoving = assets.animation`myAnim226`
        movingup = assets.animation`myAnim230`
        movingdown = assets.animation`myAnim231`
    } else if (currentvalue == 43) {
        mySprite.sayText("DRECK")
        movingleft = assets.animation`myAnim136`
        movingright = assets.animation`myAnim136`
        notmoving = assets.animation`myAnim144`
        movingup = assets.animation`myAnim130`
        movingdown = assets.animation`myAnim`
    } else if (currentvalue == 44) {
        mySprite.sayText("BOBBY")
        movingleft = assets.animation`myAnim168`
        movingright = assets.animation`myAnim168`
        notmoving = assets.animation`myAnim169`
        movingup = assets.animation`myAnim145`
        movingdown = assets.animation`myAnim167`
    } else if (currentvalue == 45) {
        mySprite.sayText("ATTABOT")
        movingleft = [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `]
        movingright = [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `]
        notmoving = [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `]
        movingup = [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `]
        movingdown = [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `]
    } else if (currentvalue == 46) {
        mySprite.sayText("PACK-MAN")
        movingleft = assets.animation`myAnim216`
        movingright = assets.animation`myAnim216`
        notmoving = assets.animation`myAnim220`
        movingup = assets.animation`myAnim222`
        movingdown = assets.animation`myAnim222`
    } else if (currentvalue == 47) {
        mySprite.sayText("STICKMAN")
        movingleft = assets.animation`myAnim84`
        movingright = assets.animation`myAnim84`
        notmoving = assets.animation`myAnim83`
        movingup = assets.animation`myAnim79`
        movingdown = assets.animation`myAnim82`
    } else if (currentvalue == 48) {
        mySprite.sayText("GODZILLA")
        movingleft = assets.animation`myAnim172`
        movingright = assets.animation`myAnim172`
        notmoving = assets.animation`myAnim174`
        movingup = assets.animation`myAnim173`
        movingdown = assets.animation`myAnim173`
    } else if (currentvalue == 49) {
        mySprite.sayText("KONG")
        movingleft = assets.animation`myAnim162`
        notmoving = assets.animation`myAnim163`
        movingup = assets.animation`myAnim152`
        movingdown = assets.animation`myAnim152`
    }
    characterAnimations.loopFrames(
    mySprite,
    movingleft,
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    mySprite,
    movingleft,
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    mySprite,
    notmoving,
    500,
    characterAnimations.rule(Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    mySprite,
    movingup,
    500,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    mySprite,
    movingdown,
    500,
    characterAnimations.rule(Predicate.MovingDown)
    )
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    selecttheimage()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    currentvalue += -1
    if (currentvalue < 0) {
        currentvalue = 50
    }
    mySprite5.setImage(list[currentvalue])
    isturnedright = false
})
controller.player3.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    currentvalue3 += 1
    if (currentvalue3 > 50) {
        currentvalue3 = 0
    }
    mySprite7.setImage(list[currentvalue3])
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    currentvalue += 1
    if (currentvalue > 50) {
        currentvalue = 0
    }
    mySprite5.setImage(list[currentvalue])
    isturnedright = true
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    currentvalue2 += 1
    if (currentvalue2 > 50) {
        currentvalue2 = 0
    }
    mySprite6.setImage(list[currentvalue2])
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    currentvalue2 += -1
    if (currentvalue2 < 0) {
        currentvalue2 = 50
    }
    mySprite6.setImage(list[currentvalue2])
})
controller.player4.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    currentvalue4 += -1
    if (currentvalue4 < 0) {
        currentvalue4 = 50
    }
    mySprite8.setImage(list[currentvalue4])
})
controller.player4.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    currentvalue4 += 1
    if (currentvalue4 > 50) {
        currentvalue4 = 0
    }
    mySprite8.setImage(list[currentvalue4])
})
controller.player3.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    currentvalue3 += -1
    if (currentvalue3 < 0) {
        currentvalue3 = 50
    }
    mySprite7.setImage(list[currentvalue3])
})
let movingdown: Image[] = []
let movingup: Image[] = []
let notmoving: Image[] = []
let movingright: Image[] = []
let movingleft: Image[] = []
let selected = false
let mySprite: Sprite = null
let selectedplayerimage: Image = null
let currentvalue4 = 0
let mySprite8: Sprite = null
let currentvalue3 = 0
let mySprite7: Sprite = null
let currentvalue2 = 0
let mySprite6: Sprite = null
let currentvalue = 0
let mySprite5: Sprite = null
let list: Image[] = []
let isturnedright = false
isturnedright = false
mp.setPlayerIndicatorsVisible(true)
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 320 // Doubles width
    export const ARCADE_SCREEN_HEIGHT = 240 // Doubles height
}
Zoom.SetZoomFilter(1, Mode.Center)
let radlogo = sprites.create(img`
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff1111111fffffffffffffffffffffffffffffffffffffffffffffffffffff111111fffffff1ffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff1111111111ffffffffffffffffffffffffffffffffffffffffffffffff1111111fffffff11ffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff111f11111111ffffffffffffffffffffffffffffffffffffffffffff1111111fffffffff11ffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff11ffff11111111ffffffffffffffffffffffffffffffffffffffff1111111fffffffffff111111ffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff11ffffff111111111fffffffffffffffffffffffffffffffffff1111111fffffffffffff1111111fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff11111111fffffffffffffffffffffffffffffff1111111fff11ffffffffffff11111fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111ffffffffffffffffffffffffffff111111f111111111111ffffff11111fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111ffffffffffffffffffffffff111111111111111111111fffff11111fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111ffffffffffffffffffff111111111111111111111111ffff1fffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111fffffffffffffffff111111111111111111111111111fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111ffffffffffff1111111f111111111ffff11111111fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffff11fff111111111111111111111f1111111ffffffff1111111ff11111111ffffffff1111111ff11ffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffff11ff11111111fffffff1111111fff1111111ffff1111111fff1111111ff1111ffff1111111ff11ffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffff11f1111111fffffffffff111111ffff11111111111111ffff111111fff111111ffff111111ff11ffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffff11f111111ffff111fffff111111ffffff11111111111fffff111111ff1111111ffff111111ff11ffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff111ffffff11111ffff11111ffff111111ffffffff1111111ffffff111111fff1111111ffff111111fffffff111ffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff111fff1ff1111ffff111111ffff111111fffffffff111111ffffff111111fff111111fffff111111ff11fff111ffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff111fffffffffffff111111ffff111111ffffffff1111111111fffff111ffff111111fffff1111111fffffff111ffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff111ffffffffffff111111fff11111111fffffff1111111111111ffffffffff111111fffff1111111fffffff111ffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff111fff11fffffff111111f1111111111fffffff11111111111111fffffffff1111111ffff1111111ffff11fff111fffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff111fff11ffffff11111111111111111fffffff1111111111111111ffffffff111111fffff1111111ffff11fff111fffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff111fff11fffff1111111111111111fffffffff1111111111111111fffffff1111111ffff11111111ffff11fff111fffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff111ffffffffff111111111111111fffffffff111111111111111111ffffff1111111fff11111111ffffffffff111fffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff111ffffffffff111111111111ffffffffffff1111111111111111111fffff111111fff11111111fffffffffff111fffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff111fffffffff1111111111ffffffffffffff11111111111111111111fffff111111ff111111111fffffffffff111fffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff111ffffffff111111111111fffffffffffff111111111111111111111fff111111ff111111111ffffffffffff111fffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff111ffffffff111111ff11111ffffffff111ff111111111111111111111fff1111111111111111ffffffffffffff111ffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff111fffffff1111111ff111111fffff11111f11111111111111111111111ff11111111111111ffffffffffffffff111ffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff111fffff11111111fff1111111ff1111111f1111111111f111111111111f11111111111111ffffffffff11fffff111ffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff111fffff11111111ffff11111111111111111111111111ff11111111111f1111111111111fffffffffff11fffff111ffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff111fff11ff11111ffffff111111111111f11111111111ffff1111111111111111111111fffffffffffffff11fff111ffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff111fff11ff1111ffffffff1111111111ff11111111111ffff1111111111111111111ffffffffffffffffff11fff111ffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff1111fff11ffffffffffffffff11111ffff11111111111ffffff11111111111111ffffffffffffffffffffff11fff1111fffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff1111ffffffffffffffffffffffffffffff11111111111ffffff111111111111fffffffffffffffffffffffff1ffff111fffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffff11111111111ffffffff11111111111ffffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff111ffffffffffffffffffffffffffffff11111111111ffffffff111111111111fffffffffffffffffffffffff1fff111fffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff111fff11ffffffffffffffffffffffff11111111111ffffffffff11111111111fffffffffffffffffffffffffffff111fffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff111ff111fffffffffffffffffffffff111111111111ffffffffff111111111111fffffffffffffffffffffff11fff111fffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff111fff11fffffffffffffffffffffff11111111111ffffffffffff111111111111ffffffffffffffffffffff11fff111fffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff1111fff11ffffffffffffffffffffff11111111111fffffffffffff111111111111ffffffffffffffffffffff11fff1111ffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff1111fff11fffffffffffffffffffff111111111111ffffffffffffff111111111111fffffffffffffffffff1111ffff111ffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff111ffff11fffffffffffffffffffff111111111111111111111111111111111111111ffffffffffffffffff1111ffff111ffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff111ffffffffffffffffffffffffff1111111111111111111111111111111111111111ffffffffffffffffffffffffff111ffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff111fffff11ffffffffffffffffff111111111111111111111111111111111111111111fffffffffffffffffffffffff111ffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff111fffff11ffffffffffffffffff111111111111111111111111111111111111111111ffffffffffffffffff11fffff111ffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff111fffff11fffffffffffffffff11111111111111111111111111111111111111111111fffffffffffffffff11fffff111ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff1111fffff11fffffffffffffffff111111111111111111111111111111111111111111111ffffffffffffffff11fffff1111fffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff1111fff1111ffffffffffffffff1111111111111111111111111111111111111111111111ffffffffffffffff1111fff1111fffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff1111fff1111ffffffffffffffff11111111111111111111111111111111111111111111111fffffffffffffff1111fff1111fffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff111ffff11fffffffffffffffff1111111111111ffffffffff11fffffffffff111111111111ffffffffffffffff111ffff111fffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff111ff11fffffffffffffffffff111111111111fffffffffffffffffffffffff111111111111ffffffffffffffffff11ff111fffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff111ff11ffffffffffffffffff1111111111111fffffffffffffffffffffffff111111111111ffffffffffffffffff11ff111fffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff111fffffffff11fffffffffff111111111111ffffffffffffffffffffffffff1111111111111ffffffffff11fffffffff111fffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff111ffffff11111fffffffffff111111111111fffffffffffffffffffffffffff111111111111ffffffffff11111ffffff1111ffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffff1111ffffff11111111ffffffff11111111111ffffffffffffffffffffffffffff111111111111fffffffff111111ffffff1111ffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffff1111ffffff11111111111fffff11111111111fffffffffffffffffffffffffffff1111111111111fffff11111111ffffff1111ffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffff1111ffffff111111111111111f1111111111ffffffffffffffffffffffffffffff1111111111111f111111111111ffffff1111ffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffff11111111ff11f1111111111111111111111fffffffffffffffffffffffffffffffffff1111111111111111111f11ff1111f111ffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffff111f111111111111111111111111111111fffffffffffffffffffffffffffffffffffff111111111111111111111111111f111ffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffff111f1111111111111111111111111111111fffffffffffffffffffffffffffffffffff1111111111111111111111111111f111ffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffff111fff1111111111111111111111111111111111ffffffffffffffffffffffffff111111111111111111111111111111fff111ffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffff1111ff111111111ffff111111111111111111111111fffffffffffffffffffff11111111111111111111111fff11111111ff111ffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffff1111fff111f1fffffffffffffffff11fff1111111111111fffffffffffff1111111111111111f1fffffffffffff1f1111fff1111fffffffffffffffffffffffffffff
    ffffffffffffffffffffffffff1111f11111111111111111111111111111111111111111111111fff11111111111111111111111111111111111111111111f1111fffffffffffffffffffffffffffff
    ffffffffffffffffffffffffff1111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111fffffffffffffffffffffffffffff
    ffffffffffffffffffffffffff111ffffffffffffffffffffff111111111111111111111111111111111111111111111111111111111ffffffffffffffffff1111fffffffffffffffffffffffffffff
    ffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffff
    ffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffff
    ffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffffffffffffffffffffffffff
    fffffffffffffffffffffffffff111111111111111111fffffffffffffffffffffffffffff11111111111ffffffffffffffffffffffffffff11111111111111111fffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffff11ffff11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111f11ff111ff111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111f111f111f11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111f1111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111f11111111111ff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111f11111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111f11111111111ff111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111f111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111f11f1111f11111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111f11ff111f1111111f111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffd1ffffffffffff11fff11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `, SpriteKind.logo)
pause(2000)
sprites.destroy(radlogo)
music.play(music.createSong(hex`006e000408040504001c00100500640000041e000004000000000000000000000000000a0400040c0020002800011928002c00011906001c00010a006400f401640000040000000000000000000000000000000002180060006400012464006800012468006c0001246c007000012407001c00020a006400f4016400000400000000000000000000000000000000030c0000000800012a08001000011d08001c000e050046006603320000040a002d0000006400140001320002010002180040004400012444004800012448004c00011d4c005000011d09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800c0000000010001040400050001060800090001080c000d0001061000110001041400150001061800190001081c001d0001062000210001042400250001062800290001082c002d0001063000310001043400350001063800390001083c003d0001064000410001044400450001064800490001084c004d0001065000510001045400550001065800590001085c005d0001066000610001046400650001066800690001086c006d0001067000710001047400750001067800790001087c007d000106`), music.PlaybackMode.LoopingInBackground)
tiles.setCurrentTilemap(tilemap`level13`)
scene.setBackgroundImage(img`
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    22222222222222222222222222222222222222222222222222222222222222222222222222222222888888888888888888888888888888888888888888888888888888888888888888888888888888884444444444444444444444444444444444444444444444444444444444444444444444444444444477777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
list = [
assets.image`sprite1`,
assets.image`sprite2`,
assets.image`sprite3`,
assets.image`sprite4`,
assets.image`Nivek`,
assets.image`Radar`,
assets.image`Raijin`,
assets.image`Minnie`,
assets.image`Sir Lukington`,
assets.image`Skittles`,
assets.image`Tajine`,
assets.image`Dobber`,
assets.image`Shane`,
assets.image`Izanami`,
assets.image`Aim`,
assets.image`Jack Smith`,
assets.image`Master Cheesfu`,
assets.image`myImage30`,
assets.image`myImage14`,
assets.image`myImage17`,
assets.image`myImage20`,
assets.image`myImage15`,
assets.image`myImage24`,
assets.image`myImage18`,
assets.image`myImage27`,
assets.image`myImage29`,
assets.image`myImage31`,
assets.image`myImage36`,
assets.image`myImage33`,
assets.image`zombieguy`,
assets.image`myImage44`,
assets.image`myImage45`,
assets.image`myImage46`,
assets.image`myImage47`,
assets.image`myImage63`,
assets.image`myImage62`,
assets.image`myImage61`,
assets.image`myImage55`,
assets.image`myImage57`,
assets.image`myImage66`,
assets.image`myImage67`,
assets.image`myImage73`,
assets.image`myImage13`,
assets.image`myImage22`,
assets.image`bobby`,
assets.image`myImage75`,
assets.image`myImage12`,
assets.image`myImage43`,
assets.image`myImage8`,
assets.image`myImage9`,
assets.image`10`
]
mySprite5 = sprites.create(list[currentvalue], SpriteKind.Cursor)
mySprite6 = sprites.create(list[currentvalue2], SpriteKind.Cursor)
mySprite7 = sprites.create(list[currentvalue3], SpriteKind.Cursor)
mySprite8 = sprites.create(list[currentvalue4], SpriteKind.Cursor)
scaling.scaleByPixels(mySprite5, 48, ScaleDirection.Uniformly, ScaleAnchor.Middle)
scaling.scaleByPixels(mySprite6, 48, ScaleDirection.Uniformly, ScaleAnchor.Middle)
scaling.scaleByPixels(mySprite7, 48, ScaleDirection.Uniformly, ScaleAnchor.Middle)
scaling.scaleByPixels(mySprite8, 48, ScaleDirection.Uniformly, ScaleAnchor.Middle)
currentvalue = 0
currentvalue2 = 0
currentvalue3 = 0
currentvalue4 = 0
tiles.placeOnRandomTile(mySprite5, assets.tile`myTile76`)
tiles.placeOnRandomTile(mySprite6, assets.tile`myTile77`)
tiles.placeOnRandomTile(mySprite7, assets.tile`myTile78`)
tiles.placeOnRandomTile(mySprite8, assets.tile`myTile79`)
music.play(music.createSong(hex`0078000408020305001c000f0a006400f4010a0000040000000000000000000000000000000002180000000800012410001800011b28003000012438004000011b07001c00020a006400f40164000004000000000000000000000000000000000354000000080001240800090001240a000b0001240c000d0001240e000f00012410001400011b14001800011d1c002000012420002400012424002800012428003000012430003400011b34003800011d38004000011b09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8003000000001000103080009000103100011000103180019000103200021000103280029000103300031000103380039000103`), music.PlaybackMode.LoopingInBackground)
game.onUpdate(function () {
    if (isturnedright == false) {
        for (let value of movingleft) {
            if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingLeft))) {
                if (controller.left.isPressed()) {
                	
                } else {
                    value.flipX()
                    isturnedright = true
                }
            }
            if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingRight))) {
                if (controller.left.isPressed()) {
                	
                } else {
                    value.flipX()
                    isturnedright = true
                }
            }
        }
    }
})
