let Num1 = 0
let Num2 = 0
let Result = 0
input.onButtonPressed(Button.A, function () {
    Num1 = 0
    Num2 = 0
    for (let index = 0; index < 2; index++) {
        Num1 += 5
        Num2 += 2
        Result = Num1 - Num2
    }
    basic.showNumber(Result)
})
