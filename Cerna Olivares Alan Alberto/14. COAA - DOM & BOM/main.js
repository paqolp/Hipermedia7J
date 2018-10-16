var button = document.getElementById("clickme"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Click me: " + count;
};

var button2 = document.getElementById("urlButton")
button2.onclick = function() {
    let url = window.location.href;
    document.getElementById("urlName").value = url;
};

function openWin() {
    let myWindow;
    myWindow=window.open("", "", "width=400, height=200");
}