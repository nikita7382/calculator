const button=document.querySelectorAll('.button');
const display=document.querySelector('.display')
const remove=document.querySelector('.remove')


button.forEach((i)=>{
    i.addEventListener('click',()=>{
        display.innerText=display.innerText+i.innerText
        console.log(i.innerText)

    })

})

remove.addEventListener('click',()=>{
    let str=display.innerText;
    str = str.slice(0, -1); 
    display.innerText=str

})

