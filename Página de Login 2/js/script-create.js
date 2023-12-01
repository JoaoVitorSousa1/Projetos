function validation() {
  let name = document.getElementById('name');
  let s_name = document.getElementById('s_name');
  let gender = document.getElementById('gender');
  let user = document.getElementById('user');
  let email = document.getElementById('email');
  let password = document.getElementById('password');
  let password_conf = document.getElementById('password_conf');
  let style_1 = '2px solid red';
  let style_2 = '2px solid green';

  input_style(name, style_1, style_2);
  input_style(s_name, style_1, style_2);
  select_style(gender, style_1, style_2);
  input_style(user, style_1, style_2);
  input_style(email, style_1, style_2);
  input_style(password, style_1, style_2);
  input_style(password_conf, style_1, style_2);
}

function input_style(input, style_1, style_2){
  if (!input.checkValidity() || input.value === ''){
    input.style.border = style_1;
  } else {
    input.style.border = style_2;
  }
}

function select_style(input, style_1, style_2){
  if(input.value === ''){
    input.style.border = style_1;
  }else{
    input.style.border = style_2
  }
}

