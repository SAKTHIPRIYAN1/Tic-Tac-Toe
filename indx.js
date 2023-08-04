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

/// complete the menu bar for mobileee....

