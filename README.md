### js-homework-01

## 네이버 로그인 페이지
로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.
재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.

<br>

### 함수 기능 정의
- **validation()**
  : input box의 값을 정규 표현식으로 검사하여 error message를 보여줄지 말지 결정
- **submit()**
  : checkData 함수로 회원 정보를 체크한 결과에 따라 submit 여부? 방법? (페이지를 이동 or Throw Error) 결정
- **checkData()**
  : 입력된 값과 user 객체의 회원 정보를 비교하여 회원인지 아닌지 확>

<br>

### 정규표현식을 사용한 email/pw validation
addEventListener 메소드를 사용하여 input 동작이 있을 때마다 validation 함수 호출
해당 input box의 값을 e 객체를 이용해 가져와 값을 정규식 함수에 전달하여 확인하고, 정규식 검증 여부에 따라 classList 프로퍼티를 사용해 is--valid 클래스를 부여함

<br>

### 로그인 버튼 클릭시 조건처리
addEventListener 메소드를 사용하여 submit 동작이 있을 때마다 (=form 내부의 submit 타입을 가진 버튼이 눌릴 때마다) submit 함수 호출
이때 e.preventDefault() 메소드를 사용해 form 안에 submit 역할을 하는 버튼을 눌렀어도 submit과 동시에 창이 새로 실행되는 것을 방지함
submit 함수에서 checkData 함수를 호출해 회원 정보를 체크함
checkData 함수의 결과 여부에 따라 welcome.html 페이지로 이동 또는 Error를 던져줌

<br>

### 해결하지 못한 문제 🤔
아이디, 비밀번호 validation 결과에 따라 로그인 버튼 활성화 여부를 제어하고 싶었는데
validation false일 때 버튼이 한 번 비활성화 되면, 이후부터 버튼 자체가 눌리지 않아 validation 검사 단계에 진입할 수 없는 문제

로그인 버튼이 눌려야 validation 검사 단계에 진입할 수 있는 상황에서 로그인 버튼의 활성화 여부를 제어하는 건 불가능한 걸까?
머릿속에서 로직의 순서가 뒤죽박죽 섞여 정리가 안 됨
