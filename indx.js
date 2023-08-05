// music on and off symboll

let spk=document.getElementById("spk")
let mute=false
spk.addEventListener("click",()=>{
    if(mute==false){
    spk.classList.remove("fa-volume-high")
    spk.classList.add("fa-volume-xmark")
    mute=true
    }
    else{
        spk.classList.add("fa-volume-high")
        spk.classList.remove("fa-volume-xmark")
        mute=false 
    }
})
/////making the menu come from bottom while clicking the menu icon....
let mnu=document.getElementById("mnu")
let mnu_div=document.querySelector(".mnu_di")
mnu.addEventListener("click",()=>{
    mnu_div.classList.remove("mnu_di_dn")
    console.log("mnu clickedd...")
    mnu_div.classList.add("mnu_di_tp")
   
})

////making the x mark display after the menu animation..........

let x=document.getElementById("x")
mnu_div.addEventListener("animationend",function(){
    x.style="display:block;"
})

//// quit the menu bar while clicking x..........
x.addEventListener('click',()=>{
    mnu_div.classList.remove("mnu_di_tp");
    mnu_div.classList.add("mnu_di_dn")
})
let mnu_msg=document.querySelector(".mnu_msg");

let det_con=document.querySelectorAll(".det_con")

function det(n){

    
    mnu_msg.classList.add("mnu_msg_lt")
    mnu_msg.classList.remove("mnu_msg_rt")
    for(let i=0;i<det_con.length;i++){
        if(n==i){
            det_con[i].classList.remove("none")
        }
        else{
            det_con[i].classList.add("none")
        }
    }
}

let lt_ar=document.getElementById("lt_ar")
lt_ar.addEventListener('click',()=>{
    mnu_msg.classList.remove("mnu_msg_lt");
    mnu_msg.classList.add("mnu_msg_rt")
})



let pop=document.querySelector(".pop")
function start(){
    pop.style="display:flex"
}

function clo(){
    pop.style="display:none"
    console.log("cls")
    if(against==null){
    against=mode_all[0]
    console.log(against)
    }
}

let s=document.querySelectorAll(".s")
let mode_all=['player','computer'];
function choose(n){
    s[n].classList.add("none")
    s[n+1].classList.remove("none")
}
let against=null;
function mode(n){
    against=mode_all[n]
    // console.log(against)
    if(against=='player'){
        playergame()
    }
    else{
        computergame()
    }
    clo()
}



//  THE GAME LOGICCC>>>>>>

// chooose mode..(finished....)
// click event...
// switch turns...
// check win...
//  check draw...


const x_cls='cll_x'
const cir_cls='cll_cir'
let circle_cls=true;

// function when the player chooses that he wants to play against a player...../
let cellelements=document.querySelectorAll(".cll")
function playergame(){
    console.log('chooosed player game....')
     /// to make the cell  clicked once...
    cellelements.forEach(cell=>{
        cell.addEventListener('click',clk_event,{once:true})
    })
    function clk_event(e){
        console.log('a cell clicked.....');
        const cell=e.target;
        const current_cls= circle_cls?cir_cls:x_cls;

        // diplay x or O while clicking......
        display_(cell, current_cls)
        /// to swappp the turns after clicking one cellll.....
        swap()

    }

    function display_(cell,class_){
        cell.classList.add(class_)
        console.log("a event occured...")
    }
    function swap(){
        circle_cls=!circle_cls;
        console.log("swapped"+circle_cls)
    }

}


// function when the player wants to play against the computer....

function computergame(){
    console.log("computer game")
}

