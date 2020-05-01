import fs from 'fs';

abstract class CSVfileReader<T>{
  data: T[] = [];

  constructor(public filename: string){}

  abstract parseRow(row: string[]): T

  read(): void {
    this.data = fs.readFileSync(this.filename,{
      encoding: "utf-8"
    })
    .split("\n")
    .map( (row: string): string[] => row.split(','))
    .map( this.parseRow )
  }

}

export { CSVfileReader };