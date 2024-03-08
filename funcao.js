//função não parametrizada

const n1=10;
const n2=5;

function Soma(){
    return n1+n2;
}

function Soma2(n3=0, n4=0){
    return n3+n4;
}

console.log("O horario do recreio é "+Soma()+":"+Soma2(10,20));

//função anonima

const f=function(v1=v2){
    return v1-v2
}

console.log(f(25,12));

//vetores
let mulheres=["Diva","Cleide", "Dalva"];

console.log(mulheres);

mulheres.map((el)=>{
    console.log(el)
})

//função construtor ar
const f1=new Function("v3","v4", "return v3*v4");
console.log(f1(89,83));

//sem arrow function

const soma1=function(v5,v6){
    return v5/v6;
}

console.log(soma1(43,23));


//arrow function

const soma2=(v7,v8)=>{
    return v7*v8
}
console.log(soma2(2,4));