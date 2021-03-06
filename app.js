const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];


const body= document.body;
const btn=document.getElementById('btn');
const color = document.querySelector('.color')

btn.addEventListener('click',function(){
	let randomNumber=getRandomNumber();
	body.style.backgroundColor = colors[randomNumber]; 
	color.innerText=colors[randomNumber];
})


function getRandomNumber(){
	return Math.floor(Math.random()*colors.length);
}