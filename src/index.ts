import { CSVfileReader } from "./components/CSVfileReader";
import { MatchReader } from "./components/MatchReader";
import { Summary } from "./components/Summary";
import { WinAnalysis } from "./components/Analysers/WinAnalysis";
import { ConsoleReport } from "./components/Reporters/ConsoleReport";

/* Create a match reader pre-configured for CSV files */
const matchReader = MatchReader.readFromCSV("football.csv");
matchReader.load();

const matchSummary = Summary.createWinConsoleReport("Cardiff");
matchSummary.analyseAndReport(matchReader.parsedData);