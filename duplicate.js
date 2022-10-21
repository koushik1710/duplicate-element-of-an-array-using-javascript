// program to remove duplicate value from an array

function getUnique(arr){
    
    let uniqueArr = [];
    
    // loop through array
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

const array =  [1,2,4,5,4,6,8,1,2,8];

// calling the function
// passing array argument
getUnique(array);