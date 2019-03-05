window.addEventListener("load", start);

function start() {
    const screen = document.querySelector(".screen");
    const btns = document.querySelectorAll(".btn");
    screen.value = "";
    for(let i=0;i<btns.length;i++) {
        btns[i].addEventListener("click", add);
    }

    function add() {
        
        if(this.value === "=") {
            if(screen.value === "") {
                window.alert("Your input is empty");
            } else {
                screen.value = eval(screen.value);
            }
        }
        else if(this.value === "C") {
            screen.value = "";
        }
        
        else {
            screen.value += this.value;
        }
        
    }

}
