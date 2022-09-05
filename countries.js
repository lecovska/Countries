
// const url = "https://restcountries.com/v3.1/all";

const search = document.querySelector("input")
const main = document.createElement("div");
main.className = "main";
// let regionDropDown= document.createElement("select");
const regionItems = ["Europe", "America", "Africa", "Asia", "Oceania"];
const output = document.querySelector(".output");
const searchFilter = document.querySelector(".filter-input");

document.body.append(main);

window.addEventListener("load", fetchData);
window.addEventListener("load", createCards);
window.addEventListener("input", loadList);
searchFilter.addEventListener("input", filter);

function loadList() {
    let temp = `<ul class="list-items">`;
    regionItems.forEach((item) => { temp += `<li class="list-item">${item}</li>` }
    );
    temp += `</ul>`;

    output.innerHTML = temp;
}

function filter(event) {

    let temp = "";
    const result = regionItems.filter(item => item.includes(event.target.value));
    console.log(regionItems);
    if (result) {
        let temp = `<ul class="list-items">`;
        result.forEach((item) => { temp += `<li class="list-item">${item}</li>` }
        );
        temp += `</ul>`;
    }
    output.innerHTML = temp;
}



function fetchData() {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => createCards(data))
}

search.addEventListener("input", () => {

    if (search.value != "") {
        search.value = search.value.toLowerCase();
        fetchCountry(search.value)
    } else {
        fetchData();
    }
})

function fetchCountry(input) {
    fetch(`https://restcountries.com/v3.1/name/${input}`)
        .then(res => res.json())
        .then(data => createCards(data))
}

function fetchRegion(region) {
    fetch(`https://restcountries.com/v3.1/region/${region}`)
        .then(res => res.json())
        .then(data => regionItems(data))
}


function createCards(data) {

    main.innerHTML = "";

    return data.forEach((e, i) => {
        var singleCard = document.createElement("div");
        var image = document.createElement("img");
        var title = document.createElement("h3")
        var popul = document.createElement("p")
        var regions = document.createElement("p")
        var capitals = document.createElement("p")
        var moreInfo = document.createElement("a")

        singleCard.className = "singleCard";
        image.src = e.flags.svg;
        title.innerText = e.name.common;
        popul.innerText = "Population: " + e.population;
        regions.innerText = "Region:  " + e.region;
        capitals.innerText = "Capital:  " + e.capital;
        moreInfo.href = "./secondpageh.html";
        moreInfo.target = "_blank";
        moreInfo.innerText = "click"

        moreInfo.addEventListener("click", () => { localStorage.setItem("index", i) })

        singleCard.append(image, title, popul, regions, capitals, moreInfo)

        main.append(singleCard);



    });

}



