class Inventory {
    constructor() {
        this.dollars = 0;
    }

    get things() {
        return [`${this.dollars} dollars`];
    }
}

export default Inventory;
