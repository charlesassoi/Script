// Création d'un élément canvas
var canvas = document.createElement('canvas');
canvas.width = 200; // Largeur de l'image
canvas.height = 200; // Hauteur de l'image
document.body.appendChild(canvas); // Ajout du canvas au corps du document

// Récupération du contexte 2D du canvas
var ctx = canvas.getContext('2d');

// Dessin d'un cercle pour représenter le corps du poulet
ctx.beginPath();
ctx.arc(100, 100, 80, 0, 2 * Math.PI);
ctx.fillStyle = 'yellow';
ctx.fill();
ctx.closePath();

// Dessin de deux cercles pour les yeux
ctx.beginPath();
ctx.arc(80, 80, 10, 0, 2 * Math.PI);
ctx.arc(120, 80, 10, 0, 2 * Math.PI);
ctx.fillStyle = 'black';
ctx.fill();
ctx.closePath();

// Dessin du bec du poulet
ctx.beginPath();
ctx.moveTo(90, 110);
ctx.lineTo(100, 90);
ctx.lineTo(110, 110);
ctx.fillStyle = 'orange';
ctx.fill();
ctx.closePath();
