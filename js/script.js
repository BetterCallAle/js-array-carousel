//create a array with img names
const imgArray = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];
console.log(imgArray);

//create 5 elements in the DOM with for cycle
for(let i = 0; i < imgArray.length; i++){
    const thisImg = imgArray[i];

    const imgItem = document.createElement("div");
    imgItem.classList.add("img-item");

    const imgElement = `<img src="${thisImg}" alt="Immagine del carosello">`
    
    imgItem.innerHTML = imgElement
    console.log(imgItem);
}