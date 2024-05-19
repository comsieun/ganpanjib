let score = 0

//게임시작
document.addEventListener('DOMContentLoaded',()=>{
    const chara = document.getElementById("mainChara")
    const LBTN = document.getElementById("arrowLeft")
    const RBTN = document.getElementById("arrowRight")
//마우스이벤트 클릭시 게임시작
chara.addEventListener("click", ()=>{
    setInterval(updateScore, 300)

//키보드이벤트
    let x = 1
    const block = 33
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
    const start = document.getElementById("startBTN")
    score += s
    start.innerHTML = `score: ${score}`
}