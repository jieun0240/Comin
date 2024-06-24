// 모달 가져오기
var modal = document.getElementById("myModal");

// 가이드 생성 버튼 가져오기
var btn = document.getElementById("guideBtn");

// 모달의 닫기 버튼 가져오기
var span = document.getElementsByClassName("close")[0];

// 가이드 생성 버튼을 클릭하면 모달을 보이게 하기
btn.onclick = function() {
    modal.style.display = "block";
}

// 모달의 닫기 버튼을 클릭하면 모달을 숨기기
span.onclick = function() {
    modal.style.display = "none";
}

// 모달 외부를 클릭하면 모달을 숨기기
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}