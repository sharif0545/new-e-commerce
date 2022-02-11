const jackets = [
    {
        "id": 1,
        "image": "./jacket/image/jacket-1.png",
        "heading": "Ladies Jacket",
        "description": "Lorem Ipsum is simply dummy textof the printing and typesetting industry.",
        "price": "$234"
    },
    {
        "id": 2,
        "image": "./jacket/image/jacket-2.png",
        "heading": "Yellow Coat Jacket",
        "description": "Lorem Ipsum is simply dummy textof the printing and typesetting industry.",
        "price": "$234"
    },
    {
        "id": 3,
        "image": "./jacket/image/jacket-3.png",
        "heading": "Ladies Jacket",
        "description": "Lorem Ipsum is simply dummy textof the printing and typesetting industry.",
        "price": "$234"
    },
    {
        "id": 4,
        "image": "./jacket/image/jacket-4.png",
        "heading": "Ladies Jacket",
        "description": "Lorem Ipsum is simply dummy textof the printing and typesetting industry.",
        "price": "$234"
    },
    {
        "id": 5,
        "image": "./jacket/image/jacket-5.png",
        "heading": "Ladies Jacket",
        "description": "Lorem Ipsum is simply dummy textof the printing and typesetting industry.",
        "price": "$234"
    },
    {
        "id": 6,
        "image": "./jacket/image/jacket-6.png",
        "heading": "Ladies Jacket",
        "description": "Lorem Ipsum is simply dummy textof the printing and typesetting industry.",
        "price": "$234"
    }
    
    
    
]

document.querySelector(".woman-jacket").innerHTML =`

${jackets.map(jacket => {
    return`    <div class="card">
                    <main class="card-content">
                        <article class="image">
                            <img class="card-img" src=${jacket.image} alt="" />
                        </article>

                        <article class="item-description">
                            <h2>${jacket.heading}</h2>
                            <p>${jacket.description}</p>
                            <div class="price">
                                <h1>${jacket.price}</h1>
                                <button class="btn">
                                    <img src="jacket/Icon/trolly.png" alt="" />
                                    <a href="#"> BUY NOW </a>
                                </button>
                            </div>
                        </article>
                    </main>
                </div>
            `
})}
`;
