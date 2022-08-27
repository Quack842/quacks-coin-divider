var playerArray = [];
let userValue = document.getElementById('users-values');
let platinumInput = document.getElementById('platinum');
let electrumInput = document.getElementById('electrum');
let goldInput = document.getElementById('gold');
let silverInput = document.getElementById('silver');
let copperInput = document.getElementById('copper');

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
            <h2><input id="player-name${nm}" type="text" placeholder="Player Name" class="player-edit" onfocusout="setName('player-name${nm}', this.value)"></h2>
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
    //del.remove();
}

// Changes screen view to second section and removes first sections view and Pushes the entered Value to array
function submitInput() {
    console.log(playerArray);
    document.getElementById("calculateSection").style.display = "block";
    document.getElementById("playerSection").style.display = "none";

    let nameInput = document.getElementById(`player-name${nm}`).value;
    playerArray = JSON.parse(sessionStorage.getItem('players'));

    for (nameInputs of nameInput) {
        playerArray.push(nameInput);
        console.log(playerArray);

    }

    sessionStorage.setItem('players', JSON.stringify(playerArray));
}

function backPlayer() {
    document.getElementById("calculateSection").style.display = "none";
    document.getElementById("playerSection").style.display = "block";
}
// Creates The Table When Clicked On Calculate
function calculateTotal() {
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

    for (playerArrays of playerArray) {
        let rowHtml = `
        <tr>
            <td>${playerArrays.nameInputs.value}</td>
            <td id="platinum-input">${playerArrays.platinumInput.value}</td>
            <td id="electrum-input">${playerArrays.electrumInput}</td>
            <td id="gold-input">${playerArrays.goldInput}</td>
            <td id="silver-input">${playerArrays.silverInput}</td>
            <td id="copper-input">${playerArrays.copperInput}</td>
        </tr>
    `;
        html += rowHtml;
    }
    html += `
    </tbody>
    </table>
    `;

    return html;

}
let table = calculateTotal();
document.getElementById('users-values').innerHTML = table;


// Function to set name on focus out
function setName(id, value) {
    //console.log("Id: " + id + " Value: " + value);
    let nameVal = `{"id":"${id}","name":"${value}"}`;
    let searchVal = `{"id":"${id}",`;

    for (let i = 0; i < playerArray.length; i++) {
        //console.log("Array Value" + playerArray + "Blafnk" + searchVal);
        if (playerArray[i].startsWith(searchVal)) {
            //console.log("Item: " + nameVal);

            playerArray.splice(i, 1, nameVal);
        }
    }
}
