class Tracks {
    constructor(name, factor, convas, color) {
        this.name = name;
        this.factor = factor;
        this.convas = convas;
        this.color = color;
    }

    add(el) {
        el.style.border = `2px solid red`;
        el.style.padding = `5px`;
    }

    remove(el) {
        el.style.border = `0px`;
        el.style.padding = `0px`;
    }

    render() {
        convas.style.cssText = `background-color: ${this.color};`;
        document.getElementById(`start`).style.cssText = `display: block;`;
        document.getElementsByClassName(`track-of-three`)[0].style.cssText = `display: block`;
        document.getElementsByClassName(`track-of-three`)[1].style.cssText = `display: block`;
        document.getElementsByClassName(`track-of-three`)[2].style.cssText = `display: block`;
        document.getElementById(`finish`).style.cssText = `display: block;`;
    }

    removeConvas() {
        convas.style.cssText = `background-color: none;`;
        document.getElementById(`start`).style.cssText = `display: none;`;
        document.getElementsByClassName(`track-of-three`)[0].style.cssText = `display: none`;
        document.getElementsByClassName(`track-of-three`)[1].style.cssText = `display: none`;
        document.getElementsByClassName(`track-of-three`)[2].style.cssText = `display: none`;
        document.getElementById(`finish`).style.cssText = `display: none;`;
    }
}

class Asphalt extends Tracks{}
class Ice extends Tracks{}
class Ground extends Tracks{}

/*

class Tracks {
    constructor(allTracks) {
        this.allTracks = allTracks;
    }

    addEvents() {
        for (let value in this.allTracks) {
            console.log(value);
            console.log(this.allTracks[value]);
            this.allTracks[value].addEventListener(`click`, () => {
                eventAdder(this.allTracks[value]);
            });
        }
    }
}
*/