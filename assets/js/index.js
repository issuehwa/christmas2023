document.addEventListener('DOMContentLoaded', function () {
  // 페이지가 로드될 때 실행될 코드

  // 클릭 이벤트를 처리하는 함수
  function handleAudioClick() {
    var audio = document.getElementById('myAudio');
    var click = document.getElementById('click');
    var intro = document.getElementById('intro');
    var canvas = document.getElementById('canvas');
    var back = document.getElementById('back');
    audio.volume = 0.2;

    // 오디오가 재생 중이 아니면 재생 시작
    if (audio.paused) {
      audio.play();
      canvas.style.display = "block";
      // click.style.display = "none";
      intro.style.display = "none";
    } else {
      click.style.display = "none";
      canvas.style.display = "none";
      back.style.display = "flex";
      Snowy()
    }
  }

  // 클릭 이벤트 리스너 등록
  document.addEventListener('click', handleAudioClick);
});


// JavaScript를 사용하여 화면 크기에 따라 이미지 크기 조정
window.addEventListener('resize', adjustImageSize);

function adjustImageSize() {
  const defaultContentWidth = 450;
  const defaultContentHeight = 900;

  // 디바이스 화면 크기
  const containerWidth = window.innerWidth;
  const containerHeight = window.innerHeight;

  // 스케일
  const scaleX = containerWidth / defaultContentWidth;
  const scaleY = containerHeight / defaultContentHeight;


  const divElement = document.querySelector('.wrap');

  // 이미지에 스케일을 적용하여 크기 조정
  divElement.style.transform = `scaleX(${scaleX}) scaleY(${scaleY})`;
}

// 페이지 로드시 이미지 크기 조정
window.addEventListener('load', adjustImageSize);


function Snowy() {
  function t() {
    window.requestAnimationFrame(t), $.clearRect(0, 0, w, h), $.fillStyle = "hsla(255,255%,255%,0)", $.fillRect(0, 0, w, h), $.fill();
    for (var i = 0; i < a.length; ++i) f = a[i], f.t += .05, f.t = f.t >= 2 * Math.PI ? 0 : f.t, f.y += f.sp, f.x += Math.sin(f.t * s) * (.3 * f.sz), f.y > h + 50 && (f.y = -10 - Math.random() * r), f.x > w + r && (f.x = -r), f.x < -r && (f.x = w + r), f.draw()
  }

  function i() {
    this.draw = function () {
      this.g = $.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.sz), this.g.addColorStop(0, "hsla(255,255%,255%,1)"), this.g.addColorStop(1, "hsla(255,255%,255%,0)"), $.moveTo(this.x, this.y), $.fillStyle = this.g, $.beginPath(), $.arc(this.x, this.y, this.sz, 0, 2 * Math.PI, !0), $.fill()
    }
  }
  for (var n, a = [], e = 300, s = 1, o = 1, d = 0.8, r = 20, l = 1, c = 0; c < e; ++c) n = new i, n.y = Math.random() * (h + 50), n.x = Math.random() * w, n.t = Math.random() * (2 * Math.PI), n.sz = 100 / (10 + 100 * Math.random()) * d, n.sp = .15 * Math.pow(.8 * n.sz, 2) * o, n.sp = n.sp < l ? l : n.sp, a.push(n);
  t()
} // 300 을 조절 하면 눈의 양 조절 가능 
var c = document.getElementById("canvas2"),
  $ = c.getContext("2d"),
  w = c.width = window.innerWidth,
  h = c.height = window.innerHeight;
window.addEventListener("resize", function () {
  c.width = w = window.innerWidth, c.height = h = window.innerHeight
}, !1)