let scoreHome = document.getElementById("homeScore")
let scoreGuest = document.getElementById("guestScore")

liveScore = 0
liveScoreG = 0

function plus1(){
    liveScore += 1
    scoreHome.textContent = liveScore
}

function plus2(){
    liveScore += 2
    scoreHome.textContent = liveScore
}

function plus3(){
    liveScore += 3
    scoreHome.textContent = liveScore
}

function plus1G(){
    liveScoreG += 1
    scoreGuest.textContent = liveScoreG
}

function plus2G(){
    liveScoreG += 2
    scoreGuest.textContent = liveScoreG
}

function plus3G(){
    liveScoreG += 3
    scoreGuest.textContent = liveScoreG
}