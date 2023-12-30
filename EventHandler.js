'use strict';
/**
イベント: プログラムしているシステムの中で生じた動作や出来事のこと
         ex)ユーザーがボタンをクリックした、ウェブページのロードが完了した
イベントハンドラ: イベントに対して行う処理のこと
                 ex)コンソールにHelloと出力する処理
イベントリスナ: イベントとイベントハンドラを紐づけているもの
イベント駆動型プログラミング(イベントドリブン): 何らかのイベントが発生したら何らかのプログラムが動作するようプログラムを書く手法
**/
let btn = document.getElementById('sayHelloButton');
btn.addEventListener('click', function(e){
  console.log('Hello!');
  console.log(e); // イベントのオブジェクトに関するデータを表示してみる
}, false);

// addEventListnerの構文 要素オブジェクト.addEventListener(イベントの種類,実行したい処理,false);


/*
この場合functionの引数を空にしても動作する
btn.addEventListener('click', function(){
  console.log('Hello!');
}, false);
*/

/*
アロー関数にも書き換え可能
btn.addEventListener('click', function(e) => {
  console.log('Hello!');
  console.log(e); // イベントのオブジェクトに関するデータを表示してみる
}, false);
*/

/*
実行したい処理を外だしすることも可能
function sayHelloEventHandler(e) {
  console.log('Hello');
  console.log(e);
}
btn.addEventListner('click', sayHelloEventHandler, false);
*/
