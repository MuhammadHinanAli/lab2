//NUMBER
let myNumber:number = 5;
console.log("My number is: "+myNumber);

//STRING
let color: string = "Blue";
console.log("The colour is: "+color);

//BOOLEAN
let flag: boolean = true;
console.log("Value assigned to flag is: "+flag);

//ARRAY
let list: number [] = [1,2,3];
//let list: any[] (any type of data)
for (let i = 0; i<list.length; i++){ //for loop
    console.log("The value at position "+(i+1)+" in my array is: "+ list[i]);
}