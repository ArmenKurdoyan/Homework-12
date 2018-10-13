'use strict';

let toStartCars = [];
let toStartTrack = [];

const carAddreses = {
    "Mercedes": document.getElementsByClassName(`car`)[0],
    "BMW": document.getElementsByClassName(`car`)[1],
    "Toyota": document.getElementsByClassName(`car`)[2],
    "Lexus": document.getElementsByClassName(`car`)[3],
    'Audi': document.getElementsByClassName(`car`)[4],
};

const trackAddreses = {
    Asphalt: document.getElementsByClassName(`track`)[0],
    Ice: document.getElementsByClassName(`track`)[1],
    Ground: document.getElementsByClassName(`track`)[2],
}

window.onload = function() {
    
    const cars = getAllCars();
    const tracks = getAllTracks();
    
    addEventCars(cars);
    addEventTracks(tracks);
    addEventStart();
}