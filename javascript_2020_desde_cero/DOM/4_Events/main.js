const button = document.getElementById("button");
const box = document.getElementById("box");
/*
We've mouse and keyboard events
TODO: MOUSE
    ->mouseenter
    ->mouseleave
        FIXME: DRAG & DROP
        ->mousedown -->Keep click on element
        ->mouseup   -->Keep out click on element
    ->mousemove
*/

box.classList.add("red");
box.addEventListener("mouseenter",()=>{
    box.classList.replace("red","green");
})
box.addEventListener("mouseleave",()=>{
    box.classList.replace("green","red")
})
box.addEventListener("mousedown",()=>{
    box.classList.replace("box","short")
})
box.addEventListener("mouseup",()=>{
    if(!box.classList.contains("box") && box.classList.contains("short")){
        box.classList.replace("short","box")
    }
})
box.addEventListener("mousemove",()=>{
    box.classList.add("border")
})