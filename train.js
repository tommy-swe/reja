//console.log('Train task ishga tushdi!');
//console.log('TRAIN AREA!');
// console.log("08/17/2024 Homework bajarildi!") 


// even loops and callback function:
//===================================

// console.log("Jack Ma Maslahatlari");
// const list = [
//     "Yaxshi talaba buling!", // 0-20
//     "Tog`ri boshliq tanglang va koproq hato qiling!", // 20-30
//     "Uzingizga ishlashni boshlang!", //30-40
//     "Siz kuchli bo`lgan narsalarni qiling!", // 40-50
//     "yoshlarga investitsiya qiling!", // 50-60
//     "Endi dam oling, foydasi yoq!", // 60-70
// ];

// function maslahatBering(a, callback) {
//     if (typeof a !== "number") callback("insert a number", null);
//     else if( a<= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function(){
//             callback(null, list[5]);
//         }, 5000);
//     }
// }
// console.log("passed here 0");
// maslahatBering(65, (err, data) =>{
//     if(err) console.log('ERROR:', err);
//     else{
//         console.log('Javob:', data);
//     }
// });
// console.log("passed here 1");



// ==============================//
// Asynchronous functions:
//===============================//

/*
console.log("Jack Ma Maslahatlari");
const list = [
    "Yaxshi talaba buling!", // 0-20
    "Togri boshliq tanlang va koproq hato qiling!", // 20-30
    "Uzingizga ishlashni boshlang!", //30-40
    "Siz kuchli bolgan narsalarni qiling!", // 40-50
    "yoshlarga investitsiya qiling!", // 50-60
    "Endi dam oling, foydasi yoq!", // 60-70
];


// CALLBACK functions===========
function maslahatBering(a, callback) {
    if (typeof a !== "number") callback("insert a number", null);
    else if( a<= 20) callback(null, list[0]);
    else if(a > 20 && a <= 30) callback(null, list[1]);
    else if(a > 30 && a <= 40) callback(null, list[2]);
    else if(a > 40 && a <= 50) callback(null, list[3]);
    else if(a > 50 && a <= 60) callback(null, list[4]);
    else {
        setInterval(function(){
            callback(null, list[5]);
        }, 1000);
    }
}
console.log("passed here 0");
maslahatBering(70, (err, data) =>{
    if(err) console.log('ERROR:', err);
    else{
        console.log('Javob:', data);
    }
});
console.log("passed here 1");
*/



// //ASYNC functions====================
// used definition section
// async function maslahatBering(a) {
//     if (typeof a !== "number") throw new Error("insert a number", null);
//     else if( a<= 20) return list[0];
//     else if(a > 20 && a <= 30) return list[1];
//     else if(a > 30 && a <= 40) return list[2];
//     else if(a > 40 && a <= 50) return list[3];
//     else if(a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setInterval(() => {
//                 resolve(list[5]);
//             }, 1000);
//         });
//     }
// }
        // setTimeout(function() {
        //     return list[5];
        // }, 5000);


// //CALL via then/catch
// console.log("passed here 0");
// maslahatBering(65)
// .then((data) => {
//     console.log('Javob:', data);
// })
// .catch((err) =>  {
//     console.log('ERROR:', err);
// });
// console.log("passed here 1");


// //CALL via async/await
// async function run() {
//     let Javob = await maslahatBering(65);
//     console.log(Javob);
//     Javob = await maslahatBering(70);
//     console.log(Javob);
//     Javob = await maslahatBering(41);
//     console.log(Javob);
// }
// run();


// A-TASK: 

/* Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi 
sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi.*/


function countLetter(a, b) {
    let count = 0;
    for(let i=0; i < b.length; i++) {
        if (b[i] === a) {
            count++;
        }
    }
    return count;
}
/*
stringni tekshirish kere bugani uchun "for loop" dan foydalana qoldim.
for loop stringda mavjud har bitta letterni bittalab tekshiradi 
va shu orqali tekshirilgan letterning takrorlanishini hisoblab beradi.
*/
// call & test
let result = countLetter("e", "engineer");
console.log("TASK A ANSWER:", result);


/* B-TASK: 

 Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni 
 sonini bizga return qilsin.

 MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.*/

 // yechim: yana loopdan foydalanamiz

 function countDigits(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i]) && str[i] !== ' ') {
            count++;
        }
    }
    return count;
}

console.log("TASK B ANSWER:", countDigits("ad2a54y79wet0sfgb9"));