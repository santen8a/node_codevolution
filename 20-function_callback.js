function greet(name){
    console.log("hi my name is ",name);
}

function greetSir(greetFunction){
    const name = "sangay tenzin"
    greetFunction(name)
}

greetSir(greet)