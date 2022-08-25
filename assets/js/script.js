let playerArray = ["A", "B"];
let nameInput = document.getElementById('player-name');
let userValue = document.getElementById('users-values');
let platinumInput = document.getElementById('platinum');
let electrumInput = document.getElementById('electrum');
let goldInput = document.getElementById('gold');
let silverInput = document.getElementById('silver');
let copperInput = document.getElementById('copper');

 // Script to add players when button is clicked.
function addPlayer() {
    let div = document.createElement('div');
    div.className = 'row player-colomn';

    div.innerHTML = `
    <div class="row player-colomn" id="player-colomns">
        <div class="col-4" style="text-align: left;">
            <h2><input id="player-name" type="text" placeholder="Player" class="player-edit"></h2>
        </div>
        <div class="col-4"></div>
        <div class="col-4" style="text-align: right;">
            <button class="player-edit" onclick="deletePlayer(this)"><i class="fa-solid fa-trash-can"></i></button>
        </div>
    </div>`;

    document.getElementById('player-list').appendChild(div);
}
// Removes player when delete icon is clicked.
function deletePlayer() {
    let del = document.getElementById('player-colomns');

    del.remove();
}

// Inserts user value to An array and shows on next page... hopefully
function submitInput() {
    playerArray.push(nameInput);

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
        let rowHtml =  `
        <tr>
            <td>${playerArrays.nameInput}</td>
            <td id="platinum-input">${playerArrays.platinumInput}</td>
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
