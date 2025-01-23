let products = {
    data: [
        {
            productName: "Regular White T-Shirt",
            category: "topwear",
            price: 30,
            image: "./image/white-tshirt.jpg"
        },
        {
            productName: "Beige Short Skirt",
            category: "bottomwear",
            price: 49,
            image: "./image/short-skirt.jpg"
        },
        {
            productName: "Sporty SmartWatch",
            category: "watch",
            price: 99,
            image: "./image/sporty-smartwatch.jpg"
        },
        {
            productName: "Basic Knitted Top",
            category: "topwear",
            price: 29,
            image: "./image/knitted-top.jpg"
        },
        {
            productName: "Black Leather Jacket",
            category: "jacket",
            price: 129,
            image: "./image/black-leather-jacket.jpg"
        },
        {
            productName: "Stylish Pink Trousers",
            category: "topwear",
            price: 29,
            image: "./image/pink-trousers.jpg"
        },
        {
            productName: "Brown Men's Jacket",
            category: "jacket",
            price: 189,
            image: "./image/brown-jacket.jpg"
        },
        {
            productName: "Comfy Gray Pants",
            category: "bottomwear",
            price: 49,
            image: "./image/comfy-gray-pants.jpg"
        },
    ]
}

for (let i of products.data) {
    console.log('i is', i)

    let card = document.createElement("div")
    card.classList.add("card", i.category, "hide")

    let imgContainer = document.createElement("div")
    imgContainer.classList.add("image-container")

    let image = document.createElement("img")
    image.setAttribute("src", i.image)

    imgContainer.appendChild(image)
    card.appendChild(imgContainer)

    let container = document.createElement("div")
    container.classList.add("container")

    let name = document.createElement("h5")
    name.classList.add("product-name")
    name.innerText = i.productName.toUpperCase()
    container.appendChild(name)

    let price = document.createElement("h6")
    price.innerText = "$" + i.price
    container.appendChild(price)

    card.appendChild(container)
    document.getElementById("products").appendChild(card)
}

window.onload = () => {
    filterProduct('all')
}

function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value")
    buttons.forEach((button) => {
        if (value.toUpperCase() === button.innerText.toUpperCase()) {
            button.classList.add("active")
        } else {
            button.classList.remove("active")
        }
    })

    let elements = document.querySelectorAll(".card")
    elements.forEach((element) => {
        if (value == "all") {
            element.classList.remove("hide")
        } else {
            if (element.classList.contains(value)) {
                element.classList.remove("hide")
            } else {
                element.classList.add("hide")
            }
        }
    })
}