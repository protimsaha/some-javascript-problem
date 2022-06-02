function pandaCost(singaraQuantity, samuchaQuantity, jilapiQuantity) {

    // error handle start
    if (typeof singaraQuantity == 'number' && typeof samuchaQuantity == 'number' && typeof jilapiQuantity == 'number') {
    }

    else {

        console.log("stop")
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
let myCart = pandaCost(1, 4, 0);
if (myCart != undefined) {
    console.log(myCart)
} else {

}

