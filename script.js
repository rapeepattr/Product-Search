let products = {
    data: [
        {
            productName: "Regular White T-Shirt",
            category: "Topwear",
            price: 30,
            image: "./image/white-tshirt.jpg"
        },
        {
            productName: "Beige Short Skirt",
            category: "Bottomwear",
            price: 49,
            image: "./image/short-skirt.jpg"
        },
        {
            productName: "Sporty SmartWatch",
            category: "Watch",
            price: 99,
            image: "./image/sporty-smartwatch.jpg"
        },
        {
            productName: "Basic Knitted Top",
            category: "Topwear",
            price: 29,
            image: "./image/knitted-top.jpg"
        },
        {
            productName: "Black Leather Jacket",
            category: "Jacket",
            price: 129,
            image: "./image/black-leather-jacket.jpg"
        },
        {
            productName: "Stylish Pink Trousers",
            category: "Topwear",
            price: 29,
            image: "./image/pink-trousers.jpg"
        },
        {
            productName: "Brown Men's Jacket",
            category: "Jacket",
            price: 189,
            image: "./image/brown-jacket.jpg"
        },
        {
            productName: "Comfy Gray Pants",
            category: "Bottomwear",
            price: 49,
            image: "./image/comfy-gray-pants.jpg"
        },
    ]
}

for (let i of products.data) {
    console.log('i is', i)

    let card = document.createElement("div")
    card.classList.add("card", "i.category")

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