

function determineFoodAmountEaten(maxAmountOfFood) {
    let result = Math.ceil(Math.random() * maxAmountOfFood);
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
    const resultHeading = document.getElementById('result-heading');
    const resultCaption = document.getElementById('result-caption');

    if (total > 35) {
        resultCaption.classList.add('has-text-danger');
        return 'You definitely ate too much and died.'
    }
    else if (total >= 25 && total <=35) {
        debugger;
        resultCaption.classList.add('has-text-warning');
        return 'Wow, you barely made it. Try not to eat so much next time!'
    }
    else {
        resultCaption.classList.add('has-text-primary');
        return 'Congratulations! You ate all of the food and lived to tell the tale easily!'
    }
}


function showResult(result, caption) {
    const resultHeading = document.getElementById('result-heading');
    const resultCaption = document.getElementById('result-caption');
    resultHeading.innerHTML = `${result}`;
    resultCaption.innerHTML = `${caption}`;
}

function handleBtnStyling() {
    const playBtn = document.getElementById('play-btn');
    const resetBtn = document.getElementById('reset-btn');

    playBtn.classList.toggle('is-light')
    playBtn.disabled = true;

    resetBtn.disabled= false;
    resetBtn.classList.toggle('is-light');
}

function changeBoxBackground(idOfFoodItem,amountOfFoodPossible) {
    let foodEaten = parseInt(document.getElementById(idOfFoodItem).innerHTML);
    let box = document.getElementById(idOfFoodItem).parentNode;


    if (foodEaten >= 0.7 * amountOfFoodPossible) {
        box.classList.add('has-background-danger');
    }
    else if (foodEaten >= .4 * amountOfFoodPossible && foodEaten < 0.7 * amountOfFoodPossible) {
        box.classList.add('has-background-warning');
    }
    else {
        box.classList.add('has-background-primary');
    }
}

function resetBoxBackground(idOfFoodItem) {
    let foodItem = document.getElementById(idOfFoodItem);
    foodItem.parentNode.classList.remove('has-background-danger','has-background-warning','has-background-primary');
}



function resetFoodAmounts () {
    document.getElementById('hotdog-num').innerHTML = ``;
    document.getElementById('burger-num').innerHTML = ``;
    document.getElementById('bigmac-num').innerHTML = ``;
    document.getElementById('fries-num').innerHTML = ``;
    document.getElementById('beer-num').innerHTML = ``;
    document.getElementById('nugget-num').innerHTML = ``;
}

function resetResults() {
    const resultHeading = document.getElementById('result-heading');
    const resultCaption = document.getElementById('result-caption');
    resultHeading.innerHTML = ``;
    resultCaption.innerHTML = ``;
    resultCaption.classList.remove('has-text-primary','has-text-warning','has-text-danger');
}

function resetButtons() {
    const playBtn = document.getElementById('play-btn');
    const resetBtn = document.getElementById('reset-btn');

    playBtn.disabled=false;
    resetBtn.disabled=true;

    playBtn.classList.toggle('is-light');

    resetBtn.classList.toggle('is-light');
}



function playGame() {
    displayFoodAmounts();
    
    let result = getTotalFoodAmount();
    let caption = isAlive(result);
    showResult(result,caption);
    changeBoxBackground('hotdog-num',4);
    changeBoxBackground('burger-num',6);
    changeBoxBackground('bigmac-num',10);
    changeBoxBackground('fries-num',12);
    changeBoxBackground('beer-num',15);
    changeBoxBackground('nugget-num',20);
    handleBtnStyling();
    
}

function resetGame() {
    resetFoodAmounts();
    resetResults();

    resetButtons();

    

    resetBoxBackground('hotdog-num');
    resetBoxBackground('burger-num');
    resetBoxBackground('bigmac-num');
    resetBoxBackground('fries-num');
    resetBoxBackground('beer-num');
    resetBoxBackground('nugget-num');
}




const playBtn = document.getElementById('play-btn');
playBtn.addEventListener('click', playGame);

const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', resetGame);

