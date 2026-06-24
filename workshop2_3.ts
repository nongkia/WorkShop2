export{};
let baseValue: number = 5;

console.log("--- แม่สูตรคูณ ---");
for (let i: number = 1; i <= 12; i++) {
    let result: number = baseValue * i;
    
    console.log(baseValue + " x " + i + " = " + result);
}