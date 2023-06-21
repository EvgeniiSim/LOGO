///////////////
// SPOLLERS STARTS
///////////////
const spollersArray = document.querySelectorAll("[data-spollers]");
if (spollersArray.length > 0) {
    const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
        return !item.dataset.spollers.split(",")[0];
    });
    if (spollersRegular.length > 0) {
        initSpollers(spollersRegular);
    };
    function initSpollers(spollersArray, matchMedia = false) {
        spollersArray.forEach(spollersBlock => {
            spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
            if (matchMedia.matches || !matchMedia) {
                spollersBlock.classList.add('_init');
                initSpollerBody(spollersBlock);
                spollersBlock.addEventListener('click', setSpollerAction);
            } else {
                spollersBlock.classList.remove('_init');
                initSpollerBody(spollersBlock, false);
                spollersBlock.removeEventListener('click', setSpollerAction);
            };
        });
    };
    function initSpollerBody(spollersBlock, hideSpollerBody = true) {
        const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
        if (spollerTitles.length > 0) {
            spollerTitles.forEach(spollerTitle => {
                if (hideSpollerBody) {
                    spollerTitle.removeAttribute('tabindex');
                    if (!spollerTitle.classList.contains('_active')) {
                        spollerTitle.nextElementSibling.hidden = true;
                    }
                } else {
                    spollerTitle.setAttrribute('tabindex', '-1');
                    spollerTitle.nextElementSibling.hidden = false;
                }
            });
        }
    };
    function setSpollerAction(e) {
        const el = e.target;
        if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
            const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
            const spollersBlock = spollerTitle.closest('[data-spollers]');
            if (!spollersBlock.querySelectorAll('._slide').length) {
                spollerTitle.classList.toggle('_active');
                _slideToggle(spollerTitle.nextElementSibling, 500);
            }
            e.preventDefault();
        };
    };
    function hideSpollerBody(spollersBlock) {
        const spollerActiveTitle = spollersBlock.querySelectorAll('[data-spoller]._active');
        if(spollerActiveTitle) {
            spollerActiveTitle.classList.remove('_active');
            _slideUp(spollerActiveTitle.nextElementSibling, 500)
        };
    };
}
let _slideUp = (target, duration = 500) => {
    if (!target.classList.contains("_slide")) {
        target.classList.add("_slide");
        target.style.transitionProperty = "height, margin, padding";
        target.style.transitionDuration = duration + "ms";
        target.style.height = target.offsetHeight + "px";
        target.offsetHeight, target.style.overflow = "hidden";
        target.style.height = 0, target.style.paddingTop = 0;
        target.style.paddingBottom = 0, target.style.marginTop = 0;
        target.style.marginBottom = 0, window.setTimeout(() => {
            target.hidden = !0;
            target.style.removeProperty("height");
            target.style.removeProperty("padding-top");
            target.style.removeProperty("padding-bottom");
            target.style.removeProperty("margin-top");
            target.style.removeProperty("margin-bottom");
            target.style.removeProperty("overflow");
            target.style.removeProperty("transition-duration");
            target.style.removeProperty("transition-property");
            target.classList.remove("_slide");
        }, duration)
    }
}
let _slideDown = (target, duration = 500) => {
    if (!target.classList.contains('_slide')) {
        target.classList.add("_slide");
        if(target.hidden) {
            target.hidden = false;
        }
        let height = target.offsetHeight;
        target.style.overflow = "hidden";
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        target.offsetHeight;
        target.style.transitionProperty = "height, margin, padding";
        target.style.transitionDuration = duration + "ms";
        target.style.height = height + "px";
        target.style.removeProperty("padding-top");
        target.style.removeProperty("padding-bottom");
        target.style.removeProperty("margin-top");
        target.style.removeProperty("margin-bottom");
        window.setTimeout(() => {
            target.style.removeProperty("height");
            target.style.removeProperty("overflow");
            target.style.removeProperty("transition-duration");
            target.style.removeProperty("transition-property");
            target.classList.remove("_slide")
        }, duration)
    }
};
let _slideToggle = (target, duration = 500) => {
    if (target.hidden) {
        return _slideDown(target, duration);
    } else {
        return _slideUp(target, duration);
    }
}
///////////////
// SPOLLERS ENDS
///////////////
 
///////////////
// SEARCH STARTS
///////////////
const searchSelect = document.querySelector('.content-header__search');
const checkboxCategories = document.querySelectorAll('.search-select__label');
let currentCategory = document.querySelector('.content-header__quantity');
for (let i = 0; i < checkboxCategories.length; i++) {
    const checkboxCategory = checkboxCategories[i];
    checkboxCategory.addEventListener('change', function(e) {
        checkboxCategory.classList.toggle('_active');
        let checkboxActiveCategories = document.querySelectorAll('.search-select__label._active');
        if(checkboxActiveCategories.length > 0) {
            searchSelect.classList.add('categories');
            currentCategory.innerHTML = currentCategory.getAttribute('data-text') +  ' ' + checkboxActiveCategories.length;
        } else {
            searchSelect.classList.remove('categories');
        }
    });
};
///////////////
// SEARCH ENDS
///////////////


///////////////
// MENU STARTS
///////////////
const menu = document.querySelector('.head-top__menu');
const menuBurger = document.querySelector('.menu__icon');
menuBurger.addEventListener('click', function(e) {
    menu.classList.toggle('_active');
    document.body.classList.toggle('_lock');
})
///////////////
// MENU ENDS
///////////////

///////////////
// QUANITY STARTS
///////////////
let quantityButtons = document.querySelectorAll('.quantity__button');
if (quantityButtons.length > 0) {
	for (let index = 0; index < quantityButtons.length; index++) {
		const quantityButton = quantityButtons[index];
		quantityButton.addEventListener("click", function (e) {
			let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
            let valueMax = parseInt(quantityButton.closest('.quantity').querySelector('input').getAttribute('max'));
			if (quantityButton.classList.contains('quantity__button_plus')) {
                if(value < valueMax) {
                    value++;
                }
			} else {
				value = value - 1;
				if (value < 1) {
					value = 1
				}
			}
			quantityButton.closest('.quantity').querySelector('input').value = value;
		});
	}
}
///////////////
// QUANITY ENDS
///////////////

///////////////
// TABS STARTS
///////////////
const tabsBtns = document.querySelectorAll('.product-tabs__btn');
const tabsContent = document.querySelectorAll('.product-tabs__content')
document.addEventListener('click', function(e) {
    if(e.target.closest('.product-tabs__btn')) {
        let currentBtn = e.target.closest('.product-tabs__btn');
        let currentBtnAttribute = currentBtn.getAttribute('data-tabs');
        if(!currentBtn.classList.contains('_active')) {
            tabsBtns.forEach(btn => {
                btn.classList.remove('_active');
            });
            currentBtn.classList.add('_active');
            for(i = 0;tabsContent.length > i;i++) {
                let currentContent = tabsContent[i]
                let currentContentAtrribute = currentContent.getAttribute('data-tabs');
                currentContent.classList.remove('_active');
                if(currentBtnAttribute == currentContentAtrribute) {
                    currentContent.classList.add('_active');
                };
            };
        };
    };
})


///////////////
// TABS ENDS
///////////////