const urlShows = 'https://project-1-api.herokuapp.com/showdates?api_key=?api_key=c96c0abc-3e8f-46ca-9145-93c0f269da4f';

let ax = axios
.get(urlShows)
.then(res => {

    res.data.forEach(show => {
        createCard(show)
    })
})
.catch(err => console.log(err))

window.addEventListener('DOMContentLoaded',() => {
    const labels = document.querySelector(".shows-labels");
    const labelsDates = document.createElement('h3');
    const labelsVenue = document.createElement("h3");
    const labelsLocation = document.createElement("h3");
    labelsDates.innerText = "Dates";
    labelsVenue.innerText = "Venue";
    labelsLocation.innerText = "Location";
    labels.appendChild(labelsDates).value;
    labels.appendChild(labelsVenue).value;
    labels.appendChild(labelsLocation).value;
    labelsDates.classListadd('shows-labels__dates')
    labelsVenue.classListadd('shows-labels__venue')
    labelsLocation.classListadd('shows-labels__location')
});

function createCard(show) {
    const grid = document.querySelector(".shows-grid");
    const gridContainer = document.createElement('div');
    const gridDates = document.createElement('h4');
    const gridVenue = document.createElement("p");
    const gridLocation = document.createElement("p");
    const gridButton = document.createElement('button');
    gridDates.innerText = show.date;
    gridVenue.innerText = show.location;
    gridLocation.innerText = show.place;
    gridButton.innerText = "Buy Tickets";
    grid.appendChild(gridContainer)
    gridContainer.appendChild(gridDates).value;
    gridContainer.appendChild(gridVenue).value;
    gridContainer.appendChild(gridLocation).value;
    gridContainer.appendChild(gridButton).value;
    gridContainer.classList.add('shows-grid__container');
    gridDates.classList.add('shows-grid__container-date');
    gridVenue.classList.add('shows-grid__container-venue');
    gridLocation.classList.add('shows-grid__container-location');
    gridButton.classList.add('shows-grid__container-button');
}
