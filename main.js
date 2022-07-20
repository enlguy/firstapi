async function start() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all")
    const data = await response.json()
    createList(data.message)
}

start()

function createList(list) {
    document.getElementById("breed").innerHTML = `
    <select onchange="showBreeds(this.value)">
    <option>Choose a breed</option>
    ${Object.keys(list).map(function (breed) {
        return `<option>${breed}</option>`
    }).join("")}
</select>
    `
}

async function showBreeds(brd) {
    if (brd != "Choose a breed") {
        const response = await fetch(`https://dog.ceo/api/breed/${brd}/images`)
        const data = await response.json()
        createSlideshow(data.message)
    }
}

function createSlideshow(images) {
    document.getElementById("slideshow").innerHTML = `
    <div class="slide" style="background-image: url('${images[0]}')">
</div> `
}