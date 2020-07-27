/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

class ConvertHandler {
  constructor() {
    this.getNum = function (input) {
      // Number at the start of the input, with or without a decimal place
      // Allow operations and whitespaces
      if (!input) return 0
      return parseFloat(
        eval(input.match(/^((\d*\.?\d+)[.\/*+\s]?(\d*\.?\d+)*)+/)[0])
      );
    };

    this.getUnit = function (input) {
      // Letters at the end of the input
      return input.match(/[A-z]+$/)[0];
    };

    this.getReturnUnit = function (initUnit) {
      const lookup = {
        gal: "l",
        l: "gal",
        lbs: "kg",
        kg: "lbs",
        mi: "km",
        km: "mi",
      };

      return lookup[initUnit.toLowerCase()] || "invalid unit";
    };

    this.spellOutUnit = function (unit) {
      var result;

      return result;
    };

    this.convert = function (initNum, initUnit) {
      const galToL = 3.78541;
      const lbsToKg = 0.453592;
      const miToKm = 1.60934;
      const lookup = {
        mi: initNum * miToKm,
        km: initNum / miToKm,
        gal: initNum * galToL,
        l: initNum / galToL,
        lbs: initNum * lbsToKg,
        kg: initNum / lbsToKg,
      };

      return parseFloat(lookup[initUnit]);
    };

    this.getString = function (initNum, initUnit, returnNum, returnUnit) {
      // '3.1 miles converts to 5.00002 kilometers'
      const lookup = {
        mi: "miles",
        km: "kilometers",
        gal: "gallons",
        l: "liters",
        lbs: "pounds",
        kg: "kilogramms",
      };

      return `${initNum} ${lookup[initUnit]} converts to ${returnNum} ${lookup[returnUnit]}`;
    };
  }
}

module.exports = ConvertHandler;
