"use strice";
/* 
  oop হচ্ছে একধরনের প্রোগ্রামীং প্যারাডাইম। যেটি মুলত object এর concept এর উপর ভিত্তি করে বানানো হয়েছে।
oop মূলত তিন ভাবে করা যায়। 
1. functional prototype (constractor function)
2. class based prototype (class constractor)
3. object. create() function
*/

/*******************(constractor function)*******************/
/* function Student(nickName, age) {
  this.nickName = nickName;
  this.age = age;
}

const arif = new Student("Arif", 25);
const jony = new Student("Jony", 24);

1.এখানে new keyword এর কারনে একটা {} অবজেক্ট ক্রিয়েট হয়।
2.Student ফাংশনকে কল করে দেয় এবং এখানে this = {} কে বুঝাবে।
3.arif Obj টি Student এর প্রোটোটাইপের সাথে লিংক হয়ে যাবে।
4. Student ফাংশনটি অটোমেটিমালি এই rif Obj কে রিটার্ন করে দিবে।

console.log(arif);
console.log(jony instanceof Student);
console.log(Student.prototype.isPrototypeOf(arif));
*/

/* function User(userName, birthYear) {
  this.userName = userName;
  this.birthYear = birthYear;
}
ফাংশন constractor এ মেথডকে সব সময় ফাংশনের বাইরে ক্রিয়েট করতে হয়
User.prototype.calcAge = function () {
  return new Date().getFullYear() - this.birthYear;
};
User.prototype.getFullInfo = function () {
  return `My name is ${this.userName} and I am ${this.calcAge()} years old.`;
};

const atik = new User("Atik", 1996);
const jakaria = new User("Jakaria", 1991);

console.log(atik.calcAge());
console.log(atik.getFullInfo()); */

/* function Teacher(fName, lName, designation, subject) {
  this.fName = fName;
  this.lName = lName;
  this.designation = designation;
  this.subject = subject;
}

Teacher.prototype.fullName = function () {
  return `${this.fName} ${this.lName}`;
};

Teacher.prototype.getFulInfo = function () {
  return `Name: ${this.fullName()}, Designation: ${
    this.designation
  }, Subject: ${this.subject}`;
};

let mannan = new Teacher("Abdul", "Mannan", "Assistant Teacher", "Science");
let usuf = new Teacher("Shm", "Usuf", "Professor", "ICT");

console.log(mannan.fullName());
console.log(mannan.getFulInfo());
console.log(mannan.subject);

console.log(usuf.fullName());
console.log(usuf.getFulInfo()); */

/**************************(class constractor)*****************************/
/*
{class based: শুরুতে class নিতে হবে এবং className সবসময় বড় হাতের অক্ষর দিয়ে শুরু করতে হয়}
{(ক্লাস কখনো হোয়েস্টেড হয় না), (ক্লাস হচ্ছে ফাস্টক্লাস ফাংশন),(ক্লাস আপনাআপনি use strice ব্যবহার করে)}
{(কোনো মেথডকে যদি class এর জন্য প্রাইভেট করতে চাই তাহলে মেথড এর পূর্বে static শব্দটিকে বসাতে হবে এবং class ছাড়া কেউ বাইরে থেকে এক্সেস করতে পারবেনা)}
*/
/* class Person {
  constructor(fName, lName, birthyear) {
    this.fName = fName;
    this.lName = lName;
    this.birthyear = birthyear;
  }
  fullName() {
    return `I am ${this.fName} ${this.lName}`;
  }
  currentAge() {
    return new Date().getFullYear() - this.birthyear;
  }
}

const rsuf = new Person("Shm", "Usuf", 1996);
const priti = new Person("Sabiha Tasnim", "Priti", 2010);

// console.log(rsuf);
// console.log(rsuf.currentAge());

class CinemaHall {
  constructor(movieName, seatCount) {
    this.movieName = movieName;
    this.seatCount = seatCount;
    this.audience = [];
  }

  ticketPrice() {
    return this.seatCount * 250;
  }
  static cupponCode() {
    console.log(456582753951);
  }
  audienceCount(name) {
    this.audience.push(name, this.movieName, this.seatCount);
  }
}

CinemaHall.cupponCode();

const abid = new CinemaHall("Avator", 5);
const atik = new CinemaHall("Spider Man", 3);

// console.log(abid.ticketPrice());
// atik.audienceCount("Atik Hasan");
// console.log(atik);

class User extends Person {
  constructor(fName, lName, birthyear, sex, height, weight) {
    super(fName, lName, birthyear);
    this.sex = sex;
    this.height = height;
    this.weight = weight;
  }
  fullName() {
    return `I am ${this.fName} ${this.lName}`;
  }

  getFullInfo() {
    return `${this.fullName()} and my height ${this.height}cm and weight ${
      this.weight
    }kg. `;
  }
}

const arif = new User("Arif", "Billah", 1997, "male", 155, 70);
console.log(arif);
console.log(arif.fullName());
console.log(arif.getFullInfo()); */

/****************************************/
/* যদি কোনো ভ্যারিয়েবলকে আমরা প্রাইভেট বানাতে চাই তবে তাকে constructor এর বাইরে নিয়ে যেতে হবে এবং এর সাথে একটা # যুক্ত করতে হবে। যেমনঃ #name*/

/* class Pen {
  #penBrand = "Matodor";
  constructor(name, color, price) {
    this.name = name;
    this.color = color;
    this.price = price;
    console.log(this.#penBrand);
  }
}

const pen1 = new Pen("Matador Pinpoint", "Red", "5tk");
console.log(pen1.price); */

/******************************************/
/*
oop এর ৪টি principle রয়েছে।
1.{এবস্ট্রাকশন:যেখানে প্রোগ্রামের অভ্যন্তরীণ মেকানিজম ইউজারকে না দেখিয়ে শুধুমাত্র তার ফাংশনালিটিগুলো ভিজিবল রাখা হয়}
*/
/* function Car(name) {
  this.name = name;
}

Car.prototype.start = function () {
  console.log(`${this.name} 'starts'`);
};

Car.prototype.stop = function () {
  console.log(`${this.name} 'stops'`);
};

let mercedes = new Car("Mercedes Benz");
mercedes.start();
console.log(mercedes);
mercedes.stop(); */
/* 2.{এনক্যাপ্সুলেশন}
3.ইনহেরিটেন্স 
4.পলিমরফিজম */

/*************************************************/
