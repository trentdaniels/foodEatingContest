

function determineFoodAmountEaten(maxAmountOfFood) {
    let result = Math.round(Math.random() * maxAmountOfFood);
    return result;
}

function getTotalFoodAmount() {
    let hotdogsEaten = parseInt(document.getElementById('hotdog-num').innerHTML);
    let burgersEaten = parseInt(document.getElementById('burger-num').innerHTML);
    let bigmacsEaten = parseInt(document.getElementById('bigmac-num').innerHTML);
    let friesEaten = parseInt(document.getElementById('fries-num').innerHTML);
    let beersDrinkin = parseInt(document.getElementById('beer-num').innerHTML);
    let nuggetsEaten = parseInt(document.getElementById('nugget-num').innerHTML);
    let total = hotdogsEaten + burgersEaten + bigmacsEaten + friesEaten + beersDrinkin + nuggetsEaten;
    return total;
}

function displayFoodAmounts() {
    document.getElementById('hotdog-num').innerHTML = `${determineFoodAmountEaten(4)}`;
    document.getElementById('burger-num').innerHTML = `${determineFoodAmountEaten(6)}`;
    document.getElementById('bigmac-num').innerHTML = `${determineFoodAmountEaten(10)}`;
    document.getElementById('fries-num').innerHTML = `${determineFoodAmountEaten(12)}`;
    document.getElementById('beer-num').innerHTML = `${determineFoodAmountEaten(15)}`;
    document.getElementById('nugget-num').innerHTML = `${determineFoodAmountEaten(20)}`;
}

function isAlive(total) {
    if (total > 35) {
        return 'You definitely died ate too much and died.'
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
    displayFoodAmounts();
    let result = getTotalFoodAmount();
    let caption = isAlive(result);
    showResult(result,caption);
    stopGame();
    console.log(result);
    console.log(caption);
    
}

function stopGame() {
    const playBtn = document.getElementById('play-btn');
    playBtn.classList.remove('is-primary');
    playBtn.classList.add('is-light');
    playBtn.disabled = true;
}

const playBtn = document.getElementById('play-btn');
playBtn.addEventListener('click', handleFood);

