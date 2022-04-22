// 1 slider
(function () {
    const sliderBox = document.querySelector('.projects__carts');
    const sliderItems = document.querySelectorAll('.projects__carts-item');

    const sliderButtonLeft = document.querySelector('.projects__control-left');
    const sliderButtonRight = document.querySelector('.projects__control-right');

    const count = sliderItems.length - 1;
    let index = 0;

    let switchAccess = true;

    sliderButtonLeft.addEventListener('click', () => {
        if(index == 0) {
            index = count + 1;
        }
        index--;
        setSliderItem();
        takeAccess();
    });
    
    sliderButtonRight.addEventListener("click", () => {
        if(index == count) {
            index = 0 - 1;
        }
        index++;
        setSliderItem();
        takeAccess();
    })
    
    function takeAccess() {
        switchAccess = false;
        setTimeout(() => {
            switchAccess = true;
        }, 5000);
    }
    
    setInterval(() => {
        if(switchAccess) {
            if(index == count) {
                index = 0 - 1;
            }
            setSliderItem(sliderItems[++index]);
        }
    }, 3000);
    
    function setSliderItem() {
        sliderBox.style.left = -(index * (sliderItems[0].clientWidth + parseInt(window.getComputedStyle(sliderItems[0], true).marginRight))) + "px";
    }
})();

// 2 slider
(function () {
    const sliderItems = document.querySelectorAll('.testimonial__carts-item');
    const sliderActiveClass = "testimonial__carts-active";
    
    const sliderButtonLeft = document.querySelector('.testimonial__control-left');
    const sliderButtonRight = document.querySelector('.testimonial__control-right');
    
    let count = sliderItems.length - 1;
    let index = 0;
    
    let switchAccess = true;
    
    sliderItems[0].classList.add("testimonial__carts-active");
    
    sliderButtonLeft.addEventListener("click", () => {
        if(index == 0) {
            index = count + 1;
        }
        setSliderItem(sliderItems[--index]);
        takeAccess();
    });
    
    sliderButtonRight.addEventListener("click", () => {
        if(index == count) {
            index = 0 - 1;
        }
        setSliderItem(sliderItems[++index]);
        takeAccess();
    })
    
    function takeAccess() {
        switchAccess = false;
        setTimeout(() => {
            switchAccess = true;
        }, 5000);
    }
    
    setInterval(() => {
        if(switchAccess) {
            if(index == count) {
                index = 0 - 1;
            }
            setSliderItem(sliderItems[++index]);
        }
    }, 3000);
    
    function setSliderItem(item) {
        for(let cItem of sliderItems) {
            cItem.classList.remove(sliderActiveClass);
        }
        item.classList.add(sliderActiveClass);
    }
})();