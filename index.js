// вернуть число гласных в строке
const str = "Nothing will come of nothing.";

function getCount(str) {
  vowelcount = 0;
  // loop по индексам для всех элементов строки
  for (i = 0; i <= str.length; i++) {
    // условием проверяем букву на гласную
    if (
      str.charAt(i) == "a" ||
      str.charAt(i) == "o" ||
      str.charAt(i) == "i" ||
      str.charAt(i) == "e" ||
      str.charAt(i) == "u"
    )
      vowelcount += 1;
  }
  return vowelcount;
}

function getCount(str) {
  // match возвращает массив который соответствует регулярному выражению в скобках, флаг i - игнор заглавные/строчные буквы, флаг g - ищет глобально во всейц строке
  return str.match(/[aoieu]/gi, "").length;
  //  длинна получившегося массива и будет количество гласных
}

console.log(getCount(str));

// возвести в квадрат каждую цифру числа и сделать их конкатенат

let num = 9119;
function squareDigits(num) {
  // переводим число в массив split возвращает массив
  //   преобразуем массив в число с помощью +join('')
  return +num
    .toString()
    .split("")
    .map((el) => el * el)
    .join("");
}

console.log(squareDigits(num));

// удалить все гласные

function disemvowel(str) {
  // определяем паттерн который нужно удалить глобально и без учета регистра
  // с помощью replace удаляем
  pattern = /[aeiou]/gi;
  newStr = str.replace(pattern, "");
  return newStr;
}
console.log(disemvowel(str));

// в строке вернуть наибольшее и наименьшее значение
function highAndLow(numbers) {
  // превращаем строку в массив
  numbers = numbers.split(" ").map(Number);
  // операции с Math над массивом
  return Math.max.apply(null, numbers) + " " + Math.min.apply(null, numbers);
}
console.log(highAndLow("1 2 3 4 5"));

// отсортировать числа от большего к меньшему

function descendingOrder(n) {
  //  число в строку и в массив

  arr = n.toString().split("");
  // делаем сортировку sort в массиве из строк, применив функцию сравнения a-b, т.к. нам нужно сравнить числа
  //  знаком + возвращаем число из строки
  return (newarr = +arr
    .sort((a, b) => a - b)
    .reverse()
    .join(""));
}
console.log(descendingOrder(158964));
// так короче и если b-a то и реверс не надо
function descendingOrder(n) {
  return Number(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

// вывести массив чисел из массива строк и чисел
function filterList(l) {
  // массив l в строку
  l = l.join("");
  // применяем parseInt, возвращаем строку из цифр, преобразуем в массив из строк
  arr = parseInt(l).split("");
  // массив из строк в массив из чисел
  newArr = Array.from(arr, Number);
}
// так не проходит на codewars

function filterList(l) {
  return l.filter((el) => typeof el === "number");
}

console.log(filterList([1, 2, "12", "a"]));

// Получить средний символ
function getMiddle(s) {
  const leng = s.length;
  let middleIndex = Math.floor(leng / 2);

  if (leng % 2 === 0) {
    // slice() выделяет требуемую часть строки и возвращает это как новую строку
    return s.slice(middleIndex - 1, middleIndex + 1);
  } else {
    return s[middleIndex];
  }
}

console.log(getMiddle("testers"));

// Mumbling accum("abcd") -> "A-Bb-Ccc-Dddd"
function accum(s) {
  return s
    .split("")
    .map((item, index) => item.toUpperCase() + item.toLowerCase().repeat(index))
    .join("-");
}

function accum(s) {
  // разбиваем строку на массив букв ["a","b","c","d"]
  var letters = s.split(""),
    words = [];
  // пробегаем по массиву букв и записываем новый маасив
  for (var i = 0; i < letters.length; i++) {
    words.push(
      letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase())
    );
  }

  return words.join("-");
}

// Найти изограмму
function isIsogram(str) {
  arr = str.toLowerCase().split("").sort();

  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] == arr[i + 1]) return false;
  }
  return true;
}
// лучшее решение
function isIsogram(str){
  // new Set() хранит коллекцию уникальных значений. свойство size для получения количества элементов в коллекции
	return new Set(str.toUpperCase()).size == str.length;
}

console.log(isIsogram('laavk'))

// Check to see if a string has the same amount of 'x's and 'o's. 
function XO(str) {
  var x = [];
  var o = [];
  for (var i = 0; i < str.length; i++) { 
      if (str[i].toLowerCase() === 'x') { 
          x.push(str[i]); 
      } else if (str[i].toLowerCase() === 'o') {
          o.push(str[i]);
      }
  }
  
  if (x.length == o.length) {
      return true;
  } else {
      return false;
  }
}
console.log(XO('xxxooo'))
// нужно проще
function XO(str) {
  // новые строки с помощью метода match ищем глобально (flag g) игнорируя регистр (flag i)
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

console.log(XO('xxoo'))