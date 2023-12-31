'use strict';
// イベントハンドラ
function keyUp(e) {
  let str = inputText.value;
  // 改行を文字数とカウントしないようにする(必要に応じて) 正規表現
  str = str.replace(/\r?\n/g, '')
  let num = 10 - str.length;
  const characterCount = document.getElementById('characterCount');
  characterCount.textContent = num;
  // 文字数オーバーした場合の文字列の色を変える
  const characterCountWrap = document.getElementById('characterCountWrap');
  if(num >= 0) {
    characterCountWrap.style.color = 'black';
  } else {
    characterCountWrap.style.color = 'red';
  }
}

const inputText = document.getElementById('inputText');
inputText.addEventListener('keyup', keyUp, false);