// Creo un ciclo per ogni livello di difficoltà a seconda dei numeri che servono. 
// Itero fino a 100 per ogni cella. 
// La cella la creo con una variabile a cui asseggno la classe cell. 
// Per effettuare l'effetto del click uso l'add event listener con la function "this"
const eleGrid = document.querySelector(".grid")
const eleBtn = document.querySelector(".play")
const eleRst = document.querySelector(".reset")
const eleTitle = document.querySelector(".title");
const arrBombs = []
function getRandomInteger(min,max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}  


eleBtn.addEventListener("click", function (){
    let eleLvl = document.querySelector(".level").value
    if (eleLvl == "easy" ) {
        for (let y = 1; y<= 16 ; y++){
            let randomBomb
            do{
                randomBomb = getRandomInteger(1,100);
            } while (arrBombs.includes(randomBomb))
            arrBombs.push(randomBomb);
     eleGrid.innerHTML = ""
        for (let i = 1; i <= 100 ; i++){    
            const eleCell = document.createElement("div");
            eleTitle.classList.add("hidden")
            eleCell.innerHTML += [i]
            eleCell.classList.add("cells")
            eleGrid.append(eleCell)
            eleGrid.classList.add("show")
            arrCell = document.querySelectorAll(".cells")
            eleCell.addEventListener("click", function (){
                
                if (arrBombs.includes(i)) {
                   this.classList.add("bomb")
                   for(i=0; i<y; i++){
                    arrCell[arrBombs[i]].classList.add("bomb")
                    let eleLost = document.querySelector(.lost).classList.add("show")
                    eleLost.innerHTML += 
                   }
                    
               }else{
                    this.classList.add("colored")
                    arrSelected = document.querySelectorAll("colored")
                }
            })
            
} 
}

      
    }else if (eleLvl == "normal"){
        eleGrid.innerHTML = ""
        for (let i = 1; i <= 81 ; i++){
            const eleCell = document.createElement("div");
            eleTitle.classList.add("hidden")
            eleCell.innerHTML += [i]
            eleCell.classList.add("cellsnormal")
            eleGrid.append(eleCell)
            eleGrid.classList.add("show")
            eleCell.addEventListener("click", function (){
                this.classList.toggle("colored")
            }) 
        }   
    } else{
        eleGrid.innerHTML = ""
        for (let i = 1; i <= 50 ; i++){
            const eleCell = document.createElement("div");
            eleTitle.classList.add("hidden")
            eleCell.innerHTML += [i]
            eleCell.classList.add("cellsshard")
            eleGrid.append(eleCell)
            eleGrid.classList.add("show")  
            eleCell.addEventListener("click", function (){
                this.classList.toggle("colored")
            }) 
        }   
    }
   


})
eleRst.addEventListener("click", function (){
    eleGrid.classList.remove("show")
    eleTitle.classList.remove("hidden")
})

