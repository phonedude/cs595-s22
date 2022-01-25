let length = process.argv.length
let sum = 0
for (let i =2; i < length; i++){
    sum += +process.argv[i]
}
console.log(sum)
