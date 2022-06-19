AOS.init({
    offset: 50,
    duration: 1000,
});

// RANDOM GALLARY

const galleryBox = document.querySelector('.gallery-wrap');
const galleryImgCount = 12;


    for(let i=0; i<galleryImgCount; i++){
        galleryBox.innerHTML += getImage();
    };


function getImage() {
    const random = Math.floor(Math.random() * 15); 
    if(random == 0){
        return '<img src="./assets/img/galery' + 1 + '.jpg" alt="gallary" class="gallery-item-img" data-aos="fade-up">';
    }else{
        return '<img src="./assets/img/galery' + random + '.jpg" alt="gallary" class="gallery-item-img" data-aos="fade-up">';
    };
    
};

//   BURGER MENU

(function(){
    const openBtn = document.querySelector('.burger-btn');
    const burgerMenu = document.querySelector('.burger-menu-box');

    openBtn.addEventListener('click', () => {
        let close = document.querySelector('.burger-wrap');

        if(burgerMenu.classList.contains('burgermenu-open')) {
            burgerMenu.classList.remove('burgermenu-open');
            close.innerHTML = '<img src="./assets/img/burerMenu.png" alt="burger-menu" class="burger-img" />';
        } else {
            burgerMenu.classList.add('burgermenu-open');
            close.innerHTML = '<img src="./assets/img/burger close.png" alt="burger-menu" class="burger-img">';
        }
    });
})();


// WELCOME SLIDER


(function (){
    const prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      slides = document.querySelectorAll('.siwper-slide'),
      dots = document.querySelectorAll('.carusel-2-rectangle');
      
      let index = 0;

      const activeSlide = (n) => {
        slides.forEach(slide => {
            slide.classList.remove('active');
        })
        slides[n].classList.add('active');
      };

      const activeDot = (n) => {
        dots.forEach(dot => {
            dot.classList.remove('rec-active');
        })
        
        dots[n].classList.add('rec-active');
      };

      const prepareCurrentSlide = (index) => {
        activeSlide(index);
        activeDot(index);
      };

      const nextSlide = () => {
        if (index === slides.length - 1) {
          index = 0;
          prepareCurrentSlide(index);
        } else {
          index++;
          prepareCurrentSlide(index);
        }
      };

      const prevSlide = () => {
        if (index === 0) {
          index = slides.length - 1;
          prepareCurrentSlide(index);
        } else {
          index--;
          prepareCurrentSlide(index);
        }
      };
      
      dots.forEach((item, indexDot) => {
        item.addEventListener('click', () => {
          index = indexDot;
          prepareCurrentSlide(index);
        });
      });
      
      next.addEventListener('click', nextSlide);
      prev.addEventListener('click', prevSlide);
})();

// FORM

(function(){
    const text = document.querySelector('#text');

    text.addEventListener('change', () => {
        const nameValid = text.value;
        if(nameValid.length < 3 || nameValid.length > 15) {
            document.querySelector('.warning').classList.add('warning-open');
        } else {
            document.querySelector('.warning').classList.remove('warning-open');
        };
    });

    const email = document.querySelector('#email');

    email.addEventListener('change', () => {
        const emailValid = email.value;
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const testValidation = re.test(emailValid);
        if(testValidation !== true) {
            document.querySelector('.warning-mail').classList.add('warning-open');
        } else {
            document.querySelector('.warning-mail').classList.remove('warning-open');
        };
    });

    const tel = document.querySelector('#tel');

    tel.addEventListener('change', () => {
        const phoneValid = tel.value;
        const re = (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
        const testValidation = re.test(phoneValid);
        if(testValidation !== true) {
            document.querySelector('.warning-phone').classList.add('warning-open');
        } else {
            document.querySelector('.warning-phone').classList.remove('warning-open');
        };
    });

    const dateValidation = document.querySelector('.date-time');
    const today = new Date();
    const year = today.getFullYear();

    let month = today.getMonth() + 1;

    month < 10 ? month = '0' + month : month;

    const day = today.getDate();

    dateValidation.innerHTML +=
    `<input type="date" min="${year}-${month}-${day}" placeholder="Date" class="date">`;
})();

const formData = {
    type: '',
    basicCount: 0,
    seniorCount: 0,
    basicPrise: 20,
    seniorPrise: 10,
};


(function (){
    const ticketTypesBox = document.querySelector('.ticket-types-box');

    ticketTypesBox.addEventListener('click', (e) => {
        let event = e.target;

        if(event.name !== "exhibition") {
            return;
        };

        pushType(event.value);
    })

    const amountBox = document.querySelector('.amount');
    
    amountBox.addEventListener('click', (e) => {
        let event = e.target;

        changeCount(
            event.id,
            "basic-left",
            "senior-left",
            "basic-right",
            "senior-right",
        );
    })

})();

const openModal = () => {

    form.classList.add('form-open');

    pushCount()
    const selectType = document.querySelector('#contacts-form');

    selectType.value = formData.type;

    selectType.addEventListener('change', () => {
        pushType(selectType.value);
    })

    const entryCountBox = document.querySelector('.entry-count-box');
    entryCountBox.addEventListener('click', (e) => {
        let event = e.target;

        changeCount(
            event.id,
            "entry-basic-btn-left",
            "entry-senior-btn-left",
            "entry-basic-btn-right",
            "entry-senior-btn-right",
        );

        
    })
};

const form = document.querySelector('.tickets-form');

document.querySelector('.amount-btn').addEventListener('click', () => {
    openModal()
});
document.querySelector('.close').addEventListener('click', () => {
    form.classList.remove('form-open');
});


function changeCount(
     id,
     prevFirst,
     prevLast,
     nextFirst,
     nextLast,
    ) {
  
    switch (id) {
        case prevFirst:
            formData.basicCount !== 0 ? formData.basicCount-- : null;
            break;
        case nextFirst:
            formData.basicCount !== 20 ? formData.basicCount++ : null;
            break;
        case prevLast:
            formData.seniorCount !== 0 ? formData.seniorCount-- : null;
            break;
        case nextLast:
            formData.seniorCount !== 20 ? formData.seniorCount++ : null;
            break;
        default:
            return;
    };
    
    pushPrise();
    pushCount();
}

function pushPrise() {
    let countBasic = document.querySelector('#amount-basic-count');
    let countSenior = document.querySelector('#amount-senior-count');
    let amountCountBasic = document.querySelector('#amount-basic-count-f');
    let amountCountSenior = document.querySelector('#amount-senior-count-f');
    let total = document.querySelector('.amount-total')
    let totalForm = document.querySelector('.total-count-money');

    countBasic.innerHTML = formData.basicCount;
    countSenior.innerHTML = formData.seniorCount;
    amountCountBasic.innerHTML = formData.basicCount;
    amountCountSenior.innerHTML = formData.seniorCount;
    
    total.innerHTML = `Total ${formData.basicPrise * formData.basicCount
        + formData.seniorPrise * formData.seniorCount}€`;
    totalForm.innerHTML = `${formData.basicPrise * formData.basicCount
        + formData.seniorPrise * formData.seniorCount}€`;
}

function pushCount() {
    let overviewExhibitionType = document.querySelector('.t-form-last-inf3');
    let priseBasic = document.querySelector('.prise-basic');
    let priseSenior = document.querySelector('.prise-senior');
    let priseBasicForm = document.querySelector('.prise-basic-form');
    let priseSeniorForm = document.querySelector('.prise-senior-form');
    let countBasic = document.querySelector('#count-basic');
    let countSenior = document.querySelector('#count-senior');
    let basicMoney = document.querySelector('#count-basic-money');
    let SeniorMoney = document.querySelector('#count-senior-money');
    
    overviewExhibitionType.innerHTML = formData.type;

    countBasic.innerHTML = formData.basicCount;
    countSenior.innerHTML = formData.seniorCount;

    priseBasic.innerHTML = `(${formData.basicPrise}€)`;
    priseSenior.innerHTML = `(${formData.seniorPrise}€)`;

    priseBasicForm.innerHTML = `(${formData.basicPrise}€)`;
    priseSeniorForm.innerHTML = `(${formData.seniorPrise}€)`;

    basicMoney.innerHTML = `${formData.basicPrise * formData.basicCount}€`;
    SeniorMoney.innerHTML = `${formData.seniorPrise * formData.seniorCount}€`;
}

function pushType(type) {
    formData.type = type; 
        switch (type) {
            case "Permanent exhibition":
                formData.basicPrise = 20;
                formData.seniorPrise = 10;
                break;
            case "Temporary exhibition":
                formData.basicPrise = 30;
                formData.seniorPrise = 15;
                break;
            case "Combined Admission":
                formData.basicPrise = 40;
                formData.seniorPrise = 20;
                break;
            default:
                return;
        }
        pushPrise();
        pushCount();
};

// EXPLORE

(function () {
    let x, i;
    x = document.getElementsByClassName("img-comp-overlay");
    for (i = 0; i < x.length; i++) {
      compareImages(x[i]);
    }
    function compareImages(img) {
    let slider, clicked = 0, w, h;

      w = img.offsetWidth;
      h = img.offsetHeight;
     
      img.style.width = (w / 2) + "px";
      
      slider = document.createElement("DIV");
      slider.setAttribute("class", "img-comp-slider");
      
      img.parentElement.insertBefore(slider, img);
      
      slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
      
      slider.addEventListener("mousedown", slideReady);
      
      window.addEventListener("mouseup", slideFinish);
      
      slider.addEventListener("touchstart", slideReady);
      
      window.addEventListener("touchstop", slideFinish);
      function slideReady(e) {
       
        e.preventDefault();
        
        clicked = 1;
        
        window.addEventListener("mousemove", slideMove);
        window.addEventListener("touchmove", slideMove);
      }
      function slideFinish() {
       
        clicked = 0;
      }
      function slideMove(e) {
        let pos;
        
        if (clicked == 0) return false;
        
        pos = getCursorPos(e)
        
        if (pos < 0) pos = 0;
        if (pos > w) pos = w;
        
        slide(pos);
      }
      function getCursorPos(e) {
        let a, x = 0;
        e = e || window.event;
        
        a = img.getBoundingClientRect();
        
        x = e.pageX - a.left;
       
        x = x - window.pageXOffset;
        return x;
      }
      function slide(x) {
       
        img.style.width = x + "px";
        
        slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
      }
    }
  })()