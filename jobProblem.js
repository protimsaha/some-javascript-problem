function isPalindrome(text) {

    
    var original = text.replace(/[\.,/#!$%&\^-_`~()@}{}*=+|" ]/g,"").replace(/[]/g," ").toLowerCase();
    
   
    var reverse = original.split('').reverse().join('');
    
   
    if (original === reverse) {
          return console.log('True');
        } else {
              return console.log('false');
            }
  
  }
  
  
  isPalindrome("applel, ppa");