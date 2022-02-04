"use strict"


let producto=20000;
let descuento=0;

if( producto<=30000){
    descuento= producto};

if(producto >30000 && producto<100000){
descuento= (producto * 0.05) - producto};


if(producto >100000){
descuento= (producto * 0.10) - producto};

console.log ("el valor total es de", descuento);
