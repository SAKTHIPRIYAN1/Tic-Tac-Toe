


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
let pop2=document.querySelector(".pop2")
function start(){
    mnu_div.classList.remove("mnu_di_tp")
    console.log("mnu clickedd...")
    mnu_div.classList.add("mnu_di_dn")
    pop.style="display:flex"

    // restart();
    // brd.innerHTML=temp;
}

let st=document.querySelector('.st')
st.addEventListener('click',clo)
function clo(){
    pop.style="display:none"
    console.log("cls")
    if(against==null){
    against=mode_all[0]
    console.log(against)
    }
}

let s=document.querySelector(".s")
let mode_all=['player','computer'];


let selected_button=document.querySelectorAll(".bt")
// selected_button[0].click()
let against='player';
function mode(n){
    against=mode_all[n]

    if(against=='player'){
       selected_button[0].classList.add("sel")
       selected_button[1].classList.remove("sel")
    }
    else{
        selected_button[1].classList.add("sel")
       selected_button[0].classList.remove("sel")
    }
}


let player;


//  THE GAME LOGICCC>>>>>>

// chooose mode..(finished....)
// click event...(finished....)
// switch turns...(finished....)
// check win...(finished....)
//  check draw...(finished....)


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


//// to choose the x or O by the player......
let choosed_symbol='x';
let circle_cls=false;
let og;
function choose_sym(n){
    let symbol=document.querySelectorAll('.symb')
    if(n==0){
        choosed_symbol='x'
        symbol[0].classList.add('sel')
        symbol[0].classList.remove("sel_n")
        symbol[1].classList.remove("sel")
        symbol[1].classList.add('sel_n')
        circle_cls=false;
        console.log(choosed_symbol)
    }
    else{
        choosed_symbol='o'
        symbol[1].classList.add('sel')
        symbol[1].classList.remove("sel_n")
        symbol[0].classList.remove("sel")
        symbol[0].classList.add('sel_n')
        circle_cls=true;
        console.log(choosed_symbol)
    }

}
og=circle_cls;


const x_cls='cll_x'
const cir_cls='cll_cir'


let win_count=0;

// function when the player chooses that he wants to play against a player...../

let brd=document.querySelector(".brd")
let temp_str=brd.innerHTML;

let temp1=brd.innerHTML;
let temp=temp1;

//computer_variables...
let ai_class,aiPlayer,huPlayer
let hu_class;

/// choosing the mode of the game...
function start_game(){
    brd.innerHTML=temp;
    if(against=='player'){
        playergame();
    }
    else{
        computergame();
    }

}
///assigning the click events

let cells=[],orig=[0,1,2,3,4,5,6,7,8];
let current_cls;
let win_co;

function computergame() {
    console.log("comp player game is selected");
    initial();
    if(choosed_symbol=="x"){
        huPlayer="X";
        og=false;
        ai_class="cll_cir"
        hu_class='cll_x'
        aiPlayer="O"
    }
    else{
        huPlayer="O";
        ai_class="cll_x"
        hu_class='cll_cir'
        og=true;
        aiPlayer="X";
       
        turn(bestSpot(), aiPlayer);
    }
    
    console.log(og) 
            
    hoverefft(og)   
}


function initial(){
    //1. forming the array...
    //2.creating the click events such as showing the symbols...
    orig=[0,1,2,3,4,5,6,7,8];
    win_co=0;
    cells=document.querySelectorAll('.cll');//this is the cells of board..
    console.log(cells);

    if(against=='player'){
    cells.forEach(cell=> {
        cell.addEventListener("click",turne,{once:true})
    });
    }
    else{
        cells.forEach(cell=> {
            cell.addEventListener("click",turn_click,{once:true})
        });
       

    }
    
   
    
}

function turne(e){
    console.log("clickedd");
    let cell=e.target;
    console.log(cell)
     current_cls= circle_cls?cir_cls:x_cls;
    // to display the symbolls
    display(cell,current_cls);
}

function turn_click(square){
    if (typeof orig[square.target.id] == 'number') {
		console.log(square.target.id)
		turn(square.target.id, huPlayer);
		if (!win()) turn(bestSpot(), aiPlayer);
	}
}

let clls;
function turn(squareId, player) {
        if(player=="X"){
             clls='cll_x'
        }
        else{
             clls='cll_cir'
        }
    current_cls= clls;
    console.log(squareId)
	orig[squareId] = player;
	// console.log(orig)
    console.log( player +" "+clls)
	display_(squareId,clls)
}

function display_(cell_id,clas){
    console.log("cell_id " + cell_id)
    let cell=document.getElementById(cell_id)
    cell.classList.add(clas);
    // console.log(cell)
    win_co++;

    win(current_cls);
}
function display(cell,clas){
    cell.classList.add(clas);
    console.log(cell)
    win_co++;
//to swap...
    against=="player"
    swap();
    
    win(current_cls);
    
}
function bestSpot(){
    return minimax(orig, aiPlayer).index;
    // console.log('best spot....')
}


function emptySquares() {
	return orig.filter(s => typeof s == 'number');
}

function minimax(newBoard, player) {
	var availSpots = emptySquares();

	if (checkWin(newBoard, huPlayer)) {
		return {score: -10};
	} else if (checkWin(newBoard, aiPlayer)) {
		return {score: 10};
	} else if (availSpots.length === 0) {
		return {score: 0};
	}
	var moves = [];
	for (var i = 0; i < availSpots.length; i++) {
		var move = {};
		move.index = newBoard[availSpots[i]];
		newBoard[availSpots[i]] = player;

		if (player == aiPlayer) {
			var result = minimax(newBoard, huPlayer);
			move.score = result.score;
		} else {
			var result = minimax(newBoard, aiPlayer);
			move.score = result.score;
		}

		newBoard[availSpots[i]] = move.index;

		moves.push(move);
	}

	var bestMove;
	if(player === aiPlayer) {
		var bestScore = -10000;
		for(var i = 0; i < moves.length; i++) {
			if (moves[i].score > bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	} else {
		var bestScore = 10000;
		for(var i = 0; i < moves.length; i++) {
			if (moves[i].score < bestScore) {
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	}
	// console.log(moves)
	return moves[bestMove];
	
}

function checkWin(board, player) {
	let plays = board.reduce((a, e, i) =>
		(e === player) ? a.concat(i) : a, []);
	let gameWon = null;
	for (let [index, win] of win_com.entries()) {
		if (win.every(elem => plays.indexOf(elem) > -1)) {
			gameWon = {index: index, player: player};
			break;
		}
	}
	// console.log(gameWon)

	return gameWon;
	
}

function swap(){
    ///changing the hover effect....
    
    circle_cls=!circle_cls;
    console.log("swapped"+circle_cls);

    hoverefft(circle_cls);
}


//// changing the hover_effect....
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

function win(current_cls){
    console.log('win_checked')

    let winn=check(current_cls);
    if(winn){
        endgame(current_cls);
        return 1;
    }

    else if(win_co==9){
        endgame(null)
        return 1;
    }
    return false;
    
}

/// checking for match with win combos by comparing class in cells...
function check(class_){
    let cellelements=document.querySelectorAll(".cll")
    return win_com.some(comb=>{
         return comb.every(index=>{
             return cellelements[index].classList.contains(class_)
         }
         )
     })
 }

///ending the game by showing the end message...
let win_div=document.querySelector('.win_msg')
function endgame(class_){
    let winner=null;
    if(against=='player'){
    if(class_=='cll_cir'){
        winner='O';
    }
    else if(class_=='cll_x'){
        winner='X';
    }
    }
else{
    if(class_==ai_class){
        winner='Comp';
    }
    else if(class_==hu_class){
        winner='You';
    }
}
//   console.log(win_co +" "+winner)
  if(winner==null && win_co==9){
    win_div.innerHTML=` 
                        <i class="fa-solid fa-circle-xmark" onclick="restart()" id="cl"></i>
                        <h2 class='det_h'>Match<span class='winner'> draws</span> </h2>
                        `
  }
  else{
   win_div.innerHTML=` 
                        <i class="fa-solid fa-circle-xmark" onclick="restart()" id="cl"></i>
                        <h2 class='det_h'><span class='winner'>${winner}</span> wins </h2>
                              `
  }
    console.log("game ended.........");
    setTimeout(()=>{
        pop2.style="display:flex"
    win_div.classList.remove('none')}
    ,120);
}



//for the player vs player
function playergame(){
    initial();/// click+display+swap...
    hoverefft(circle_cls);///change the hover effect....
    console.log("player game is selected");
}

function restart(){
    win_div.classList.add('none')
      circle_cls=og;
      pop2.style="display:none"
      
    brd.innerHTML=temp;
    start_game()
  }
