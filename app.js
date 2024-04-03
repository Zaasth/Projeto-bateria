let audios = [
    new Audio('sounds/crash.mp3'),
    new Audio('sounds/kick-bass.mp3'),
    new Audio('sounds/snare.mp3'),
    new Audio('sounds/tom-1.mp3'), 
    new Audio('sounds/tom-2.mp3'), 
    new Audio('sounds/tom-3.mp3'),
    new Audio('sounds/tom-4.mp3')
];
const BtnLength = document.querySelectorAll("button").length;
const Btn = document.querySelectorAll("button");
const Timer = 350;
TocarAudio();
    
    for (let i = 0; i < BtnLength; i++) {
        Btn[i].addEventListener("click", function(){
            switch (i) {
                case 0:
                    audios[i].play();
                    Btn[i].classList.add("pressed");
                    setTimeout(function(){
                        Btn[i].classList.remove("pressed");
                    }, Timer)
                break;
                case 1:
                    audios[i].play();
                    Btn[i].classList.add("pressed");
                    setTimeout(function(){
                        Btn[i].classList.remove("pressed");
                    }, Timer)
                break;
                case 2:
                    audios[i].play();
                    Btn[i].classList.add("pressed");
                    setTimeout(function(){
                        Btn[i].classList.remove("pressed");
                    }, Timer)
                break;
                case 3:
                    audios[i].play();
                    Btn[i].classList.add("pressed");
                    setTimeout(function(){
                        Btn[i].classList.remove("pressed");
                    }, Timer)
                break;
                case 4:
                    audios[i].play();
                    Btn[i].classList.add("pressed");
                    setTimeout(function(){
                        Btn[i].classList.remove("pressed");
                    }, Timer)
                break;
                case 5:
                    audios[i].play();
                    Btn[i].classList.add("pressed");
                    setTimeout(function(){
                        Btn[i].classList.remove("pressed");
                    }, Timer)
                break;
                case 6:
                    audios[i].play();
                    Btn[i].classList.add("pressed");
                    setTimeout(function(){
                        Btn[i].classList.remove("pressed");
                    }, Timer)
                break;
                case 7:
                    audios[i].play();
                    Btn[i].classList.add("pressed");
                    setTimeout(function(){
                        Btn[i].classList.remove("pressed");
                    }, Timer)
                break;
                default:
                    alert("Ocorreu algum erro, recarregue a página.");
                    break;
            }
            
        });
        
    }
    
/* FUNÇÕES */
function TocarAudio(){
    let audioswitch = document.getElementsByClassName("audio");
    
    window.addEventListener("keyup", function(e){
        console.log(e);
        e.preventDefault();
        switch(e.code){
            case "KeyW":
            audios[0].play();
            console.log("pressionando "+e.code);      
            ScaleBtn("w");  
            break;
            case "KeyA":
            audios[1].play();
            console.log("pressionando "+e.code);
            ScaleBtn("a"); 
            break;
            case "KeyS":
            audios[2].play();
            console.log("pressionando "+e.code);
            ScaleBtn("s"); 
            break;
            case "KeyD":
            audios[3].play();
            console.log("pressionando "+e.code);
            ScaleBtn("d"); 
            break;
            case "KeyJ":
            audios[4].play();
            console.log("pressionando "+e.code);
            ScaleBtn("j"); 
            break;
            case "KeyK":
            audios[5].play();
            console.log("pressionando "+e.code);
            ScaleBtn("k"); 
            break;
            case "KeyL":
            audios[6].play();
            console.log("pressionando "+e.code);
            ScaleBtn("l"); 
            break;
        }  

        function ScaleBtn(name){
            let name1 = "."+name;
            document.querySelector(`${name1}`).style.transform = "scale(1.15)";
            document.querySelector(`${name1}`).style.transitionDuration = "0.5s";
            window.addEventListener("keydown", function(e){
                name = name.toUpperCase();
                
                switch(e.code){
                    case "Key"+name:
                            document.querySelector(`${name1}`).style.transform = "scale(1.15)";
                            document.querySelector(`${name1}`).style.transitionDuration = "0.5s";
                        break;
                    default:
                            document.querySelector(`${name1}`).style.transform = "scale(1)";
                            document.querySelector(`${name1}`).style.transitionDuration = "0.5s";
                        break;
                }
            });
        }

    });

}
