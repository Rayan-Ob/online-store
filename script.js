let products = [
    {
        category: "bag",
        images: ["./images/bagone.jfif", "./images/bag2.jfif", "./images/bag11.jfif" ,"./images/bag3.jfif","./images/bag6.jfif","./images/bag4.jfif"]
    },
    {

        category: "camera",
        images: ["./images/camera3.jfif","./images/camera4.jfif","./images/camera1.jfif","./images/camera2.jfif","./images/camera6.jfif"]
    },
    {

        category: "watch",
        images: ["./images/watch6.jfif", "./images/watch2.jfif","./images/watch3.jfif","./images/watch4.jfif","./images/watch5.jfif"]
    },

    {

        category: "mobile",
        images: ["./images/mobile1.avif", "./images/mobile2.avif","./images/mobile3.webp","./images/mob4.avif","./images/mob5.avif"]
    },
    {

        category: "perfume",
        images: ["./images/perfume1.avif", "./images/perfume2.avif","./images/perfume5.avif"]
    },
    {

        category: "makeup",
        images: ["./images/makeup1.avif", "./images/makeup2.avif","./images/makeup3.avif","./images/makeup4.avif","./images/makeup5.avif","./images/makeup6.avif"]
    }

]

let container = document.querySelector('.container')
let pop = document.querySelector('.popup')
let clos = document.querySelector('#clos')
let slider=document.querySelector('.slider')
let total =document.querySelector('#total')
let counter = 0;
let img = document.querySelector(".slider img")
let selectProduct;
let next=document.querySelector('#next')
let prev=document.querySelector('#prev')
let ImgNumber=document.querySelector('#ImgNumber')


products.forEach(element =>{
    container.innerHTML +=
     `<div>
    <img src="${element.images[0]}" id="${element.category}" >
    <p>${element.category}</p>
    </div>`
})

let images = document.querySelectorAll('.container img')
console.log(images)

images.forEach(element =>{
    // open popup
    element.addEventListener("click",()=>{  
        pop.style.display="block"
        // console.log(element.id)
        counter=0
        prev.style.visibility="hidden"
       next.style.visibility="visible"

        ImgNumber.innerHTML=1


        let category=element.id
    selectProduct=products.find(element =>{
            return element.category == category
        })
        // console.log(selectProduct)
        console.log(selectProduct.images)
        // slider.innerHTML=""
        // selectProduct.images.forEach(element =>{
        //     slider.innerHTML += `<img src="${element}" />`
        // })
        img.src = selectProduct.images[0]
        total.innerHTML=selectProduct.images.length
    })
})

clos.addEventListener("click",()=>{
    pop.style.display="none"
})



prev.addEventListener("click",()=>{
    if(counter>0){
        next.style.visibility="visible"

        counter--;

        img.src=selectProduct.images[counter]
        ImgNumber.innerHTML=counter+1
        if(counter==0){
            prev.style.visibility="hidden"
        }
        
    }


})

next.addEventListener("click",()=>{
    if(counter<selectProduct.images.length-1){
        prev.style.visibility="visible"

        counter++
        img.src=selectProduct.images[counter]
        ImgNumber.innerHTML=counter+1
        if(counter==selectProduct.images.length-1){
           next.style.visibility="hidden"
        }
        
    }
})