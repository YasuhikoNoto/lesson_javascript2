'use strict';
let btn = document.getElementById('triggerButton');
btn.addEventListener('click', function(e){
  let elements = document.getElementsByName('inputText');//getElementsByNameの戻り値はNodeList(配列)で戻る
  console.log(elements);
  console.log(elements[0].value);
}, false);