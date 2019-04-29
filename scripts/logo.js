$(document).ready(function() {
    let logoBoard = document.getElementById("logo-board");
    let width = logoBoard.width;
    let height = logoBoard.height;
    
    let upPoint = new Point(0, 0);
    let bottomPoint = new Point(0, height);
    let rightPoint = new Point(width / 2, height / 2);
    
    let ctx = logoBoard.getContext('2d');
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(bottomPoint.x, bottomPoint.y);
    ctx.lineTo(rightPoint.x, rightPoint.y);
    ctx.fill();
});