function w3_open() {
    document.getElementById('mySidebar').style.display = 'block';
    document.getElementById('myOverlay').style.display = 'block';
}

function w3_close() {
    document.getElementById('mySidebar').style.display = 'none';
    document.getElementById('myOverlay').style.display = 'none';
}

function neutral() {
    
    var text = document.getElementsByClassName('text-change');
    var card = document.getElementsByClassName('card');
    var hr = document.getElementsByTagName('hr');
    var li = document.getElementsByTagName('li');
    var h3 = document.getElementsByTagName('h3');
    var p = document.getElementsByTagName('p');
    
    for (i = 0; i < card.length; i++) card[i].style.backgroundColor = '#F2F2F2';
    for (i = 0; i < text.length; i++) text[i].style.color = '#f44336';
    for (i = 0; i < hr.length; i++) hr[i].style.borderColor = '#f44336';
    for (i = 0; i < h3.length; i++) h3[i].style.color = '#000000';
    for (i = 0; i < li.length; i++) li[i].style.color = '#000000';
    for (i = 0; i < p.length; i++) p[i].style.color = '#000000';
    
    document.body.style.backgroundColor = '#ffffff';
    document.getElementById('img1').src = 'img/1.jpg';
    document.getElementById('img2').src = 'img/2.jpg';
    document.getElementById('title').style.color = '#000000';
    document.getElementById('boton').style.backgroundColor = '#f44336';
    document.getElementById('footer').style.backgroundColor = '#F4D4D2';
    document.getElementById('mySidebar').style.backgroundColor = '#f44336';
    
    w3_close();

}

function colorful() {
    
    var text = document.getElementsByClassName('text-change');
    var card = document.getElementsByClassName('card');
    var hr = document.getElementsByTagName('hr');
    var li = document.getElementsByTagName('li');
    var h3 = document.getElementsByTagName('h3');
    var p = document.getElementsByTagName('p');

    for (i = 0; i < card.length; i++) card[i].style.backgroundColor = '#00EDB1';
    for (i = 0; i < text.length; i++) text[i].style.color = '#b250d3';
    for (i = 0; i < hr.length; i++) hr[i].style.borderColor = '#51FFD3';
    for (i = 0; i < h3.length; i++) h3[i].style.color = '#007A5B';
    for (i = 0; i < li.length; i++) li[i].style.color = '#007A5B';
    for (i = 0; i < p.length; i++) p[i].style.color = '#007A5B';

    document.body.style.backgroundColor = '#FDF5BF';
    document.getElementById('img1').src = 'img/3.jpg';
    document.getElementById('img2').src = 'img/4.jpg';
    document.getElementById('title').style.color = '#F7BC1B';
    document.getElementById('boton').style.backgroundColor = '#b250d3';
    document.getElementById('footer').style.backgroundColor = '#51FFD3';
    document.getElementById('mySidebar').style.backgroundColor = '#b250d3';
    
    w3_close();

}

function dark() {
    
    var text = document.getElementsByClassName('text-change');
    var card = document.getElementsByClassName('card');
    var hr = document.getElementsByTagName('hr');
    var li = document.getElementsByTagName('li');
    var h3 = document.getElementsByTagName('h3');
    var p = document.getElementsByTagName('p');
    
    for (i = 0; i < card.length; i++) card[i].style.backgroundColor = '#3D3D3D';
    for (i = 0; i < text.length; i++) text[i].style.color = '#ffffff';
    for (i = 0; i < hr.length; i++) hr[i].style.borderColor = '#ffffff';
    for (i = 0; i < h3.length; i++) h3[i].style.color = '#ffffff';
    for (i = 0; i < li.length; i++) li[i].style.color = '#ffffff';
    for (i = 0; i < p.length; i++) p[i].style.color = '#ffffff';

    document.body.style.backgroundColor = '#9797A0';
    document.getElementById('img1').src = 'img/5.jpg';
    document.getElementById('img2').src = 'img/6.jpg';
    document.getElementById('title').style.color = '#000000';
    document.getElementById('boton').style.backgroundColor = '#000000';
    document.getElementById('footer').style.backgroundColor = '#3D3D3D';
    document.getElementById('mySidebar').style.backgroundColor = '#000000';
    
    w3_close();

}

window.onload = neutral;