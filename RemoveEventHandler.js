'use strict';
/*
removeEventListnerメソッドの構文: 要素オブジェクト.removeEventListener(イベントの種類, 実行したい処理, false);
任意のタイミングでイベントハンドラを削除できる
*/
const sayHelloButton = document.getElementById('sayHelloButton');
function sayHelloEventHandler(e) {
  console.log('Hello');
}
sayHelloButton.addEventListener('click', sayHelloEventHandler, false);

const removeEventHandlerButton = document.getElementById('removeEventHandlerButton');
function removeEventHandler(e) {
  console.log('remove');
  sayHelloButton.removeEventListener('click', sayHelloEventHandler, false);
}
removeEventHandlerButton.addEventListener('click', removeEventHandler, false);
