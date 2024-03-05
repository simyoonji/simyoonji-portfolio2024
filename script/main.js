//마우스
const mouse = document.querySelector('#mouse')

window.addEventListener('mousemove',(e) => {
    mouse.style.left = `${e.clientX}px` 
    mouse.style.top = `${e.clientY}px` 
});

// section scroll event
let sectionAll = document.querySelectorAll('section');
let headerTextChange = document.querySelector('.header-text-change');

window.addEventListener('scroll', () => {
    let userScrollY = window.scrollY;

    sectionAll.forEach((e) => {
        let sectionTop = e.offsetTop;
        let sectionHeight = e.offsetHeight; // 섹션의 높이를 가져옵니다.
        let sectionDataName = e.getAttribute('data-name');

        // 각 섹션의 상단과 하단을 계산하여 스크롤 범위를 지정합니다.
        let sectionBottom = sectionTop + sectionHeight;

        // 현재 스크롤 위치가 해당 섹션의 범위 내에 있으면 헤더 텍스트 변경
        if (userScrollY > sectionTop && userScrollY < sectionBottom) {
            headerTextChange.innerHTML = sectionDataName;
        }

        // 스크롤이 섹션을 완전히 지나갈 때까지 헤더 텍스트 유지
        if (userScrollY >= sectionBottom) {
            headerTextChange.innerHTML = sectionDataName;
        }
    });
});