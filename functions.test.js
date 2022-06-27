const {returnTwo, greeting, add, subtract, multiply, divide} = require("./functions");

test("Return 2 should return 2", () => {
    expect(returnTwo()).toEqual(2)
})
test("Greeting should return Hello + name.", () => {
    expect(greeting("Dallas")).toEqual("Hello, Dallas.")
})
    describe("Math functions", () => {
    test("Add function should add the two paramaters together", () => {
        expect(add(3, 7)).toEqual(10)
        expect(add(5, 18)).toEqual(23)
    })
    test("Subtract function should subtract the two paramaters", () => {
        expect(subtract(3, 7)).toEqual(-4)
        expect(subtract(5, 18)).toEqual(-13)
    })
    test("Multiply function should multiply the two paramaters together", () => {
        expect(multiply(3, 7)).toEqual(21)
        expect(multiply(2, 18)).toEqual(36)
    })
    test("Divide function should divide the two paramaters together", () => {
        expect(divide(10, 2)).toEqual(5)
        expect(divide(36, 6)).toEqual(6)
    })
});