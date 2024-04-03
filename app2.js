let NumberOfDrumButtons = document.querySelectorAll(".drum").length;
gay()
function gay(){
    for(let i = 0; i < NumberOfDrumButtons; i++){
        document.querySelectorAll("button")[i].addEventListener("click", function(){
    
            switch(i){
                case 0:
                    this.style.background = "red";
                    this.addEventListener("click", azul)
                    break;
                case 1:
                    this.style.background = "blue";
                    this.addEventListener("click", verde)
                    break;     
            }

            function azul(){
                this.style.background = "blue";
                this.addEventListener("click", function(){
                    this.style.background = "";
                    gay()
                }) 
            }
          
            function verde(){
                this.style.background = "green";
                this.addEventListener("click", function(){
                    this.style.background = "";
                    gay()
                }) 
            }
    
        });
    
    };
}

