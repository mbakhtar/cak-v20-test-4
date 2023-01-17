basic.showIcon(IconNames.Happy)
basic.forever(function () {
    basic.showNumber(modules.soilMoisture1.moisture())
    if (modules.soilMoisture1.moisture() > 75) {
        basic.showIcon(IconNames.Umbrella)
        modules.led1.setPixelColor(0, 0xff0000)
        modules.led1.setPixelColor(1, 0x000000)
    } else {
        basic.showIcon(IconNames.Sword)
        modules.led1.setPixelColor(1, 0x00ff00)
        modules.led1.setPixelColor(0, 0x000000)
    }
})
