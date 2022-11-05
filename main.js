(()=>{"use strict";var e=document.querySelector(".elements"),t=document.querySelector(".profile__edit-button"),n=document.querySelector(".profile__add-button"),r=document.querySelector(".popup__submit-button_type_profile"),o=document.querySelector(".popup__submit-button_type_place"),i=document.querySelector(".popup__submit-button_type_avatar"),a=document.querySelector(".popup__form_type_profile"),u=document.querySelector(".popup__form_type_place"),c=document.querySelector(".popup__form_type_avatar"),l=document.querySelector(".profile__name"),s=document.querySelector(".profile__about"),p=document.querySelector(".popup__input_type_name"),f=document.querySelector(".popup__input_type_about"),h=document.querySelector(".profile__avatar"),_=document.querySelector(".element-template"),d={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active",error:".popup__input-error"};function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t,n,r,o,i,a,u){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=t,this._name=t.name,this._link=t.link,this._cardId=t._id,this._cardOwnerId=t.owner._id,this._likes=t.likes.length,this._userId=u,this._selectorsTemplate=n.content,this.handleCardClick=r,this._handleRemoveCard=o,this._handleRemoveCard=o.bind(this),this._handleAddlike=i,this._handleAddlike=this._handleAddlike.bind(this),this._handleRemovelike=a,this._handleRemovelike=this._handleRemovelike.bind(this),this._hasLiked=this._liked(),this._popupImage=document.querySelector(".popup_type_image"),this._element=this._getTemplate(),this._elementPhoto=this._element.querySelector(".element__photo"),this._elementTitle=this._element.querySelector(".element__tittle"),this._buttonDelete=this._element.querySelector(".element__delete-button"),this._buttonLike=this._element.querySelector(".element__like-button"),this._likesScorer=this._element.querySelector(".cards__likes-scorer")}var t,n;return t=e,(n=[{key:"_liked",value:function(){var e=this;return this._data.likes.some((function(t){return t._id===e._userId}))}},{key:"addLike",value:function(e){this._buttonLike.classList.add("element__like-button_active"),this._likesScorer.textContent=e}},{key:"removeLike",value:function(e){this._buttonLike.classList.remove("element__like-button_active"),this._likesScorer.textContent=e}},{key:"_getTemplate",value:function(){return this._selectorsTemplate.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._buttonDelete.addEventListener("click",(function(){e._handleRemoveCard(e._element,e._cardId)})),this._buttonLike.addEventListener("click",(function(){e._hasLiked?(e._hasLiked=!1,e._handleRemovelike(e._cardId).then((function(t){return e.removeLike(t.likes.length)}))):(e._hasLiked=!0,e._handleAddlike(e._cardId).then((function(t){return e.addLike(t.likes.length)})))})),this._elementPhoto.addEventListener("click",(function(){return e.handleCardClick(e._data)}))}},{key:"generateCard",value:function(){return this._elementPhoto.src=this._data.link,this._elementPhoto.alt=this._data.name,this._elementTitle.textContent=this._data.name,this._setEventListeners(),this._userId===this._cardOwnerId&&this._buttonDelete.classList.add("element__delete-button_active"),this._liked()&&this._buttonLike.classList.add("element__like-button_active"),this._data.likes?this._likesScorer.textContent=this._likes:this._likesScorer.textContent=0,this._element}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._validationConfig=t,this._formElement=n,this._inputList=this._formElement.querySelectorAll(this._validationConfig.inputSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e){var t=this._formElement.querySelector(".".concat(this._inputElement.id,"-error"));this._inputElement.classList.add(this._validationConfig.inputErrorClass),t.textContent=e,t.classList.add(this._validationConfig.errorClass)}},{key:"_hideInputError",value:function(){var e=this._formElement.querySelector(".".concat(this._inputElement.id,"-error"));this._inputElement.classList.remove(this._validationConfig.inputErrorClass),e.classList.remove(this._validationConfig.errorClass),e.textContent=""}},{key:"removeInputError",value:function(){var e=this;this._inputList.forEach((function(t){t.classList.remove(e._validationConfig.inputErrorClass)})),this._formElement.querySelectorAll(this._validationConfig.error).forEach((function(t){t.classList.remove(e._validationConfig.errorClass)}))}},{key:"_checkInputValidity",value:function(){this._inputElement.checkValidity()?this._hideInputError():this._showInputError(this._inputElement.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._buttonElement=this._formElement.querySelector(this._validationConfig.submitButtonSelector),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._inputElement=t,e._checkInputValidity(),e.toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"_disableSubmitButton",value:function(){this._buttonElement.setAttribute("disabled","disabled"),this._buttonElement.classList.add(this._validationConfig.inactiveButtonClass)}},{key:"_enableSubmitButton",value:function(){this._buttonElement.classList.remove(this._validationConfig.inactiveButtonClass),this._buttonElement.removeAttribute("disabled")}},{key:"toggleButtonState",value:function(){this._formElement.checkValidity()?this._enableSubmitButton():this._disableSubmitButton()}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),k(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),k(this,"_closeByOverlay",(function(e){e.target===e.currentTarget&&n.close()})),k(this,"_closeByButton",(function(){n.close()})),this.selectors=t,this._popup=document.querySelector(".".concat(this.selectors.popup)),this._popupCloseButton=this._popup.querySelector(".popup__close-button")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add(this.selectors.popupOpenedClass),this.setEventListeners()}},{key:"close",value:function(){this.removeEventListeners(),this._popup.classList.remove(this.selectors.popupOpenedClass)}},{key:"setEventListeners",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popup.addEventListener("click",this._closeByOverlay),this._popupCloseButton.addEventListener("click",this._closeByButton)}},{key:"removeEventListeners",value:function(){this._popup.removeEventListener("click",this._closeByOverlay),document.removeEventListener("keydown",this._handleEscClose),this._popupCloseButton.removeEventListener("click",this._closeByButton)}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=C(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function C(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}function L(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return j(e)}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(r);if(o){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function a(e,t){var n,r,o,u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),u=function(e){e.preventDefault(),n._submitHandler(n.getInputValues())},(o="_replaceForm")in(r=j(n=i.call(this,e)))?Object.defineProperty(r,o,{value:u,enumerable:!0,configurable:!0,writable:!0}):r[o]=u,n._form=document.querySelector(e.popupForm),n._submitHandler=t,n._inputElements=n._form.querySelectorAll(".popup__input"),n}return t=a,(n=[{key:"getInputValues",value:function(){var e={};return this._inputElements.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){this._form.addEventListener("submit",this._replaceForm),S(I(a.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){S(I(a.prototype),"close",this).call(this),this._form.removeEventListener("submit",this._replaceForm),this._form.reset()}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(E);function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=A(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},T.apply(this,arguments)}function A(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},x(e,t)}function U(e,t){if(t&&("object"===B(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}var V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(r);if(o){var n=D(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return U(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupPlaceName=t._popup.querySelector(".popup__place-name"),t._popupPlaceImage=t._popup.querySelector(".popup__place-image"),t}return t=a,(n=[{key:"open",value:function(e){var t=e.name,n=e.link;T(D(a.prototype),"open",this).call(this),this._popupPlaceName.textContent=t,this._popupPlaceImage.src=n,this._popupPlaceImage.alt=t}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(E);function N(e){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(e)}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function H(){return H="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=J(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},H.apply(this,arguments)}function J(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=M(e)););return e}function z(e,t){return z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},z(e,t)}function G(e,t){if(t&&("object"===N(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},M(e)}var W=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&z(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=M(r);if(o){var n=M(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return G(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._agreementSubmitButton=n._popup.querySelector(".popup__submit-button_type_agreement"),n._answer=t,n}return t=a,(n=[{key:"open",value:function(e,t){H(M(a.prototype),"open",this).call(this),this.item=e,this.id=t}},{key:"setEventListeners",value:function(){var e=this;H(M(a.prototype),"setEventListeners",this).call(this),this._agreementSubmitButton.addEventListener("click",(function(){e._answer(e.item,e.id)}))}}])&&F(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(E);function $(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var K=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=n,this._renderer=t}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.reverse(),e.forEach((function(e){t._renderer(e)}))}}])&&$(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function Q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var X=function(){function e(t){var n=t.profileName,r=t.profileAbout,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=n,this._about=r,this._id="",this._avatar=o}var t,n;return t=e,(n=[{key:"getUserId",value:function(){return this._id}},{key:"getUserAvatar",value:function(){return this._avatar}},{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent,id:this._id,avatar:this._avatar}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._about.textContent=e.about,this._id=e.id,this._avatar=e.avatar}}])&&Q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function Y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Z(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}var ee=new WeakSet,te=function(){function e(t){var n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(n=this,r=ee),r.add(n),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getUserData",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then((function(t){return Z(e,ee,ne).call(e,t)}))}},{key:"editUserData",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return Z(t,ee,ne).call(t,e)}))}},{key:"changeAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return Z(t,ee,ne).call(t,e)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then((function(t){return Z(e,ee,ne).call(e,t)}))}},{key:"addCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return Z(t,ee,ne).call(t,e)}))}},{key:"removeCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return Z(t,ee,ne).call(t,e)}))}},{key:"likeCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return Z(t,ee,ne).call(t,e)}))}},{key:"unlikeCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return Z(t,ee,ne).call(t,e)}))}}])&&Y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function ne(e){return e.ok?e.json():Promise.reject(console.error("Возникла ошибка, код - ".concat(e.status)))}function re(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return oe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?oe(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function oe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ie=new X({profileName:l,profileAbout:s,avatar:h});function ae(e,t){e.textContent=t}console.log(ie);var ue=new K((function(e){ue.addItem(le(e))}),e),ce=new te({url:"https://mesto.nomoreparties.co/v1/cohort-52",headers:{"Content-Type":"application/json",authorization:"e0b445b1-a635-48e2-bbd4-c08ec3e337e5"}});function le(e){return new v(e,_,se,pe,fe,he,ie.getUserId()).generateCard()}function se(e){_e.open(e)}function pe(e,t){me.open(e,t)}function fe(e){return ce.likeCard(e)}function he(e){return ce.unlikeCard(e)}Promise.all([ce.getUserData(),ce.getInitialCards()]).catch((function(e){return console.log(e)})).then((function(e){var t=re(e,2),n=t[0],r=t[1];return ie.setUserInfo({name:n.name,about:n.about,id:n._id,avatar:n.avatar}),h.style.backgroundImage="url('".concat(ie.getUserAvatar(),"')"),[n,r]})).catch((function(e){return console.log(e)})).then((function(e){var t=re(e,2),n=(t[0],t[1]);ue.renderItems(n)})).catch((function(e){return console.log(e)}));var _e=new V({popup:"popup_type_image",popupOpenedClass:"popup_open"}),de=new q({popup:"popup_type_add-place",popupOpenedClass:"popup_open",popupForm:".popup__form_type_place"},(function(e){ae(o,"Сохранение..."),ce.addCard(e).then((function(e){ue.addItem(le(e)),de.close()})).catch((function(e){console.error("Ошибка при добавлении карточки",e)})).finally((function(e){return ae(o,"Сохранить")}))})),ye=new q({popup:"popup_type_edit-profile",popupOpenedClass:"popup_open",popupForm:".popup__form_type_profile"},(function(e){ae(r,"Сохранение..."),ce.editUserData(e).then((function(e){console.log(e),ie.setUserInfo(e),console.log(e),ye.close()})).catch((function(e){console.error("Ошибка при изменении данных о пользователе",e)})).finally((function(e){return ae(r,"Сохранить")}))})),ve=new q({popup:"popup_type_change-avatar",popupOpenedClass:"popup_open",popupForm:".popup__form_type_avatar"},(function(e){ae(i,"Сохранение..."),ce.changeAvatar(e.link).then((function(e){ie.setUserInfo(e),h.style.backgroundImage="url('".concat(ie.getUserAvatar(),"')"),ve.close()})).catch((function(e){console.error("Ошибка при изменении аватара пользователя",e)})).finally((function(e){return ae(i,"Сохранить")}))})),me=new W({popup:"popup_type_agreement",popupOpenedClass:"popup_open"},(function(e,t){ce.removeCard(t),e.remove(e,t),me.close()}));me.setEventListeners(),h.addEventListener("click",(function(){ke.toggleButtonState(),ke.removeInputError(),ve.open()})),t.addEventListener("click",(function(){p.value=ie.getUserInfo().name,f.value=ie.getUserInfo().about,ge.removeInputError(),ge.toggleButtonState(),ye.open()})),n.addEventListener("click",(function(){be.toggleButtonState(),be.removeInputError(),de.open()}));var be=new b(d,u);be.enableValidation();var ge=new b(d,a);ge.enableValidation();var ke=new b(d,c);ke.enableValidation()})();