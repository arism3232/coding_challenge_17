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

// Task3- Create a VIPCustomer Class (extends Cusotmer)
class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
        super(name, email);
        this.vipLevel = vipLevel; // Gold or Platinum vipLevel
    }
    getTotalSpent() {
        const baseTotal = super.getTotalSpent();
        return baseTotal * 1.10; // Adding 10% loyalty bonus
    }
}

// Creating example customers
const customer1 = new Customer("Choi Jisu", "jisu@example.com");
customer1.addPurchase(29.99);
customer1.addPurchase(15.50);
customer1.addPurchase(45.25); // Task1

const customer2 = new Customer("Hwang Yeji", "yeji@example.com");
customer2.addPurchase(100.00);
customer2.addPurchase(50.75); // Task2

// Creating VIP cusotmer
const vipCustomer1 = new VIPCustomer("Lee Chaeryeong", "chaeryeong@example.com", "Platinum");
vipCustomer1.addPurchase(200.00); // Task3 
vipCustomer1.addPurchase(150.00); // ($200+$150)*1.10= $385.00 for Platinum

const vipCustomer2 = new VIPCustomer("Shin Yuna", "yuna@example.com", "Gold");
vipCustomer2.addPurchase(500.00); // Task4 Adding another vip customer for Gold
vipCustomer2.addPurchase(300.00); // ($500+$300)*1.10= $880

// Creating sales rep and adding clients
const salesRep = new SalesRep("Shin Ryujin");
salesRep.addClient(customer1);
salesRep.addClient(customer2);
salesRep.addClient(vipCustomer1);
salesRep.addClient(vipCustomer2);

// Task4- Build a Client Report System
const totalRevenue = salesRep.clients.reduce((total, client) => total + client.getTotalSpent(), 0);
const highSpenders = salesRep.clients.filter(client => client.getTotalSpent() > 500);
const customerSummary = salesRep.clients.map(client => ({
    name: client.name,
    totalSpent: client.getTotalSpent().toFixed(2)
}));

// Logging to the console
console.log(`Sales Rep: ${salesRep.name}`);
console.log(`Total Revenue: $${totalRevenue.toFixed(2)}`);
console.log("High-Spending Customers (> $500):");
highSpenders.forEach(client =>
    console.log(`- ${client.name}: $${client.getTotalSpent().toFixed(2)}`)
);
console.log("Customer Summary:");
customerSummary.forEach(summary => 
    console.log(`- ${summary.name}: $${summary.totalSpent}`)
);