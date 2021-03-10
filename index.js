class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string){
    return string.replace(/[^a-z' -]/ig, "");
  }
  static titleize(string){
    let str = string.split(' ');
    let title = str[0].toUpperCase;
    for(let i = 1; i < str.length; i++){
      if (str[i] == 'the'||
          str[i] == 'a'||
          str[i] == 'an'||
          str[i] == 'but'||
          str[i] == 'of'||
          str[i] == 'and'||
          str[i] == 'for'||
          str[i] == 'at'||
          str[i] == 'by'||
          str[i] == 'from'){
        title += " " + str[i]
      }
      else{
        title += " " + Formatter.capitalize(str[i])
      }
    }
    return title
  }
}
