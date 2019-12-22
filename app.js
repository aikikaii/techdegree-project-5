///////    FETCHING 12 PEOPLE FROM API /////////

fetch('https://randomuser.me/api/?results=12')
    .then(response => response.json())
    .then(data => getData(data.results))

//.then(data => console.log(data.results))
.catch(error => console.log('Looks like there was a problem !', error))

////////      END      ///////////


// looping through data.results 
function getData(data) {
    data.map(person => {
        //create search
        appendDiv(data);
    });
    //create gallery
    createGallery(data);
    //create modal
    createModal(data);

}
/////////       CREATING SEARCH MARKUP      ///////////
function appendDiv(data) {
    const div = document.querySelector('.search-container');
    let HTML =
        `
    <form action="#" method="get">
        <input type="search" id="search-input" class="search-input" placeholder="Search...">
        <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
    </form>
     `;
    div.innerHTML = HTML;
}


function createGallery(data) {

    data.map(person => {
        /////////////      CREATING GALERY MARKUP    ///////////////
        const divGalery = document.querySelector('.gallery');
        const card = document.createElement('div');
        const cardImgContainer = document.createElement('div');
        const img = document.createElement('img');
        const divInfoContainer = document.createElement('div');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const p1 = document.createElement('p');

        card.className = 'card';
        cardImgContainer.className = 'card-img-container';
        img.className = 'card-img';
        divInfoContainer.className = 'card-info-container';
        h3.setAttribute('id', 'name');
        h3.className = 'card-name cap';
        p.className = 'card-text';
        p1.className = 'card-text cap';

        divGalery.append(card);
        card.append(cardImgContainer);
        cardImgContainer.append(img);
        img.setAttribute('src', person.picture.large);
        img.setAttribute('alt', 'profile picture');
        card.append(divInfoContainer);
        divInfoContainer.append(h3);
        divInfoContainer.append(p);
        divInfoContainer.append(p1);

        ///////    DYNAMICALLY LOADING DATA FROM SERVER TO PAGE    ///////
        h3.innerHTML = person.name.first + ' ' + person.name.last;
        p.innerHTML = person.email;
        p1.innerHTML = person.location.city;
    })
}
//creating modal window 
function createModal(data) {

    let arr = [data];
    let card = document.querySelectorAll('.card'); //selecting all cards
    for (let i = 0; i < card.length; i++) {
        card[i].addEventListener('click', function(e) {
            //slicing birthday date
            let bDay = data[i].dob.date;
            let cutString = bDay.substring(0, 10);

            //creating HTML for choosen card
            let HTML = `   
        <div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            <div class="modal-info-container">
                <img class="modal-img" src="${data[i].picture.large}" alt="profile picture">
                <h3 id="name" class="modal-name cap">${data[i].name.first} ${data[i].name.last}</h3>
                <p class="modal-text">${data[i].email}</p>
                <p class="modal-text cap">${data[i].location.city}</p>
                <hr>
                <p class="modal-text">${data[i].cell}</p>
                <p class="modal-text">${data[i].location.street.number} ${data[i].location.street.name} ${data[i].location.city} ${data[i].location.postcode}</p>
                <p class="modal-text">Birthday: ${cutString}</p>
            </div>
        <div class="modal-btn-container">
            <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
            <button type="button" id="modal-next" class="modal-next btn">Next</button>
        </div>
    </div>
    `;

            let divModal = document.createElement('div');
            divModal.className = 'modal-container';
            let body = document.querySelector('body');
            body.appendChild(divModal);

            divModal.innerHTML = HTML;

            //closing button
            let closeButton = document.getElementById('modal-close-btn');
            closeButton.addEventListener('click', e => {
                body.removeChild(divModal);
            });

            //previous button
            let buttonPrev = document.getElementById('modal-prev');
            buttonPrev.addEventListener('click', e => {

                console.log(arr.findIndex[card[i]]);

            });
        }); //end card[i] event listner
    } //end for loop
}