'use strict';
/*
ウェブページ表示の処理の流れ
・HTMLの読込
↓
・DOMツリー構築完了で、DOMContentLoadedイベント発生※loadイベントよりも速度の面で有利となるため、まずはこちらで実装可能か検討すべき
↓
・画像やスタイルシートなどのすべてのリソースの読込
↓
・完了したらloadイベント発生

使用する理由
・操作対象の要素がロードされてから何らかの操作をJavaScriptで行うため
　ロード前にJavaScriptの操作が行われるとエラーとなるので、確実に準備ができたタイミングで処理を行うことができる
・ローディング中の表示(NowLoading)にも使える

※DOMツリー
HTMLDocumentをツリー構造として表現したもの
ツリーの一つ一つのオブジェクトがノード
*/

// DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  alert('DOMContentLoaded');
}, false);

// load
window.onload = function() {
  const nowLoading = document.getElementById('nowLoading');
  // loadイベントが読み込まれたタイミングでcssによってp要素を表示にする
  nowLoading.style.display = 'none';
}