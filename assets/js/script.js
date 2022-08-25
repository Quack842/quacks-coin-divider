let value = [""];

function addPlayer() {
    let div = document.createElement('div');
    div.className = 'row player-colomn';

    div.innerHTML = `
    <div class="row player-colomn" id="player-colomns">
        <div class="col-4" style="text-align: left;">
            <h2><input type="text" value="Player" name="array[]" style="border: none;" required></h2>
        </div>
        <div class="col-4"></div>
        <div class="col-4" style="text-align: right;">
            <button class="player-edit" onclick="deletePlayer(this)"><i class="fa-solid fa-trash-can"></i></button>
        </div>
    </div>`;

    document.getElementById('player-list').appendChild(div);
}

function deletePlayer(event) {
    let del = document.getElementById('player-colomns');

    del.remove();

}


