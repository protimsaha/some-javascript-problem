// problem-1-anaToVori

function anaToVori(ana) {
    // Error Handle start
    if (typeof ana == 'number') {
    }
    else {
        console.log("Your data is not valid! Please give a valid data!")
        return;
    }
    // Error Handle end

    // Calculation
    let vori = ana / 16;
    return vori;
}

const myVori = anaToVori(64);
if (myVori != undefined) {
    console.log(myvori);
}
else {

}
// Problem-1 End 



// Problem-2-pandaCost
function pandaCost(singaraQuantity, samuchaQuantity, jilapiQuantity) {

    // Error Handle start
    if (typeof singaraQuantity == 'number' && typeof samuchaQuantity == 'number' && typeof jilapiQuantity == 'number') {
    }
    else {
        console.log("Your data is not valid! Please give a valid data!")
        return;
    }
    // error handle end

    // veriables
    let singaraCost = 7 * singaraQuantity;
    let samuchaCost = 10 * samuchaQuantity;
    let jilapiCost = 15 * jilapiQuantity;

    // calculations
    let totalCost = singaraCost + samuchaCost + jilapiCost;
    return totalCost;
}

// input perameter
let myCart = pandaCost(1, 4, 1);
if (myCart != undefined) {
    console.log(myCart)
}
else {
}
// problem-2-end 



// problem-3-picnicBudget 
function picnicBudget(people) {

    // Error Handle start
    if (typeof people == 'number') {
    }
    else {
        console.log("Your data is not valid! Please give a valid data!")
        return;
    }

    // veriables
    let person100 = 5;
    let person200 = 4;
    let personMoreThan200 = 3;

    // conditions
    if (people <= 100) {
        let totalCost = person100 * people;
        return totalCost;
    }
    else if (people <= 200) {
        let totalCost100 = person100 * 100;
        let restPerson = people - 100;
        let totalCost200 = restPerson * person200;
        let totalCost = totalCost200 + totalCost100
        return totalCost;
    }
    else {
        let totalCost100 = person100 * 100;
        let totalCost200 = person200 * 100;
        let restPerson = people - 200;
        let totalCostMoreThan200 = personMoreThan200 * restPerson;
        let totalCost = totalCost100 + totalCost200 + totalCostMoreThan200;
        return totalCost;
    }
}

// input perameter
let picnicMoney = picnicBudget(201)
if (picnicMoney != undefined) {
    console.log(picnicMoney);
}
else {

}
// problem-3-end



// problem-4-oddFriend  
function oddFriend(friends) {

    // Error Handle start 
    if (typeof friends == 'object') {

    } else {
        console.log('Your data is not valid! Please give a valid data!');
        return;
    }
    // error handle end 

    // Essential Loop
    for (i = 0; i < friends.length; i++) {
        let element = friends[i];

        if (element.length % 2 == 1) {
            return element;
        }
    }
}

// input perameter
let friends = ['abid', 'lipa', 'pushpa', 'ana', 'tasnim'];
let findMyBestFriend = oddFriend(friends);

if (typeof findMyBestFriend == 'string') {
    console.log(findMyBestFriend)
}
else {
}