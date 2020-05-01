import { dateStringToDate } from "./Utils";
import { RESULT } from "./AppContants";
import { CSVfileReader } from "./CSVfileReader";

type MatchTuple = [Date, string, string, number, number, RESULT, string];

class MatchReader extends CSVfileReader<MatchTuple> {
 parseRow(row: string[]): MatchTuple{
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as RESULT,
      row[6]
    ]
 } 
}

export { MatchReader };