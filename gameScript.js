

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
    const resultCaption = document.getElementById('result-caption');
    const body = document.getElementById('body');

    if (total >= 43) {
        resultCaption.classList.add('has-text-danger');
        body.style.backgroundColor = 'hsla(348, 100%, 61%, 0.3)';
        return 'You ate too much and died. RIP';
    }
    else if (total >= 30) {
        resultCaption.classList.add('has-text-warning');
        body.style.backgroundColor = 'hsla(48, 100%, 67%, 0.15)';
        return 'Wow, you barely made it. Try not to eat so much next time!';
    }
    else {
        resultCaption.classList.add('has-text-primary');
        body.style.backgroundColor = 'hsla(171, 100%, 41%, 0.3)';
        return 'Congratulations! You ate all of the food and lived to tell the tale!';
    }
}


function showResult(result, caption) {
    const resultHeading = document.getElementById('result-heading');
    const resultCaption = document.getElementById('result-caption');
    

    resultHeading.innerHTML = `You ate <span id="result-style">${result}</span> different items of food!`;
    resultCaption.innerHTML = `${caption}`;

    const resultStyle = document.getElementById('result-style');
    if (result >= 43) {
        resultStyle.classList.add('has-text-danger');
    }
    else if (result >= 30) {
        resultStyle.classList.add('has-text-warning');
    }
    else {
        resultStyle.classList.add('has-text-primary');
    }
}

function handleBtnStyling() {
    const playBtn = document.getElementById('play-btn');
    const resetBtn = document.getElementById('reset-btn');

    playBtn.classList.toggle('is-light')
    playBtn.disabled = true;

    resetBtn.disabled= false;
    resetBtn.classList.toggle('is-light');
}

function handleBoxContents() {
    let headings = document.getElementsByTagName('h4');
    for(let i = 0; i < headings.length; i++) {
        headings[i].classList.add('has-text-white');
    }
    let descriptions = document.querySelectorAll('.box p:nth-child(3)');
    for (let i = 0; i < descriptions.length; i++) {
        descriptions[i].classList.add('has-text-white');
    }
    let svgs = document.getElementsByTagName('svg');
    
    for (let i = 0; i < svgs.length; i++) {
        svgs[i].style.fill = '#FFFFFF';
        svgs[i].classList.add('spin');
        svgs[i].style.width = '75%';
    }

    let questions = document.querySelectorAll('.box p:nth-child(3)');
    for (let i = 0; i < questions.length; i++) {
        questions[i].innerHTML = 'Number Eaten:';
    }

}

function resetBoxContents() {
    let headings = document.getElementsByTagName('h4');
    for(let i = 0; i < headings.length; i++) {
        headings[i].classList.remove('has-text-white');
    }
    let descriptions = document.querySelectorAll('.box p:nth-child(3)');
    for (let i = 0; i < descriptions.length; i++) {
        descriptions[i].classList.remove('has-text-white');
    }
    let svgs = document.getElementsByTagName('svg');
    for (let i = 0; i < svgs.length; i++) {
        svgs[i].style.fill = '#000000';
        svgs[i].classList.remove('spin');
        svgs[i].style.width = '65%';
    }

    descriptions[0].innerHTML = 'How many hotdogs did you eat?';
    descriptions[1].innerHTML = 'How many hamburgers did you eat?';
    descriptions[2].innerHTML = 'How many boxes of fries did you eat?';
    descriptions[3].innerHTML = 'How many Big Mac\'s did you eat?';
    descriptions[4].innerHTML = 'How many beers did you drink?';
    descriptions[5].innerHTML = 'How many chicken nuggets did you eat?';
}

function changeBoxBackground(idOfFoodItem,amountOfFoodPossible) {
    let foodEaten = parseInt(document.getElementById(idOfFoodItem).innerHTML);
    let box = document.getElementById(idOfFoodItem).parentNode;
        
    if (foodEaten >= Math.round(0.7 * amountOfFoodPossible)) {
        box.classList.add('has-background-danger');
    }
    else if (foodEaten >= Math.round(0.45 * amountOfFoodPossible)) {
        box.classList.add('has-background-warning');
    }
    else {
        box.classList.add('has-background-primary');
    }
}

function changeAmountDescription() {
    let arrayOfPossibilities = [4,6,10,12,15,20];
    let arrayOfFoodValues = document.querySelectorAll('p:nth-child(4)');
    for (let i = 0; i < arrayOfFoodValues.length; i++) {
        let foodValue = parseInt(arrayOfFoodValues[i].innerHTML);
        let description = arrayOfFoodValues[i].nextElementSibling;
        description.classList.add('has-text-white', 'subtitle', 'is-6');

        if (foodValue >=  Math.round(0.7 * arrayOfPossibilities[i])) {
            document.getElementsByClassName('resulting-text')[i].innerHTML = 'Too much :\'(';
        }
        else if (foodValue >= Math.round(0.45 * arrayOfPossibilities[i])) {
            document.getElementsByClassName('resulting-text')[i].innerHTML = 'That\'s a lot.. :/';
        }
        else {
            document.getElementsByClassName('resulting-text')[i].innerHTML = 'Yum :)';
        }
    }
}

function resetBoxBackground(idOfFoodItem) {
    let foodItem = document.getElementById(idOfFoodItem);
    const body = document.getElementById('body');
    foodItem.parentNode.classList.remove('has-background-danger','has-background-warning','has-background-primary');
    foodItem.parentNode.classList.add('has-background-white');
    body.style.backgroundColor = '#FFFFFF';

    let resultingTexts = document.getElementsByClassName('resulting-text');
    for (let i = 0; i < resultingTexts.length; i++) {
        resultingTexts[i].innerHTML = '';
    }

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
    resultHeading.innerHTML = `How much food did you eat?`;
    resultCaption.innerHTML = `Click play to find out!`;
    resultCaption.classList.remove('has-text-primary','has-text-warning','has-text-danger');
    resultHeading.classList.remove('has-text-primary','has-text-warning','has-text-danger');
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
    handleBoxContents();
    changeBoxBackground('hotdog-num', 4);
    changeAmountDescription();

    changeBoxBackground('burger-num', 6);
    changeAmountDescription();

    changeBoxBackground('fries-num', 10);
    changeAmountDescription();

    changeBoxBackground('bigmac-num', 12);
    changeAmountDescription();

    changeBoxBackground('beer-num', 15);
    changeAmountDescription();

    changeBoxBackground('nugget-num', 20);
    changeAmountDescription();

    handleBtnStyling();
    
}

function resetGame() {
    resetFoodAmounts();
    resetResults();

    resetButtons();

    resetBoxContents();

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

