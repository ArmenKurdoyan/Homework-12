const convas = document.getElementsByClassName(`race-view`)[0];
const start = document.getElementsByClassName("starter")[0];
const carRows = document.getElementsByClassName(`track-of-three`);
const rows = document.getElementsByClassName(`car-to-race`);
const congradulations = document.getElementsByClassName(`congrats`)[0];

function getAllCars(container = []) {
    
    container.push(new Mercedes(`Mercedes`, 48, `file:///D:/AK/ACA/ACA%20JS/Homework%2012/images/mersedes-benz.png`));
    container.push(new BMW(`BMW`, 50, `file:///D:/AK/ACA/ACA%20JS/Homework%2012/images/bmw.png`));
    container.push(new Toyota(`Toyota`, 47, `file:///D:/AK/ACA/ACA%20JS/Homework%2012/images/toyota.png`));
    container.push(new Lexus(`Lexus`, 51, `file:///D:/AK/ACA/ACA%20JS/Homework%2012/images/lexus.png`));
    container.push(new Audi(`Audi`, 49, `file:///D:/AK/ACA/ACA%20JS/Homework%2012/images/sedan-car-front.png`));

    return container;
}

function getAllTracks(container = []) {
    
    container.push(new Asphalt(`Asphalt`, 1.2, convas, `#AEAEAE`));
    container.push(new Ice(`Ice`, 0.7, convas, `aquamarine`));
    container.push(new Ground(`Ground`, 1, convas, `rgb(131, 150, 86)`));

    return container;
}

function addEventCars(cars) {
    
    for (let i of cars) {
        for (let elem in carAddreses) {
            if (elem === i.name) {
                carAddreses[elem].addEventListener(`click`, () => {
                    if (checkerCar(i)) {
                        i.add(carAddreses[elem]);
                        toStartCars.push(i);
                        editConvas();
                    } else {
                        i.remove(carAddreses[elem]);
                    }
                });
                continue;
            }
        }
    }
}

function addEventTracks(tracks) {
    
    for (let i of tracks) {
        for (let elem in trackAddreses) {
            if (elem === i.name) {
                trackAddreses[elem].addEventListener(`click`, () => {
                    if (checkerTrack(i)) {
                        i.add(trackAddreses[elem]);
                        toStartTrack.push(i);
                        editConvas();
                    } else {
                        i.remove(trackAddreses[elem]);
                    }
                });
                continue;
            }
        }
    }
}

function addEventStart() {

    start.addEventListener(`click`, () => {
        if (toStartCars.length !== 3) {
            alert(`Not enough cars selected.`)
            return;
        } else if (toStartTrack.length !== 1) {
            alert(`No track selected`);
            return;
        } else {
            let car1 = 60 * toStartTrack[0].factor;
            let car1Finished = false;

            let car2 = 60 * toStartTrack[0].factor;
            let car2Finished = false;

            let car3 = 60 * toStartTrack[0].factor;
            let car3Finished = false;

            const trackSize = window.innerWidth;
            
            let winnerPlace = [];

            let race = setInterval(() => {
                if (car1Finished && car2Finished && car3Finished) {
                    clearInterval(race);
                    findWinner(winnerPlace)
                }

                if (car1 > trackSize - 110) {
                    rows[0].style.cssText = `margin-left: ${car1}px`;
                    car1Finished = true;
                    if (winnerPlace[0] === undefined) {
                        winnerPlace.push(toStartCars[0]);
                    }
                } else {
                    car1 += toStartCars[0].speed;
                    rows[0].style.cssText = `margin-left: ${car1}px`;
                }

                if (car2 > trackSize - 110) {
                    rows[1].style.cssText = `margin-left: ${car2}px`;
                    car2Finished = true;
                    if (winnerPlace[0] === undefined) {
                        winnerPlace.push(toStartCars[1]);
                    }
                } else {
                    car2 += toStartCars[1].speed;
                    rows[1].style.cssText = `margin-left: ${car2}px`;
                }

                if (car3 > trackSize - 110) {
                    rows[2].style.cssText = `margin-left: ${car3}px`;
                    car3Finished = true;
                    if (winnerPlace[0] === undefined) {
                        winnerPlace.push(toStartCars[2]);
                    }
                } else {
                    car3 += toStartCars[2].speed;
                    rows[2].style.cssText = `margin-left: ${car3}px`;
                }
            }, 200);
        } 
    });
}            

function checkerCar(item) {
 
    let index = toStartCars.indexOf(item);
    if (index > -1) {
        clearConvas();
        console.log(toStartCars[index], toStartCars[index + 1]);
        if (index !== 0) {
            toStartCars.splice(index, index);
        } else {
            toStartCars.shift();
        }
        return false;
    } 
    if (index < 0 && toStartCars.length < 3) {
        return true;
    }
}

function checkerTrack(item) {

    if (toStartTrack[0] === item) {
        clearConvas();
        toStartTrack.pop();
        return false;
    } 
    if (toStartTrack[0] === undefined && toStartTrack.length < 1) {
        return true;
    }
}

function editConvas() {

    if (toStartCars.length === 3 && toStartTrack.length === 1) {

        document.getElementsByClassName(`starter`)[0].style.color = `#DA0101`;
        document.getElementsByClassName(`starter`)[0].style.borderColor = `#DA0101`;
        
        toStartTrack[0].render();
        let row = 0;
        toStartCars.forEach(element => {
            element.renderRow(carRows[row]);
            ++row;
        });
    } else {
        document.getElementsByClassName(`starter`)[0].style.color = `gray`;
        document.getElementsByClassName(`starter`)[0].style.borderColor = `gray`;
    }
}
        
function clearConvas() {

    if (toStartTrack[0] !== undefined) {
        toStartTrack[0].removeConvas();    
    }

    let el = 0;
    toStartCars.forEach(element => {
        element.clearRow(carRows[el]);
        ++el;
    });
}

function findWinner(winner) {
    
    let h1 = document.createElement(`h1`);
    let text = document.createTextNode(`The winner is ${winner[0].name}`);

    h1.appendChild(text);
    congradulations.appendChild(h1);
    congradulations.style.display = `block`;
    clearCongrats();
}

function clearCongrats() {
    setTimeout(() => {
        congradulations.innerHTML = ``;
    }, 5000)
}