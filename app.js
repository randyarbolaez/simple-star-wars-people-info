let title = document.querySelector('title');
let name = document.getElementById('name');
let height = document.getElementById('height');
let mass = document.getElementById('mass');
let gender = document.getElementById('gender');
let skinColor = document.getElementById('skin-color');

const randomPersonNumber = Math.floor(Math.random() * 80 + 1);

fetch(`https://swapi.co/api/people/${randomPersonNumber}/`)
  .then(res => res.json())
  .then(res => {
    title.innerHTML = res.name;
    name.innerHTML = res.name;
    height.innerHTML = `Height - ${res.height}`;
    mass.innerHTML = `Mass - ${res.mass}`;
    gender.innerHTML = res.gender;
    skinColor.innerHTML = `Skin Color - ${res.skin_color}`;
    console.log(res);
  });
