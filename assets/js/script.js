var playerArray = [];
let userValue = document.getElementById('users-values');
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
        //console.log("Index " + ind);

        if (ind >= 0) {
            //console.log('Item: ' + playerArray[ind]);
            playerArray.splice(ind, 1);
        }

        let del = document.getElementsByName('player-colomns');
        //del.splice(ind, 1);
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
        <th scope="col" style="border-radius: 10px 0 0 0;">Players</th>
        <th scope="col" style="color: #636464;">Platinum</th>
        <th scope="col"style="color: #055160;">Electrum</th>
        <th scope="col"style="color: #a47c04;">Gold</th>
        <th scope="col"style="color: #adb5bd;">Silver</th>
        <th scope="col"style="color: #664d03; border-radius: 0 10px 0 0;">Copper</th>
      </tr>
    </thead>
    <tbody>`;

    if (playerArray ){
    for (player of playerArray) {
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
    //console.log("Id: " + id + " Value: " + value);
    let nameVal = `{"id":"${id}","name":"${value}"}`;
    let searchVal = `{"id":"${id}",`;

    for (let i = 0; i < playerArray.length; i++) {
        //console.log("Array Value" + playerArray + "blank" + searchVal);
        if (playerArray[i].startsWith(searchVal)) {
            //console.log("Item: " + nameVal);

            playerArray.splice(i, 1, nameVal);
        }
    }
}

// Creates and shows the players that was entered.
function playerRollView() {

    let div = document.createElement('div');
    if (playerArray) {
        for (player of playerArray) {
            let plr = JSON.parse(player);
    
            div.innerHTML = `
            <div class="row player-colomn" id="roll-style">
                <div class="col">
                    <h2 style="float: left; margin: auto;">${plr.name}</h2>
                </div>
                <div class="col" style="font-family: 'Eagle Lake', sans-serif;"><input type="text" id="rolled" name="rolled" disabled /></div>
                <div class="col">
                    <button onclick="rollDie()">
                        <img src="assets/images/dice20.png" class="die-image">
                    </button>
                </div>
            </div>`;
        }
    }
    document.getElementById('roll-section').appendChild(div);

    // This function will roll a random number between 1 and 20
    let numRoll = Math.floor(Math.random() * 20) + 1;
    document.getElementById('rolled').value = numRoll;
}

// If a player want's to reroll
function rollDie() {
    let numRoll = Math.floor(Math.random() * 20) + 1;
    document.getElementById('rolled').value = numRoll;
}
