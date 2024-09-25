let Lname : string;
Lname='Rakesh';
let newname=Lname.toUpperCase();
console.log(newname);

let num : number;
num=25;

let dob="2000"
let rnum=parseInt(dob);

let elist: string[];
elist=['rakesh','boda','calicut'];

let nlist:Array<number>;
nlist=[1,2,3,4,5]

let results=nlist.filter((num)=>num>2);

console.log(results);

let sum=nlist.reduce((acc,num)=>acc+num);
console.log(sum);


let de: any;
de="rakesh";
de=9;