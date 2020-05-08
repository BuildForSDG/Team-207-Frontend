export class Utils {
  isEmpty(input): boolean {
    if (input == null || input == '' || input == undefined) {
      return true;
    } else {
      return false;
    }
  }

  ucfirst(_string) {
    return _string.charAt(0).toUpperCase() + _string.slice(1);
  }

  ucwords(_string) {
    var string = _string;
    string = string.toLowerCase().replace(/\b[a-z]/g, function (word) {
      return word.toUpperCase();
    });
    return string;
  }
}
