//const precoA = 100;
//console.log("Preco final A:", precoA - precoA * 0.1);
//const precoB = 250;
//console.log("Preco final B:", precoB - precoB * 0.1);
//const precoC = 80;
//console.log("Preco final C:", precoC - precoC * 0.1);

//function aplicarDesconto(preco){
   // return preco - preco * 0.1;
//}

//console.log("Preco final A:", aplicarDesconto(100));
//console.log("Preco final B:", aplicarDesconto(250));
//console.log("Preco final C:", aplicarDesconto(80));

//function saudar(){
   // console.log("Ola, bem vindo ao curso!")

//}

//saudar
/*
function saudar (nome){
    console.log("Ola,"+ "!");
}

saudar("Lucas");

function apresentar(nome, idade){
    console.log(`${nome} tem ${idade} anos.`);
}

apresentar("Lucas", 35);

apresentar(35, "Lucas");
*/
/*
function cumprimentar(nome = "Visitante"){
    console.log(`Bem-vindo, ${nome}`);
}

cumprimentar("Lucas");
cumprimentar();

function somar(a, b) {
    console.log(a+ b);
}

somar(2, 3);
somar(2);
somar(2, 3, 4);
*/
/*
 function dobroMostra(n) {
    console.log(n * 2);
 }

 function dobroDevolve(n){
    return n * 2
 }

 dobroMostra(5);
 const b = dobroDevolve(5);
*/
/*
function classificar(idade) {
    if (idade < 0) {
        return "Idade invalida!";
    }

    if(idade >= 18) {
        return "Maior de idade!";
    }
    return "Maior de idade!";

}
    console.log(classificar(20));
    console.log(classificar(-5));
    console.log(classificar(10));

    function estatisticas(a, b){
        return{
            soma: a + b
            media: (a + b) / 2,
        }
    }

    const resultado = estatisticas(4, 10);
    console.log(resultado.soma);
    console.log(resultado.media);

    function ehPar(n) {
        return n % 2 === 0;
    }

    function descrever(){
        return ehPar(n)  ? "Par" : "Impar";
    }
        
    console.log(descrever (4));
    console.log(descrever (7));

    const dobro = function (n) {
        return n * 2;
    }

    console.log(dobro(4));

    function quadrado1(n) {
        return n * n;
    };

    const quadrado2 = function (n) {
        return n * n;
    };

    const quadrado3 = (n) => {
        return n * n;
    };

    const quadrado4 = n => n * n;

    const somar = (a, b) => a + b;

    const oi = () => "Oi!!";

    const criarAluno = nome =>  ({nome: nome, ativo: true});
    console.log(criarAluno("Lucas")) ;   
    
    const criarAlunoErrado = nome =>  {nome: nome};
    console.log(criarAlunoErrado("Lucas"));   
   */

    /*
    const fila = []

    fila.push("Ana");
    fila.push("Bia");
    fila.push("Caio");
    console.log(fila);
    
    fila.push();
    console.log(fila);

    fila.push("Caio");
*/
   
/*
function remover(lista, valor) {
    const pos = lista.index0f(valor)

    if (pos = -1) {
        return false;
    }

    lista.splice(pos, 1)
    return true;
}

const letras = ["a", "b", "c"];
console.log(remover(letras, "b"));
console.log(letras);
console.log(remover(letras, "z"));
*/
/*
const aluno = {nome: "Ana", idade: 20};

aluno.idade = 21;
aluno.curso = "JavaScript"
delete aluno.idade;
console.log(aluno);
console.log(Object.keys(aluno));
*/

