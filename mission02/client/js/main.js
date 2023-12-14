
/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/


const body = getNode('body');
const nickName = getNode('.nickName');
const img = getNode('img');
const nav = getNode('ul');


function handleClick(e) {
  
  let target = e.target;
  let li = target.closest('li');
  
  if(!li) return;
  
  let index = li.dataset.index;
  let list = [...nav.children];

  list.forEach((li) => {
    removeClass(li, 'is-active');
  })

  li.classList.add('is-active');
  

  setImage(index);
  setBgColor(index);
  setNameText(index);

  // addClass(li, 'is-active');
  // css(body, 'background', `linear-gradient(to bottom, ${data[index-1].color[0]}, ${data[index-1].color[1]})`);
}

function setBgColor(index) {
  body.style.background = `linear-gradient(to bottom, ${data[index-1].color[0]}, ${data[index-1].color[1]})`;
}

function setImage(index) {
  img.src = `./assets/${data[index-1].name}.jpeg`;
  img.alt = data[index-1].alt;
}

function setNameText(index) {
  nickName.innerHTML = `${data[index-1].name}`;

}


nav.addEventListener('click', handleClick);