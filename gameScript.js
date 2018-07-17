function calculateHotdogsEaten () {
    let result = Math.round(Math.random() * 4);
    document.getElementById('hotdog-num').innerHTML = `<p>${result}</p>`;
    return result;
}

function calculateHamburgersEaten () {
    let result = Math.round(Math.random() * 6);
    document.getElementById('hamburger-num').innerHTML = '<p>' + result + '</p>';
    return result;
}

function calculateBigMacsEaten () {
    let result = Math.round(Math.random() * 8); 
    document.getElementById('bigmac-num').innerHTML = '<p>' + result + '</p>';
    return result;
}

function calculateFriesEaten () {
    let result = Math.round(Math.random() * 10);
    document.getElementById('fries-num').innerHTML = '<p>' + result + '</p>';
    return result;
}

function calculateBeersDrinken () {
    let result = Math.round(Math.random() * 12);
    document.getElementById('beer-num').innerHTML = '<p>' + result + '</p>';
    return result;
}

function calculateNuggetsEaten () {
    let result = Math.round(Math.random() * 20);
    document.getElementById('nugget-num').innerHTML = '<p>' + result + '</p>';
    return result;
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
    console.log(result);
    console.log(total);
}

handleFood();

function isAlive(total) {
    if (total > 40) {
        return 'Congratulations! You ate all of the food and lived to tell the tale easily!'
    }
    else if (total >= 30 && total <=40) {
        return 'Wow, you barely made it. Try not to eat so much next time!'
    }
    else {
        return 'You definitely died.'
    }
}