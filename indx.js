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