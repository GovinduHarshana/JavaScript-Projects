// Class = ES6 feature

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }
}

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.50);

product1.displayProduct();
console.log(" ");
product2.displayProduct();