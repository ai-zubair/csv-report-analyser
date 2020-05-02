import { Reporter } from "../Summary";

class ConsoleReport implements Reporter{

  constructor(){}

  printReport(analysis: string): void{
    console.log(analysis)
  }

}

export { ConsoleReport }