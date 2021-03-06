// 1 Create a function that uses a if/else conditional

let password = 'Aaaaaaa';
function conditional_expression(password) {
    if ( password.length >= 7){
        return 'Strong';
    } else {
      return 'Weak';
    }
}



// 2. Create a function that uses a ternary conditional expression.

function ternary_conditional_expression(password) {
   return password.length >= 7 ? 'Strong' : 'Weak';
}

// 3. Create a function that uses a && logical operator.

function  logical_operator(password) {
   if(password.length >= 7 && password.length > 7)
     return 'Strong';
  else return 'Weak';
}


// 4. Create an “advanced” password validation function that
// takes a password string as an argument.
// If the password length is more than 7 characters long and
// has at least one capital letter return “Very Strong”. 
// If the password length in only 7 characters long return
// “Strong”.
// If the password length is less than 7 characters long return
// “Weak”


function  advanced_password(password) {
  let string = '';
  for (let i=0; i<password.length; i++) {    
    let result = (password[i].toUpperCase() === true) ? true : false;
  }
      string =  password.length >= 7 && true ? 'Very Strong' : password.length >= 7 ? 'Strong': 'Weak';
  return string;
}

