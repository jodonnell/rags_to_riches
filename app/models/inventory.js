class Inventory {
    constructor() {
        this.dollars = 0;
    }

    tick() {
        this.dollars += 1;
    }

    get things() {
        return [`${this.dollars} dollars`];
    }
}

export default Inventory;
