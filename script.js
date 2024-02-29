let input = document.getElementById('dis');
let buttons = document.querySelectorAll('button');
let str ='';
let button_array = Array.from(buttons);
button_array.forEach((btn)=>{
btn.addEventListener('click',(e)=>{
    if(e.target.innerHTML==="AC"){
        str = '';
        input.value = str;
    }
    else if(e.target.innerHTML==='DEL'){
        str = str.substring(0,str.length-1)
        input.value = str;
    }
    else if(e.target.innerHTML==='='){
        str = eval(str);
        input.value = str;
    }
    else{
    str += e.target.innerHTML;
    input.value = str;
    }
});
});

