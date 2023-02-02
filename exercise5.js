var input = "Test 1";
//PART A
function string_length(value) {
    return value.length;
}
//DISPLAY
console.log("The number of characters is: " + string_length(input));
//PART B 
function string_excludedspaces(value) {
    return value.replace(" ", "").length;
}
//DISPLAY
console.log("The number of characters is: " + string_excludedspaces(input));
//PART C
function bothMethods(value, space) {
    var count = 0;
    if (space) {
        count = value.length;
    } // if true
    else {
        count = value.replace(" ", "").length;
    } // else
    return count; // return number
}
console.log(bothMethods(input, false));
