function isPalindrome(text) {

    // const removeSpecialChr = text.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s/g," ");
    // const makeLowerCase = removeSpecialChr.toLowerCase();
    // // console.log(makeLowerCase)

    // const reversedText = makeLowerCase.split('').reverse().join('');

    // if(makeLowerCase===reversedText){
    //     return console.log('True')
    // }else{
    //     return console.log('False')
    // }
    
    var original = text.replace(/[\.,/#!$%&\^-_`~()@}{}*=+|" ]/g,"").replace(/[]/g," ").toLowerCase();
    
   
    var reverse = original.split('').reverse().join('');
    
   
    if (original === reverse) {
          return console.log('True');
        } else {
              return console.log('false');
            }
  
  }
  
  
  isPalindrome("applel, ppa");