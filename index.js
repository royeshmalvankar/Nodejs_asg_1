const crypto = require('node:crypto')

let a = process.argv[2]
let operation= process.argv[3]
let b = process.argv[4]

//Please use following format 2(Number) +(operation) 2(Number)
// if sin or cos or tan or random use the following format 2(Number) sin(operation)

if (operation == '+') {
  Add(Number(a), Number(b))
}
else if (operation == '-') {
  Sub(Number(a), Number(b))
}
else if (operation == '*') {
  Multi(Number(a), Number(b))
}
else if (operation == '/') {
  Div(Number(a), Number(b))
}
else if (operation == 'sin') {
  Sine(Number(a))
}
else if (operation == 'cos') {
  Cosine(Number(a))
}
else if (operation == 'tan') {
  Tangent(Number(a))
}
else if (operation == 'random') {
  Random(Number(a))
}
else{
  console.log("Invalid Operation")
}
function Add (a, b) {
  console.log(`${a}+${b} = ${a + b}`)
}
function Sub (a, b) {
  console.log(`${a}-${b} = ${a - b}`)
}
function Multi (a, b) {
  console.log(`${a}*${b} = ${a * b}`)
}
function Div (a, b) {
  console.log(`${a}/${b} = ${a / b}`)
}
function Sine (a) {
  console.log(` Sine(${a})  ${Math.sin(a)}`)
}
function Cosine (a) {
  console.log(`Cosine(${a}) ${Math.cos(a)}`)
}
function Tangent (a) {
  console.log(`Tangent(${a}) ${Math.tan(a)}`)
}
function Random (a) {
  // Asynchronous
  const { randomBytes } = require('node:crypto')

  randomBytes(a, (err, buf) => {
    if (err) throw err
    console.log(`Random ${buf.toString('hex')}`)
  })
}