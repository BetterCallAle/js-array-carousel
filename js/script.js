//create a array with img names
const imgArray = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];


//export the div "item" from DOM
const container = document.querySelector(".carousel-container")



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
imgItemExported[0].classList.remove("hidden")

//export the 2 buttons
const nextBtn = document.querySelector(".btn-down")
const prevBtn = document.querySelector(".btn-up")

//export the preview div
const previewContainer = document.querySelector(".preview-images");

for(let index = 0; index < imgArray.length; index++){
    const thisElement = imgArray[index];

    const imgPreviewItem = document.createElement("div");
    imgPreviewItem.classList.add("preview-img");
    
    previewContainer.append(imgPreviewItem)

    const imgPreviewElement = `<img src="${thisElement}" alt="Immagine del carosello">`
    
    imgPreviewItem.innerHTML = imgPreviewElement
} 

const imgPreviewItemExported = document.getElementsByClassName("preview-img")
console.log(previewContainer);
imgPreviewItemExported[0].classList.add("active")

//create an element for count the index of imgItemExported
let indexNumber = 0;



//create an event on click for nextBtn
nextBtn.addEventListener("click", function() {

    imgItemExported[indexNumber].classList.add("hidden");
    imgPreviewItemExported[indexNumber].classList.remove("active")

    if(indexNumber < (imgItemExported.length - 1)){

        indexNumber++

    }  else {

        indexNumber = 0

    }
    
    
    imgItemExported[indexNumber].classList.remove("hidden");
    imgPreviewItemExported[indexNumber].classList.add("active")
       
})

//create an event on click for prevBtn
prevBtn.addEventListener("click", function(){

    imgItemExported[indexNumber].classList.add("hidden");
    imgPreviewItemExported[indexNumber].classList.remove("active")

    if(indexNumber > 0){

        indexNumber--
    
    } else {
        
        indexNumber = imgItemExported.length - 1

    }

    imgItemExported[indexNumber].classList.remove("hidden");
    imgPreviewItemExported[indexNumber].classList.add("active")
})