// p0 hay p1 : sử dụng khi nút cắm sử dụng
input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(90)
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P1, 1)
})
input.onButtonPressed(Button.B, function () {
    servos.P0.setAngle(0)
    basic.showIcon(IconNames.No)
    pins.digitalWritePin(DigitalPin.P1, 0)
})
basic.showIcon(IconNames.No)
pins.digitalWritePin(DigitalPin.P1, 0)
