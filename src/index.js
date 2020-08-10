//load bootstrap sama CSS
require('bootstrap');
require('bootstrap/dist/css/bootstrap.min.css');
require('./style.css');
require('./components/card-meal.js')
const chunk = require('lodash/chunk');


//buat ngambil data dari API
const api = require('./api.js');
const { divide } = require('lodash');

//handle submit
const form = document.getElementById('search-form')
form.addEventListener('submit', async function(e) {
    e.preventDefault()
    const keyword = form.querySelector('input').value
    const result = await api.search(keyword)

    const meals = result.meals;
    const container = document.getElementById('meals-container');

    container.innerHTML = "";
    //grouppinng meals jadi 4 bagian
    const chunkedMeals = chunk(meals, 4);
    console.log({ chunkedMeals, meals })
    chunkedMeals.forEach(function(meals) {
        //loop row
        const row = document.createElement('div')
        row.setAttribute('class', 'row');
        //loop column
        meals.forEach(function(meal) {
            const col = document.createElement('div')
            col.setAttribute('class', 'col-md-3');

            //bikin elemen card
            const card = document.createElement('card-meal')
            card.setAttribute('name', meal.strMeal)
            card.setAttribute('src', meal.strMealThumb)
            card.setAttribute('description', meal.strInstructions)

            col.appendChild(card);
            row.appendChild(col);
        });

        container.appendChild(row);
    });

});