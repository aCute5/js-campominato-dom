// Creo un ciclo per ogni livello di difficoltà a seconda dei numeri che servono. 
// Itero fino a 100 per ogni cella. 
// La cella la creo con una variabile a cui asseggno la classe cell. 
// Per effettuare l'effetto del click uso l'add event listener con la function "this"
const eleGrid = document.querySelector(".grid")
const eleBtn = document.querySelector(".play")
const eleRst = document.querySelector(".reset")
const eleTitle = document.querySelector(".title");
const arrBombs = []



eleBtn.addEventListener("click", function (){
    let eleLvl = document.querySelector(".level").value
    if (eleLvl == "easy" ) {
        eleGrid.innerHTML = ""
        for (let i = 1; i <= 100 ; i++){    
            const eleCell = document.createElement("div");
            eleTitle.classList.add("hidden")
            eleCell.innerHTML += [i]
            
            eleCell.classList.add("cells")
            eleGrid.append(eleCell)
            eleGrid.classList.add("show")
            eleCell.addEventListener("click", function (){
                this.classList.toggle("colored")
            })
            
} 
for (let y = 1; y<= 16 ; y++){
    let randomBomb
    const eleBomb = document.querySelector(`<div></div>`);
    do{
        randomBomb = getRandomInteger(1,100);
    } while (arrBombs.includes(randomBomb))
    arrBombs.push(randomBomb);
    if(arrBombs.includes(randomBomb)){
        eleCell.classList.add("bomb")
    }
}

function getRandomInteger(min,max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
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

