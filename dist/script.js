/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sliders */ "./src/js/modules/sliders.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mask */ "./src/js/modules/mask.js");
/* harmony import */ var _modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/checkTextInputs */ "./src/js/modules/checkTextInputs.js");
/* harmony import */ var _modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showMoreStyles */ "./src/js/modules/showMoreStyles.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js");
/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/filter */ "./src/js/modules/filter.js");








window.addEventListener('DOMContentLoaded', () => {
  Object(_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
  Object(_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.main-slider-item', 'vertical');
  Object(_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_mask__WEBPACK_IMPORTED_MODULE_3__["default"])('[name="phone"]');
  Object(_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="name"]');
  Object(_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="message"]');
  Object(_modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__["default"])('.button-styles', '#styles .row');
  Object(_modules_calc__WEBPACK_IMPORTED_MODULE_6__["default"])('#size', '#material', '#options', '.promocode', '.calc-price');
  Object(_modules_filter__WEBPACK_IMPORTED_MODULE_7__["default"])();
});

/***/ }),

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const calc = (size, material, options, promocode, result) => {
  const sizeBlock = document.querySelector(size);
  const materialBlock = document.querySelector(material);
  const optionsBlock = document.querySelector(options);
  const promocodeBlock = document.querySelector(promocode);
  const resultBlock = document.querySelector(result);
  let sum = 0;

  const calcFunc = () => {
    sum = Math.round(+sizeBlock.value * +materialBlock.value + +optionsBlock.value);

    if (sizeBlock.value === '' || sizeBlock.value === 0 || materialBlock.value === '') {
      resultBlock.textContent = "Пожалуйста, выберите размер и материал картины";
    } else if (promocodeBlock.value === 'IWANTPOPART') {
      resultBlock.textContent = Math.round(sum * 0.7);
    } else {
      resultBlock.textContent = sum;
    }
  };

  sizeBlock.addEventListener('change', calcFunc);
  materialBlock.addEventListener('change', calcFunc);
  optionsBlock.addEventListener('change', calcFunc);
  promocodeBlock.addEventListener('input', calcFunc);
};

/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./src/js/modules/checkTextInputs.js":
/*!*******************************************!*\
  !*** ./src/js/modules/checkTextInputs.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const checkTextInputs = selector => {
  const txtInputs = document.querySelectorAll(selector);
  txtInputs.forEach(input => {
    input.addEventListener('keypress', e => {
      if (e.key.match(/[^а-яё 0-9]/ig)) {
        e.preventDefault();
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (checkTextInputs);

/***/ }),

/***/ "./src/js/modules/filter.js":
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const filter = () => {
  const menu = document.querySelector('.portfolio-menu');
  const items = menu.querySelectorAll('li');
  const btnAll = menu.querySelector('.all');
  const btnLovers = menu.querySelector('.lovers');
  const btnChef = menu.querySelector('.chef');
  const btnGirl = menu.querySelector('.girl');
  const btnGuy = menu.querySelector('.guy');
  const btnGrandmother = menu.querySelector('.grandmother');
  const btnGranddad = menu.querySelector('.granddad');
  const wrapper = document.querySelector('.portfolio-wrapper');
  const markAll = wrapper.querySelectorAll('.all');
  const markGirl = wrapper.querySelectorAll('.girl');
  const markLovers = wrapper.querySelectorAll('.lovers');
  const markChef = wrapper.querySelectorAll('.chef');
  const markGuy = wrapper.querySelectorAll('.guy');
  const no = document.querySelector('.portfolio-no');

  const typeFilter = markType => {
    markAll.forEach(mark => {
      mark.style.display = 'none';
      mark.classList.remove('animated', 'fadeIn');
    });
    no.style.display = 'none';
    no.classList.remove('animated', 'fadeIn');

    if (markType) {
      markType.forEach(mark => {
        mark.style.display = 'block';
        mark.classList.add('animated', 'fadeIn');
      });
    } else {
      no.style.display = 'block';
      no.classList.add('animated', 'fadeIn');
    }
  };

  btnAll.addEventListener('click', () => {
    typeFilter(markAll);
  });
  btnLovers.addEventListener('click', () => {
    typeFilter(markLovers);
  });
  btnChef.addEventListener('click', () => {
    typeFilter(markChef);
  });
  btnGirl.addEventListener('click', () => {
    typeFilter(markGirl);
  });
  btnGuy.addEventListener('click', () => {
    typeFilter(markGuy);
  });
  btnGrandmother.addEventListener('click', () => {
    typeFilter();
  });
  btnGranddad.addEventListener('click', () => {
    typeFilter();
  });
  menu.addEventListener('click', e => {
    let target = e.target;

    if (target && target.tagName === 'LI') {
      items.forEach(item => item.classList.remove('active'));
      target.classList.add('active');
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (filter);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests.service */ "./src/js/services/requests.service.js");


const forms = () => {
  const forms = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input');
  const upload = document.querySelectorAll('[name="upload"]');
  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо, скоро мы с Вами свяжемся!',
    failure: 'Что-то пошло не так...',
    spinner: 'assets/img/spinner.svg',
    ok: 'assets/img/ok.svg',
    fail: 'assets/img/fail.svg'
  };
  const path = {
    designer: `assets/server.php`,
    question: `assets/question.php`
  };

  const clearInputs = () => {
    inputs.forEach(input => {
      input.value = '';
    });
    upload.forEach(input => {
      input.previousElementSibling.textContent = 'Файл не выбран';
    });
  };

  upload.forEach(item => {
    item.addEventListener('input', () => {
      let dots;
      const arr = item.files[0].name.split('.');
      arr[0].length > 6 ? dots = '...' : dots = '.';
      const name = arr[0].substring(0, 6) + dots + arr[1];
      item.previousElementSibling.textContent = name;
    });
  });
  forms.forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      form.parentNode.appendChild(statusMessage);
      form.classList.add('animated', 'fadeOutUp');
      setTimeout(() => {
        form.style.display = 'none';
      }, 400);
      let statusImg = document.createElement('img');
      statusImg.setAttribute('src', message.spinner);
      statusImg.classList.add('animated', 'fadeInUp');
      statusMessage.appendChild(statusImg);
      let textMessage = document.createElement('div');
      textMessage.textContent = message.loading;
      statusMessage.appendChild(textMessage);
      const formData = new FormData(form);
      let api;
      form.closest('.popup-design') || form.classList.contains('calc_form') ? api = path.designer : api = path.question;
      Object(_services_requests_service__WEBPACK_IMPORTED_MODULE_0__["postData"])(api, formData).then(res => {
        console.log(res);
        statusImg.setAttribute('src', message.ok);
        textMessage.textContent = message.success;
      }).catch(() => {
        statusImg.setAttribute('src', message.fail);
        textMessage.textContent = message.failure;
      }).finally(() => {
        clearInputs();
        setTimeout(() => {
          statusMessage.remove();
          form.style.display = 'block';
          form.classList.remove('fadeOutUp');
          form.classList.add('fadeInUp');
        }, 3000);
      });
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const mask = selector => {
  let setCursorPosition = (pos, el) => {
    el.focus();

    if (el.setSelectionRange) {
      el.setSelectionRange(pos, pos);
    } else if (el.createTextRange) {
      let range = el.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };

  function mask(e) {
    let matrix = `+7 (___) ___ __ __ `;
    let i = 0;
    let def = matrix.replace(/\D/g, '');
    let val = this.value.replace(/\D/g, '');

    if (def.length >= val.length) {
      val = def;
    }

    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });

    if (e.type === 'blur') {
      if (+this.value.length === 2) {
        this.value = '';
      } else {
        setCursorPosition(this.value.length, this);
      }
    }
  }

  let inputs = document.querySelectorAll(selector);
  inputs.forEach(input => {
    input.addEventListener('input', mask);
    input.addEventListener('focus', mask);
    input.addEventListener('blur', mask);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (mask);

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const modals = () => {
  let btnPressed = false;

  function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
    const trigger = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelector(closeSelector);
    const windows = document.querySelectorAll('[data-modal]');
    const scroll = calcScroll();
    trigger.forEach(item => {
      item.addEventListener('click', e => {
        if (e.target) {
          e.preventDefault();
        }

        btnPressed = true;

        if (destroy) {
          item.remove();
        }

        windows.forEach(window => {
          window.style.display = 'none';
          window.classList.add('animated', 'fadeIn');
        });
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
      });
    });
    close.addEventListener('click', () => {
      windows.forEach(window => {
        window.style.display = 'none';
      });
      modal.style.display = 'none';
      document.body.style.overflow = '';
      document.body.style.marginRight = `0px`;
    });
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        windows.forEach(window => {
          window.style.display = 'none';
        });
        modal.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
      }
    });
  }

  function showModalByTime(selector, time) {
    setTimeout(() => {
      let display;
      document.querySelectorAll('[data-modal]').forEach(el => {
        if (getComputedStyle(el).display !== 'none') {
          display = 'block';
        }
      });

      if (!display) {
        document.querySelector(selector).style.display = 'block';
        document.body.style.overflow = 'hidden';
        const scroll = calcScroll();
        document.body.style.marginRight = `${scroll}px`;
      }
    }, time);
  }

  function calcScroll() {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }

  function openByScroll(selector) {
    window.addEventListener('scroll', () => {
      if (!btnPressed && window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        document.querySelector(selector).click();
      }
    });
  }

  bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
  bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
  bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
  openByScroll('.fixed-gift');
  showModalByTime('.popup-consultation', 60000);
};

/* harmony default export */ __webpack_exports__["default"] = (modals);

/***/ }),

/***/ "./src/js/modules/showMoreStyles.js":
/*!******************************************!*\
  !*** ./src/js/modules/showMoreStyles.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests.service */ "./src/js/services/requests.service.js");


const showMoreStyles = (trigger, wrapper) => {
  const btn = document.querySelector(trigger);
  /* Static
    cards.forEach(card => {
      card.classList.add('animated', 'fadeInUp');
  });
    btn.addEventListener('click', () => {
      cards.forEach(card => {
          card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
          card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
      });
      btn.remove();
  })
      <div class="col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1">
              <div class=styles-block>
                  <img src=assets/img/styles-4.jpg alt>
                  <h4>Ручкой</h4>
                  <a href="#">Подробнее</a>
              </div>
          </div>
   */

  /* Dynamic */

  function createCards(response) {
    response.forEach(({
      src,
      title,
      link
    }) => {
      let card = document.createElement('div');
      card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'fadeInUp');
      card.innerHTML = `
                <div class="styles-block">
                    <img src="${src}" alt="${title}"/>
                    <h4>${title}</h4>
                    <a href="${link}">Подробнее</a>
                </div>
            `;
      document.querySelector(wrapper).appendChild(card);
    });
  }

  btn.addEventListener('click', function () {
    Object(_services_requests_service__WEBPACK_IMPORTED_MODULE_0__["getResource"])('assets/db.json').then(res => createCards(res.styles)).catch(error => console.log(error));
    this.remove();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (showMoreStyles);

/***/ }),

/***/ "./src/js/modules/sliders.js":
/*!***********************************!*\
  !*** ./src/js/modules/sliders.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const sliders = (slides, dir, prev, next) => {
  let slideIndex = 1;
  let paused = false;
  const items = document.querySelectorAll(slides);

  function showSlides(n) {
    if (n > items.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = items.length;
    }

    items.forEach(item => {
      item.classList.add('animated');
      item.style.display = 'none';
    });
    items[slideIndex - 1].style.display = 'block';
  }

  showSlides(slideIndex);

  function nextSlide(n) {
    showSlides(slideIndex += n);
  }

  try {
    const prevBtn = document.querySelector(prev);
    const nextBtn = document.querySelector(next);
    prevBtn.addEventListener('click', () => {
      nextSlide(-1);
      items[slideIndex - 1].classList.remove('slideInRight');
      items[slideIndex - 1].classList.add('slideInLeft');
    });
    nextBtn.addEventListener('click', () => {
      nextSlide(1);
      items[slideIndex - 1].classList.remove('slideInLeft');
      items[slideIndex - 1].classList.add('slideInRight');
    });
  } catch (e) {}

  function activateAnimation() {
    if (dir === 'vertical') {
      paused = setInterval(function () {
        nextSlide(1);
        items[slideIndex - 1].classList.add('slideInUp');
      }, 3000);
    } else {
      paused = setInterval(function () {
        nextSlide(1);
        items[slideIndex - 1].classList.remove('slideInLeft');
        items[slideIndex - 1].classList.add('slideInRight');
      }, 3000);
    }
  }

  activateAnimation();
  items[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(paused);
  });
  items[0].parentNode.addEventListener('mouseleave', () => {
    activateAnimation();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (sliders);

/***/ }),

/***/ "./src/js/services/requests.service.js":
/*!*********************************************!*\
  !*** ./src/js/services/requests.service.js ***!
  \*********************************************/
/*! exports provided: postData, getResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResource", function() { return getResource; });
const postData = async (url, data) => {
  let res = await fetch(url, {
    method: "POST",
    body: data
  });
  return await res.text();
};

const getResource = async url => {
  let res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Couldn't fetch ${url}, status ${res.status}`);
  }

  return await res.json();
};



/***/ })

/******/ });
//# sourceMappingURL=script.js.map