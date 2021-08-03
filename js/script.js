
  function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
  callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }

  testWebP(function (support) {

  if (support == true) {
  document.querySelector('body').classList.add('webp');
  }else{
  document.querySelector('body').classList.add('no-webp');
  }
  });

  
 
function ibg() {
 let ibg=document.querySelectorAll(".ibg");
 for (var i = 0; i < ibg.length; i++) {
 if(ibg[i].querySelector('img')){
 ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
 }
 }
 }
ibg();
 

  $('.search-form__icon').click(function(){
        $('.search-form').toggleClass('_active');
	
});



// BurgerMenu
  $('.icon-menu').click(function(){
        $('.icon-menu, .menu__body').toggleClass('active');
	$('body').toggleClass('lock');
});



//Slider
$(document).ready(function(){
	$('.slider-main__body').slick({
	 	arrows:true,
		dots: true,
		slidesToShow: 1,
		nextArrow:'.slider-arrow.slider-arrow_next',
		prevArrow: '.slider-arrow.slider-arrow_prev',
	//	accessibility: false,
	 	slidesToScroll: 1,
	// 	easing: 'linear',
	 	infinite: true,
    // initialSlide: 0,
     //appendArrows: $('control-main-slider'),
		// variableWidth:,
		// pauseOnDotsHover:true,
		// pauseOnHover:true,
		// pauseOnFocus:true,
		// rows:1-n,
		// touchMove:true,
		// (Sliders_connect)=>asNavFor:,
		// centerMode:false.
		// autoplay:true,
		// speed:1000,
		// autoplaySpeed: 3000,
		// adaptiveHeight: true,
		// draggable:true,
		// swipe:true,
		// mobileFirst: true;
		// responsive:[
		// {
		//  	breakpoint: 768,
		// 	settings: {
		 		
	 	// 	}
		// },
		// 	{
		// 		breakpoint: 550,
		// 		settings: {
		// 			slidesToShow:1
		// 		}
		// 	}
		// ]
	});

});
//swiper
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}
function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParents: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}
if (document.querySelector('.slider-rooms__body')) {
	new Swiper('.slider-rooms__body', {
		observer: true,
		observeParents: true,
		slidesPerView: 'auto',
		spaceBetween: 24,
		speed: 800,
		loop: true,
		watchOverflow: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		parallax: true,
		// Dotts
		pagination: {
			el: '.slider-rooms__dots',
			clickable: true,
		},
		// Arrows
		navigation: {
			nextEl: '.slider-rooms .slider-arrow_next',
			prevEl: '.slider-rooms .slider-arrow_prev',
		}
	});
}
if (document.querySelector('.slider-tips__body')) {
	new Swiper('.slider-tips__body', {
		observer: true,
		observeParents: true,
		slidesPerView: 3,
		spaceBetween: 32,
		speed: 800,
		loop: true,
		watchOverflow: true,
		// Dotts
		pagination: {
			el: '.slider-tips__dotts',
			clickable: true,
		},
		// Arrows
		navigation: {
			nextEl: '.slider-tips .slider-arrow_next',
			prevEl: '.slider-tips .slider-arrow_prev',
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1.1,
				spaceBetween: 15
			},
			// when window width is >= 768px
			768: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			// when window width is >= 992px
			992: {
				slidesPerView: 3,
				spaceBetween: 32
			}
		}
	})
}
// Spoller

$(document).on('click', '.menu-footer__title_1', function (e) {
	if (innerWidth < 769) {
		e.preventDefault();
		$('.menu-footer__list_1,.footer-arrow-1').toggleClass('active');
		$(this).parent().find('.menu-footer__list_1').first().slideToggle(300);
	}
	
});
$(document).on('click', '.menu-footer__title_2', function (e) {
	if (innerWidth < 769) {
		e.preventDefault();
		$('.menu-footer__list_2,.footer-arrow-2').toggleClass('active');
		$(this).parent().find('.menu-footer__list_2').first().slideToggle(300);
	}
	
});
$(document).on('click', '.menu-footer__title_3', function (e) {
	if (innerWidth < 769) {
		e.preventDefault();
		$('.menu-footer__list_3,.footer-arrow-3').toggleClass('active');
		$(this).parent().find('.menu-footer__list_3').first().slideToggle(300);
	}
	
});

// Mobile-check
var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
function isIE() {
	ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
if (isIE()) {
	document.querySelector('html').classList.add('ie');
}
if (isMobile.any()) {
	document.querySelector('html').classList.add('_touch');
}
// Scroll-class

window.onload = function () {
	document.addEventListener("click", documentActions);
	
	const headerElement = document.querySelector('.header');
	const callback = function (entries, observer) {
		if (entries[0].isIntersecting) {
			headerElement.classList.remove('_scroll');
		} else {
			headerElement.classList.add('_scroll');
		}
	};
	const headerObserver = new IntersectionObserver(callback);
	headerObserver.observe(headerElement);


	function documentActions(e) {
		const targetElement = e.target;
		if (targetElement.classList.contains('products__more')) {
			getProducts(targetElement);
			e.preventDefault();
		}
		if (targetElement.classList.contains('actions-product__button')) {
			const productId = targetElement.closest('.item-product').dataset.pid;
			addToCart(targetElement, productId);
			e.preventDefault();
		}

		if (targetElement.classList.contains('cart-header__icon') || targetElement.closest('.cart-header__icon')) {
			if (document.querySelector('.cart-list').children.length > 0) {
				document.querySelector('.cart-header').classList.toggle('_active');
			}
			e.preventDefault();
		} else if (!targetElement.closest('.cart-header') && !targetElement.classList.contains('actions-product__button')) {
			document.querySelector('.cart-header').classList.remove('_active');
		}

		if (targetElement.classList.contains('cart-list__delete')) {
			const productId = targetElement.closest('.cart-list__item').dataset.cartPid;
			updateCart(targetElement, productId, false);
			e.preventDefault();
		}
	}

	// Load More Products
	async function getProducts(button) {
		if (!button.classList.contains('_hold')) {
			button.classList.add('_hold');
			const file = "json/products.json";
			let response = await fetch(file, {
				method: "GET"
			});
			if (response.ok) {
				let result = await response.json();
				loadProducts(result);
				button.classList.remove('_hold');
				button.remove();
			} else {
				alert("Ошибка");
			}
		}
	}

	function loadProducts(data) {
		const productsItems = document.querySelector('.products__items');

		data.products.forEach(item => {
			const productId = item.id;
			const productUrl = item.url;
			const productImage = item.image;
			const productTitle = item.title;
			const productText = item.text;
			const productPrice = item.price;
			const productOldPrice = item.priceOld;
			const productShareUrl = item.shareUrl;
			const productLikeUrl = item.likeUrl;
			const productLabels = item.labels;

			let productTemplateStart = `<article data-pid="${productId}" class="products__item item-product">`;
			let productTemplateEnd = `</article>`;

			let productTemplateLabels = '';
			if (productLabels) {
				let productTemplateLabelsStart = `<div class="item-product__labels">`;
				let productTemplateLabelsEnd = `</div>`;
				let productTemplateLabelsContent = '';

				productLabels.forEach(labelItem => {
					productTemplateLabelsContent += `<div class="item-product__label item-product__label_${labelItem.type}">${labelItem.value}</div>`;
				});

				productTemplateLabels += productTemplateLabelsStart;
				productTemplateLabels += productTemplateLabelsContent;
				productTemplateLabels += productTemplateLabelsEnd;
			}

			let productTemplateImage = `
		<a href="${productUrl}" class="item-product__image ibg">
			<img src="img/products/${productImage}" alt="${productTitle}">
		</a>
	`;

			let productTemplateBodyStart = `<div class="item-product__body">`;
			let productTemplateBodyEnd = `</div>`;

			let productTemplateContent = `
		<div class="item-product__content">
			<h3 class="item-product__title">${productTitle}</h3>
			<div class="item-product__text">${productText}</div>
		</div>
	`;

			let productTemplatePrices = '';
			let productTemplatePricesStart = `<div class="item-product__prices">`;
			let productTemplatePricesCurrent = `<div class="item-product__price">Rp ${productPrice}</div>`;
			let productTemplatePricesOld = `<div class="item-product__price item-product__price_old">Rp ${productOldPrice}</div>`;
			let productTemplatePricesEnd = `</div>`;

			productTemplatePrices = productTemplatePricesStart;
			productTemplatePrices += productTemplatePricesCurrent;
			if (productOldPrice) {
				productTemplatePrices += productTemplatePricesOld;
			}
			productTemplatePrices += productTemplatePricesEnd;

			let productTemplateActions = `
		<div class="item-product__actions actions-product">
			<div class="actions-product__body">
				<a href="" class="actions-product__button btn_white">Add to cart</a>
				<a href="${productShareUrl}" class="actions-product__link"><img src="img/iconsfont/share-black.svg" alt="">Share</a>
				<a href="${productLikeUrl}" class="actions-product__link"><img src="img/iconsfont/1200px-Ei-heart.svg.svg" alt="">Like</a>
			</div>
		</div>
	`;

			let productTemplateBody = '';
			productTemplateBody += productTemplateBodyStart;
			productTemplateBody += productTemplateContent;
			productTemplateBody += productTemplatePrices;
			productTemplateBody += productTemplateActions;
			productTemplateBody += productTemplateBodyEnd;

			let productTemplate = '';
			productTemplate += productTemplateStart;
			productTemplate += productTemplateLabels;
			productTemplate += productTemplateImage;
			productTemplate += productTemplateBody;
			productTemplate += productTemplateEnd;

			productsItems.insertAdjacentHTML('beforeend', productTemplate);

		});
	}
	// AddToCart
	function addToCart(productButton, productId) {
		if (!productButton.classList.contains('_hold')) {
			productButton.classList.add('_hold');
			productButton.classList.add('_fly');

			const cart = document.querySelector('.cart-header__icon');
			const product = document.querySelector(`[data-pid="${productId}"]`);
			const productImage = product.querySelector('.item-product__image');

			const productImageFly = productImage.cloneNode(true);

			const productImageFlyWidth = productImage.offsetWidth;
			const productImageFlyHeight = productImage.offsetHeight;
			const productImageFlyTop = productImage.getBoundingClientRect().top;
			const productImageFlyLeft = productImage.getBoundingClientRect().left;

			productImageFly.setAttribute('class', '_flyImage');
			productImageFly.style.cssText =
				`
			left: ${productImageFlyLeft}px;
			top: ${productImageFlyTop}px;
			width: ${productImageFlyWidth}px;
			height: ${productImageFlyHeight}px;
		`;

			document.body.append(productImageFly);

			const cartFlyLeft = cart.getBoundingClientRect().left;
			const cartFlyTop = cart.getBoundingClientRect().top;

			productImageFly.style.cssText =
				`
			left: ${cartFlyLeft}px;
			top: ${cartFlyTop}px;
			width: 0px;
			height: 0px;
			opacity:0;
		`;

			productImageFly.addEventListener('transitionend', function () {
				if (productButton.classList.contains('_fly')) {
					productImageFly.remove();
					updateCart(productButton, productId);
					productButton.classList.remove('_fly');
				}
			});
		}
	}

	function updateCart(productButton, productId, productAdd = true) {
		const cart = document.querySelector('.cart-header');
		const cartIcon = cart.querySelector('.cart-header__icon');
		const cartQuantity = cartIcon.querySelector('span');
		const cartProduct = document.querySelector(`[data-cart-pid="${productId}"]`);
		const cartList = document.querySelector('.cart-list');

		//Добавляем
		if (productAdd) {
			if (cartQuantity) {
				cartQuantity.innerHTML = ++cartQuantity.innerHTML;
			} else {
				cartIcon.insertAdjacentHTML('beforeend', `<span>1</span>`);
			}
			if (!cartProduct) {
				const product = document.querySelector(`[data-pid="${productId}"]`);
				const cartProductImage = product.querySelector('.item-product__image').innerHTML;
				const cartProductTitle = product.querySelector('.item-product__title').innerHTML;
				const cartProductContent = `
			<a href="" class="cart-list__image ibg">${cartProductImage}</a>
			<div class="cart-list__body">
				<a href="" class="cart-list__title">${cartProductTitle}</a>
				<div class="cart-list__quantity">Quantity: <span>1</span></div>
				<a href="" class="cart-list__delete">Delete</a>
			</div>`;
				cartList.insertAdjacentHTML('beforeend', `<li data-cart-pid="${productId}" class="cart-list__item">${cartProductContent}</li>`);
			} else {
				const cartProductQuantity = cartProduct.querySelector('.cart-list__quantity span');
				cartProductQuantity.innerHTML = ++cartProductQuantity.innerHTML;
			}

			// После всех действий
			productButton.classList.remove('_hold');
		} else {
			const cartProductQuantity = cartProduct.querySelector('.cart-list__quantity span');
			cartProductQuantity.innerHTML = --cartProductQuantity.innerHTML;
			if (!parseInt(cartProductQuantity.innerHTML)) {
				cartProduct.remove();
			}

			const cartQuantityValue = --cartQuantity.innerHTML;

			if (cartQuantityValue) {
				cartQuantity.innerHTML = cartQuantityValue;
			} else {
				cartQuantity.remove();
				cart.classList.remove('_active');
			}
		}
	}
	const furniture = document.querySelector('.furniture__body');
	if (furniture && !isMobile.any()) {
		const furnitureItems = document.querySelector('.furniture__items');
		const furnitureColumn = document.querySelectorAll('.furniture__column');

		// Скорость анимации
		const speed = furniture.dataset.speed;

		// Объявление переменных
		let positionX = 0;
		let coordXprocent = 0;

		function setMouseGalleryStyle() {
			let furnitureItemsWidth = 0;
			furnitureColumn.forEach(element => {
				furnitureItemsWidth += element.offsetWidth;
			});

			const furnitureDifferent = furnitureItemsWidth - furniture.offsetWidth;
			const distX = Math.floor(coordXprocent - positionX);

			positionX = positionX + (distX * speed);
			let position = furnitureDifferent / 200 * positionX;

			furnitureItems.style.cssText = `transform: translate3d(${-position}px,0,0);`;

			if (Math.abs(distX) > 0) {
				requestAnimationFrame(setMouseGalleryStyle);
			} else {
				furniture.classList.remove('_init');
			}
		}
		furniture.addEventListener("mousemove", function (e) {
			// Получение ширины
			const furnitureWidth = furniture.offsetWidth;

			// Ноль по середине
			const coordX = e.pageX - furnitureWidth / 2;

			// Получаем проценты
			coordXprocent = coordX / furnitureWidth * 200;

			if (!furniture.classList.contains('_init')) {
				requestAnimationFrame(setMouseGalleryStyle);
				furniture.classList.add('_init');
			}
		});
	}
	
}

