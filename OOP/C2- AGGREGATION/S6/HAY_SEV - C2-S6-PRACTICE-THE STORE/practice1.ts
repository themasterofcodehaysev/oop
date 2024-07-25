class Store {
    name: string;
    products: Product[] = [];
    customers: Customer[] = [];
    constructor(name: string, products: Product[] = [], customers: Customer[] = []) {
        this.name = name;
        this.products = products;
        this.customers = customers;
    }
    addProduct(name: string, price: number) {
        const newProduct = new Product(name, price);
        this.products.push(newProduct);
    }
    addCustomer(firstName: string, lastName: string) {
        let newCustomer = new Customer(firstName, lastName);
        this.customers.push(newCustomer);
    }
    getProductLessThan(price: number): Product[] {
        let productsLessThan: Product[] = [];

        this.products.forEach((product) => {
            if (product.price < price) {
                productsLessThan.push(product);
                console.log(product.name);
            }
        });


        return productsLessThan;
    }
    getFeedbackContaining(keyword: string): Feedback[] {
        let feedback: Feedback[] = [];

        this.products.forEach((product) => {
            if (product.name == keyword) {
                product.feedbacks.forEach(element => {
                    feedback.push(element);
                });
            }
        });
        console.log(feedback);
        return feedback;
    }
    getCustomerComments(customer: Customer): string[] {
        const customerComments: string[] = [];
      
        this.products.forEach((product) => {
          product.feedbacks.forEach((feedback) => {
            if (feedback.author.toString() === customer.toString()) {
              customerComments.push(feedback.comment);
            }
          });
        });
      console.log(customerComments);
        return customerComments;
    }



}

class Product {
    name: string;
    price: number;
    feedbacks: Feedback[] = [];
    constructor(name: string, price: number, feedbacks: Feedback[] = []) {
        this.name = name;
        this.price = price;
        this.feedbacks = feedbacks;
    }
    addFeedback(comment: string, evaluation: number, author: Customer) {
        let newFeedback = new Feedback(comment, evaluation, author);
        this.feedbacks.push(newFeedback);
    }


}

class Feedback {
    comment: string;
    evaluation: number;
    author: Customer;
    constructor(comment: string, evaluation: number, author: Customer) {
        this.comment = comment;
        this.evaluation = evaluation;
        this.author = author;
    }
    setAuthor(author: Customer) {
        this.author = author;
    }
}

class Customer {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const HayStore = new Store("HayStore");

HayStore.addProduct("Banana", 10);
HayStore.addProduct("Mengo", 19);

HayStore.addCustomer("Roths", "Sith");
HayStore.addCustomer("John", "Smith");

let product1 = HayStore.products[0];
let product2 = HayStore.products[1];

let customer1 = HayStore.customers[0];
let customer2 = HayStore.customers[1];

product1.addFeedback("Great product!", 5, customer1);
product1.addFeedback("Could be better", 3, customer2);

product2.addFeedback("Excellent value for money", 5, customer1);
product2.addFeedback("Not satisfied with the quality", 2, customer2);




HayStore.getProductLessThan(19);
HayStore.getFeedbackContaining('Banana');
HayStore.getCustomerComments(customer1);

console.log(HayStore);