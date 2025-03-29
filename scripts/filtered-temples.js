document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

document.addEventListener("DOMContentLoaded", function() {
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const menu = document.querySelector(".menu");

    hamburgerBtn.addEventListener("click", function() {
        menu.classList.toggle("show"); 

        
        if (menu.classList.contains("show")) {
            hamburgerBtn.innerHTML = "&#10006;"; 
        } else {
            hamburgerBtn.innerHTML = "&#9776;"; 
        }
    });
}); 
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
       templeName: "Campinas Brazil Temple",
       location: "São Paulo, Brazil",
       dedicated: "2002, May, 7",
       area: 48100,
       imageUrl:
       "https://churchofjesuschristtemples.org/assets/img/temples/campinas-brazil-temple/campinas-brazil-temple-6012-main.jpg"
    },
    {
       templeName: "Porto Alegre Brazil Temple",
       location: "Porto Alegre, Brazil",
       dedicated: "1998, may, 2",
       area: 13325,
       imageUrl:
       "https://churchofjesuschristtemples.org/assets/img/temples/porto-alegre-brazil-temple/porto-alegre-brazil-temple-14267-main.jpg"
    },
    {
       templeName: "Rio de Janeiro Brazil Temple",
       location: "Rio de Janeiro, Brazil",
       dedicated: "2017, march, 4",
       area: 29966,
       imageUrl:
       "https://churchofjesuschristtemples.org/assets/img/temples/rio-de-janeiro-brazil-temple/rio-de-janeiro-brazil-temple-8167-main.jpg"
    },
  ];

  function filterTemples(criteria) {
    let filteredTemples = [];
    switch(criteria) {
        case "old":
            filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
            break;
        case "new":
            filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
            break;
        case "large":
            filteredTemples = temples.filter(t => t.area > 90000);
            break;
        case "small":
            filteredTemples = temples.filter(t => t.area < 10000);
            break;
        default:
            filteredTemples = temples;
    }
    displayTemples(filteredTemples);
}

document.getElementById("home").addEventListener("click", () => filterTemples("all"));

document.getElementById("old").addEventListener("click", () => filterTemples("old"));

document.getElementById("new").addEventListener("click", () => filterTemples("new"));

document.getElementById("large").addEventListener("click", () => filterTemples("large"));

document.getElementById("small").addEventListener("click", () => filterTemples("small"));

displayTemples(temples);

function displayTemples(templesList) {
    const container = document.getElementById("temple-container");
    container.innerHTML = ""; // Limpa os templos anteriores

    templesList.forEach(temple => {
        const card = document.createElement("div");
        card.classList.add("temple-card");

        card.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;

        container.appendChild(card);
    });
}

