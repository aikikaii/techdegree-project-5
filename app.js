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

function createModal(data) {
    let card = document.querySelectorAll('.card');

    data.map(person => {

        card.forEach(cards => {

            const name = person.name.first + person.name.last;
            console.log(name);


            cards.addEventListener('click', function(e) {


                let body = document.querySelector('body');
                let divModal = document.createElement('div');
                let div = document.createElement('div');
                let divInfo = document.createElement('div')
                let button = document.createElement('button');
                let img1 = document.createElement('img');
                let h31 = document.createElement('h3');
                let email = document.createElement('p');
                let city = document.createElement('p');
                let hr = document.createElement('hr');
                let phone = document.createElement('p');
                let address = document.createElement('p');
                let birthday = document.createElement('p');
                let modalBTN = document.createElement('div');
                let buttonPrev = document.createElement('button');
                let buttonNext = document.createElement('button');


                divModal.className = 'modal-container';
                div.className = 'modal';
                button.type = 'button';
                button.setAttribute('id', 'modal-close-btn');
                button.className = 'modal-close-btn';
                button.innerHTML = "<strong>X</strong>"
                divInfo.className = 'modal-info-container';
                img1.className = 'modal-img';
                img1.setAttribute('src', person.picture.large);
                img1.setAttribute('alt', 'profile picture');
                h31.setAttribute('id', 'name');
                h31.className = 'modal-name cap';
                h31.innerHTML = person.name.first + ' ' + person.name.last;
                email.className = 'modal-text';
                email.innerHTML = person.email;
                city.className = 'modal-text cap';
                city.innerHTML = person.location.city;
                phone.className = 'modal-text';
                phone.innerHTML = person.cell;
                address.className = 'modal-text';
                address.innerHTML = person.location.street.number + ' ' + person.location.street.name + '. , ' + person.location.city + ', ' + 'OR ' + person.location.postcode;
                birthday.className = 'modal-text';
                //slice some string
                let bDay = person.dob.date;
                let cutString = bDay.substring(0, 10);
                birthday.innerHTML = 'Birthday: ' + cutString;
                modalBTN.className = 'modal-btn-container';
                buttonPrev.className = 'modal-prev btn';
                buttonNext.className = 'modal-next btn';
                buttonPrev.setAttribute('type', 'button');
                buttonPrev.setAttribute('id', 'modal-prev');
                buttonPrev.innerHTML = 'Prev';
                buttonNext.setAttribute('type', 'button');
                buttonNext.setAttribute('id', 'modal-next');
                buttonNext.innerHTML = 'Next';


                body.appendChild(divModal);
                divModal.append(div);
                div.append(button);
                div.append(divInfo)
                divInfo.append(img1);
                divInfo.append(h31);
                divInfo.append(email);
                divInfo.append(city);
                divInfo.append(hr);
                divInfo.append(phone);
                divInfo.append(address);
                divInfo.append(birthday);
                divModal.append(modalBTN);
                modalBTN.append(buttonPrev);
                modalBTN.append(buttonNext);

                //close button
                let $modalButtonClose = $('#modal-close-btn');
                $modalButtonClose.on('click', e => {
                    $('.modal-container').css('display', 'none');
                });

            });

        });
    });
}