//create a array with img names
const imgArray = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];


//export the div "item" from DOM
const container = document.querySelector(".item")



//create 5 div elements with for cycle
for(let i = 0; i < imgArray.length; i++){
    const thisImg = imgArray[i];

    const imgItem = document.createElement("div");
    imgItem.classList.add("img-item");
    imgItem.classList.add("hidden")
    
    container.append(imgItem)

    const imgElement = `<img src="${thisImg}" alt="Immagine del carosello">`
    
    imgItem.innerHTML = imgElement
}

//export the 5 div created before
const imgItemExported = document.getElementsByClassName("img-item")
console.log(imgItemExported);

//export the 2 buttons
const nextBtn = document.querySelector(".btn-down")
const prevBtn = document.querySelector(".btn-up")
