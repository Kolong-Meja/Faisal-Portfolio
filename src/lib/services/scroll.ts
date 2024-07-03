export function scrollAnimation(
	intervalId: number = 0, 
	scrollTimeOut: number = 12.5
): void {
	const scrollBtn = document.querySelector('.scrollBtn');

	function scrollStep() {
		if (window.scrollY === 0) {
			clearInterval(intervalId);
		}

		window.scroll(0, window.scrollY - 50);
	}

	function scrollToTop() {
		intervalId = setInterval(scrollStep, scrollTimeOut);
	}

	scrollBtn?.addEventListener('click', scrollToTop);
}

export function navBgColorTransition(
	axisY: number = 450, 
	currentScreenWidth: number = 1024
): void {
	const navbar = document.querySelector('.my-navbar');

	window.addEventListener('scroll', () => {
		if (window.scrollY > axisY && window.innerWidth >= currentScreenWidth) {
			navbar?.classList.add('bg-gray-50');
			navbar?.classList.add('shadow-md');
		} else {
			navbar?.classList.remove('bg-gray-50');
			navbar?.classList.remove('shadow-md');
		}
	});
}

export function smoothScrollAnimation() {
	const links = document.querySelectorAll('.my-navbar ul a');

	for (const link of links) {
		link.addEventListener("click", clickHandler);
	}

	function clickHandler(event: Event) {
		event.preventDefault();

		const ele = event.currentTarget as HTMLAnchorElement
		const href = ele.getAttribute("href");

		if (href) {
			const targetEle = document.querySelector(href);

			if (targetEle) {
				targetEle.scrollIntoView({
					behavior: "smooth"
				});
			}
		}
	}
}
