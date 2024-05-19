let score = 0
let misfortune = 0
let heart = 3
let itemcount = 0
const itemKind = [0, 1, 2, 3, 4, 5] //0:구덩이 1:전봇대 2:쓰레기통 3:에너지 드링크 4:불행 조각 5: 집
let itemINSSet = []

//게임시작
document.addEventListener('DOMContentLoaded',()=>{
    const chara = document.getElementById("mainChara")
    const LBTN = document.getElementById("arrowLeft")
    const RBTN = document.getElementById("arrowRight")
    //마우스이벤트 클릭시 게임시작
    chara.addEventListener("click", ()=>{
        updateScoreHeader()
    // setInterval(updateScore, 300) // 0.3초당 스코어증가
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
        createItem()
    })
})
//score 증가
function updateScore(s=1){
    score += s
    updateScoreHeader()
}
function updateMisfortune(s=1){
    misfortune += s
    updateScoreHeader()
}
function updateHeart(s=1){
    heart -= s
    updateScoreHeader()
}
function updateScoreHeader(){
    const start = document.getElementById("scoreHeader")
    start.innerHTML = `score: ${score} 불행조각: ${misfortune} ♥ ${heart}`
}
function createItem(){
    const item1 = document.getElementById("item1")
    const item2 = document.getElementById("item2")
    const item3 = document.getElementById("item3")
    //1. p: 0~2의 난수 생성(위치) k: 0~5의 난수생성(아이템종류)
    p= Math.floor(Math.random() * 2), k= Math.floor(Math.random() * 5)
    console.log(p, k)
    let y=2
    //2. 난수에 맞는 객체 생성
    const i = new Item(p, k)
    itemINSSet.push(i)
    let text = `<div id='itemINS'>장애물!!</div>`
    if(p==0){
        item1.innerHTML += text
    }else if (p==1){
        item2.innerHTML += text
    }else{
        item3.innerHTML += text
    }
    let itemblock = 20
    timer = setInterval(()=>{
        document.getElementById(`itemINS`).style.top = `${y++ * itemblock}px`
        console.log(y*itemblock)
        if(y*itemblock > 600){
            clearInterval(timer);
            itemINSSet.pop()
        }
    }, 400)
}

// 아이템
class Item{
    pos = -1 // 범위 0 ~ 2
    kind = -1 // 범위 0 ~ 5 0:구덩이 1:전봇대 2:쓰레기통 3:에너지 드링크 4:불행 조각 5: 집
    constructor(pos, kind){
        this.pos = pos;
        this.kind = kind;
    }
    crush(){
        switch(kind){
        case(0):
        updateHeart()
            break
        case(1):
        updateHeart()
            break
        case(2):
        updateHeart()
            break
        case(3):
        updateHeart(-1)
            break
        case(4):
        updateMisfortune()
            break
        case(5):
        updateScore(100)
            break
        }
    }
}