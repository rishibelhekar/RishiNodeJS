const fs = require("fs")
const a = 100;

setImmediate(() => console.log("Set Immediate"))

Promise.resolve("Promise Resolved").then(console.log)

fs.readFile("./file.txt", "utf-8", () => {
    console.log("File Read")
})

setTimeout(() => console.log("Set Timeout"), 0)

process.nextTick(() => console.log("Process Tick"))

function printA() {
    console.log("This a", a)
}
printA()

console.log("This is Last Line")