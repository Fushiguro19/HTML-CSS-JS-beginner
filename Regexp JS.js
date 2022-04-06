//Alternation/OR (|) regex JS example
let str = "Java JavaScript PHP C++ C";
let regexp = /Java(Script)?|C(\+\+)?|PHP/g;
let res = str.match(regexp);
console.log(res);

//Style tags should be detected but not styler using Alternation
let str1 = '<style> <styler> <style test="...">';
let regexp1 = /<style(>|\s.*?>)/g;
let result = str1.match(regexp1);
console.log(result);


// Lookahead and Lookbehind together k/a Lookaround searches for patterns around patterns.
//Positive Lookahead X(?=Y) means looking for X only if followed by Y
let myStr = "1 turkey costs 30€";
let myRegex = /\d+(?=€)/;
let c = /\d+(?=(€))/;    //Wrap the currency in another bracket to capture it in the result
//array as well
let myRes = myStr.match(myRegex);
console.log(myRes);
console.log(myStr.match(c));

//Negative Lookahead X(?!Y) means match X only if not followed by Y
let myRegex1 = /\d+\b(?!€)/g;    //word boundary after \d so that it doesn't match a digit 
//followed by a digit like 3 from 30
let myRes1 = myStr.match(myRegex1);
console.log(myRes1);

//Lookbehind means look for X only if/if not preceded by Y
//Positive lookbehind (?<=Y)X and negative lookbehind (?<!Y)X
let s = "1 turkey costs $30";
let r = /(?<=\$)\d+/;
let r1 = /(?<!\$)\b\d+/;
console.log(s.match(r));
console.log(s.match(r1));


/* FLag y : 
To change the index (to 3 for ex) from where the search begins we can write : 
regex_name.lastIndex = 3 but this excludes the char at that very index no
to include it we use y flag */
let abc = 'let varName = "value"';
let reg = /\w+/y;
reg.lastIndex = 4;   //starts from v including it coz of y flag
console.log(abc.match(reg));