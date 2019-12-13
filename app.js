//im getting 12 people from api

fetch('https://randomuser.me/api/?results=12')
    .then(response => response.json())
    .then(data => getData(data.results))

function getData(data) {
    data.map(person => {
        console.log(person.picture);
        console.log(person.name);
        console.log(person.email);
        console.log(person.location);

        const div = document.querySelector('.search-container');
        let HTML =
            `
        <form action="#" method="get">
            <input type="search" id="search-input" class="search-input" placeholder="Search...">
            <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
        </form>
         `;
        div.innerHTML = HTML;

    });

    /////////////      CREATE   GALERY    HTML  ///////////////
    const divGalery = document.querySelector('.gallery');
    const card = document.createElement('div');
    const cardImgContainer = document.createElement('div');
    const img = document.createElement('img');
    const divInfoContainer = document.createElement('div');
    const h3 = document.createElement('h3');


    card.className = 'card';
    cardImgContainer.className = 'card-img-container';
    img.className = 'card-img';
    divInfoContainer.className = 'card-info-container';
    h3.setAttribute('id', 'name');
    h3.className = 'card-name cap';

    divGalery.append(card);
    card.append(cardImgContainer);
    cardImgContainer.append(img);
    img.setAttribute('src', 'https://placehold.it/90x90');
    card.append(divInfoContainer);
    divInfoContainer.append(h3);



    `
    <div class="card">
    <div class="card-img-container">
        <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
    </div>
    <div class="card-info-container">
        <h3 id="name" class="card-name cap">first last</h3>
        <p class="card-text">email</p>
        <p class="card-text cap">city, state</p>
    </div>
</div>
    `;

}