class Validator {
  isEmail(string) {
    const EMAILCHECK = /^([\w\d._\-#])+@([\w\d._\-#]+[.][\w\d._\-#]+)$/i;
    return EMAILCHECK.test(string);
  }
  isDomain(string) {
    const DOMAINCHECK = /^([\wёa-я-]{2,}\.)+[\wёa-я-]{2,}$/i;
    return DOMAINCHECK.test(string);
  }
  isDate(string) {
    const DATECHECK = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
    return DATECHECK.test(string);
  }
  isPhone(string) {
    const PHONEHECK = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    return PHONEHECK.test(string);
  }
}

let validator = new Validator();
console.log(validator.isEmail("alisa@mail.ru"));
console.log(validator.isDomain("itgirlschool.ru"));
console.log(validator.isDate("12.05.2021"));
console.log(validator.isPhone("+7(910)123-45-67"));

class ValidatorStatic {
  static isEmail(string) {
    const EMAILCHECK = /^([\w\d._\-#])+@([\w\d._\-#]+[.][\w\d._\-#]+)$/i;
    return EMAILCHECK.test(string);
  }
  static isDomain(string) {
    const DOMAINCHECK = /^([\wёa-я-]{2,}\.)+[\wёa-я-]{2,}$/i;
    return DOMAINCHECK.test(string);
  }
  static isDate(string) {
    const DATECHECK = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
    return DATECHECK.test(string);
  }
  static isPhone(string) {
    const PHONEHECK = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    return PHONEHECK.test(string);
  }
}

console.log(ValidatorStatic.isEmail("alisa@mail.ru"));
console.log(ValidatorStatic.isDomain("itgirlschool.ru"));
console.log(ValidatorStatic.isDate("12.05.2021"));
console.log(ValidatorStatic.isPhone("+7(910)123-45-67"));
