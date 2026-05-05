const fs = require("fs")
const a = 100;

setImmediate(() => console.log("set Immediate call"))

fs.readFile("./file.txt", "utf-8", () => {
    console.log("FIle reading")
})

setTimeout(() => console.log("set time out"), 0)

function printA() {
    console.log("a= ", a)
}
printA()

console.log("This is last Line")