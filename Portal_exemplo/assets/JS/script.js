var slideItem=0;
window.onload=function (){//Funcao resposnavel por fazer o slide andar
	setInterval(passarSlide,5000);
	
	
	var slidewidth = document.getElementById("slideShow").offsetWidth;
	var objs=document.getElementsByClassName("Slide");//seta a classe que sera o slide aqui
	for(var i in objs){
		objs[i].style.width= slidewidth+'px';
	}
}

		
function passarSlide(){
	var slidewidth = document.getElementById("slideShow").offsetWidth;
	if(slideItem>=3){
		slideItem=0;
	}else{
		slideItem++;
	}
	document.getElementsByClassName("SlideShowArea")[0].style.marginLeft="-"+(slidewidth *slideItem)+"px";
}
function mudarSlide(pos){
	slideItem=pos;
	var slidewidth = document.getElementById("slideShow").offsetWidth;
	document.getElementsByClassName("SlideShowArea")[0].style.marginLeft="-"+(slidewidth *slideItem)+"px";
}
