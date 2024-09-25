import {Login,User } from './interface';

class Employee implements Login{
     #id:number;
    name: string;
    address: string;

    get empId():number{
        return this.#id;
    }
    set empId(id:number){
        this.#id=id;
    }
    constructor(id:number,name:string,address:string){
        this.#id=id;
        this.name=name;
        this.address=address;
    }
    Login(): User {
        return {name:"Rakesh",age:24,id:163,email:"Rakesh@gmail.com"};
    }
    getNamewithAdress(): string{
       return  `${this.name} works at ${this.address}`;
        // return this.name+" "+this.address;
    }
    
}
class Manager extends Employee{
    
    constructor(id:number,name:string,address:string){
        super(id,name,address);

    }
    // getNamewithAdress(): string {
    //     return  `${this.name} is manager ${this.address}`; 
    // }
}


let emp=new Employee(163,'Rakesh','JMR Infotech');
emp.empId=100;
console.log(emp.empId);
let adre=emp.getNamewithAdress()
let Kishore =new Manager(500,"Kishore","Andhra");

// emp.id=163;
// emp.name='Rakesh';
// emp.address='JMR Infotech';
console.log(adre);
console.log(Kishore.getNamewithAdress());