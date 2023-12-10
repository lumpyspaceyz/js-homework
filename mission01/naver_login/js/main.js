
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

const emailInput = document.querySelector('#userEmail');
const emailInvalid = document.querySelector('#userEmailError');
const pwInput = document.querySelector('#userPassword');
const pwInvalid = document.querySelector('#userPasswordError');
const loginForm = document.querySelector('.login-form');
const loginBtn = document.querySelector('.btn-login');

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리..?
4. 로그인 버튼을 클릭시 조건처리

*/

// 1. email 정규표현식을 사용한 validation
emailInput.addEventListener('input', validation)

// 2. pw 정규표현식을 사용한 validation
pwInput.addEventListener('input', validation)

// loginForm.addEventListener('submit', () => {
//   e.preventDefault();
//   submit();
// })

loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('loginBtn click');
  submit();
})


function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

function validation(e) {
  const value = e.target.value;
  if(e.target === emailInput) {
    emailReg(value) ? emailInvalid.classList.remove('is--invalid') : emailInvalid.classList.add('is--invalid')
  } else if(e.target === pwInput) {
    pwReg(value) ? pwInvalid.classList.remove('is--invalid') : pwInvalid.classList.add('is--invalid')
  }
}

// 4. 로그인 버튼을 클릭시 조건처리
function submit() {
  console.log('submit 호출')

  if(!emailInvalid.classList.contains('is--invalid') && !pwInvalid.classList.contains('is--invalid')) {
    loginBtn.disabled = false;
    console.log('버튼 활성화')
    checkData(emailInput, pwInput);
  } else {
    loginBtn.disabled = true;
    console.log('버튼 비활성화')
  }
}

function checkData(checkId, checkPw) {
  if ((checkId.value === user.id) && (checkPw.value === user.pw)) {
    console.log('welcome')
    // window.location.href = 'welcome.html';
  } else {
    throw new Error('회원 정보가 일치하지 않습니다.')
  }
}





