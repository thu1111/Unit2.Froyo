let orderedFlavors = prompt("Please enter a list of comma-separated froyo flavors.");

const orderedArr = orderedFlavors.split(",");

function createObj (arr) {
    const flavorsObj ={};

    for (let i=0; i<arr.length; i++) { //use [] notation for dynamic keys
        if (arr[i] in flavorsObj) { //checking if the key is aready in the object
            flavorsObj[arr[i]]++;   //incrementing the value  
        } else {
            flavorsObj[arr[i]] = 1; //adding key with value 1 to the object
        }
    }

    return flavorsObj;
}

function printObj(obj) {
    console.log("You have ordered: ");
    
    for (const key in obj) {
        console.log(`${obj[key]} ${key} froyo`);
    }   
}

const finalObj = createObj(orderedArr);

printObj(finalObj);
