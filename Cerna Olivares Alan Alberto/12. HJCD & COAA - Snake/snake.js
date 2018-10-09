//lo primero para dibujar en un elemento canvas es obtener la referencia con el ID
const myCanvas = document.getElementById("myCanvas");

//con canvas es posible dibujar en dos dimensiones
const context = myCanvas.getContext("2d")


//establece el tamaño del head
const SIZE = 20;

//coordenadas de "x" y "y"
const head = { x: 0, y: 0 };

//arreglo de objetos con sus propias coordenadas
const body = [];

let food = null; //valores x y y;

let dx = 0;//expresa la variacion en x
let dy = 0;//expresa la variacion en y

let lastAxis; //captura el valor del ultimo eje

//la funcion draw se ejecutara cada segundo
setInterval(main, 30);

//la funcion main contendra toda la logica del juego
function main(){
    update(); //actualizara el valor de cada una de las variables segun el jugador
    draw(); //despues de actualizar dibujara los objetos del juego
}

function update(){
    //colision
    const collisionDetected = checkSnakeCollision();

    if (collisionDetected){
        gameOver();
        return;
    }

    //guardar posicion de la cabeza de la serpiente
    let prevX, prevY;

    if (body.length >= 1)
    {
        prevX = body[body.length-1].x;
        prevY = body[body.length-1].y;
    } else{
        prevX = head.x;
        prevY = head.y;
    }

    //cuerpo de la serpiente siga la cabeza (ultimo sigue al penultimo)
    for (let i = body.length-1; i >= 1; --i) {
        body[i].x = body[i-1].x; //asignacion por referencia  NOTA:DATOS PRIMITIVOS SE PASA POR VALOR OBJETOS O ARREGLOS DIRECTOS POR REFERENCIA
        body[i].y = body[i-1].y;
    }
    if (body.length >= 1){
        body[0].x = head.x;
        body[0].y = head.y;
    }

    //Actualizar coordenadas de la cabeza de la serpiente
    head.x += dx; //expresa la variacion en x
    head.y += dy; //expresa variacion en y
    if (dx !== 0){
        lastAxis = "X";
    } else if (dy !== 0){
        lastAxis = "Y";
    }

    //detectar si la serpiente ha consumido el alimento
    if (food && head.x === food.x && head.y === food.y){
        food = null;

        //aumentar el tamaño de la serpiente
        increaseSnakeSize(prevX, prevY);
    }

    //genera alimento si no existe
    if (!food){
        food = randomFoodPosition();
    }
}

function checkSnakeCollision(){
    //Se genera la colision cuando las cordenadas de la cabeza sean igual a alguna de las cordenadas del cuerpo
    for (let i = 0; i < body.length; ++i) {
        if (head.x === body[i].x && head.y === body[i].y){
            return true;
        }
    }

    //verificicar que la serpiente no se salga de los limites permitidos
    const topCollision = (head.y < 0); //valor en x ? y valor en y: 0
    const bottomCollision = (head.y > (myCanvas.height-20));
    const rightCollision = (head.x < 0);
    const leftCollision = (head.x > (myCanvas.width-20));

    if (topCollision || bottomCollision || rightCollision || leftCollision){
        return true;
    }

    return false;
}

function gameOver(){
    alert("Has perdido")
    head.x = 0;
    head.y = 0;
    dx = 0;
    dy = 0;
    body.length = 0;
}

//añadir nuevo cuadrado al final de la serpiente usando como cordenada el ultimo elemento de la serpiente 
function increaseSnakeSize(prevX, prevY){
    body.push({
        x: prevX, y: prevY 
    });
}

function randomFoodPosition(){
    let position;

    do{
        position = { x: getRandomX(), y: getRandomY() };
    }while(checkFoodCollision(position));

    return position;   
}

function checkFoodCollision(position){
    //verificar posicion del alimento con respecto a la serpiente
    for (let i = 0; i < body.length; ++i) {
        if (position.x == body[i].x && position.y == body[i].y){
            return true;
        }
    }

    //comparar coordenadas del alimento generado con la cabeza de la serpiente
    if (position.x == head.x && position.y == head.y){
        return true;
    }

    return false;
}

function getRandomX(){
    //valor aleatorio multiplo de 20 NOTA valor maximo 380
    return 20 * (parseInt(Math.random() * 20));
}

function getRandomY(){
    //valor aleatorio multiplo de 20 NOTA valor maximo 380
    return 20 * (parseInt(Math.random() * 23));
}

//le aumenta un cuadro cada segundo
function draw(){
    context.fillStyle = "black"; //define fondo
    context.fillRect(0, 0, myCanvas.width, myCanvas.height);//limpiar el contexto

    drawObject(head, "lime");
    body.forEach(
        elem => drawObject(elem, "lime")
    );

    drawObject(food, "red");
}

//recibes u objeto para dubujarlo
function drawObject(obj, color){
    context.fillStyle = color;
    context.fillRect(obj.x,obj.y,SIZE,SIZE);
}


//el evento keypress no en todos los navegadores funciona con las flechas pero el keydown si
//event.key hace referencia al atributo key del objeto keydown
document.addEventListener("keydown", moveSnake);

function moveSnake(event)
{
    switch (event.key) 
    {
        case "ArrowUp":
            if (lastAxis !== "Y"){
                dx = 0;
                dy = -SIZE;
                console.log("Mover arriba");
            }
            break;

        case "ArrowDown":
            if (lastAxis !== "Y"){
                dx = 0;
                dy = SIZE;
                console.log("Mover abajo");
            }
            break;

        case "ArrowLeft":
            if (lastAxis !== "X"){
                dx = -SIZE;
                dy = 0;
                console.log("Mover izquierda");
            }
            break;

        case "ArrowRight":
            if (lastAxis !== "X"){
                dx = SIZE;
                dy = 0;
                console.log("Mover derecha");
            }
            break;
    
        default:
            break;
    }
}