//마우스
const mouse = document.querySelector('.mouse')
const menuList = document.querySelectorAll('.page');
const menuListA = document.querySelectorAll('.page > a');
const buttonAll = document.querySelectorAll('button');
const skillsOpen = document.querySelector('.skillsOpen')

// 마우스 변경
window.addEventListener('mousemove',(event) => {
    mouse.style.left = `${event.clientX}px` 
    mouse.style.top = `${event.clientY}px` 
});

menuList.forEach((item) => {
    item.addEventListener('mouseover', () => {
        changeMouseImage(`url(../img/mouse-2.png)`);
    });
    item.addEventListener('mouseout', () => {
        changeMouseImage(`url(../img/mouse-1.png)`);
    });
});

buttonAll.forEach((item) => {
    item.addEventListener('mouseover', () => {
        changeMouseImage(`url(../img/mouse-2.png)`);
    });
    item.addEventListener('mouseout', () => {
        changeMouseImage(`url(../img/mouse-1.png)`);
    });
});

skillsOpen.addEventListener('mouseover', () => {
    changeMouseImage(`url(../img/mouse-2.png)`);
});
skillsOpen.addEventListener('mouseout', () => {
    changeMouseImage(`url(../img/mouse-1.png)`);
});

let changeMouseImage = (MouseUrl) => {
    mouse.style.backgroundImage = MouseUrl;
};

// 마우스이벤트 -> 메뉴이미지 크기 변경
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
    menu.addEventListener('click', () => {
        modalBg.style.display = 'none';
        skillsBox.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
});

// 스크롤 이벤트 -> 헤더의 글씨 변화
const sectionAbout = document.getElementById('about');
const sectionProject = document.getElementById('project');
const sectionContact = document.getElementById('contact');
const sectionLast = document.getElementById('section');
const headerTextChange = document.querySelector('.header-text-change');

window.addEventListener('scroll', () => {
    const windowYOffset = window.pageYOffset;
    const sectionAboutHalf = sectionAbout.offsetTop + sectionAbout.offsetHeight / 2;
    const sectionProjectHalf = sectionProject.offsetTop + sectionProject.offsetHeight / 2;
    const sectionContactHalf = sectionContact.offsetTop + sectionContact.offsetHeight / 2;
    const sectionLastHalf = sectionLast.offsetTop + sectionLast.offsetHeight / 2;

    if (windowYOffset < sectionAboutHalf) {
        headerTextChange.textContent = "MENU";
    } else if (windowYOffset < sectionProjectHalf) {
        headerTextChange.textContent = "ABOUT";
    } else if (windowYOffset < sectionContactHalf) {
        headerTextChange.textContent = "PROJECT";
    } else if (windowYOffset < sectionLastHalf) {
        headerTextChange.textContent = "CONTACT";
    } else {
        headerTextChange.textContent = "???";
    }
});

// 클릭 이벤트 -> skills 열기
const skillsBox = sectionAbout.querySelector('.about-skills');
const modalBg = sectionAbout.querySelector('.about-modal-bg');

skillsOpen.addEventListener('click', () => {
            modalBg.style.display = 'block';
            skillsBox.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });

const skillsClose = document.querySelector('.skillsClose')
        .addEventListener('click', () => {
            modalBg.style.display = 'none';
            skillsBox.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

modalBg.addEventListener('click', () => {
    modalBg.style.display = 'none';
            skillsBox.style.display = 'none';
            document.body.style.overflow = 'auto';
});

// skills 모션 변경
let motionImage = document.querySelector('.skills-right dt');
// normal
document.querySelector('.motions > button:nth-of-type(1)')
        .addEventListener('click', () => {
            motionImageChange(`url(../img/이모지-normal.gif)`);
        });
// Dash
document.querySelector('.motions > button:nth-of-type(2)')
        .addEventListener('click', () => {
            motionImageChange(`url(../img/이모지-dash.gif)`);
        });
// Dance
document.querySelector('.motions > button:nth-of-type(3)')
        .addEventListener('click', () => {
            motionImageChange(`url(../img/이모지-dance.gif)`);
});

let motionImageChange = (ImageUrl) => {
    motionImage.style.background = ImageUrl;
    motionImage.style.backgroundSize = 'cover';
    motionImage.style.backgroundPosition = 'center';
    motionImage.style.backgroundRepeat = 'no-repeat';
    motionImage.style.width = '25rem';
    motionImage.style.height = '35rem';
}
