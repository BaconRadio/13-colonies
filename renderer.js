const callsigns = ['K2A', 'K2B', 'K2C', 'K2D', 'K2E', 'K2F', 'K2G', 'K2H', 'K2I', 'K2J', 'K2K', 'K2L', 'K2M', 'WM3PEN', 'GB13COL', 'TM13COL']
const modes = ['SSB', 'CW', 'DIGI']

function renderTable() {
    var collection = document.getElementsByClassName("mode");
    for (let index = 0; index < collection.length; index++) {
        const element = collection[index];
        for (let i = 0; i < 16; i++) {
            element.innerHTML += `<td><input type="checkbox" id='${callsigns[i]}-${modes[index]}'></td>`
        }
    }
    var header = document.getElementById("header-row");
    for (let calls = 0; calls < callsigns.length; calls++) {
        const element = callsigns[calls];
        header.innerHTML += `<th class="p-1">${element}</th>`
    }
}

renderTable();