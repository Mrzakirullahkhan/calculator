let open = document.querySelector('.openbtn');
let close = document.querySelector('.closebtn');
let input = document.getElementById('inputBox');
let butttons = document.querySelectorAll('button');
let string = "";
let array = Array.from(butttons);
array.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML =='DEL'){
            string = string.substring(0, string.length-1);
            input.value=string;

        }
        else if (e.target.innerHTML == "AC") {
            string = "";
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
      
    })
})

function downslider(){
   

    if(document.querySelector('.slider').classList.contains('downslider')){
        document.querySelector('.slider').classList.remove('downslider')
    }
    else{
        document.querySelector('.slider').classList.add('downslider')
    }
}


open.addEventListener('click',downslider);


// for close botton 
function upslider(){

    if(document.querySelector('.slider').classList.contains('upTheslider')){
        document.querySelector('.slider').classList.remove('upTheslider')
    }
    else{
        document.querySelector('.slider').classList.add('upTheslider')
    }
    
   
}
close.addEventListener('click',upslider);

