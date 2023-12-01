function validation(){
  let user = document.getElementById('user');
  let password = document.getElementById('password');
  let style_1 = '2px solid red';
  let style_2 = '2px solid green';

  input_style(user, style_1, style_2);
  input_style(password, style_1, style_2);

}

function input_style(input, style_1, style_2) {
  if (!input.checkValidity() || input.value === '') {
    input.style.border = style_1;
  } else {
    input.style.border = style_2;
  }
}