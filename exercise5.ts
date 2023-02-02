let input: string = "Test 1";

//PART A
function string_length(value: string):number { //returns number
return value.length;
}
//DISPLAY
console.log("The number of characters is: "+string_length(input));

//PART B 
function string_excludedspaces(value: string):number { //returns number
    return value.replace(" ","").length;
}
//DISPLAY
console.log("The number of characters is: "+string_excludedspaces(input));

//PART C
function bothMethods(value: string, space?: boolean):number{
   let count:number = 0;

    if(space){
        count = value.length
    } // if true
    else{
        count = value.replace(" ","").length;
    } // else
    return count; // return number
}

console.log(bothMethods(input, false));

