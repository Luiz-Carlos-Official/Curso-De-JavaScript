let num = [5, 8, 2, 9, 3, 4, 7, 6]
num.push(1)
num.sort()

/*
for(let pos = 0; pos<num.length; pos++) {
    console.log(`${pos}° é o numero ${num[pos]}`)
}
*/

for(let pos in num) {
    console.log(`${pos}° é o numero ${num[pos]}`)
}