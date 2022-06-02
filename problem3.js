function picnicBudget(people) {

    // error handle
    if (typeof people == 'number') {
    }

    else {

        console.log("stop")
        return;
    }

    // veriables

    let person100 = 5;
    let person200 = 4;
    let personMoreThan200 = 3;

    // conditions
    if (people <= 100) {
        let totalCost100 = person100 * people;
        return totalCost100;
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
let picnicMoney = picnicBudget(205)
if (picnicMoney != undefined) {
    console.log(picnicMoney);
}
else {

}
