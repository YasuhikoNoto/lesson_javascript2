'use strict';
/*function命令(関数宣言)
  function 関数名 (引数1, 引数2, ...) {
      任意の処理
      return 戻り値;
  }
*/
function rectangle(height, width) {//ここで指定した引数は{}内でのみ使える
    return height * width;
}
console.log(rectangle(3, 5));

/*関数リテラル(匿名関数、無名関数)
  function(引数1, 引数2, ...) {
    実行する処理;
  }
  関数を変数に入れる
*/
const rectangle2 = function(height2, width2) {
  return height2 * width2;
}
console.log(rectangle2(4, 6));

/*Function()コンストラクター
  new Function('引数1', '引数２', ..., '関数本体の処理');
  関数を変数に入れる
  使用頻度は多くない
*/
const rectangle3 = new Function('height3', 'width3', 'return height3 * width3');
console.log(rectangle3(5, 7));

/*アロー関数(関数リテラルの省略記法)
  (引数, ...) => {
    実行する処理
  };
*/
const rectangle4 = (height4, width4) => {
  return height4 * width4;
};
console.log(rectangle(6, 8))

//演習問題　関数
function totalPrice (unitPrice, number) {
  return unitPrice * number;
}
console.log(totalPrice(100, 20));

//コールバック関数 （じかんがかかる）〇〇が完了したら、△△を実行する
//例　タイマー処理　3秒経過したらコンソールにtimeout!と表示する
const displayMessage = function() {
  console.log('Timeout!');
}
setTimeout(displayMessage, 3000);

//例　名前の入力が完了したら'Hello! 〇〇-san.'とコンソールに表示する
/*function greeting(name) {
  console.log('Hello!' + name + '-san');
}

function inputUserName(callback) {
  let name = prompt('あなたのお名前を入力してください');//prompt関数 入力を促す関数　実務上使用頻度は少ない
  callback(name);
}

inputUserName(greeting);
*/

//配列
let colors = ['Red', 'Green', 'Blue'];//宣言、初期化
console.log(colors);
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);//undefined

//jsではデータ型がばらばらでもエラーにならないが、非推奨
let arr = [1, '2', 3, ['a', 'b', 'c']];
console.log(arr);

console.log(colors.length);//個数
console.log(colors[colors.length - 1]);//末尾の値を取得
let empthArr = [];//空の配列
console.log(empthArr);

//配列の操作 追加、更新、削除
let colors2 = ['Red', 'Green', 'Blue'];
console.log(colors2);
colors2.push('Black');//末尾に追加
console.log(colors2);
colors2.unshift('White');//先頭に追加
console.log(colors2);
colors2[1] = 'Aka';//更新
console.log(colors2);
let insertArr = ['a', 'b', 'c'];
insertArr.splice(1, 0, 'D');//指定した位置に１つ以上の値を挿入 splice(位置, 実行内容, 値)
console.log(insertArr);
insertArr.splice(2, 0, 'X', 'Y', 'Z');//複数挿入
console.log(insertArr);
insertArr.splice(2, 2);//指定した位置から削除 (2番目から2つ削除)
console.log(insertArr);
let arr1 = ['a', 'b', 'c'];
let arr2 = ['d', 'e', 'f'];
let mergedArr = arr1.concat(arr2);
console.log(mergedArr);//結合
console.log(arr1);
console.log(arr2);
let arr3 = ['a', 'b', 'c', 'd'];
arr3.shift();//先頭を削除
console.log(arr3);
arr3.pop();//末尾を削除
console.log(arr3);

//オブジェクト(関連のあるデータと機能の集合)メンテナンス性・再利用性
//構成要素：変数・関数
/*
let user = new Object();
user.name = 'Taro Yamada';
user.gender = 'man';
user.birthYear = 1990;
console.log(user);
*/
//オブジェクト初期化子 (上記と同じ出力内容)
let user = { name: 'Taro Yamada', gender: 'man', birthYear: 1990};
console.log(user);
//ドット記法　（ドットを使用して出力する方法）
console.log(user.name);
console.log(user.gender);
console.log(user.birthYear);
//ブラケット記法
console.log(user['name']);
console.log(user['gender']);
console.log(user['birthYear']);
//個数
console.log(Object.keys(user).length);
//プロパティ（key）を取得
let keys = Object.keys(user);
console.log(keys);
//追加
//user.prefecture = 'Kanagawa';
user['prefecture'] = 'Kanagawa';//上記と同意味
console.log(user);
//値の書き換え
//user.prefecture = 'Chiba';
user['prefecture'] = 'Chiba';
console.log(user);
//結合
let obj1 = {a: 1, b: 2, c: 3 };
let obj2 = {d: 4, e: 5, f: 6 };
let mergedObj = Object.assign(obj1, obj2);
console.log(mergedObj);
//空のオブジェクト
let person = {};
console.log(person);

//オブジェクトメソッド オブジェクトに関連付けられた関数（メソッド）
let user2 = {
  name: 'Taro Yamada',
  gender: 'man',
  birthYear: 1990,
  calcAge: function(thisYear) {
    // NGコード console.log(birthYear);
    console.log(this);//thisはuser2オブジェクトを指す
    console.log(this.birthYear);
    return thisYear - this.birthYear;
  }
}
console.log(user2.calcAge(2021));

//繰り返し処理for
/* for(初期化式; ループ継続条件式; 増減式) { //増減式:ループの回数を管理する変数を加算or減算する
  繰り返し実行したい処理
}
*/
for(let i = 1; i <= 3; i++) {
  console.log(i);
}

let arr4 = ['a', 'b', 'c'];
for(let i = 0; i < 3; i++) {
  console.log(arr4[i]);
}

for(let i = 0; i < arr4.length; i++) {
  console.log(arr4[i]);
}

//ループの入れ子
for(let i = 0; i < 3; i++){
  for(let j = 0; j < 3; j++){
    console.log(`i: ${i}, j: ${j}`);
  }
}
const scores = [
  [100, 99, 98],
  [90, 89, 88],
  [80, 79, 78]
] //配列の中に配列をいれることを二次元配列という
//手作業の場合
console.log(scores[0][0]);
console.log(scores[0][1]);
console.log(scores[0][2]);
console.log(scores[1][0]);
console.log(scores[1][1]);
console.log(scores[1][2]);
console.log(scores[2][0]);
console.log(scores[2][1]);
console.log(scores[2][2]);
//ループ入れ子を利用する場合
for(let i = 0; i < scores.length; i++){
  for(let j = 0; j < scores[i].length; j++){
    console.log(scores[i][j]);
  }
}

//繰り返し処理while
/*
while(条件式) {
条件式がtrueの時に実行したい処理
}
条件を満たす限りループする*/
let i = 1;
while(i <= 3) {
  console.log(i);
  i++;//i++がなければ無限ループする
}

let j = 1;
while(j <= 10) {
  console.log(j);
  if(j === 5) {
    break;//j=5になったタイミングで処理を中断
  }
  j++;
}

//繰り返し処理do while
/*do {
  条件式がtrueの時に実行したい処理
} while(条件式);
while：条件の判断が前にあり、条件によっては一度もループを実行しない
do while：条件の判断が後ろにあり、条件にかかわらず、最低1回はループを実行
*/
let i2 = 1;
do {
  console.log(i2);
  i2++;
} while (i2 <= 3);

//繰り返し処理forEach
/*配列から値を一つずつ取得することができる
配列名.forEach(コールバック関数(要素の値){
実行したい処理
});
*/
let colors3 = ['Red', 'Green', 'Blue'];
/*for文の場合
for(let i = 0; i < colors3.length; i++) {
  console.log(colors3[i]);
}
*/
colors3.forEach(function(color){
  console.log(color)
});

//繰り返し処理 for...of
/*
for(変数 of iterableオブジェクト) {
  実行したい処理
}
iterableオブジェクト：反復可能なオブジェクト（配列・文字列）*/
const colors4 = ['Red', 'Green', 'Blue'];
for(const color of colors4) {
  console.log(color);
}

const str = 'JavaScript';
for(const value of str) {
  console.log(value);
}

//演習　配列・ループ
let scores2 = [100, 90, 80, 70, 60];
let sum = 0;
for(i = 0; i < scores2.length; i++) {
  sum += scores2[i];
}
let average = sum / scores2.length;
console.log('合計値：' + sum);
console.log('平均値：' + average);
