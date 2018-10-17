window.onload = function () {

    let pathNode = document.createElement("LI");
    let platformNode = document.createElement("LI");
    let langNode = document.createElement("LI");

    pathNode.appendChild(document.createTextNode(location.pathname));
    platformNode.appendChild(document.createTextNode(navigator.platform));
    langNode.appendChild(document.createTextNode(navigator.language));

    document.getElementById("content").appendChild(pathNode);
    document.getElementById("content").appendChild(platformNode);
    document.getElementById("content").appendChild(langNode);
}