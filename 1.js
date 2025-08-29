class Product {
    static productcount = 0;
    static list = [];

    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
        Product.productcount++;
        this.dict = { id: this.id, name: this.name, price: this.price };
        Product.list.push(this.dict);
    }

    static getProductCount() {
        return Product.productcount;
    }

    umumiysum() {
        let sum = 0;
        for (let x of Product.list) {
            sum += x.price;
        }
        return sum;
    }
}

class Careproduct extends Product {
    constructor(kafolatmuddati, id, name, price) {
        super(id, name, price);
        this.kafolatmuddati = kafolatmuddati;
    }

    totalpriceagain(quantity = 1) {
        let discount = 0;

        if (this.kafolatmuddati === 5) discount = 0.10;
        else if (this.kafolatmuddati === 4) discount = 0.20;
        else if (this.kafolatmuddati === 3) discount = 0.30;
        else if (this.kafolatmuddati === 2) discount = 0.40;
        else if (this.kafolatmuddati === 1) discount = 0.50;

        return this.price * quantity * (1 - discount);
    }
}


let sardor = new Careproduct(4, 2, "Olma", 3000);
let umrbek = new Careproduct(2, 1, "Banan", 4000);

console.log("Sardor total price:", sardor.totalpriceagain()); // 2400 (20% chegirma)
console.log("Umrbek total price:", umrbek.totalpriceagain()); // 2400 (40% chegirma)

