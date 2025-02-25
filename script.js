let inputBox = document.querySelector("#text");
let delayBox = document.querySelector("#delay");
let btn = document.querySelector("#btn");

function hello(){
	let output = document.querySelector("#output");
	output.innerText = inputBox.value;
}
btn.addEventListener("click",function(){
	setTimeout(hello,delayBox.value);
})