"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
commander_1.program.option("-o,--option", "an option").parse();
if (commander_1.program.opts().option) {
    console.log("I have an option");
}
