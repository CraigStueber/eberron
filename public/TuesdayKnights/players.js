var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("wrenSlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

function showstuff(id){
	const i = document.getElementById(id);
	var displayi = i.style.display;
	if(displayi == 'block'){
		i.style.display = 'none'
	}else{
		i.style.display = 'block'
	}
}