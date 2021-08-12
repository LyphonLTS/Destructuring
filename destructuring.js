const numeroPares       = [2, 4, 6];
const numerosImpares    = [1, 3, 5];

const numeros = [...numeroPares, ...numerosImpares];
// ... antes do array ou objeto e este está dentro de um array ou objeto faz com que o valor se torne uma cópia

const [num1, num2] = [1, "teste"];
// const [] = [] faz com que paramentros sejam atribuídos aos seus correspondentes de mesma posição na memória

const [num3, num4, ...outrosNumeros] = [3, 4, 5, 6, 7];
// const [x, ...y] = [x1, y1, y2] faz com que paramentros após o correspondente de mesma posição na memória seja atribuído a mesma variável

const [nome1 = 'Brito'] = [1];
// const[x = y] = z faz com que seja criado um valor padrão para a variável, caso z não existe use y

const pessoa = {
    nome:    'Brito',
    idade:   20,
}
const pessoaComTelefone = {...pessoa, telefone: 6497070-7070}
// object2 = {...object1, x} faz com que seja atribuido os campos de um objeto e um ou mais novo(s) campo(s)

const { nome } = pessoa;
// cria uma váriavel e atribui o valor do campo de um objeto de mesmo nome

function imprimeDados({ nome, idade}){
    console.log(nome, idade);
}
// a função irá criar variáveis e atribui o valor do campo de um object ou array de mesmo nome

imprimeDados(pessoa);