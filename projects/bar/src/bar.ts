import { program } from "commander"

program.option("-o,--option", "an option").parse()

if (program.opts().option) {
  console.log("I have an option")
}
