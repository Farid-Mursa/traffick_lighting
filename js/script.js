function changeLight() {
  var lights = document.querySelectorAll('.light');
  for (var i = 0; i < lights.length; i++) {
    lights[i].style.backgroundColor = 'rgb(44, 44, 44)';
  }

  setTimeout(function() {
    lights[0].style.backgroundColor = 'red';
  }, 0);

  setTimeout(function() {
    lights[0].style.backgroundColor = 'rgb(44, 44, 44)';
    lights[1].style.backgroundColor = 'yellow';
  }, 10000);

  setTimeout(function() {
    lights[1].style.backgroundColor = 'rgb(44, 44, 44)';
    lights[2].style.backgroundColor = 'green';
  }, 12000);

  setTimeout(function() {
    lights[2].style.backgroundColor = 'rgb(44, 44, 44)';
    changeLight();
  }, 27000);
}

changeLight();