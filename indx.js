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
   
    
    for(let i=0;i<s.length;i++){
        if(n==i){
            s[n].classList.remove("none")
        }
        else{
            s[i].classList.add("none")
        }
    }
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


//// the winning combinationsss.....

const win_com=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const x_cls='cll_x'
const cir_cls='cll_cir'
let circle_cls=true;


// function when the player chooses that he wants to play against a player...../
let cellelements=document.querySelectorAll(".cll")
let brd=document.querySelector(".brd")
let temp_str=brd.innerHTML;
function playergame(){
    console.log('chooosed player game....')

    /// hovre effect initailly....
     hoverefft(circle_cls)

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

        ///check win....
       let win= check(current_cls)
       if(win){
        console.log('matched...')
        endgame(current_cls)
       }

        /// hover effect after swap...
        hoverefft(circle_cls)
    }

    function display_(cell,class_){
        cell.classList.add(class_)
        console.log("a event occured...")
    }

    /// checking before winnig the game.......
    function check(class_){
       return win_com.some(comb=>{
            return comb.every(index=>{
                return cellelements[index].classList.contains(class_)
            }
            )
        })
    }

    ///ending the game....
  


    function swap(){
        circle_cls=!circle_cls;
        console.log("swapped"+circle_cls)
    }

    function hoverefft(tf){
        brd.classList.remove("brd_x")
        brd.classList.remove("brd_cir")

        if(tf){
            brd.classList.add("brd_cir")
        }
        else{
            brd.classList.add("brd_x")
        }
    }

}
let win_div=document.querySelector('.win_msg')
function endgame(class_){
    let winner;
  if(class_=='cll_cir'){
    winner='O';
  }
  else{
    winner='X';
  }
   win_div.innerHTML=`
                <i class="fa-solid fa-circle-xmark" onclick="clo()" id="cl"></i>
                <h2 class='det_h'>${winner} wins the game</h2>
   `;
   start()
   choose(2)
    console.log("game ended.........");
    brd.innerHTML=temp_str
    playergame()
}

// function when the player wants to play against the computer....
function computergame(){
    console.log("computer game")
}

