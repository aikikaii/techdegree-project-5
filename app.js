///////    FETCHING 12 PEOPLE FROM API /////////

fetch('https://randomuser.me/api/?results=12')
    .then(response => response.json())
    .then(data => getData(data.results))
    //.then(data => console.log(data.results))

////////      END      ///////////

function getData(data) {
    data.map(person => {
        /////////       CREATING SEARCH MARKUP      ///////////

        const div = document.querySelector('.search-container');
        let HTML =
            `
        <form action="#" method="get">
            <input type="search" id="search-input" class="search-input" placeholder="Search...">
            <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
        </form>
         `;
        div.innerHTML = HTML;

        ////////       END    //////////

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
        img.setAttribute('src', person.picture.medium);
        card.append(divInfoContainer);
        divInfoContainer.append(h3);
        divInfoContainer.append(p);
        divInfoContainer.append(p1);

        /////////////     END   /////////////////////

        ///////    DYNAMICALLY LOADING HTML FROM SERVER    ///////

        h3.innerHTML = person.name.first + ' ' + person.name.last;
        p.innerHTML = person.email;
        p1.innerHTML = person.location.city;

        /////////    END     ///////////

    });

}