let keyboardBlue=false;
let keyboardRed=true;
        if (keyboardBlue) {
            console.log("Очень хорошо,покупаю!");
        }else if (keyboardRed) {
            console.log(" Хорошо, ну покупаю!");
        } else {
            console.log(" Ладно, уж покупаю!");
        }

 let nm= "Katya";
 if (nm==="Daniil") {
    console.log("Привет мне!"+ nm);
 } else if (nm==="Alex") {
    console.log("Привет папа"+ nm);
 }else if (nm==="Grigory") {
    console.log("Привет"+nm);
 }else if (nm==="Katya") {
    console.log("Привет бабушка "+nm);
 }else if (nm==="Gena") {
    console.log("Привет дедушка"+nm);
 }else if (nm==="Sergei") {
    console.log("Привет друг"+nm);
 }

 else {
    console.log("Привет незнакомец!");
 }

//Цикл while 
 let schoolBoys=5

 while (schoolBoys<15){
   console.log("Столько мальчиков:" + schoolBoys);
   schoolBoys++;
 }
console.log("хорошо");

//for
for (let schoolBoys=5; schoolBoys<15; schoolBoys++) {
   console.log("Столько мальчиков:" + schoolBoys);
}
console.log("хорошо");

//Цикл while
let x = 3

while ( x < 10000){
console.log (x);
x = x*3;
}


let animals = ["Кот","Рыба ", "Лемур", "Комодский Варан"];
 for (let i = 0; i< animals.length; i++) {
   console.log("Прекрасное животное:" + animals[i]+ ".");
}


let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
let randomString = "";
let stringLength = 6;

while(randomString.length<stringLength){
   randomString +=  alphabet[Math.floor(Math.random()*alphabet.length)];
}
console.log(randomString);

//Переменная input в которой хранится слова,и он будут заменятся на хакерские

let input = "javascript is awesome ";

//Переменная output в которой будет хранится наш текст с хакерскими буквами и цифрами

let output = "";

// Для (Переменная i = 0;Если i<длины input; добаляет + 1)

for (let i = 0;i<input.length;i++){

   // Если = input [переменная i ] сравниваем (===) "a" сравниваем значения +- хначит "4" тогда выводится буква в output, если оно верно....  ;

   if (input[i] === "a" ){
      output += "4";

      //иначе если input [переменная i ] сравниваем (===) "е"  сравниваем значения +- хначит "3" тогда выводится буква  в output, если оно верно....;

      }else if (input[i] === "e"){
      output += "3";

      //иначе если input [переменная i ] сравниваем (===) "i"  сравниваем значения +- хначит "1" тогда выводится буква  в output,  если оно верно.... ;

      }else if (input[i] === "i"){
      output += "1";

      //иначе если input [переменная i ] сравниваем (===) "o" сравниваем значения +- хначит "0" тогда выводится буква  в output,  если оно верно....  ;

      }else if (input[i] === "o"){
      output += "0";

      //иначе тогда выводится цифра 0 в output ....  ;

      }else{
      output += input[i]
      }
}

//Выводится в консоль
console.log(output);







