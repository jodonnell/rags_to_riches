class Inventory {
    constructor() {
        this.dollars = 0;
        this.hats = 0;
    }

    get things() {
        return [`${this.dollars} dollars`, `${this.hats} very cool hat`];
    }
}

export default Inventory;
