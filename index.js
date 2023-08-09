
let animals = [
    {
        "id": 1,
        "name": "Lion",
        "image": 'lion-1.jpeg',
    },
    {
        "id": 2,
        "name": "Tiger",
        "image": 'tiger-1.jpeg',
    },
    {
        "id": 3,
        "name": "Cheetah",
        "image": 'cheetah-1.jpeg',
    },
    {
        "id": 4,
        "name": "Wolf",
        "image": 'wolf-1.jpeg',
    },
    {
        "id": 5,
        "name": "Lion",
        "image": 'lion-2.jpeg',
    },
    {
        "id": 6,
        "name": "Cheetah",
        "image": 'cheetah-2.jpeg',
    },
    {
        "id": 7,
        "name": "Wolf",
        "image": 'wolf-2.jpeg',
    },
    {
        "id": 8,
        "name": "Tiger",
        "image": 'tiger-2.jpeg',
    },
    {
        "id": 9,
        "name": "Lion",
        "image": 'lion-3.jpeg',
    },
    {
        "id": 10,
        "name": "Cheetah",
        "image": 'cheetah-3.jpeg',
    },
    {
        "id": 11,
        "name": "Tiger",
        "image": 'tiger-3.jpeg',
    },
    {
        "id": 12,
        "name": "Wolf",
        "image": 'wolf-3.jpeg',
    }
];

let animalList = document.querySelector('.animal-list');

function list() {
    animals.map((animal) => {
        let listItem = document.createElement('li');
        listItem.innerHTML =
            `
        
         <div class="card animal-card ${animal.name}" style="width: 18rem;">
            <img src="images/${animal.image}" class="card-img-top" alt="${animal.name}">
         </div>`;
        animalList.appendChild(listItem);
    });
}

list();

const filterButtons = document.querySelectorAll('.buttons button');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        document.querySelectorAll('.animal-card').forEach(card => {
            if (filter === 'all' || card.classList.contains(filter)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

const popup = document.querySelector(".popup");
const categoryName = popup.querySelector(".title p");
const popupImg = popup.querySelector("img");
const closeIcon = popup.querySelector(".bi");
const close = document.querySelector(".close");

const animalCards = document.querySelectorAll('.animal-card');

animalCards.forEach(card => {
    card.addEventListener('click', () => {
        const selectedPrevImg = card.querySelector("img").src;
        const selectedImgCategory = card.querySelector("img").alt; 

        popupImg.src = selectedPrevImg;
        categoryName.textContent = selectedImgCategory;

        popup.classList.add("show");
        close.classList.add("show");

        closeIcon.onclick = () => {
            popup.classList.remove("show");
            close.classList.remove("show");
        };
    });
});


