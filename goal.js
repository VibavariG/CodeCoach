/*alert('Hello World');*/

const option1 = document.querySelector(".op1");
const option2 = document.querySelector(".op2");
const option3 = document.querySelector(".op3");
const option4 = document.querySelector(".op4");
let selected=undefined;

option1.addEventListener("click", ()=>{
    if(selected!== undefined)
    {
        dishighlightoption(selected);
    }
    selected=option1;
    highlightoption(selected);
})

option2.addEventListener("click", ()=>{
    if(selected!== undefined)
    {
        dishighlightoption(selected);
    }
    selected=option2;
    highlightoption(selected);
})

option3.addEventListener("click", ()=>{
    if(selected!== undefined)
    {
        dishighlightoption(selected);
    }
    selected=option3;
    highlightoption(selected);
})

option4.addEventListener("click", ()=>{
    if(selected!== undefined)
    {
        dishighlightoption(selected);
    }
    selected=option4;
    highlightoption(selected);
})

const dishighlightoption = (option)=>{
    option.style.background= '#fff';
}

const highlightoption = (option)=>{
    option.style.background = '#94EAEA';
}