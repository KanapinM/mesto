(()=>{"use strict";var e=document.querySelector(".elements"),t=document.querySelector(".profile__edit-button"),n=document.querySelector(".profile__add-button"),o=(document.querySelector(".popup_type_edit-profile"),document.querySelector(".popup__form_type_profile")),r=document.querySelector(".popup__form_type_place"),i=document.querySelector(".profile__name"),u=document.querySelector(".profile__interest"),a=document.querySelector(".popup__input_type_name"),l=document.querySelector(".popup__input_type_interest"),c={template:".element-template"},s={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active",error:".popup__input-error"};function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var f=function(){function e(t,n){var o=t.data,r=t.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=o,this._name=o.name,this._link=o.link,this._selectors=n,this._template=document.querySelector(n.template).content,this.handleCardClick=r,this._popupImage=document.querySelector(".popup_type_image"),this._element=this._getTemplate(),this._elementPhoto=this._element.querySelector(".element__photo"),this._elementTitle=this._element.querySelector(".element__tittle"),this._buttonDelete=this._element.querySelector(".element__delete-button"),this._buttonLike=this._element.querySelector(".element__like")}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return this._template.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._buttonDelete.addEventListener("click",(function(){e._element.remove()})),this._buttonLike.addEventListener("click",(function(){e._buttonLike.classList.toggle("element__like_active")})),this._elementPhoto.addEventListener("click",(function(){return e.handleCardClick(e._data)}))}},{key:"generateCard",value:function(){return this._elementPhoto.src=this._data.link,this._elementPhoto.alt=this._data.name,this._elementTitle.textContent=this._data.name,this._setEventListeners(),this._element}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var h=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._validationConfig=t,this._formElement=n,this._inputList=this._formElement.querySelectorAll(this._validationConfig.inputSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e){var t=this._formElement.querySelector(".".concat(this._inputElement.id,"-error"));this._inputElement.classList.add(this._validationConfig.inputErrorClass),t.textContent=e,t.classList.add(this._validationConfig.errorClass)}},{key:"_hideInputError",value:function(){var e=this._formElement.querySelector(".".concat(this._inputElement.id,"-error"));this._inputElement.classList.remove(this._validationConfig.inputErrorClass),e.classList.remove(this._validationConfig.errorClass),e.textContent=""}},{key:"removeInputError",value:function(){var e=this;this._inputList.forEach((function(t){t.classList.remove(e._validationConfig.inputErrorClass)})),this._formElement.querySelectorAll(this._validationConfig.error).forEach((function(t){t.classList.remove(e._validationConfig.errorClass)}))}},{key:"_checkInputValidity",value:function(){this._inputElement.checkValidity()?this._hideInputError():this._showInputError(this._inputElement.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._buttonElement=this._formElement.querySelector(this._validationConfig.submitButtonSelector),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._inputElement=t,e._checkInputValidity(),e.toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_disableSubmitButton",value:function(){this._buttonElement.setAttribute("disabled","disabled"),this._buttonElement.classList.add(this._validationConfig.inactiveButtonClass)}},{key:"_enableSubmitButton",value:function(){this._buttonElement.classList.remove(this._validationConfig.inactiveButtonClass),this._buttonElement.removeAttribute("disabled")}},{key:"toggleButtonState",value:function(){this._formElement.checkValidity()?this._enableSubmitButton():this._disableSubmitButton()}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),m(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),m(this,"_closeByOverlay",(function(e){e.target===e.currentTarget&&n.close()})),m(this,"_closeByButton",(function(){n.close()})),this.selectors=t,this._popup=document.querySelector(".".concat(this.selectors.popup)),this._popupCloseButton=this._popup.querySelector(".popup__close-button")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add(this.selectors.popupOpenedClass),this.setEventListenners()}},{key:"close",value:function(){this.removeEventListeners(),this._popup.classList.remove(this.selectors.popupOpenedClass)}},{key:"setEventListenners",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popup.addEventListener("click",this._closeByOverlay),this._popupCloseButton.addEventListener("click",this._closeByButton)}},{key:"removeEventListeners",value:function(){this._popup.removeEventListener("click",this._closeByOverlay),document.removeEventListener("keydown",this._handleEscClose),this._popupCloseButton.removeEventListener("click",this._closeByButton)}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=E(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},g.apply(this,arguments)}function E(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function w(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return C(e)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(o);if(r){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function u(e,t){var n,o,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),a=function(e){e.preventDefault(),n._submitHandler(n.getInputValues()),n.close()},(r="_replaceForm")in(o=C(n=i.call(this,e)))?Object.defineProperty(o,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):o[r]=a,n._form=document.querySelector(e.popupForm),n._submitHandler=t,n._inputElements=n._form.querySelectorAll(".popup__input"),n}return t=u,(n=[{key:"getInputValues",value:function(){var e={};return this._inputElements.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListenners",value:function(){this._form.addEventListener("submit",this._replaceForm),g(O(u.prototype),"setEventListenners",this).call(this)}},{key:"close",value:function(){g(O(u.prototype),"close",this).call(this),this._form.removeEventListener("submit",this._replaceForm),this._form.reset()}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(d);function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function L(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var o=I(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(arguments.length<3?e:n):r.value}},P.apply(this,arguments)}function I(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}function B(e,t){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},B(e,t)}function q(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&B(e,t)}(u,e);var t,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(o);if(r){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupPlaceName=t._popup.querySelector(".popup__place-name"),t._popupPlaceImage=t._popup.querySelector(".popup__place-image"),t}return t=u,(n=[{key:"open",value:function(e){var t=e.name,n=e.link;P(R(u.prototype),"open",this).call(this),this._popupPlaceName.textContent=t,this._popupPlaceImage.src=n,this._popupPlaceImage.alt=t}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(d);function x(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var V=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=t,this._renderer=n}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function D(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var N=function(){function e(t){var n=t.profileName,o=t.profileInterest;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n,this._interest=o}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,interest:this._interest.textContent}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._interest.textContent=e.interest}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),F=new V(e,(function(e){F.addItem(A(e))}));function W(e){U.open(e)}function A(e){return new f({data:e,handleCardClick:W},c).generateCard()}F.renderItems([{name:"Москва",link:"https://doninturflot.com/upload/iblock/3ac/u4cxwquh2sh7zo4kngfn26c8tgsuhjxw/moscow3.jpg"},{name:"Казань",link:"https://thumbs.dreamstime.com/b/дворец-хуторянин-в-казань-республика-tatarstan-26347233.jpg"},{name:"Карелия",link:"https://russia.meteors.ru/component/ajax/?p=image&src=WyJpbWFnZXNcL2phdG9tc1wvdG91cnNcL2Rlc3lhdC1jaHVkZXMta2FyZWxpaVwvMTYzNDA0NWFiZTFkNGRhYWIzNWVkMTc4YzI3MDdlYjUuanBlZyIsW1sidHlwZSIsWyJ3ZWJwIiwiODUiXV1dXQ%3D%3D&hash=a724ca3f6828434c5864f63af6133c38"},{name:"Дагестан",link:"https://554a875a-71dc-4f5f-b6bf-ae8967f137d5.selcdn.net/thumbs2/7f19a29e-d1f2-11ec-a383-ea308159fb4d.1600x900.jpeg"},{name:"Санкт-Петербург",link:"https://static.tildacdn.com/tild6566-3865-4936-a165-666130613164/WhatsApp_Image_2022-.jpeg"},{name:"Карачаевск",link:"https://gorodarus.ru/images/karachaevsk/karachaevsk4.jpg"}]);var U=new T({popup:"popup_type_image",popupOpenedClass:"popup_open"}),Z=new S({popup:"popup_type_add-place",popupOpenedClass:"popup_open",popupForm:".popup__form_type_place"},(function(e){F.addItem(A(e))})),M=new S({popup:"popup_type_edit-profile",popupOpenedClass:"popup_open",popupForm:".popup__form_type_profile"},(function(){z.setUserInfo(M.getInputValues())})),z=new N({profileName:i,profileInterest:u});t.addEventListener("click",(function(){a.value=z.getUserInfo().name,l.value=z.getUserInfo().interest,X.removeInputError(),X.toggleButtonState(),M.open()})),n.addEventListener("click",(function(){H.toggleButtonState(),H.removeInputError(),Z.open()}));var H=new h(s,r);H.enableValidation();var X=new h(s,o);X.enableValidation()})();