var noStyle = 2;
function styleCH(){
	document.getElementById('hojaEstilo').href='source/styles'+ noStyle +'.css';
		noStyle ++;
	if (noStyle > 3) {
		noStyle = 1;
	} 
}