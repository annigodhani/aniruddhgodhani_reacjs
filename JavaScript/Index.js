// What is javascript

/*
-> JavaScript is a dynamic computer programming language.
-> It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with th e user and make dynamic pages. It is an interpreted programming language with object-oriented capabilities.
-> JavaScript was first known as LiveScript, but Netscape changed its name to JavaScript, possibly because of the excitement being generated by Java. JavaScript made its first appearance in Netscape 2.0 in 1995 with the name LiveScript. The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers.Complementary to and integrated with HTML.Open and cross-platform
*/

/****   JavaScript Values   ****/
//  -> The JavaScript syntax defines two types of values

/*
    -> Fixed values are called Literals.
    -> Variable values are called Variables.   
 */

/**** Using console in javascript ****/

/**** var variable type / box variable name / = assignement / 60 assiged values ****/

// javascript language case-sensitive 

/**************** variable useing var() in javascript *************************/

{
    var box = "LiveScript"
    console.log(box)

    var Names = "food"
    var names = "Javascript"
    console.log(Names)

    var number1 = 15
    var number2 = 2
    console.log(number1 ** number2)

    var box1 = "toys"
    var box2 = "cloths"
    var box3 = 45

    console.log(box1)
    console.log(box2)
    console.log(box3)

}


box1 = "apple"
box1 = 45
console.log(box1)

/*******New Html Element Add In Though Javascript *********/

{
    var newelement = document.createElement("h1")
    newelement.textContent = "hello world"
    document.body.appendChild(newelement)

    var newelement = document.createElement("marquee", Option)
    newelement.textContent = "hello world"
    document.body.appendChild(newelement)

    var newelement = document.createElement("pre")
    newelement.textContent = `how are you!
     hi./kzndcb`
    document.body.appendChild(newelement)

    var newelement = document.createElement("h1")
    newelement.textContent = "hello world"
    newelement.classList = 'Aniruddh....'
    // newelement.classList = 'Godhani....'
    document.body.appendChild(newelement)

}

// document.write('hello javascript!')


// js comments

// single-line comments

/* multi-line 
comments */


// Template literals

{
    var _nameone = "5"
    var name20 = '5'

    console.log(name20)

    console.log(typeof (_nameone))
    
}


{
    alert("_nameone + ${name20}")
    alert(`${_nameone} + ${name20}`)
}

// Rules for Naming In JavaScript Variables

{
    //valid
    let a = 'hello'
    let _a = 'hello'
    let $a = 'hello'
}

{
    //invalid
    // Let 1a = 'hello'; // this gives an error
}

// JavaScript is case-sensitive. So y and Y are different variables

{
    let y = "hi"
    let Y = 5

    console.log(y)
    console.log(Y)
}

// Keywords cannot be used as variable names.

{
    //invalid
    // let new = 5 // Error! new is a keyword.
}

/*  

->>   Name must start with a letter (a to z or A to Z), underscore( _ ), or dollar( $ ) sign. 
->> After first letter we can use digits (0 to 9), for example value1. 
->> JavaScript variables are case sensitive, for example x and X are different variables.

*/


/* JavaScript Variable */


/*  Declaration var() */


/* Global Variables */

var numberr = 20 + 40 + 10 + "10" + 50 - 10 * 3
var numbere = 20
var total = numberr + numbere
console.log(total)
console.log(numberr)
console.log(typeof (numberr))
console.log(numbere)


{
    var box = "Truck"
}

{
    var boxx = "Bus"
}

{
    var boxx = "Toy"
}

console.log(box)
console.log(boxx)
console.log(boxx)



/* Declaration let() */

/* Block-Scope Variables */

{
    let box1 = "Truck"
    box1 = "Bus"
    // let box1 = "Bus"
    // let box1 = "Toys"

    console.log(box1)
}

{
    let number5 = 30
    console.log(number5)
}

{
    let number4 = 40
    console.log(number4)
}

{
    let number3 = 60
    console.log(number3)
}

/* Declaration const() */

// const box = 20
// box = 50
// const box = 50

// console.log(box)

{
    const emma1 = "this"
}

{
    const emma2 = "that"
    console.log(emma2)
}


/* string with quotes */

{
    let x = "wor'ld"
    let y = 'wor"ld'
    let z = "wor\"ld"
    let zz = 'wor\'ld'
    let zzz = 'hello \n world'
    let zzzz = "he\tllo"
    console.log(zzzz)
    document.write(x + "<br>" + y + "<br>" + z)
    console.log(y + "<br>")
}

/*

-> The latest ECMAScript(ES6) standard defines following data types: Out of which six data types are Primitive(predefined). 

-> Boolean. true and false.

-> null. A special keyword denoting a null value. (Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.)

-> undefined. A top-level property whose value is not defined.

-> Number. An integer or floating point number. For example: 42 or 3.14159.

-> BigInt. An integer with arbitrary precision. For example: 9007199254740992n.

-> String. A sequence of characters that represent a text value. For example: "Howdy".

-> Symbol. A data type whose instances are unique and immutable.

*/


/* types of variables */

{
    // var myInteger = 12; // 32-bit number (from -2,147,483,648 to 2,147,483,647)
    // var myLong = 9310141419482; // 64-bit number (from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807)
    // var myFloat = 5.5; // 32-bit floating-point number (decimal)
    // var myDouble = 9310141419482.22; // 64-bit floating-point number
    // var myBoolean = true; // 1-bit true/false (0 or 1)
    // var myBoolean2 = false;
    // var myNotANumber = NaN;
    // var NaN_Example = 0/0; // NaN: Division by Zero is not possible
    // var notDefined; // undefined: we didn't define it to anything yet
    // window.alert(aRandomVariable); // undefined
    // var myNull = null; // null
    // etc...
}






