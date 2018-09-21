let THEMES = {
    FIRST_THEME: 1,
    SECOND_THEME: 2,
    THIRD_THEME: 3  
};

changeTheme.currentTheme = THEMES.FIRST_THEME;

function changeTheme() {
    switch(changeTheme.currentTheme) {
        case THEMES.FIRST_THEME:
            changeTheme.currentTheme = THEMES.SECOND_THEME;
            changeToSecondTheme();
            break;
        
        case THEMES.SECOND_THEME:
            changeTheme.currentTheme = THEMES.THIRD_THEME;
            changeToThirdTheme();
            break;

        default:
            changeTheme.currentTheme = THEMES.FIRST_THEME;
            changeToFirstTheme();
    }
}

function getElement(id) {
    return document.getElementById(id);
}

function swapColumns(firstColumn, secondColumn, orderFirstColumn, orderSecondColumn, urlImage) {
    firstColumn.className = "col-6 " + orderFirstColumn + " my-auto showcase-text";
    secondColumn.className = "col-6 " + orderSecondColumn + " showcase-img";

    firstColumn.style.backgroundImage = "";
    secondColumn.style.backgroundImage = "url('img/" + urlImage + "')";

    while (secondColumn.childNodes.length > 0)
        firstColumn.appendChild(secondColumn.childNodes[0]);
}

function changeIconsColor(classColor) {
    getElement("icon-1").className = "icon-calendar m-auto " + classColor;
    getElement("icon-2").className = "icon-location-pin m-auto " + classColor;
    getElement("icon-3").className = "icon-credit-card m-auto " + classColor;
}

function changeHeaderBackgroundImage(filename) {
    getElement("header").style.background = "url('" + filename + "') no-repeat center center";
    getElement("header").style.backgroundSize = "cover";
}

function changeNavbarStyle(navbarClassStyle, navbarClassBackgroundColor, buttonClassColor) {
    getElement("navbar").className = "navbar navbar-expand " + navbarClassStyle + " " + navbarClassBackgroundColor + " fixed-top";
    getElement("changeTheme").className = "btn " + buttonClassColor;
}

function changeFooterTextColor(classColor) {
    getElement("about-us").className = classColor;
    getElement("contact").className = classColor;
    getElement("terms-use").className = classColor;
    getElement("privacy-policy").className = classColor;
    getElement("facebook").className = classColor;
    getElement("twitter").className = classColor;
    getElement("instagram").className = classColor;
}

/*
 * First theme: white.
 */
function changeToFirstTheme() {
    changeNavbarStyle("navbar-light", "bg-light", "btn-light");
    changeHeaderBackgroundImage("img/wallpaper_1.jpg")
    getElement("features").className = "features-icons bg-white text-center";
    changeIconsColor("text-primary");
    swapColumns(getElement("destination-2-col-2"), getElement("destination-2-col-1"), "order-2", "order-1", "destination_2.jpg");
    getElement("showcase").className = "showcase";
    getElement("rooms").className = "testimonials text-center bg-white";
    getElement("contact-us").className = "call-to-action bg-white";
    getElement("send-message").className = "btn btn-success btn-outline-success btn-block";
    getElement("footer").className = "footer bg-white";
    changeFooterTextColor("");
    getElement("copyright").className = "text-muted mb-4";
}

/*
 * Second theme: dark.
 */
function changeToSecondTheme() {
    changeNavbarStyle("navbar-dark", "bg-dark", "btn-dark");
    changeHeaderBackgroundImage("img/wallpaper_2.jpg");
    getElement("features").className = "features-icons bg-dark text-white text-center";
    changeIconsColor("text-white");
    swapColumns(getElement("destination-1-col-1"), getElement("destination-1-col-2"), "order-2", "order-1", "destination_1.jpg");
    swapColumns(getElement("destination-2-col-2"), getElement("destination-2-col-1"), "order-1", "order-2", "destination_2.jpg");
    swapColumns(getElement("destination-3-col-1"), getElement("destination-3-col-2"), "order-2", "order-1", "destination_3.jpg");
    getElement("showcase").className = "showcase bg-dark text-white";
    getElement("rooms").className = "testimonials text-center bg-dark text-white";
    getElement("contact-us").classList = "call-to-action bg-dark text-white";
    getElement("send-message").classList = "btn btn-light btn-outline-light btn-block";
    getElement("footer").className = "footer bg-dark";
    changeFooterTextColor("text-white");
    getElement("copyright").className = "text-white mb-4";
}

/*
 * Third theme: grey.
 */
function changeToThirdTheme() {
    changeNavbarStyle("navbar-dark", "bg-secondary", "btn-secondary");
    changeHeaderBackgroundImage("img/wallpaper_3.jpg");
    getElement("features").className = "features-icons bg-secondary text-white text-center";
    changeIconsColor("text-light");
    swapColumns(getElement("destination-1-col-1"), getElement("destination-1-col-2"), "order-1", "order-2", "destination_1.jpg");
    swapColumns(getElement("destination-3-col-1"), getElement("destination-3-col-2"), "order-1", "order-2", "destination_3.jpg");
    getElement("showcase").className = "showcase bg-secondary text-white";
    getElement("rooms").className = "testimonials text-center bg-secondary text-white";
    getElement("contact-us").classList = "call-to-action bg-secondary text-white";
    getElement("send-message").classList = "btn btn-light btn-outline-light btn-block";
    getElement("footer").className = "footer bg-secondary";
    changeFooterTextColor("text-white");
    getElement("copyright").className = "text-white mb-4";
}