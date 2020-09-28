console.log("Write your code below!")

function sayHello(name){
  console.log(`Hello, ${name}`);
}

function letterCount(name){
  let count = name.length;
  if(count > 4){
    console.log(`${name}, your name has ${count} letters. That's a pretty long name!`);
  } else {
    console.log(`${name}, your name has ${count} letters. That name's not that long!`);
  }
} 

function greetPeople(names){

}

function speakingGrandma(phrase){

}


function kebabToTitleCase(filenames){

}

//Write your test cases below this comment
sayHello("Ann");
sayHello("Reuben");
sayHello("Maya");

letterCount("Ann");
letterCount("Rueben");
letterCount("Maya");
//do not editing anything below this comment.
module.exports = {
  sayHello,
  letterCount,
  greetPeople,
  speakingGrandma,
  kebabToTitleCase
};
