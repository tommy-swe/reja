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
console.log('================================')
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

console.log('================================')
console.log("TASK B ANSWER:", countDigits("ad2a54y79wet0sfgb9"));





// C-TASK:==========================

// Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har 
// ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
// MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;

// Sortlash operatsiyasi orqali yechamiz
function checkContent(strA, strB) {
    if (strA.length !== strB.length)
        return false;
    
    let sortedStrA = strA
    .split('')
    .sort()
    .join('');

    let sortedStrB = strB
    .split('')
    .sort()
    .join('');

    return sortedStrA === sortedStrB;
}
console.log('================================')
console.log("TASK C ANSWER:", checkContent("mitgroup", "gmtiprou")); 


/*
D-TASK: 

Shunday class tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin,
hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. 
Har bir method ishga tushgan vaqt ham log qilinsin.

MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non, 
5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4) & shop.qoldiq() 
return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!
*/

// Class hamda funksiya constructor
class Shop {
    constructor(non, lagmon, cola) {
        this.products = {non,lagmon,cola
        };
    }

    logTime() {   
        /* logTime() bu -- joriy vaqtni "Hozir HH:MM" formatida ifodalovchi qatorni yaratish uchun foydalaniladi.*/
        const now = new Date();
        return `Now at ${now.getHours()}:${String(now.getMinutes())
            .padStart(2, '0')}`;
    }
// Hozirda mavjud mahsulotlar uchun funksiya
    qoldiq() {
        console.log(`${this.logTime()} Hozirda mavjud: ${this.products.non} ta non, ${this.products.lagmon} pors lagmon, hamda ${this.products.cola} ta cola!`);
    }
}

// mahsulot sotish uchun funksiya
function sotish(shop, mahsulot, amount) {
    if (shop.products[mahsulot] !== undefined) {
        shop.products[mahsulot] = Math.max(0, shop.products[mahsulot] - amount);
        console.log(`${shop.logTime()} ${amount} ta ${mahsulot} sotildi!`);
    } else {
        console.log(`${shop.logTime()} mahsulot ${mahsulot} topilmadi!`);
    }
}

// mahsulotga qabul funksiyasi
function qabul(shop, mahsulot, amount) {
    if (shop.products[mahsulot] !== undefined) {
        shop.products[mahsulot] += amount;
        console.log(`${shop.logTime()} ${amount} ta ${mahsulot} qabul qilindi!`);
    } else {
        console.log(`${shop.logTime()} mahsulot ${mahsulot} not found!`);
    }
}

// calll va test:
const shop = new Shop(4, 5, 2);
console.log('================================')
console.log('TASK-D ANSW: started here:');
console.log('================================')
shop.qoldiq(); // royhatning avvalgi holati
sotish(shop, 'non', 3); // 3 ta non sotildi
qabul(shop, 'cola', 4); // 4 ta cola qushildi
shop.qoldiq(); // royhat yangilangan holati
console.log('================================')