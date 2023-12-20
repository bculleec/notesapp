const notes_container = document.querySelector(".notes-container");
const createbtn = document.querySelector(".btn");
const clocktime = document.querySelector(".time");
let notes = document.querySelectorAll(".input-box");


function show_notes(){
    notes_container.innerHTML = localStorage.getItem("notes");
}

show_notes();
notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.style.opacity = 1;
        })

function update_time(){
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    hoursStr = hours.toString();
    minutesStr = minutes.toString();

    if (hoursStr.length<2) hoursStr = "0"+hoursStr;
    if (minutesStr.length<2) minutesStr = "0"+minutesStr;
    clockStr = hoursStr + ":" + minutesStr;

    document.getElementById("timeh1").innerHTML = clockStr;
}

update_time();
setInterval(update_time, 60000);

function update_storage() {
    localStorage.setItem("notes", notes_container.innerHTML);
}

createbtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    img.src = "Untitled.png";
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    inputBox.style.opacity = 0;
    notes_container.appendChild(inputBox).appendChild(img);
    inputBox.offsetWidth;
    inputBox.style.opacity = 1;
})

notes_container.addEventListener("click", function(e){
    if (e.target.tagName === "IMG"){
        e.target.parentElement.style.opacity = 0;
        setTimeout(function() {
            e.target.parentElement.remove();
            update_storage();
          }, 500);
        
        
    }
    else if(e.target.tagName === "P")
    {
        thisNote = e.target;
        thisNote.style.height = '600px';
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                update_storage();
            }
            if (nt!=thisNote) nt.style.height = '150px';
        })
    }
})