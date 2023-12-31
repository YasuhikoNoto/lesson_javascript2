'use strict';
// 画像データは配列に複数のオブジェクトを持つことで得る
const images = [
  {src: 'https://learnwithnakamura.s3.ap-northeast-1.amazonaws.com/javascript/C0zDWAPFT9A.jpg', description: '猫の画像1'},
  {src: 'https://learnwithnakamura.s3.ap-northeast-1.amazonaws.com/javascript/fEK4jvgnApg.jpg', description: '猫の画像2'},
  {src: 'https://learnwithnakamura.s3.ap-northeast-1.amazonaws.com/javascript/egfS7HzgKcc.jpg', description: '猫の画像3'},
  {src: 'https://learnwithnakamura.s3.ap-northeast-1.amazonaws.com/javascript/e-S23SJzFqs.jpg', description: '猫の画像4'},
  {src: 'https://learnwithnakamura.s3.ap-northeast-1.amazonaws.com/javascript/Hnwm8ktAd6E.jpg', description: '猫の画像5'}
];

// メイン画像の初期値を設定
let image = document.createElement('img'); // image要素の生成
image.setAttribute('src', images[0].src);
image.setAttribute('alt', images[0].description);
/* 
element.setAttribute('属性名', 属性に設定したい値)
指定した要素上に新しい属性を追加する、または既存の属性の値を変更する
*/

// 説明の初期値を設定
let description = document.createElement('p');
description.textContent = image.alt;

// 作成した要素を表示する
let mainImage = document.getElementById('main_image');
mainImage.insertBefore(image, null);
mainImage.insertBefore(description, null);
/* 
親要素.insertBefore(追加したい要素, 追加したい場所) 
追加したい場所の直前に追加したい要素が追加される(nullの場合は末尾に挿入される) 
*/

// サムネイル画像の表示
let thumbnails = document.getElementById('thumbnails');
for(let i = 0; i < images.length; i++) {
  let thumbnailImage = document.createElement('img');
  thumbnailImage.setAttribute('src', images[i].src);
  thumbnailImage.setAttribute('alt', images[i].description);
  thumbnails.insertBefore(thumbnailImage, null);
}

// クリックしたサムネイル画像をメイン画像に設定する
thumbnails.addEventListener('click', function(e) {
  // クリックしたターゲットがsrc属性に値を持っている場合のみ処理を行う サムネイルをクリックした場合のみ動作させるため
  if(e.target.src) {
    //console.log(e.target);
    image.src = e.target.src;
    description.textContent = e.target.alt;
  }
}, false);