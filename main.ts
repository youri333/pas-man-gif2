input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 20; index++) {
        if (Math.randomBoolean()) {
            basic.showIcon(IconNames.Ghost)
        } else {
            basic.showLeds(`
                . # # # .
                # . . . #
                # . # # #
                # . . . #
                . # # # .
                `)
        }
    }
})
