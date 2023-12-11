/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

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

// 3. 상태 변수 관리
let emailPass = false;
let pwPass = false;


function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

function handleCheckInput(e) {
  // const value = e.target.value;
  let value = this.value;
  let errorMessage = this.nextElementSibling;

  console.log(this.nextElementSibling);

  if(this === emailInput) {
    // emailReg(value) ? emailInvalid.classList.remove('is--invalid') : emailInvalid.classList.add('is--invalid')

    if(emailReg(value)) {
      errorMessage.classList.remove('is--invalid')
      emailPass = true
    } else {
      errorMessage.classList.add('is--invalid')
      emailPass = false
    }

  } else if(this === pwInput) {
    // pwReg(value) ? pwInvalid.classList.remove('is--invalid') : pwInvalid.classList.add('is--invalid')

    if(pwReg(value)) {
      errorMessage.classList.remove('is--invalid')
      pwPass = true
    } else {
      errorMessage.classList.add('is--invalid')
      pwPass = false
    }

  }
}

// 4. 로그인 버튼을 클릭시 조건처리
function submit(email, pw) {
  if(checkData(email, pw)) {
    window.location.href = 'welcome.html'
  } else {
    throw new Error('회원 정보가 일치하지 않습니다.')
  }
}

function checkData(checkId, checkPw) {
  if ((checkId === user.id) && (checkPw === user.pw)) {
    return true
  } else {
    return false  
  }
}

function handleLogin(e) {
  e.preventDefault();

  if(emailPass && pwPass) {

    const id = emailInput.value;
    const pw = pwInput.value;
    const getUserId = user.id; // 비동기
    const getUserPw = user.pw; // 비동기

    if(id === getUserId && pw === getUserPw) {
      console.log('로그인 성공')
      wondow.location.href = 'welcome.html'
    } else {
      gsap.to('form',{
        x: 10,
        repeat: 8,
        yoyo: true,
        duration: 0.08,
        clearProps: true
      })
    }

  } else {
    throw new Error('아이디와 비밀번호를 확인해주세요.')
  }
}

// handleLogin -> try..catch
// function handleLogin(e){


//   e.preventDefault();

//   if(emailPass && pwPass){

//     try{
//       const id = emailInput.value;
//       const pw = pwInput.value;
//       const getUserId = user.id; // 비동기 => 1s 
//       const getUserPw = user.pw; // 비동기 => 1s
      
//       console.log( getUserId, getUserPw );

//       if(id === getUserId && pw === getUserPw){
//         // console.log('로그인 성공!');
        
//         window.location.href = './welcome.html'
//       }
//     }catch(err){
//       console.log('해당 유저의 정보를 가져오지 못했습니다.');
//     }

//   }else{
//     console.log('입력부터 똑바로 하고와! ');
//     // alert('dlqfurEhrqkfhgo!')
//     gsap.to('form',{
//       y:10,
//       repeat:8,
//       yoyo:true,
//       duration:0.08,
//       clearProps:true
//     })
//   }
// }


// 1. email 정규표현식을 사용한 validation

emailInput.addEventListener('input', handleCheckInput)

// 2. pw 정규표현식을 사용한 validation
pwInput.addEventListener('input', handleCheckInput)

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  submit(emailInput.value, pwInput.value);
})

// loginBtn.addEventListener('click', handleLogin)


