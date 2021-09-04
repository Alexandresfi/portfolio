function menu(){
    let menu = document.getElementsByTagName("nav")[0];
    menu.classList.toggle("open");

    sizeProfi()
}

function sizeProfi(){
    let profi = document.getElementsByClassName("profi")[0];
    profi.classList.toggle("size");
}