import fs from 'fs';
import { dateStringToDate } from "./Utils";
import { RESULT } from "./AppContants";

type MatchTuple = [Date, string, string, number, number, RESULT, string];
class CSVfileReader{
  data: MatchTuple[] = [];

  constructor(public filename: string){}

  read(): void {
    this.data = fs.readFileSync(this.filename,{
      encoding: "utf-8"
    })
    .split("\n")
    .map( (row: string): string[] => row.split(','))
    .map( (row: string[]): MatchTuple => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as RESULT,
        row[6]
      ]
    })
  }

}

export { CSVfileReader };