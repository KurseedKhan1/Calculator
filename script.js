// let input = document.getElementById('dis');
// let buttons = document.querySelectorAll('button');
// let str ='';
// let button_array = Array.from(buttons);
// button_array.forEach((btn)=>{
// btn.addEventListener('click',(e)=>{
//     if(e.target.innerHTML==="AC"){
//         str = '';
//         input.value = str;
//     }
//     else if(e.target.innerHTML==='DEL'){
//         str = str.substring(0,str.length-1)
//         input.value = str;
//     }
//     else if(e.target.innerHTML==='='){
//         str = eval(str);
//         input.value = str;
//     }
//     else{
//     str += e.target.innerHTML;
//     input.value = str;
//     }
//     let oprsym = ['+','-','*','%','/','.'];
//     let oldvalue = input.value; 
//     let str_len = oldvalue.length;
//     let lastchar = oldvalue[str_len-1];
//    if(oprsym.includes(e.target.innerHTML)){
//     if(oprsym.includes(lastchar)){
//     let removeLast = oldvalue.slice(0,-1);
//     input.value = oldvalue+e.target.innerHTML
//     }

//  }
// });
// });
function storeData(v){
    let display= document.getElementById('dis');
    let oldvalue = display.value;
    let str_len = oldvalue.length;
    let lastchar = oldvalue[str_len-1];
    let oprsym = ['+','-','*','%','/','.'];
    if(oprsym.includes(v)){
       if(oprsym.includes(lastchar)){
       let removeLast = oldvalue.slice(0,-1);
       display.value = removeLast + v;
       }
       else{
        display.value =oldvalue + v;
       }
    }
    else{
        display.value =oldvalue + v;
    }
}
function calculate(){
    let display= document.getElementById('dis');
    let oldvalue = eval(display.value);
    display.value = oldvalue;
}
function clsData(){
     document.getElementById('dis').value = '';
    }
    function Del(){
        let display= document.getElementById('dis');
        let oldvalue = display.value
        oldvalue = oldvalue.substring(0,oldvalue.length-1)
        display.value = oldvalue;
    }
