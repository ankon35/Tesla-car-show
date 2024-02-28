const wrapper = document.querySelector(".sliderWrapper")

const menuItem = document.querySelectorAll(".menuItem")


const products = [
    {
        id: 1,
        title: "Model-X",
        price: 12500,
        colors: [
            {
                code: "green",
                img: "model-x.png",
            },
            {
                code: "pink",
                img: "model-x-pink.jpg",
            },
        ] ,
    },

    {
        id: 2,
        title: "Model-Y",
        price: 22500,
        colors: [
            {
                code: "black",
                img: "model-y.jpg"
            },
            {
                code: "red",
                img: "model-y-red.jpg",
            },
        ] ,
    },

    {
        id: 3,
        title: "Model-S",
        price: 12500,
        colors: [
            {
                code: "black",
                img: "model-s.png",
            },
            {
                code: "red",
                img: "model-s-red.jpg",
            },
        ] ,
    },


    {
        id: 4,
        title: "Model-3",
        price: 12500,
        colors: [
            {
                code: "black",
                img: "model-3.png",
            },
            {
                code: "blue",
                img: "model-3-blue.png",
            },
        ] ,
    },

]


let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg img")

const currentProductTitle = document.querySelector(".productTitle");

const currentProductPrice = document.querySelector(".productPrice");

const currentProductColor = document.querySelectorAll(".color");

// wrapper.style.transform = "translateX(-300vw)"

menuItem.forEach((item , index) =>{
    item.addEventListener("click" , () =>{
        console.log("Item was clicked", + index)

        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index];
        //change the product details 
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
       
       currentProductImg.src = choosenProduct.colors[0].img;
       

       //assigning new color
      currentProductColor.forEach((color , index) => {
        color.style.backgroundColor = choosenProduct.colors[index].code
      })

    })
})


currentProductColor.forEach((color , index)=> {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img
    })
})


const productButton = document.querySelector(".buyButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click" , () => {
    payment.style.display = "flex"
});

close.addEventListener("click" , () => {
    payment.style.display = "none";
})