window.onload = function() {
    let tableBody = document.getElementById("tbody");
    let row = document.createElement("tr");
    let cell = document.createElement("td");
    
    cell.innerText = navigator.appCodeName;
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.innerText = navigator.appName;
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.innerText = navigator.appVersion;
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.innerText = navigator.product;
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.innerText = navigator.platform;
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.innerText = navigator.cookieEnabled;
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.innerText = navigator.onLine;
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.innerText = navigator.language;
    row.appendChild(cell);

    tableBody.appendChild(row);
};