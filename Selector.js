'use strict';
let btn = document.getElementById('triggerButton');
btn.addEventListener('click', function(e){
  let element = document.querySelector('.foo');//最初の要素を取得する場合
  console.log(element.textContent);

  let elements = document.querySelectorAll('.foo');//全ての要素を取得する場合
  console.log(elements);
  for(let i = 0; i < elements.length; i++) {
    console.log(elements[i].textContent);
  }
}, false);