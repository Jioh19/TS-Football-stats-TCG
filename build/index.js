"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CvsFileReader_1 = require("./CvsFileReader");
const consoleReport_1 = require("./reportTargets/consoleReport");
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const Summary_1 = require("./Summary");
const csvFileReader = new CvsFileReader_1.CsvFileReader('football.csv');
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
const summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Newcastle'), new consoleReport_1.ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);
