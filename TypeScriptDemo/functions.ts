function add(n1:number,n2:number,n3?:number) : number{
  return  n3? n1+n2+n3 : n1+n2;
}
console.log(add(10,13));

const sub=(n1:number,n2:number):number=>n1-n2;
console.log(sub(45,46));

function geti<Type>(items:Type[]):Type[]{
    return new Array<Type>().concat(items);
}

let concatResult =geti<number>([1,2,3,4,5,6]);

let concatString=geti<string>(["Rakesh","Boda"]);

console.log(concatString);