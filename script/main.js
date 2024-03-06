//마우스
const mouse = document.querySelector('.mouse')
const menuList = document.querySelectorAll('.page');
const menuListA = document.querySelectorAll('.page > a');

// 마우스 변경
window.addEventListener('mousemove',(event) => {
    mouse.style.left = `${event.clientX}px` 
    mouse.style.top = `${event.clientY}px` 
});

// 마우스 이미지 변경
menuList.forEach((item) => {
    item.addEventListener('mouseover', () => {
        changeMouseImage('url("../img/mouse-2.png")');
    });
    item.addEventListener('mouseout', () => {
        changeMouseImage('url("../img/mouse-1.png")');
    });
});
let changeMouseImage = (MouseUrl) => {
    mouse.style.backgroundImage = MouseUrl;
};

// 메뉴이미지 크기 변경
menuList.forEach((menu) => {
    let targetImg = '';

    menu.addEventListener('mouseover', (event) => {
        targetImg = event.currentTarget.querySelector('img');
        targetImg.style.transform = "scale(1.1)";
    });
    menu.addEventListener('mouseout', (event) => {
        targetImg = event.currentTarget.querySelector('img');
        targetImg.style.transform = "scale(1)";
    });
});

// 섹션 이동하면 헤더의 글씨 변경
let sectionAll = document.querySelectorAll('section');
let headerTextChange = document.querySelector('.header-text-change');

window.addEventListener('scroll', () => {
    let userScrollY = window.scrollY;

    sectionAll.forEach((e) => {
        let sectionTop = e.offsetTop;
        let sectionHeight = e.offsetHeight;
        let sectionDataName = e.getAttribute('data-name');
        let sectionBottom = sectionTop + sectionHeight;

        if (userScrollY > sectionTop && userScrollY < sectionBottom) {
            headerTextChange.innerHTML = sectionDataName;
        }
        if (userScrollY >= sectionBottom) {
            headerTextChange.innerHTML = sectionDataName;
        }
    });
});
