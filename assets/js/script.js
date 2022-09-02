var playerArray = [];
var numRoll = [];
let form = document.getElementById('form-submit');

// Prevent form from refreshing page after submit
function handleSubmit(event) { 
    event.preventDefault(); 
}
form.addEventListener('submit', handleSubmit);

// Script to add players when button is clicked.
function addPlayer() {
    let nm = playerArray.length.toString();
    let p = {
        id: 'player-name' + nm,
        name: ''
    };

    playerArray.push(JSON.stringify(p));

    let div = document.createElement('div');

    div.innerHTML = `
    <div class="row player-colomn" id="player-colomns" name="player-colomns">
        <div class="col-4" style="text-align: left;">
            <h2><input id="player-name${nm}" type="text" placeholder="Player Name" class="player-edit" name="player-input" onfocusout="setName('player-name${nm}', this.value)" required></h2>
        </div>
        <div class="col-4"></div>
        <div class="col-4" style="text-align: right;">
            <button class="player-edit" id="button-${nm}" onclick="deletePlayer('player-name${nm}')"><i class="fa-solid fa-trash-can"></i></button>
        </div>
    </div>`;

    document.getElementById('player-list').appendChild(div);
}

// Removes player when delete icon is clicked.
function deletePlayer(id) {
    let element = document.getElementById(id);
    if (element) {
        let v = element.value;
        let arrayId = `{"id":"${id}","name":"${v}"}`;
        let ind = playerArray.indexOf(arrayId);

        if (ind >= 0) {
            playerArray.splice(ind, 1);
        }

        let del = document.getElementsByName('player-colomns');
        del[ind].remove();
    }
}

// Changes screen view to second section and removes first sections view and Pushes the entered Value to array
function submitInput() {
    let playerInputs = document.getElementsByName('player-input');
    let valCheck = true;
    
    for (let i = 0; i < playerInputs.length; i++) {
        if(!playerInputs[i].checkValidity()){
            valCheck = false;
            break;
        }
    }
    if (!valCheck) {
        return;
    }
    
    document.getElementById("calculateSection").style.display = "block";
    document.getElementById("playerSection").style.display = "none";
    document.getElementById("playerRollSection").style.display = "none";

}

function submitRollInput() {
    document.getElementById("calculateSection").style.display = "none";
    document.getElementById("playerSection").style.display = "none";
    document.getElementById("playerRollSection").style.display = "block";

    let div = document.getElementById("rolled-results");
    if (div) {
        div.innerHTML = '';
    } 
}

function backPlayer() {
    document.getElementById("calculateSection").style.display = "none";
    document.getElementById("playerSection").style.display = "block";
    document.getElementById("playerRollSection").style.display = "none";
}

function backRollPlayer() {
    document.getElementById("calculateSection").style.display = "block";
    document.getElementById("playerSection").style.display = "none";
    document.getElementById("playerRollSection").style.display = "none";
}

// Creates The Table When Clicked On Calculate
function calculateTotal() {
    let platinumInput = parseInt(document.getElementById('platinum').value);
    let electrumInput = parseInt(document.getElementById('electrum').value);
    let goldInput = parseInt(document.getElementById('gold').value);
    let silverInput = parseInt(document.getElementById('silver').value);
    let copperInput = parseInt(document.getElementById('copper').value);

    let html = `
    <table class="table table-light" id="user-table">
    <thead>
      <tr>
        <th scope="col" class="tbl-header" style="border-radius: 10px 0 0 0;">Players</th>
        <th scope="col" class="tbl-img"><i class="fa-solid fa-user"></i></th>
        <th scope="col" class="tbl-header" style="color: #636464;">Platinum</th>
        <th scope="col" class="tbl-img"><img style="width: 20px;" src="assets/images/platinum.png" alt="platinum coin"></th>
        <th scope="col"class="tbl-header" style="color: #055160;">Electrum</th>
        <th scope="col" class="tbl-img"><img style="width: 20px;" src="assets/images/electrum.png" alt="electrum coin"></th>
        <th scope="col"class="tbl-header" style="color: #a47c04;">Gold</th>
        <th scope="col" class="tbl-img"><img style="width: 20px;" src="assets/images/gold.png" alt="gold coin"></th>
        <th scope="col"class="tbl-header" style="color: #adb5bd;">Silver</th>
        <th scope="col" class="tbl-img"><img style="width: 20px;" src="assets/images/silver.png" alt="silver coin"></th>
        <th scope="col"class="tbl-header" style="color: #664d03; border-radius: 0 10px 0 0;">Copper</th>
        <th scope="col" class="tbl-img"><img style="width: 20px;" src="assets/images/copper.png" alt="copper coin"></th>
      </tr>
    </thead>
    <tbody>`;

    if (playerArray ){
    for (let player of playerArray) {
        let plr = JSON.parse(player);

        let rowHtml = `
        <tr>
            <td>${plr.name}</td>
            <td id="platinum-input">${Math.floor(platinumInput / playerArray.length)}</td>
            <td id="electrum-input">${Math.floor(electrumInput / playerArray.length)}</td>
            <td id="gold-input">${Math.floor(goldInput / playerArray.length)}</td>
            <td id="silver-input">${Math.floor(silverInput / playerArray.length)}</td>
            <td id="copper-input">${Math.floor(copperInput / playerArray.length)}</td>
        </tr>
    `;
    html += rowHtml;
    }
}
    html += `
    </tbody>
    </table>
    `;

    document.getElementById('users-values').innerHTML = html;

    //Calculates the Remainder
    let platinumRemain = platinumInput % playerArray.length;
    let electruumRemain = electrumInput % playerArray.length;
    let goldRemain = goldInput % playerArray.length;
    let silverRemain = silverInput % playerArray.length;
    let copperRemain = copperInput % playerArray.length;

    let platinumSpan = `<h4 style="color: white; font-family: 'Eagle Lake', sans-serif;">${platinumRemain}</h4>`;
    let electrumSpan = `<h4 style="color: white; font-family: 'Eagle Lake', sans-serif;">${electruumRemain}</h4>`;
    let goldSpan = `<h4 style="color: white; font-family: 'Eagle Lake', sans-serif;">${goldRemain}</h4>`;
    let silverSpan = `<h4 style="color: white; font-family: 'Eagle Lake', sans-serif;">${silverRemain}</h4>`;
    let copperSpan = `<h4 style="color: white; font-family: 'Eagle Lake', sans-serif;">${copperRemain}</h4>`;

    document.getElementById('platinumOver').innerHTML = platinumSpan;
    document.getElementById('electrumOver').innerHTML = electrumSpan;
    document.getElementById('goldOver').innerHTML = goldSpan;
    document.getElementById('silverOver').innerHTML = silverSpan;
    document.getElementById('copperOver').innerHTML = copperSpan;

    return html;
}

// Function to set name on focus out
function setName(id, value) {
    let nameVal = `{"id":"${id}","name":"${value}"}`;
    let searchVal = `{"id":"${id}",`;

    for (let i = 0; i < playerArray.length; i++) {
        if (playerArray[i].startsWith(searchVal)) {

            playerArray.splice(i, 1, nameVal);
        }
    }
}

// Creates and shows the players that was entered.
function playerRollView() {

    // This function will roll a random number between 1 and 20
    numRoll = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
    let num = numRoll[Math.floor(Math.random() * numRoll.length)];
    numRoll.splice(numRoll.indexOf(num), 1);
    //console.log("Array length: " + numRoll.length);

    let div = document.getElementById('rolled-results');
    if(!div) {
        div = document.createElement('div');
        div.id = 'rolled-results';
    }
    div.innerHTML = '';

    if (playerArray) {
        for (let player of playerArray) {
            let bgC = (num == 20) ? "green-back" : "";
            let bgRed = (num == 1) ? "red-border" : "";
            let plr = JSON.parse(player);
    
            div.innerHTML += `
            <div class="row player-colomn rl-stl ${bgC} ${bgRed}" id="roll-style-${plr.name}" name="loop-style">
                <div class="col-4">
                    <h2 style="float: left; margin: auto;">${plr.name}</h2>
                </div>
                <div class="col-4 mid-col" style="font-family: 'Eagle Lake', sans-serif;">
                <input type="text" id="rolled-${plr.name}" class="rolled" name="rolled" disabled value="${num}" /></div>
                <div class="col-4">
                    <button onclick="rollDie('${plr.name}')">
                        <img src="assets/images/dice20.png" class="die-image">
                    </button>
                </div>
            </div>`;
            
            num = numRoll[Math.floor(Math.random() * numRoll.length)];
            numRoll.splice(numRoll.indexOf(num), 1);

        }
    }

    document.getElementById('roll-section').appendChild(div);
    this.highestNum();
}

// If a player wants to reroll
function rollDie(id) {

    let el = document.getElementById('rolled-'+id);
    let curr = el.value;
    let num = numRoll[Math.floor(Math.random() * numRoll.length)];
    // Current Number will replace the number that was pulled so the user does not run out of numbers
    numRoll.splice(numRoll.indexOf(num), 1, curr);
    el.value = num;

    this.highestNum();

}

// Change border and background when num is 1 or 20

function highestNum() {
    let high = 0;
    let idHighest = "";
    let id1 = "";
    let id20 = "";
    let inputs = document.getElementsByName('rolled');

    for (let i = 0; i < inputs.length; i++) {
        let val = +inputs[i].value;
        if (val > high) {
            high = +inputs[i].value;
            idHighest = inputs[i].id;
        }
        if (val == 1) {
            id1 = inputs[i].id;
        }
        if (val == 20) {
            id20 = inputs[i].id;
        }
    }

    id1 = 'roll-style' + id1.substring(id1.indexOf('-'), id1.length);
    id20 = 'roll-style' + id20.substring(id20.indexOf('-'), id20.length);
    idHighest = 'roll-style' + idHighest.substring(idHighest.indexOf('-'), idHighest.length);

    console.log('idH is ' + idHighest);
    console.log('id1 is ' + id1);
    console.log('id20 is ' + id20);

    let myArr = document.getElementsByName('loop-style');
    
    for (let divEl of myArr) {
        let val = divEl.id;

        if (val == id1) {
            divEl.style.boxShadow = '0px 0px 15px 5px #FF0000';
            divEl.style.background = 'linear-gradient(180deg, rgba(255,0,0,1) 0%, rgba(7,7,7,1) 100%)';
        }
        else if (val == id20) {
            divEl.style.boxShadow = '0px 0px 15px 5px #1BFF04';
            divEl.style.background = 'linear-gradient(180deg, rgba(20,255,0,1) 0%, rgba(7,7,7,1) 100%)';
        }
        else if (val == idHighest) {
            divEl.style.boxShadow = '0px 0px 15px 5px #1BFF04';
            divEl.style.background = 'none';
            divEl.style.backgroundColor = 'white';
        }
        else {
            divEl.style.boxShadow = 'none';
            divEl.style.background = 'none';
            divEl.style.backgroundColor = 'white';
        }
    }
}