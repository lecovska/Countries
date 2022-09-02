
// const url = "https://restcountries.com/v3.1/all";
const main = document.createElement("div");
main.className = "main";
const divForInput = document.createElement("div")
divForInput.className = "input"
const searchInput = document.createElement("input");



divForInput.append(searchInput)
main.append(divForInput)

document.body.append(main);



window.addEventListener("load", fetchData)
window.addEventListener("load", createCards)



function fetchData() {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => createCards(data))

}


function createCards(data) {
    
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
        moreInfo.href= "./secondpageh.html";
        moreInfo.target = "_blank";
        moreInfo.innerText="click"

        moreInfo.addEventListener("click", ()=>{localStorage.setItem("index", i)})

        singleCard.append(image, title, popul, regions, capitals, moreInfo)
     
        main.append(singleCard);

        searchInput.addEventListener("input", (e)=>{
            
            if( e.target.value== data.region){
                return e;
            }
        })
       

    });
    
}



