//Variables Globales 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
let engine;
let world;
var fondo = "bg.png";
var fondo_img;
var pisoooo, pisoimg;
var bace, baceDeLaBace;
var caja;
var palitos;
var chancho;
var resortera, resortera2;
var pajaro;

function preload(){
    fondo_img = loadImage(fondo);
    pisoimg = loadImage("ground.png");
}
function setup(){
    createCanvas(750,540);
    engine = Engine.create()
    world = engine.world;
    bace = new Piso(0,370,200,200)
    pisoooo =new Piso(0,470,950,250);
    caja = new Caja(630,440,30,30);
    palitos = new Palitos(615,410,15,60);
    chancho = new Chancho(637,447,15,15);
    resortera = new Resortera(70,300,20,45);
    pajaro = new Red(68,300,15,15);
}
function draw(){
    //if(fondo)
    background(fondo_img);
    text("pajaros enojados",40,100);
    pisoooo.display();
    bace.display();
    Engine.update(engine);
    caja.display();
    palitos.display();
    chancho.display();
    resortera.display();
    pajaro.display();
}