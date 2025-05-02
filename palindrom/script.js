const input = document.querySelector("input");
const button = document.querySelector(".button");
const output = document.querySelector(".output");

function palindromChecker(text) {
  const textReverse = text.split("").reverse().join("");
  console.log("text normal : " + text);
  console.log("text reverse : " + textReverse);

  if(text){
    const outputText = `
        <p class="output-text"><span class="bold">Input : </span> ${text} </p>
        <p class="output-text"><span class="bold">Reverse : </span> ${textReverse} </p>        `


        text === textReverse ? output.innerHTML = outputText + `<p class="output-text">Palindrom 👍</p>` : output.innerHTML = outputText + `<p class="output-text">Bukan Palindrom 👎</p>` 

  }else{
    output.innerHTML = `<p class="output-warning">Masukkan text dulu cuy...</p>`
    
  }
}

button.addEventListener("click", () => {
  const inputValue = input.value;
  palindromChecker(inputValue);
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const inputValue = input.value;
    palindromChecker(inputValue);
  }
});

const info = document.querySelector(".palindrom-info")

info.addEventListener("click", () => {
    alert(`Palindrom adalah sebuah kata, frasa, angka, atau urutan karakter lainnya yang dapat dibaca sama dari depan maupun belakang. Dalam kata lain, jika Anda membalikkan urutan karakter tersebut, hasilnya tetap sama. Palindrom sering digunakan dalam berbagai konteks, termasuk dalam bahasa, matematika, dan pemrograman.
        Contoh Palindrom:
        Kata:
        - "radar"
        - "level"
        Frasa (dengan mengabaikan spasi dan tanda baca):
        - "A man, a plan, a canal, Panama!"
        - "Was it a car or a cat I saw?"
        Angka:
        - 121
        - 12321        
        Cara Memeriksa Palindrom:
        Untuk memeriksa apakah sebuah string adalah palindrom, Anda dapat membandingkan karakter dari awal dan akhir string, kemudian bergerak ke arah tengah. Jika semua pasangan karakter yang dibandingkan sama, maka string tersebut adalah palindrom.`);
})