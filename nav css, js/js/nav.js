function toggleMenu() {
    const navToggleDiv = document.getElementById("nav-toggle"); // 네비게이션 토글 버튼 요소를 가져옴.
    const navListUl = document.querySelector(".nav-list"); // 네비게이션 리스트 요소를 가져옴
    const toggleI = navToggleDiv.querySelector("i"); // 토글 아이콘 요소를 가져옴
    
    navToggleDiv.onclick = () => { // 네비게이션 토글 버튼에 클릭 이벤트를 추가
        navListUl.classList.toggle("show-menu"); // 네비게이션 리스트의 show-menu 클래스를 토글
        toggleI.classList.toggle("bi-list"); // 아이콘 클래스를 토글하여 리스트 아이콘을 바꿈
        toggleI.classList.toggle("bi-x-lg"); // 아이콘 클래스를 토글하여 닫기 아이콘을 바꿈
    };

    // 네비게이션 리스트 아이템을 클릭했을 때
    navListUl.addEventListener("click", function(event) {
        const clickedElement = event.target;
        // 클릭된 요소가 nav-item이면 return
        if (clickedElement.classList.contains("nav-item")) return;
        // 아니면 네비게이션 리스트가 보여지는 경우에만 네비게이션 리스트를 숨
        if (navListUl.classList.contains("show-menu")) {
            navListUl.classList.remove("show-menu");
            toggleI.classList.toggle("bi-list");
            toggleI.classList.toggle("bi-x-lg");
        }
    });
}

toggleMenu(); // 함수를 호출하여 작동