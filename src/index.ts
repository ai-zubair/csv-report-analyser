import fs from "fs";

//load and parse
const matches = fs.readFileSync("football.csv",{
  encoding: "utf-8"
})
.split("\n")
.map( matchString => matchString.split(','));

//analyse and report
let matchesWon = 0;
for (const match of matches) {
  if((match[1]==="Man United" && match[5]==="H")||(match[2]==="Man United" && match[5]==="A")){
    matchesWon++;
  }
}

console.log(matchesWon);