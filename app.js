const wrapper = document.querySelector(".sliderWrapper")

const menuItem = document.querySelectorAll(".menuItem")

// wrapper.style.transform = "translateX(-300vw)"

menuItem.forEach((item , index) =>{
    item.addEventListener("click" , () =>{
        console.log("Item was clicked", + index)
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
    })
})