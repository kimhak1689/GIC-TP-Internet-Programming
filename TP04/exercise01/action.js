let number = 7;


const value  =document.querySelector("#value");
const all_btn = document.querySelectorAll('.my_btn');

all_btn.forEach(function (btn){

    btn.addEventListener("click", function(e){
        const style = e.currentTarget.classList;
        if(style.contains("decrease")){  
            var num_decrease =  number--;
            var set_cookie_de = num_decrease -1;
            document.cookie = "decrease = " +set_cookie_de;
        }
        else if(style.contains("increase")){
           var num_increase =  number++;
           var set_cookie_in = num_increase +1;
           document.cookie = "increase = " +set_cookie_in;
        }
        else {
           var num_reset =  number = 0;
            document.cookie = "rest = "+num_reset;
        }
        value.textContent = number ;
    })

})