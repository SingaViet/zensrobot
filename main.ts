led.plot(0, 0)
let iCommon = 0
if (false) {
    radio.setGroup(1)
    music.playTone(262, music.beat(BeatFraction.Whole))
    radio.sendNumber(0)
    led.plotBarGraph(
    0,
    0
    )
} else if (led.point(0, 0)) {
    led.unplot(0, 0)
    music.playTone(262, music.beat(BeatFraction.Whole))
    led.toggle(0, 0)
}
basic.forever(function () {
	
})
