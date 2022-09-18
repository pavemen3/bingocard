// jsに移植(deno環境で実行deno run xxxx.ts)
// Fisher-Yatesアルゴリズム
const shuffle = ([...array]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() *  (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Array.prototype.shuffle = function() {
//   let i = this.length;
//   while(i) {
//     let j = Math.floor(Math.random() * i);
//     let t = this[--i];
//     this[i] = this[j];
//     this[j] = t;
//   }
//   return this;
// }i

// 1から75までの値リストを用意
// [200~https://qiita.com/takehilo/items/59cb8dc93d28ca252570
const nums = Array.from(Array(75).keys(), x => x + 1);
// シャッフル
const numsShuffle = shuffle(nums);

// カードを表示
for(let y = 0; y < 5; y++) {
  let line = "";
  for(let x = 0; x < 5; x++) {
    let i = y * 5 + x;
    if(i === 12) {
      line += "  *,";
    } else {
      line += numsShuffle[i] + ",";
    }
  }
  console.log(line);
}

