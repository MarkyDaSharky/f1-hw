const getErgastAPI = async function(season,round){
    let response = await fetch(`https://ergast.com/api/f1/${season}/${round}/driverStandings`);
    let data = await response.json()
    return await data
}


// Grabbing the form from the document
const f1Form = document.getElementById('f1Form');

// function to add list to html
function addToF1List(DriverStanding){
    let f1List = document.querySelector('#f1List');
    let liEl = document.createElement('li');
    liEl.innerText = `Driver name: ${DriverStanding.givenName} position: ${DriverStanding.position} Constructor: ${DriverStanding.ConstructorId}`
    f1List.append(liEl);
}
// Event listener for submit
f1Form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let f1FormName = e.target.f1Name.value;
    let driverStandings = await addToF1List(f1FormName);
    addToF1List(driverStandings)
})

// attempting to make a table
// // function to populate a table
// async function loadIntoTable(url, table){
//     const tableHead = table.querySelector('thead');
//     const tablebody = table.querySelector('tbody');
//     const response = await fetch(url);
//     const {DriverStandings, Driver, Constructors} = await response.json
// }

// loadIntoTable(`https://ergast.com/api/f1/${season}/${round}/driverStandings`, document.querySelector('table'));