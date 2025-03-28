// Task1- Create a customer Class
class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.purchaseHistory = [];
    }
    addPurchase(amount) {
        this.purchaseHistory.push(amount);
    }
    getTotalSpent() {
        return this.purchaseHistory.reduce((total, amount) => total + amount, 0);
    }
}

// Task2- Create SalesRep Class
class SalesRep {
    constructor(name) {
        this.name = name;
        this.clients = [];
    }
    addClient(customer) {
        this.clients.push(customer);
    }
    getClientTotal(name) {
        const client = this.clients.find(client => client.name === name);
        return client ? client.getTotalSpent() : 0;
    }
}

// Creating example customers
const customer1 = new Customer("Choi Jisu", "jisu@example.com");
customer1.addPurchase(29.99);
customer1.addPurchase(15.50);
customer1.addPurchase(45.25);

const customer2 = new Customer("Hwang Yeji", "yeji@example.com");
customer2.addPurchase(100.00);
customer2.addPurchase(50.75);

// Creating sales rep and adding clients
const salesRep = new SalesRep("Shin Ryujin");
salesRep.addClient(customer1);
salesRep.addClient(customer2);

// Logging to the console
console.log(`New customer created: ${customer1.name}, Email: ${customer1.email}`);
console.log(`Total spent by ${customer1.name}: $${customer1.getTotalSpent().toFixed(2)}`); // Task1

console.log(`Sales Rep: ${salesRep.name}`);
console.log(`Clients: ${salesRep.clients.map(client => client.name).join(", ")}`);
console.log(`Total spent by ${customer2.name}: $${salesRep.getClientTotal(customer2.name).toFixed(2)}`); // Task2