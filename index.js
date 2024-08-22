//1 a, b, c raqamlari berilgan. Shu sonlardan foydalanib uch xonali son yasang, qachonki istalgan berilgan raqamlardan biri 0 ga teng yoki  kichik bo'lsa 0 ni konsolga chiqaring.
function uchXonaliSon(a, b, c) {
	if (a <= 0 || b <= 0 || c <= 0) {
		console.log(0)
	} else {
		let number = a * 100 + b * 10 + c
		console.log(number)
	}
}

//2 Berilgan son hafta kunining qaysi kuniga to'g'ri keladi . Agar kelgan son 1 ga teng bo'lsa 'Dushanba' ni konsolga chiqaring,  Agar kegan son ikkiga teng bo'lsa  'Seshanba' ni konsolga chiqaring va hz ..,  Agar hafta kuniga to'g'ri kelmasa 'none' konsolga chiqsin.
function hafta(n) {
	switch (n) {
		case 1:
			console.log('Dushanba')
			break
		case 2:
			console.log('Seshanba')
			break
		case 3:
			console.log('Chorshanba')
			break
		case 4:
			console.log('Payshanba')
			break
		case 5:
			console.log('Juma')
			break
		case 6:
			console.log('Shanba')
			break
		case 7:
			console.log('Yakshanba')
			break
		default:
			console.log('none')
	}
}

//3 Berilgan yill kabisa yili ekanligini aniqlang. Agar kabisa yili bo'lsa true  konsolga chiqsin.  Agar bo'linmasa false  konsolga chiqsin. Kabisa yil deb 4 yilda bir marta keladigan yilga aytiladi. Shu yili kunlar soni 365 emas 366 ga teng bo'ladi. Bu yili fevral oyida 29 kun bo'ladi.
function kablisaYil(yil) {
	if ((yil % 4 === 0 && yil % 100 !== 0) || yil % 400 === 0) {
		console.log(true)
	} else {
		console.log(false)
	}
}

//4 a soni berilgan. 1 - 999 sonlar orasida. Agar a soni 1 honali son bo'lsa 1 ni return qiling. Agar a soni 2 honali son bo'lsa 2 ni return qiling. Agar a soni 3 honali bo'lsa 3 ni return qiling.
function sonIs(a) {
	if (a >= 1 && a <= 9) {
		return 1
	} else if (a >= 10 && a <= 99) {
		return 2
	} else if (a >= 100 && a <= 999) {
		return 3
	} else {
		return 'Not valid'
	}
}

//5 a, b, c, d sonlar berilgan. Agar ularning qiymati barchasi musbat   bo'lsa true konsolga chiqaring bo'lmasa false ni konsolga chiqaring.
function hammasiMusbat(a, b, c, d) {
	console.log(a > 0 && b > 0 && c > 0 && d > 0)
}

//6 a soni berilgan.  0 dan a gacha bo'lgan sonlaryig'indisini toping  va yig'indini konsolga chiqaring. a sonini ham hisobga oling.

function summa(a) {
	let sum = 0
	for (let i = 0; i <= a; i++) {
		sum += i
	}
	console.log(sum)
}

//7  a soni berilgan. Shu son mukammal raqam yoki yo'qmi shuni aniqlang. Agar mukammal raqam bo'lsa true bo'lmasa false konsolga chiqaring. Mukammal raqam deb bo'linuvchilar  yig'indisiga teng bo'ladigan songa (o'zidan tashqari) aytiladi. Deylik: a = 6, uning bo'linuvchilari 1,2,3 => 6 = 1 + 2 + 3   demak 6 raqami murakkab raqam hisoblanadi. a = 15, uning bo'linuvchilari 1,3,5, => 1 + 3 + 5 = 8    bo'linuvchilari yig'indisi 8ga teng 15 ga emas. Shuning uchun bu mukammal son emas

function mukammalSon(a) {
	let sum = 0
	for (let i = 1; i < a; i++) {
		if (a % i === 0) {
			sum += i
		}
	}
	console.log(sum === a)
}

//8 n soni berilgan. Shu sonni raqamlarini sonini  konsolga chiqaring. Misol: 123 -> raqamlari soni: 3

function raqamlarSoni(n) {
	console.log(n.toString().length)
}

//9 n soni berilgan. Berilgan son palindrome  ekanligini aniqlang. Agar bo'lsa true bo'lmasa false chiqaring. Masalan: n = 12321  bunda chap tomondan va o'ng  tomondan o'qisa ham bir hil bo'lishi kerak. Bu misolni while orqali ishlash yaxshiroq edi lekin for ni o'rganish uchun for da ishlaymiz .

function isPalindrome(n) {
	let str = n.toString()
	for (let i = 0; i < str.length / 2; i++) {
		if (str[i] !== str[str.length - 1 - i]) {
			console.log(false)
			return
		}
	}
	console.log(true)
}

//10 n  soni berilgan. Shu sonni raqamlarini yig'indisini toping.
function sonYig(n) {
	let sum = 0
	while (n) {
		sum += n % 10
		n = Math.floor(n / 10)
	}
	console.log(sum)
}

//11 array[] berilgan. Shu massivni teskarisini yangi massivga ko'chirib o'tkazing va konsolga chiqaring.

function teskari(arr) {
	let reversed = arr.slice().reverse()
	console.log(reversed)
}

//12 n va array[] berilgan. Shu massivda nechta n soni borligini topib konsolga chiqaring. Masalan:  n = 4 , array[2,4,6,4,], Natija: bu yerda 2 ta 4 bor.

function countOccurrences(n, arr) {
	let count = arr.filter(num => num === n).length
	console.log(`Bu yerda ${n} lar soni ${count} ta`)
}

//13 a, array[] berilgan. Arrayning xohlagan ikkita  elementlarini  yig'indisi a ga teng bo'lishini aniqlang va ularni  konsolga chiqaring.
function iktaTeng(a, arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === a) {
				console.log(arr[i], arr[j])
				return
			}
		}
	}
	console.log('TOPILMADI')
}

//14 Sonlardan iborat massiv berilgan. Shu massivni  elementlarini o'sish tartibida jo'ylashtiring (sort by increasing (ascending) ) va hosil bo'lgan massivni ni konsolga chiqaring.
function sortArray(arr) {
	let sorted = arr.slice().sort((a, b) => a - b)
	console.log(sorted)
}

//15 Sonlardan iborat massiv berilgan. Shu massivdagi eng katta ikkinchi  elementni toping. Bunda array elementlari bir biriga teng emas deb oling.

function engKattaIkkinchi(arr) {
	let uniqueSorted = Array.from(new Set(arr)).sort((a, b) => b - a)
	console.log(uniqueSorted[1])
}
