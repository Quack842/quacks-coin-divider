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

    if (playerArray.length == 0) {
        //console.log('Array empty');
    } else {
        //console.log('Items' + playerArray.length);
    }
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
        //console.log("value" + v);

        // for (let i = 0; i < playerArray.length; i++) {
        //     console.log("Player: " + playerArray[i]);
        // }
        let del = document.getElementsByName('player-colomns');
        //del.splice(ind, 1);
        del[ind].remove();

        //console.log("Deleted: " + del);
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

}

function backPlayer() {
    document.getElementById("calculateSection").style.display = "none";
    document.getElementById("playerSection").style.display = "block";
}

// Creates The Table When Clicked On Calculate
function calculateTotal() {
    let platinumInput = parseInt(document.getElementById('platinum').value);
    let electrumInput = parseInt(document.getElementById('electrum').value);
    let goldInput = parseInt(document.getElementById('gold').value);
    let silverInput = parseInt(document.getElementById('silver').value);
    let copperInput = parseInt(document.getElementById('copper').value);

    console.log("Platinum Value " + platinumInput);
    console.log("Electrum Value " + electrumInput);
    console.log("Gold Value " + goldInput);
    console.log("Silver Value " + silverInput);
    console.log("Copper Value " + copperInput);

    let html = `
    <table class="table table-dark" id="user-table">
    <thead>
      <tr>
        <th scope="col">Players</th>
        <th scope="col">Platinum</th>
        <th scope="col">Electrum</th>
        <th scope="col">Gold</th>
        <th scope="col">Silver</th>
        <th scope="col">Copper</th>
      </tr>
    </thead>
    <tbody>`;

    if (playerArray ){
    for (player of playerArray) {
        let plr = JSON.parse(player);
        console.log("Found " + player + ": " + plr.name);

        let rowHtml = `
        <tr>
            <td>${plr.name}</td>
            <td id="platinum-input">${platinumInput / playerArray.length}</td>
            <td id="electrum-input">${electrumInput / playerArray.length}</td>
            <td id="gold-input">${goldInput / playerArray.length}</td>
            <td id="silver-input">${silverInput / playerArray.length}</td>
            <td id="copper-input">${copperInput / playerArray.length}</td>
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
