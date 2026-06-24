export{};
let scores: number[] = [75, 85, 95, 64, 35];
console.log("Score: " + scores[0] + "," + scores[1] + "," + scores[2] + "," + scores[3] + "," + scores[4]);

let student: [number, string] = [1, "Mari"];

console.log("Student ID: " + student[0] + ", Name: " + student[1]);

for (let i: number = 0; i < 5; i++) {
    let testNum: number = i + 1; 
    console.log("Test " + testNum + " Score: " + scores[i]);
}
let totalScore: number = scores[0] + scores[1] + scores[2] + scores[3] + scores[4];
let averageScore: number = totalScore / 5;

console.log("Total Score: " + totalScore);
console.log("Average Score: " + averageScore);