//background colors//

const bgcolor1 = document.getElementById('cp-bgcolor1');
const bgcolor2 = document.getElementById('cp-bgcolor2');
const bgcolor3 = document.getElementById('cp-bgcolor3');
const bgcolor4 = document.getElementById('cp-bgcolor4');
const bgcolor5 = document.getElementById('cp-bgcolor5');
const bgcolor6 = document.getElementById('cp-bgcolor6');

const bgcurrentColor = document.getElementById('cp-backgroundofplan');

bgcolor1.addEventListener('click', function() {
  const value = window.getComputedStyle(bgcolor1).getPropertyValue('background-color');
  bgcurrentColor.style.backgroundColor = value;
});

bgcolor2.addEventListener('click', function() {
  const value = window.getComputedStyle(bgcolor2).getPropertyValue('background-color');
  bgcurrentColor.style.backgroundColor = value;
});

bgcolor3.addEventListener('click', function() {
  const value = window.getComputedStyle(bgcolor3).getPropertyValue('background-color');
  bgcurrentColor.style.backgroundColor = value;
});

bgcolor4.addEventListener('click', function() {
  const value = window.getComputedStyle(bgcolor4).getPropertyValue('background-color');
  bgcurrentColor.style.backgroundColor = value;
});

bgcolor5.addEventListener('click', function() {
  const value = window.getComputedStyle(bgcolor5).getPropertyValue('background-color');
  bgcurrentColor.style.backgroundColor = value;
});

bgcolor6.addEventListener('click', function() {
  const value = window.getComputedStyle(bgcolor6).getPropertyValue('background-color');
  bgcurrentColor.style.backgroundColor = value;
});

//weekday colors//

wdcolor1 = document.getElementById('cp-wdcolor1');
wdcolor2 = document.getElementById('cp-wdcolor2');
wdcolor3 = document.getElementById('cp-wdcolor3');
wdcolor4 = document.getElementById('cp-wdcolor4');
wdcolor5 = document.getElementById('cp-wdcolor5');
wdcolor6 = document.getElementById('cp-wdcolor6');

const wdcurrentColor = document.getElementsByClassName('cp-weekday');

wdcolor1.addEventListener('click', function() {
  console.log('yes');
  const value = window.getComputedStyle(wdcolor1).getPropertyValue('background-color');
  wdcurrentColor.style.backgroundColor = value;
});
