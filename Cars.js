class Cars {

    add(el) {
        el.style.border = `2px solid red`;
        el.style.padding = `5px`;
    }

    remove(el) {
        el.style.border = `0px`;
        el.style.padding = `0px`;
    }

    renderRow(row) {
        let img = document.createElement("IMG");
        img.className = `car-to-race`;
        img.setAttribute("src", `${this.src}`);
        row.appendChild(img);
    }

    clearRow(row) {
        row.textContent = ``;
    }
}

class Mercedes extends Cars {
    constructor(name, speed, src) {
        super();
        this.name = name;
        this.speed = speed;
        this.src = src;
    }
}

class BMW extends Cars {
    constructor(name, speed, src) {
        super();
        this.name = name;
        this.speed = speed;
        this.src = src;
    }
}

class Toyota extends Cars {
    constructor(name, speed, src) {
        super();
        this.name = name;
        this.speed = speed;
        this.src = src;
    }
}

class Lexus extends Cars {
    constructor(name, speed, src) {
        super();
        this.name = name;
        this.speed = speed;
        this.src = src;
    }
}

class Audi extends Cars {
    constructor(name, speed, src) {
        super();
        this.name = name;
        this.speed = speed;
        this.src = src;
    }
}
