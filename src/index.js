import "./style.css"


document.querySelector("#submit").addEventListener("click", sub)
 let data = localStorage.getItem("text");
 
function sub(){
    
    let text = document.getElementById("note").value;
    
    let locl = localStorage.setItem("text", text);
    
   let x =  document.querySelector(".display_note");
    x.style.display = "block";
    display(data);
}

function display(data){
    
    let item = document.getElementById("display");
    item.innerHTML = data;
    

}
document.querySelector("#delete").addEventListener("click", dele)

function dele(){

    let text = document.getElementById("note").innerHTML="";
    
    

    localStorage.setItem("text", text);

    let x =  document.querySelector(".display_note");
    x.style.display = "none";
    window.location.reload()
}