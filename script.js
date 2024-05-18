document.addEventListener('DOMContentLoaded',()=>{
    const chara = document.getElementById("mainChara")
//마우스이벤트, 속성변경
chara.addEventListener("click", ()=>{
//키보드이벤트
    let x = 2
    const block = 30
    const print = () => {
        chara.style.left = `${x * block}%`
    }
    print()

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
        if (x<3) 
        x += 1
        break
    }
    print()
})
    })
})
