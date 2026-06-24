export{};

let inventory: [string, number, number][] = [
    ["Laptop", 999.99, 10],
    ["Mouse", 199.99, 25],
    ["Keyboard", 49.99, 30]
];

for (let product of inventory){
    console.log("Product: " + product[0] + ", Price: $" + product[1] + ", Quantity: " + product[2]);
}