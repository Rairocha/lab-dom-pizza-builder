// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMus) => {
    if (state.mushrooms) {
      oneMus.style.visibility = 'visible';
    } else {
      oneMus.style.visibility = 'hidden';
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((onePepper) => {
    if (state.greenPeppers) {
      onePepper.style.visibility = 'visible';
    } else {
      onePepper.style.visibility = 'hidden';
    }
  })
}

function renderWhiteSauce() {
  let sauce = document.querySelector('.sauce');
  if (state.whiteSauce){
    sauce.classList.add('sauce-white');
  }
  else{sauce.classList.remove('sauce-white');}
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
}

function renderGlutenFreeCrust() {
  let crust = document.querySelector('.crust');
  if (state.glutenFreeCrust){
    crust.classList.add('crust-gluten-free');
  }
  else{crust.classList.remove('crust-gluten-free');}
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}

function renderButtons() {
  document.querySelector('.btn-pepperoni').classList.toggle('active',state.pepperoni)
  document.querySelector('.btn-mushrooms').classList.toggle('active',state.mushrooms)
  document.querySelector('.btn-green-peppers').classList.toggle('active',state.greenPeppers)
  document.querySelector('.btn-sauce').classList.toggle('active',state.whiteSauce)
  document.querySelector('.btn-crust').classList.toggle('active',state.glutenFreeCrust)

  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {
  let listPrice = document.querySelectorAll('.price>ul>li');
  let listButton = document.querySelectorAll('.controls>ul>li>button');
  let price = 10;
   for (i =0;i<listButton.length;i++){
    if(listButton[i].classList.contains('active')){
      listPrice[i].style.display = 'block';
      if ((listButton[i].classList.contains('btn-pepperoni'))||(listButton[i].classList.contains('btn-mushrooms'))||(listButton[i].classList.contains('btn-green-peppers'))){price+=1}
      else if(listButton[i].classList.contains('btn-sauce')){price+=3}
      else if(listButton[i].classList.contains('btn-crust')){price+=5}
    }
    else{listPrice[i].style.display = 'none'}
   }

  document.querySelector('.price>strong').innerHTML=`\$${price}`

  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
  
});