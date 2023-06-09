import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
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

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// Inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let values: [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber];

    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    } else {
        doc = new Payment(...values);
    }

    list.render(doc, type.value, 'end');
})

// ENUMS
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON, SHOPPINGLIST }

// GENERICS
const addUID = <T extends {name: string}>(object: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...object, uid};
}

let docOne = addUID({name: 'davile', age: 40});
console.log(docOne);

// with interfaces
interface Resource<T> {
    uid: number;
    resourceName: string;
    resourceType: ResourceType;
    data: T;
}

const docThree: Resource<string> = {
    uid: 1,
    resourceName: 'person',
    resourceType: ResourceType.PERSON,
    data: 'davile',
}

const docFour: Resource<string[]> = {
    uid: 2,
    resourceName: 'shoppingList',
    resourceType: ResourceType.SHOPPINGLIST,
    data: ['bread', 'milk', 'beer'],
}

console.log(docThree, docFour);

// TUPLES
let tuple: [string, number, boolean] = ['Ryu', 25, true];
// tuple[0] = 0; // Throws an error
tuple[0] = 'Ken';
tuple[1] = 30;
tuple[2] = false;
console.log(tuple);

let student: [string, number];
student = ['chung-li', 12345];
console.log(student);