"use strict";

//1. 
let submissions = [
   {name: "Jane", score: 95, date: "2020-01-24", passed: true }, 
   {name: "Joe", score: 77, date: "2018-05-14", passed: true }, 
   {name: "Jack", score: 59, date: "2019-07-05", passed: true }, 
   {name: "Jill", score: 88, date: "2020-04-22", passed: true }, 
];



//2.
function addSubmission(array, newName, newScore, newDate){
    let newSubmission = {
        name: newName, score: newScore, date: newDate, passed: newScore >= 60, 
    };
    array.push(newSubmission);
}

addSubmission(submissions, "John", 62, "2021-08-10");
addSubmission(submissions, "James", 15, "2021-08-10");



//3.
const deleteSubmissionByIndex = (array, index) => {
    array.splice(index, 1);
};

deleteSubmissionByIndex(submissions, 1);


//4.
const deleteSubmissionByName = (anyArray, name) => {
    let target = anyArray.findIndex((submission) => submission.name === name);
    anyArray.splice(target, 1);
};

deleteSubmissionByName(submissions, "John");


//5.
const editSubmission = (array, index, score) => {
    array[index].score = score
    array[index].passed = score >= 60
};

editSubmission(submissions, 0, 55);


//6.
const findSubmissionByName = (array, name) => {
    let match = submissions.find((submission) => submission.name === name);
    return match;
};
console.log( findSubmissionByName(submissions, "Jill") );

 //7.
 const findLowestScore = (array) => {
    let minScore = submissions[0];
    for (const submission of submissions) {
        if (submission.score < minScore.score) {
            minScore = submission;
        }
    }
    return minScore;
 }
console.log(findLowestScore(submissions));
 //8.
 // want to use this: const findAverageScore = (array) => {}; 
 function findAverageScore(array) {
     let sum =0;
     for (let submission of submissions) {
         sum += submission.getAverage();
     }
     return sum / submissions.grade;
 }
 console.log(submissions); 
 //9.
 const filterPassing = (array) => {

 }

 //10.
 const filter90AndAbove = (array) => {

 }