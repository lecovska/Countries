const mainDiv = document.createElement("div");
mainDiv.className = "mainDiv";


window.addEventListener("load", fetchData);
window.addEventListener("load", createCards);

function fetchData() {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => createCards(data))
};

function createCards(data) {
    let objects = data[Number(localStorage.getItem("index"))];
    console.log(objects);

    let imageDiv = document.createElement("div");
    let flagImg=document.createElement("img");
    imageDiv.className = "imageDiv";
    flagImg.src = objects.flags.svg;
    flagImg.setAttribute("alt", "flag");
    
    let details = document.createElement("div");
    details.className = "details";
    let name = document.createElement("h3");
    let population = document.createElement("span");
    let region = document.createElement("span");
    let subregion = document.createElement("span");
    let capital = document.createElement("span");
    let domain = document.createElement("span");
    let currency = document.createElement("span");
    let language = document.createElement("span");

    name.innerText = "Name: " + objects.demonyms.eng;
    population.innerText = "Population: "+ objects.population;
    region.innerText = "Region: " + objects.region;
    subregion.innerText = "Subregion: " + objects.subregion;
    capital.innerText = "Capital: " + objects.capital;
    domain.innerText = "Doamin: " + objects.tld;
    currency.innerText = "Currency: " + objects.currencies;
    language.innerText = "Language: " + objects.languages;

imageDiv.append(flagImg)
    details.append(name, population, region, subregion, capital, domain, currency, language);
    mainDiv.append(imageDiv, details);
    document.body.append(mainDiv);
    

};