import { MatchReader } from "./components/MatchReader";
import { Summary } from "./components/Summary";

/* Create a match reader pre-configured for CSV files */
const matchReader = MatchReader.readFromCSV("football.csv");
matchReader.load();

const matchSummary = Summary.createWinConsoleReport("Cardiff");
matchSummary.analyseAndReport(matchReader.parsedData);