var cont = 0;
function AddDiv()
{
    cambiarColor = new function(){
        console.log('Hola')
    }
	DivObj = document.createElement("div");
	DivObj.setAttribute("onclick","cambiarColor()");
	DivObj.style.background = IdColorBack.value;
	DivObj.style.borderWidth = IdBorde.value;
	DivObj.style.borderStyle = 'solid';
	DivObj.style.borderColor = IdColorBorde.value;
	DivObj.style.width = '25px';
	DivObj.style.height = '25px';
	DivObj.style.display = 'inline-block';
	DivObj.style.margin = '5px';
	document.body.appendChild(DivObj);

	if(document.querySelector(".div") != null)
	{
		var w = window.addEventListener("click", (data)=> {
			console.log(data),
			myEvento()});
		function myEvento()
		{
			DivObj.style.borderWidth = IdBorde.value;
			DivObj.style.borderStyle = 'dotted';
			DivObj.style.borderColor = IdColorBorde.value;
		}
	}
	cont++;
}


    