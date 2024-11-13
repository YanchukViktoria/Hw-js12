/* 1.1 */

const user = {};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = "false";

for (let el of Object.keys(user)) {
    console.log(`${el} ${user[el]}`);
}

/* 1.2 */

let iterr = 0;

function countProps(obj){
    Object.keys(obj).map((el) => iterr++)
    console.log(iterr);
};

countProps(user);

/* 1.3 */

const employees = {
    Alice: 5,
    Bob: 8,
    Charlie: 3,
    Diana: 10
};

function findBestEmployee(employees) {
    return Object.entries(employees).reduce((acc, [name, tasks]) => {
        return tasks > employees[acc] ? name : acc;
    }, Object.keys(employees)[0]);
}

console.log(findBestEmployee(employees));

/* 1.4 */

const employeess = {
    Alice: 500,
    Bob: 800,
    Charlie: 1200,
};
function countTotalSalary(employeess) {
    return Object.values(employeess).reduce((total, salary) => total + salary, 0)
}

console.log(countTotalSalary(employeess));

/* 1.5 */

const products = [
    { name: "Apple", price: 50 },
    { name: "Banana", price: 30 },
    { name: "Orange", price: 25 },
    { name: "Mango" }
];

function getAllPropValues(arr, prop){
    return arr.reduce((acc, item) => {
        if (prop in item) {
            acc.push(item[prop]);
        }
        return acc;
    }, []);
};

console.log(getAllPropValues(products, "name"));

/* 1.6 */

const productss = [
    { name: "Apple", price: 50, quantity: 3 },
    { name: "Banana", price: 30, quantity: 5 },
    { name: "Orange", price: 25, quantity: 4 },
    { name: "Mango", price: 60, quantity: 2 }
];

function calculateTotalPrice(allProdcuts, productName) {
    return allProdcuts.reduce((acc, product) => {
        if (product.name == productName) {
            acc += product.price * product.quantity;
        }
        return acc;
    }, 0);
};


console.log(calculateTotalPrice(productss, "Orange"));

/* 1.7 */

const account = {
    balance: 0,
    transactionHistory: [],

    replenishment(amount) {
        this.transactionHistory.push({ type: "Deposit", amount, date: new Date() });
        this.balance = this.transactionHistory.reduce((acc, transaction) => {
            if (transaction.type === "Deposit") {
                return acc + transaction.amount;
            }
            return acc;
        }, 0);
    },

    getTransactionHistory() {
        this.transactionHistory.forEach(transaction => {
            console.log(`${transaction.type}: ${transaction.amount} (Дата: ${transaction.date.toLocaleString()})`);
        });
    }
};