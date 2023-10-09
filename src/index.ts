import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
// import { CsvFileReader } from './CvsFileReader';
// import { ConsoleReport } from './reportTargets/consoleReport';
// import { WinsAnalysis } from './analyzers/WinsAnalysis';
// import { HtmlReport } from './reportTargets/HtmlReports';

// const csvFileReader = new CsvFileReader('football.csv');
// const matchReader = new MatchReader(csvFileReader);
const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Arsenal');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
