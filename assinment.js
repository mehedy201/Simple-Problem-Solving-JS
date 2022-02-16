// Problem: 1
function anaToVori (ana){
    const vori = ana / 16;
    if (vori < 0){
        const sorry ='Please input ana........'
        return sorry;
    }
    return vori;
}
let myGoldIs = anaToVori(100);
console.log(myGoldIs);


// Problem: 2
function pandaCost (singaraQuantity, shomoshaQuantity, gilapiQuantity){
    const singaraPrice = 7;
    const shomoshaPrice = 10;
    const gilapiPrice = 15;

    const singaraPriceQuantity = singaraQuantity * singaraPrice;
    const shomoshaPriceQuantity = shomoshaQuantity * shomoshaPrice;
    const gilapiPriceQuantity = gilapiQuantity * gilapiPrice;

    const totalPrice = singaraPriceQuantity + shomoshaPriceQuantity + gilapiPriceQuantity;
    if (totalPrice < 0){
        const sorryFood = 'Some order please!!!!!!........'
        return sorryFood;
    }
    return totalPrice;
}
let myFoodPriceTotal = pandaCost(5, 10, 15);
console.log(myFoodPriceTotal);


// Problem: 3
function picnicBudget (candidate){
    const first100CandidateFee = 5000;
    const second100CandidateFee = 4000;
    const lastAll = 3000;
    if (candidate <= 100){
        const candidateFee = candidate * first100CandidateFee;
        return candidateFee;
    }
    else if (candidate <= 200){
        const first100 = 100 * first100CandidateFee;
        const restOfCandidate = candidate - 100;
        const second100 = restOfCandidate * second100CandidateFee;
        const totalCandidateFee = first100 + second100;
        return totalCandidateFee;
    }
    else if (candidate <= 300){
        const first100 = 100 * first100CandidateFee;
        const second100 = 100 * second100CandidateFee;
        const lastAllCandiate = candidate - 200;
        const lastAllCandidateFee = lastAllCandiate * lastAll;
        const totalCandidateFee = first100 + second100 + lastAllCandidateFee;
        return totalCandidateFee;
    }
    else{
        const sitFull = 'Sorry Mama......... amader garir sit abong shad shob vorti hoye geche apni agami dine asche.'
        return sitFull;
    }
}
let totalCandidate = picnicBudget(300);
console.log(totalCandidate);


// Problem: 4
function oddFriend (names){
    let oddNames = '';
    for (let i = 0; i < names.length; i++){
        const element = names[i];
        if (element.length % 2 == 1){
            oddNames = element;
            if (element == oddNames){
                break;
            }
        } 
        else {
            oddNames = 'akhane kono bejor shonkhar name nei.............'
        }
    }
    return oddNames;
}
const friendsName = ['Mehedi', 'Mazeda', 'Hasan', 'Jakir', 'Shohug',];
const oddFriendName = oddFriend(friendsName);
console.log(oddFriendName);