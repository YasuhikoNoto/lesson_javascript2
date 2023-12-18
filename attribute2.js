'use strict';
// class属性を追加・更新（赤）
let setRedClassButton = document.getElementById('setRedClassButton');
setRedClassButton.addEventListener('click', function(e){
  let showText = document.getElementById('showText');
  showText.setAttribute('class', 'red');//第一引数は属性の名前、第二引数は属性の新しい値: showTextにclass属性の追加、属性は'red'
}, false);

// class属性を追加・更新（青）
let setBlueClassButton = document.getElementById('setBlueClassButton');
setBlueClassButton.addEventListener('click', function(e){
  let showText = document.getElementById('showText');
  showText.setAttribute('class', 'blue');
}, false);

//属性の削除
let removeClassButton = document.getElementById('removeClassButton');
removeClassButton.addEventListener('click', function(e){
  let showText = document.getElementById('showText');
  showText.removeAttribute('class');
}, false);