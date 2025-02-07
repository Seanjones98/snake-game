const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 400;

let snake = [{ x: 200, y: 200 }];
let food = { x: 100, y: 100 };
let dx = 20;
let dy = 0;

function drawSnake() {
    ctx.fillStyle = "lime";
    snake.forEach(part => ctx.fillRect(part.x, part.y, 20, 20));
}

function drawFood() {
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, 20, 20);
}

function updateSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
        food = { x: Math.floor(Math.random() * 20) * 20, y: Math.floor(Math.random() * 20) * 20 };
    } else {
        snake.pop();
    }
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFood();
    drawSnake();
    updateSnake();
}

document.addEventListener("keydown", event => {
    if (event.key === "ArrowUp" && dy === 0) { dx = 0; dy = -20; }
    if (event.key === "ArrowDown" && dy === 0) { dx = 0; dy = 20; }
    if (event.key === "ArrowLeft" && dx === 0) { dx = -20; dy = 0; }
    if (event.key === "ArrowRight" && dx === 0) { dx = 20; dy = 0; }
});

setInterval(gameLoop, 100);
