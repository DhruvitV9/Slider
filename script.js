const ThreeDotClicked= document.querySelector(".three-dots");
const slider = document.querySelector(".container");
const CrossClicked = document.querySelector(".cut");

let isSliderOpen= false;

const toggleSlider = () => {
   
    if (!isSliderOpen) {
        slider.style.width = window.innerWidth < 768 ? "100vw" : "50vw";
        isSliderOpen = true;
        
    } else {
        slider.style.width = "0";
        isSliderOpen = false;
       
    }
};


ThreeDotClicked.addEventListener("click", toggleSlider)


CrossClicked.addEventListener("click" , ()=>{
    slider.style.width="0";
    isSliderOpen = false;
})



// const handleResize = () => {
 
//     if (isSliderOpen) {
//         slider.style.width = window.innerWidth < 768 ? "100vw" : "50vw"; // Set width for larger screens
//     }
// };


// window.addEventListener('resize', handleResize);










