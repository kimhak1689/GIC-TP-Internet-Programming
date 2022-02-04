const btn = document.getElementById('nav_btn');
const show = document.querySelector('.hide_list');
const toTOp = document.getElementById('my_btn_hide');
const showTop = document.querySelector('.top');

btn.addEventListener("click", function(){
    show.style.display= "block";
});

toTOp.addEventListener("click", function(){

    showTop.style.display = "none";
   

})