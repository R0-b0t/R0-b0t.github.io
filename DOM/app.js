//const etiqueta=document.getElementById('titulo')


//const etiqueta=document.querySelector('h1');
//console.log(etiqueta);

/*const $=(q)=>{
    return document.querySelector(q);

}
const elemento=$('#titulo');
console.log(elemento);
*/

const $=(q)=>document.querySelector(q)
// const input=$('#caja');
// const p=$('.texto')
// input.addEventListener('keyup',()=>{
//     console.log(input.value)
// })

const inputName=$('.nombre')
const button=$('#btn')
const boxInfo=$('#info')

button.addEventListener('click', ()=>{
    boxInfo.innerHTML=`<img src=${inputName.value}>`
    console.log(inputName.value)

})