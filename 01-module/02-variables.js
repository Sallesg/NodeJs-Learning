// function printNameWithVar() {
//   if (true) {
//     var nameVarInFunction = "Adriano";
//   }
//   console.log(
//     "name declared outside the block in which the name variable was created: ",
//     nameVarInFunction
//   ); // Ok
// }
// // BUG:ReferenceError: name is not defined
// console.log("Name: ", name);
// printNameWithVar();

// let ageLet = 35;
// console.log("Age: ", ageLet);
// ageLet = 36;
// console.log("age after the value of the variable has been updated: ", ageLet);

// function printNameWithLet() {
//   if (true) {
//     let ageLetInFunction = 35;
//     console.log(
//       "age declared in the block where the name variable was created: : ",
//       ageLetInFunction
//     ); // Ok
//   }
//   // BUG:ReferenceError: name is not defined
//   console.log("age declared outside the block in which the name variable was created: : ", age);
// }
// printNameWithLet();

// const nameConst = "Adriano";
// console.log("NameConst: ", nameConst);
// // BUG: TypeError: Assignment to constant variable.
// nameConst = "Salles";
// console.log("NameConst: ", nameConst);

// function printNameWithConstructor() {
//   if (true) {
//     const nameConstInFunction = "Adriano";
//     console.log("Name: ", nameConstInFunction); // Ok
//   }
//   // BUG: ReferenceError: nameConstInFunction is not defined
//   console.log("Name: ", nameConstInFunction);
// }

// BUG: The code block is not processed by js.
// for (const number = 0; number < 3; number++) {
//   console.log("Number: ", number);
// }

// let userLetHandling = {
//   objectName: "Adriano",
//   objectAge: 35,
// };
// console.log("userLetHandling: ", userLetHandling);

// userLetHandling = {
//   objectName: "Salles",
//   objectAge: 36,
// };
// console.log("userLetHandling after handling : ", userLetHandling);

// const userConstHandling = {
//   objectName: "Adriano",
//   objectAge: 35,
// };
// console.log("userConstHandling: ", userConstHandling);

// // BUG: TypeError: Assignment to constant variable.
// // userConstHandling = {
// //   objectName: "Salles",
// //   objectAge: 36,
// // };
// // console.log("userConstHandling after handling: ", userConstHandling);

// userConstHandling.objectName = "Salles";
// userConstHandling.objectAge = 36;
// console.log("userConst: ", userConstHandling);
