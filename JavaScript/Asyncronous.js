// /* Javascript Asyncronous Method */

// /* settimeout method */

// // setTimeOut (function, delay, parameter1, parameter2, .....)

// /*setTimeout(
//     function(){

//     },delaytime
// )*/

// function printt() {
//     console.log("Hello JavaScript")
// }

// setTimeout(printt, 3000)

// let print = () => {
//     console.log("SetTimeOut Method")
// }

// setTimeout(print, 3000)

// setTimeout(
//     function greet() {
//         console.log("Hello Javascript")
//     },
//     3000
// )

// setTimeout(
//     () => console.log("Hello World"),
//     3000
// )

// function greet(name, age) {
//     console.log(`Your name is ${name} and age ${age}`)
// }
// setTimeout(greet, 2000, "Gopal", 25)


// /* SetInterval */

// // setInterval(function, delay , parameter1, parameter2, .....)

// setInterval(
//     function print() {
//         console.log("1")
//     },
//     1000
// )

// setInterval(
//     () => console.log("Hello"),
//     2000
// )

// setInterval(
//     () => console.log("World"),
//     2000
// )

// function greet(name, age) {
//     console.log(`Your name is ${name} and age ${age}`)
// }

// setInterval(greet, 2000, "Anni", 22)


// /* Current Time Print Every 3 Seconds */

// {
//     let datetime = new Date().toLocaleTimeString()

//     function time(date) {
//         console.log(`Current Time ${date}`)
//     }

//     time(datetime)
//     setInterval(time, 3000)
// }


// /* SetInterval Td */

// function greet(name, age) {
//     console.log(`Your name is ${name} and age is ${age}`)
// }

// let Id = setInterval(greet, 1000, "Anni", 22)
// console.log("This is ID ", Id)

// setInterva (greet, 5000, "Anni", 22)


{
    const updateTime = () => {
        const currentTime = new Date().toLocaleTimeString()
        console.log(`Current Time: ${currentTime}`)
      }
      
      updateTime()
      setInterval(updateTime, 4000)
}