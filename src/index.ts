import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CvsFileReader';
import { ConsoleReport } from './reportTargets/consoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { Console } from 'console';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(new WinsAnalysis('Newcastle'), new ConsoleReport());

summary.buildAndPrintReport(matchReader.matches);
