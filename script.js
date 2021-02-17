//SLIDER
const slider =  document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider-section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin',sliderSectionLast);

function Next() {
	let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
	slider.style.marginLeft = "-200%";
	slider.style.transition = "all .5s";
	setTimeout(function() {
		slider.style.transition = "none";
		slider.insertAdjacentElement('beforeend',sliderSectionFirst);
		slider.style.marginLeft = "-100%";
	},500);
}

function Prev() {
	let sliderSection = document.querySelectorAll(".slider-section");
	let sliderSectionLast = sliderSection[sliderSection.length -1];
	slider.style.marginLeft = "0";
	slider.style.transition = "all .5s";
	setTimeout(function() {
		slider.style.transition = "none";
		slider.insertAdjacentElement('afterbegin',sliderSectionLast);
		slider.style.marginLeft = "-100%";
	},500);
}
btnRight.addEventListener('click',Next);
btnLeft.addEventListener('click',Prev);

setInterval(Next,4000);


//MENU 
const imagen = document.querySelectorAll(".img");

document.getElementById("hamburguesa").addEventListener("click",()=> {
    imagen[0].removeAttribute("hidden");
    imagen[1].setAttribute("hidden","true");
    imagen[2].setAttribute("hidden","true");
    imagen[3].setAttribute("hidden","true");
});
document.getElementById("perro").addEventListener("click",()=> {
    imagen[0].setAttribute("hidden","true");
    imagen[1].removeAttribute("hidden");
    imagen[2].setAttribute("hidden","true");
    imagen[3].setAttribute("hidden","true");
})
document.getElementById("sandwich").addEventListener("click",()=> {
    imagen[0].setAttribute("hidden","true");
    imagen[1].setAttribute("hidden","true");
    imagen[2].removeAttribute("hidden")
    imagen[3].setAttribute("hidden","true");
})
document.getElementById("pizza").addEventListener("click",()=> {
    imagen[0].setAttribute("hidden","true");
    imagen[1].setAttribute("hidden","true");
    imagen[2].setAttribute("hidden","true");
    imagen[3].removeAttribute("hidden");
})
