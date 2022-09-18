
async function getRecipe() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast');
    const datas = await response.json();
    let tab = "";
    tab = datas.meals.reduce((acc, data, curId) => {
        return acc + `
                <li class="food-item">
                    <h1>${curId + 1}</h1>
                    <img class="food-image" src="${data.strMealThumb}">
                    <h2>${data.strMeal}</h2>
                </li>
        `
    }, "<ul>")
    tab += "</ul>"
    document.getElementById("list-items").innerHTML = tab;
}

function setColorBackground() {
    const bg = document.getElementById("article-table");
    console.log(bg);
    const datas = document.querySelectorAll(".bg-color");
    for(const data of datas) {
        data.onclick = () => {
            bg.setAttribute("style", data.getAttribute("style"));
        }
    }    
}
setColorBackground();
getRecipe();

