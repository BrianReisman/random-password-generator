const h3 = document.querySelector('h3');
const button = document.querySelector('button');
const input = document.querySelector('input');
const p = document.querySelector('p');
// alert('hi'); //easiest was to check you are connected like red background in css

//eventlistener for button click
button.addEventListener('click', () => {
  input.value = GeneratePassword(16);
  console.log(input.value);
  h3.innerText = 'Click here to copy password ' + input.value //innerText more secrue than innerHTML
  h3.classList.remove('hide')
  h3.classList.add('show')
})

//password generator
const GeneratePassword = (length = 16) => { //our default is 16 now. This is a parameter incase I want to add user input to determine how many chars to generate
  const charset = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890` //not all sites allow special characters so just a-zA-Z0-9 here

  let password = ''; //where the new password will be sorted.
  for(let i = 0; i < length; ++i) { //length here is the parameter not .length
    let at = Math.floor(Math.random() * (charset.length + 1));
    password += charset.charAt(at);
  }
  return password;

}

h3.addEventListener('click', () => {
  copyText()
})

const copyText = () => {
  console.log(input.value);

  let passText = input.value;
  navigator.clipboard.writeText(passText);
  alert(passText);
}