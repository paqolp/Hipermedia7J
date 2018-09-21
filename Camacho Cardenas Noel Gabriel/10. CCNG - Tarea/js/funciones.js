function cambiar(id){
if( document.getElementById(id).classList.contains('red'))
{
    document.getElementById(id).classList.remove('red');
    document.getElementById(id).classList.add('green');
} else if( document.getElementById(id).classList.contains('green'))
    {
        document.getElementById(id).classList.remove('green');
        document.getElementById(id).classList.add('gray');
    }else {
        document.getElementById(id).classList.remove('gray');
        document.getElementById(id).classList.add('red');
    }
}


