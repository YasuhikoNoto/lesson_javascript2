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
function greeting(name) {
  console.log('Hello!' + name + '-san');
}

function inputUserName(callback) {
  let name = prompt('あなたのお名前を入力してください');//prompt関数 入力を促す関数　実務上使用頻度は少ない
  callback(name);
}

inputUserName(greeting);