function addPlayer() {
    let div = document.createElement('div');
    div.className = 'row player-colomn';

    div.innerHTML = `
    <div class="row player-colomn">
        <div class="col-4" style="text-align: left;">
            <h2><input type="text" value="Player" style="border: none;"></h2>
        </div>
        <div class="col-4"></div>
        <div class="col-4" style="text-align: right;">
            <button class="player-edit" onclick="deletePlayer(this)"><i class="fa-solid fa-trash-can"></i></button>
        </div>
    </div>`;

    document.getElementById('player-list').appendChild(div);
}
