import { dateStringToDate } from "./Utils";
import { MatchTuple, RESULT } from "./Types";
import { CSVfileReader } from "./CSVfileReader";

interface DataReader{
  data: string[][];
  read(): void;
}

class MatchReader{
  parsedData: MatchTuple[] = [];

  static readFromCSV(filename: string): MatchReader{
    return new MatchReader(
      new CSVfileReader(filename)
    );
  }
  
  constructor(public reader: DataReader){}

  load(): void {
    this.reader.read();
    this.parsedData = this.reader.data.map( (row: string[]): MatchTuple => {
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

export { MatchReader }  ;