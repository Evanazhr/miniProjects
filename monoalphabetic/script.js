const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let key = alphabet;
const plainText = document.querySelector(".plain-text");
const inputKey = document.querySelector(".input-key");
const KeyRow = document.querySelector(".key-row");
const generateKeyBtn = document.querySelector(".generate-key-btn");
const startSubtitutionBtn = document.querySelector(".encrypt-btn");
const alphabetRow = document.querySelector(".alphabet-row");
const output = document.querySelector(".output")


//   create alphabet row
for (let i = 0; i < alphabet.length; i++) {
  const row = document.createElement("td"); // Buat elemen <td>
  row.textContent = alphabet[i]; // Set textContent ke huruf yang sesuai
  alphabetRow.appendChild(row); // Tambahkan <td> ke baris
  
  const row2 = document.createElement("td"); // Buat elemen <td>
  row2.textContent = ""; // Set textContent ke huruf yang sesuai
  KeyRow.appendChild(row2); // Tambahkan <td> ke baris
}



function generateKey(value) {
  const arrayKey = value.split(" ").join("").toUpperCase().split("");

  // reduce duplicate data from arraykey
  const uniqueKey = [];
  arrayKey.forEach((value) => {
    if (!uniqueKey.includes(value)) {
      uniqueKey.push(value);
    }
  });

  const uniqueKeyPlusAlphabet = (uniqueKey.join("") + alphabet).split("");

  // reduce duplicate data from uniqueKeyPlusAlphabet
  const fixKey = [].slice(0, 26);
  uniqueKeyPlusAlphabet.forEach((value) => {
    if (!fixKey.includes(value)) {
      fixKey.push(value);
    }
  });

  // create key row
  KeyRow.innerHTML = "";

  fixKey.forEach((key) => {
    const row = document.createElement("td");
    row.textContent = key;
    KeyRow.appendChild(row);  
  })
  
  //   reassign global key
  key = fixKey.join("");
  console.log("Key = " + key);
}

generateKeyBtn.addEventListener("click", () => {
  const inputKeyValue = inputKey.value;
  generateKey(inputKeyValue);
});

inputKey.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const inputKeyValue = inputKey.value;
    generateKey(inputKeyValue);
  }
});

function startSubtitution(text, key) {
  const arrayText = text.split("");
  const arrayKey = key.split("");
  const arrayAlphabet = alphabet.split("");

  console.log(key);

  const result = [];

  for (let i = 0; i < arrayText.length; i++) {
    const char = arrayText[i].toUpperCase();
    const index = arrayAlphabet.indexOf(char);
    console.log(char)
    console.log(index)

    if (index !== -1) {
        result.push(arrayKey[index]); 
        console.log("ada")
    } else if (char == " ") {
        console.log("spasi")
        result.push(" "); 
    } else {
        console.log("tidak ada / simbol")
        result.push(char)
    }
}

console.log(result.join("")); 
output.innerHTML = `<p>${result.join("")}</p>`
}


startSubtitutionBtn.addEventListener("click", () => {
  const plainTextValue = plainText.value;
  startSubtitution(plainTextValue, key);
});


// note : lama debugging gara gara lupa uppercase plain text, jadi indexnya gak ketemu temu di alphabet