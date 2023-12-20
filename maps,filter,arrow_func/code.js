function sum(a,b){
    return a+b;
}

const sum2 = (a,b) => {
    return a+b;
}

console.log(sum(1,2));
console.log(sum2(1,2));

const obj = {
    name:'normal func',
    printName: function(){
        console.log(this.name)
    }
}

const obj1 = {
    name:'arrow func',
    printName: () => {
        console.log(this.name)
    }
}

obj.printName();
// returns 'normal func'
obj1.printName();
// undefined

function setTimeout_with_normalFunction(){
    this.value = 1;

    setTimeout(
        function (){
            console.log('this.value in setTimeout_with_normalFunction:',this.value);
        },2000)
}

function setTimeout_with_arrowFunction(){
    this.value = 1;

    setTimeout(()=>{
        console.log('this.value in setTimeout_with_arrowFunction:',this.value);
    },2000)
}

const obj2 = new setTimeout_with_normalFunction();
console.log('obj2:',obj2);
new setTimeout_with_arrowFunction();

