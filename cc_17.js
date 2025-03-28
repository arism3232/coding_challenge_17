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

// Creating example customer
const customer1 = new Customer("Choi Jisu", "jisu@example.com");
console.log(`New customer created: ${customer1.name}, Email: ${customer1.email}`);

// Adding example purchases
customer1.addPurchase(29.99);
customer1.addPurchase(15.50);
customer1.addPurchase(45.25);

console.log(`Total spent by ${customer1.name}: $${customer1.getTotalSpent().toFixed(2)}`);