const notes_container = document.querySelector(".notes-container");
const createbtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");


function show_notes(){
    notes_container.innerHTML = localStorage.getItem("notes");
}

show_notes();

function update_storage() {
    localStorage.setItem("notes", notes_container.innerHTML);
}

createbtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    img.src = "Untitled.png";
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    notes_container.appendChild(inputBox).appendChild(img);
})

notes_container.addEventListener("click", function(e){
    if (e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        update_storage();
    }
    else if(e.target.tagName === "P")
    {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                update_storage();
            }
        })
    }
})