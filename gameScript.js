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

function CalculateFriesEaten () {
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
    total += setTimeout(calculateHotdogsEaten(), 1500);
    total += setTimeout(calculateHamburgersEaten(), 3000);
    total += setTimeout(calculateBigMacsEaten(), 4500);
    total += setTimeout(CalculateFriesEaten(), 6000);
    total += setTimeout(calculateBeersDrinken(), 7500);
    total += setTimeout(calculateNuggetsEaten(), 9000);
    let result = isAlive(total);
    console.log(result);
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