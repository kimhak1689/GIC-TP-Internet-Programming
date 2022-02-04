const hex_color = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const gen = document.getElementById('generate');
const color = document.querySelector('.color');
const reset = document.querySelector('#reset');
const create = document.querySelector('#show');

gen.addEventListener("click", function(){
        let my_Color = "#";
        let input = document.createElement('span');
        for(let i = 0 ; i<6; i++){
            my_Color += hex_color[RandomColor()];
        }    
        color.textContent = my_Color;
        document.body.style.backgroundColor = my_Color;
        console.log(my_Color);
        create.textContent = my_Color;
});

// the funtion that get the random number from the hex colors
function RandomColor(){
    return Math.floor(Math.random() * hex_color.length);
}

reset.addEventListener("click", function(){
    let reset = "#";
    let white = "1D577F";
    reset += white;
    color.textContent = reset;
    document.body.style.backgroundColor = reset;
    console.log(reset);
    create.textContent = reset;
})