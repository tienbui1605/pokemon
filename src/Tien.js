// đảo ngược một chuỗi
function reveString(str){
    return str.split("").reverse().join("");
}
console.log(reveString("hello"));
// tìm từ dài nhất trong chuỗi
let sentence="Để tính độ dài của một câu bằng phương thức length trong JavaScript";
let words=sentence.split(" ");
let theLongestWords="";
for (let i=0; i<words.length; i++){
    if (words[i].length>theLongestWords.length){
        theLongestWords=words[i];
    }
}
console.log(theLongestWords);
// tính giai thừa
function tinhGiaiThua(n){
    if (n===0||n===1){
        return 1}
    else {
        return n*tinhGiaiThua(n-1)
    }
}
console.log(tinhGiaiThua(5));
// viết hoa chữ cái đầu
function toUpperCase(word){
    let chuoi=word.split(' ');
     for (let i=0; i<chuoi.length; i++){
         chuoi[i]=chuoi[i].charAt(0).toUpperCase()+ chuoi[i].slice(1);
     }
         return chuoi.join(' ');
 }
 
 let cau= 'hello world';
 console.log(toUpperCase(cau));
//  tìm số lớn nhất
function findMax(arr){
    let maxNumber=arr[0];
    for (let i=1; i<arr.length ; i++) {
        if (arr[i]>maxNumber){
            maxNumber=arr[i];
        }
    }
    return maxNumber;
}
const mang=[1,2,3,4,5,6,7,8];
console.log(findMax(mang));
// tính tông cuAr một dãy
function sumNumber(arr){
    let sum=0;
    for (let i=0; i<arr.length; i++){
        sum +=arr[i];
    }
    return sum;
}
let mang=[1,2,3,4,5,6,7,8,9];
console.log(sumNumber(mang));
// 