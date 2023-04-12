import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('mario', 'plumbing work', 200);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
// const invOne = new Invoice('mario', 'work on mario website', 250);
// const invTwo = new Invoice('luigi', 'work on luigi website', 300);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
// });
const form = document.querySelector('.new-item-form');
// Inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
    ResourceType[ResourceType["SHOPPINGLIST"] = 5] = "SHOPPINGLIST";
})(ResourceType || (ResourceType = {}));
// GENERICS
const addUID = (object) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, object), { uid });
};
let docOne = addUID({ name: 'davile', age: 40 });
console.log(docOne);
const docThree = {
    uid: 1,
    resourceName: 'person',
    resourceType: ResourceType.PERSON,
    data: 'davile',
};
const docFour = {
    uid: 2,
    resourceName: 'shoppingList',
    resourceType: ResourceType.SHOPPINGLIST,
    data: ['bread', 'milk', 'beer'],
};
console.log(docThree, docFour);
// TUPLES
let tuple = ['Ryu', 25, true];
// tuple[0] = 0; // Throws an error
tuple[0] = 'Ken';
tuple[1] = 30;
tuple[2] = false;
console.log(tuple);
let student;
student = ['chung-li', 12345];
console.log(student);
