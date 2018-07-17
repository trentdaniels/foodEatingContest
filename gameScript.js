

function determineFoodAmountEaten(amountOfFood) {
    let result = Math.round(Math.random() * amountOfFood);
    return result;
}

function updateFoodAmounts() {
    let hotdogsEaten = determineFoodAmountEaten(4);
    let burgersEaten = determineFoodAmountEaten(6);
    let bigmacsEaten = determineFoodAmountEaten(10);
    let friesEaten = determineFoodAmountEaten(12);
    let beersDrinkin = determineFoodAmountEaten(15);
    let nuggetsEaten = determineFoodAmountEaten(20);
    document.getElementById('hotdog-num').innerHTML = `<p>${hotdogsEaten}</p>`;
    document.getElementById('burger-num').innerHTML = `<p>${burgersEaten}</p>`;
    document.getElementById('bigmacdog-num').innerHTML = `<p>${bigmacsEaten}</p>`;
    document.getElementById('fries-num').innerHTML = `<p>${friesEaten}</p>`;
    document.getElementById('beer-num').innerHTML = `<p>${beersDrinkin}</p>`;
    document.getElementById('nugget-num').innerHTML = `<p>${nuggetsEaten}</p>`;
}

function isAlive(total) {
    if (total > 35) {
        return 'You definitely died.'
    }
    else if (total >= 25 && total <=35) {
        return 'Wow, you barely made it. Try not to eat so much next time!'
    }
    else {
        return 'Congratulations! You ate all of the food and lived to tell the tale easily!'
    }
}

function showResult(result, caption) {
    const resultHeading = document.getElementById('result-heading');
    const resultCaption = document.getElementById('result-caption');
    resultHeading.innerHTML = `${result}`;
    resultCaption.innerHTML = `${caption}`;
}

function handleFood() {
    let total = 0;
    let hotdogsEaten = calculateHotdogsEaten();
    let hamburgersEaten = calculateHamburgersEaten();
    let bigmacsEaten = calculateBigMacsEaten();
    let friesEaten = calculateFriesEaten();
    let beersDrinkin = calculateBeersDrinken();
    let nuggetsEaten = calculateNuggetsEaten();

    total += hotdogsEaten;
    total += hamburgersEaten;
    total += bigmacsEaten;
    total += friesEaten;
    total += beersDrinkin;
    total += nuggetsEaten;

    let result = isAlive(total);
    showResult(total, result);

    console.log(result);
    console.log(total);
    
}


