//add meals buttons//
const addMealsBtns = document.getElementsByClassName('cp-addMealsBtns');
const cpBody = document.getElementById('create-plan-container');

addMealsBtns.addEventListener('click', function() {
  console.log('working');
  cpBody.style.backgroundColor = 'grey';
});
