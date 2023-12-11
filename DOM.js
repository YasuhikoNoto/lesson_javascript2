'use strict';
let btn = document.getElementById('triggerButton');
btn.addEventListener('click', function(e){
  //alert('clicked!'); :clickedのアラートを表示
  // IDによるノードの取得
  let headerTitle = document.getElementById('headerTitle');
  //let headerTitle = document.getElementById('hoge'); :存在しない引数を設定するとnullを返す
  console.log(headerTitle);
  // コンテンツの取得（テキストの取得） 
  console.log(headerTitle.textContent);
}, false);