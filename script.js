let score = 0
let misfortune = 0
const barrier = [0, 1, 2] //0:구덩이 1:전봇대 2:쓰레기통
const item = [0, 1] //0:에너지 드링크 1:불행 조각 

//게임시작
document.addEventListener('DOMContentLoaded',()=>{
    const start = document.getElementById("scoreHeader")
    const chara = document.getElementById("mainChara")
    const LBTN = document.getElementById("arrowLeft")
    const RBTN = document.getElementById("arrowRight")
//마우스이벤트 클릭시 게임시작
chara.addEventListener("click", ()=>{
    // setInterval(updateScore, 300) // 0.3초당 스코어증가
    start.innerHTML = `score: ${score} 불행조각: ${misfortune}`

//키보드이벤트
    let x = 1
    const block = 36
    const print = () => {
        chara.style.left = `${x * block}%`
    }
    print()
//방향키로 한 경우
    const [left, right] = [37, 39]
    document.body.addEventListener
    (
    'keydown', (event) => {
    switch (event.keyCode) {
    case left:
        if (x>0) 
        x-= 1
        break
    case right:
        if (x<2) 
        x += 1
        break
    }
    print()
})
LBTN.addEventListener("click", ()=>{ //왼쪽버튼 누른 경우
    if (x>0) 
    x-= 1
    print()
})
RBTN.addEventListener("click", ()=>{ //오른버튼 누른 경우
    if (x<2) 
    x += 1
    print()
})
})
})
//score 증가
function updateScore(s=1){
    const start = document.getElementById("scoreHeader")
    score += s
    start.innerHTML = `score: ${score} 불행조각: ${misfortune}`
}
function updateMisfortune(s=1){
    const start = document.getElementById("scoreHeader")
    misfortune += s
    start.innerHTML = `score: ${score} 불행조각: ${misfortune}`
}