import { FaisalLogo, FaisalLogoDark, DefaultBgImage, DarkThemeBgImage } from '$lib';

export function afterScrollDownAnimation(targets: NodeListOf<Element>, animation: string) {
	const callback = function (entries: Array<IntersectionObserverEntry>) {
		entries.forEach((entry) => {
			console.log(entry);

			if (entry.isIntersecting) {
				entry.target.classList.add(animation);
			} else {
				entry.target.classList.remove(animation);
			}
		});
	};

	const observer = new IntersectionObserver(callback);

	targets.forEach(function (target) {
		observer.observe(target);
	});
}

export function navbarScrollAnimation(navbar: Element, axisY: number = 100): void {
	window.addEventListener('scroll', () => {
		if (navbar) {
			if (window.scrollY > axisY) {
				navbar.classList.remove('hidden', 'animate-slideOutUp');
				navbar.classList.add('fixed', 'animate-slideInDown');
			}

			if (window.scrollY === 0) {
				navbar.classList.add('animate-slideOutUp');
			}
		}
	});
}

export function smoothScrollAnimation() {
	const links = document.querySelectorAll('.my-navbar ul a');

	for (const link of links) {
		link.addEventListener('click', clickHandler);
	}

	function clickHandler(event: Event) {
		event.preventDefault();

		const ele = event.currentTarget as HTMLAnchorElement;
		const href = ele.getAttribute('href');

		if (href) {
			const targetEle = document.querySelector(href);

			if (targetEle) {
				targetEle.scrollIntoView({
					behavior: 'smooth'
				});
			}
		}
	}
}

export function zoomEffect(node: HTMLDivElement, scale: number = 1.1) {
	node.style.transition = '0.8s';

	function zoomIn() {
		node.style.transform = `scale(${scale})`;
	}

	function zoomOut() {
		node.style.transform = 'scale(1)';
	}

	node.addEventListener('mouseenter', zoomIn);
	node.addEventListener('mouseleave', zoomOut);

	return {
		destroy(): void {
			node.removeEventListener('mouseenter', zoomIn);
			node.removeEventListener('mouseleave', zoomOut);
		}
	};
}

export function changeTheme() {
	navbarDarkTheme();
	headerSectionDarkTheme();
	personalInfoSectionDarkTheme();
	skillsSectionDarkTheme();
	experienceSectionDarkTheme();
	footerSectionDarkTheme();
}

const navbarDarkTheme = (addTransition: boolean = true): void => {
	const switchThemeBtn = document.querySelector('#switch-theme-btn');
	const sunIcon = document.querySelector('#sun-icon');
	const moonIcon = document.querySelector('#moon-icon');

	const navbar = document.querySelector('.my-navbar');
	const mobileMenu = document.querySelector('#mobile-menu');
	const menuBar = document.querySelector('#menu-bar');
	const navText = document.querySelectorAll('.nav-text');

	// change light -> dark | dark -> light icon.
	if (switchThemeBtn) {
		sunIcon?.classList.toggle('hidden');
		moonIcon?.classList.toggle('hidden');
	}

	if (navbar) {
		// give smooth transition.
		if (addTransition) {
			navbar.classList.add('transition-all', 'duration-300', 'ease-in-out');
		}

		if (navbar.classList.contains('bg-light')) {
			navbar.classList.remove('bg-light');
			navbar.classList.add('bg-dark');
		} else {
			navbar.classList.remove('bg-dark');
			navbar.classList.add('bg-light');
		}
	}

	if (mobileMenu) {
		if (mobileMenu.classList.contains('bg-light')) {
			mobileMenu.classList.remove('bg-light', 'border-t-gray-200');
			mobileMenu.classList.add('bg-dark', 'border-t-gray-800');
		} else {
			mobileMenu.classList.remove('bg-dark', 'border-t-gray-800');
			mobileMenu.classList.add('bg-light', 'border-t-gray-200');
		}
	}

	if (menuBar) {
		if (menuBar.classList.contains('text-gray-950')) {
			menuBar.classList.remove('text-gray-950');
			menuBar.classList.add('text-gray-50');
		} else {
			menuBar.classList.remove('text-gray-50');
			menuBar.classList.add('text-gray-950');
		}
	}

	if (navText) {
		for (const text of navText) {
			if (text.classList.contains('text-gray-950')) {
				text.classList.remove('text-gray-950');
				text.classList.add('text-gray-50');
			} else {
				text.classList.remove('text-gray-50');
				text.classList.add('text-gray-950');
			}
		}
	}
};

const headerSectionDarkTheme = (addTransition: boolean = true): void => {
	const header = document.getElementById('main-header');
	const logo = document.getElementById('logo');

	// change bg image after switch theme in header section.
	if (header && logo) {
		const currentBgImage = header.style.backgroundImage;

		// give smooth transition.
		if (addTransition) {
			header.classList.add('transition-all', 'duration-300', 'ease-in-out');
		}

		if (currentBgImage.includes(DefaultBgImage)) {
			header.style.backgroundImage = `url(${DarkThemeBgImage})`;
			logo.setAttribute('src', FaisalLogoDark);
		} else {
			header.style.backgroundImage = `url(${DefaultBgImage})`;
			logo.setAttribute('src', FaisalLogo);
		}
	}
};

const personalInfoSectionDarkTheme = (
	sectionBgColor: string = 'bg-dark',
	innerBoxBgColor: string = 'bg-[#433D8B]',
	addTransition: boolean = true
): void => {
	const personalInfo = document.querySelector('#personal-info');
	const personalInfoInnerBox = document.querySelector('#personal-info-inner-box');
	const myNameText = document.querySelector('#my-name');
	const myProfileDescText = document.querySelector('#my-profile-desc');
	const resumeLinks = document.querySelectorAll('#resume-link');

	if (personalInfo) {
		if (personalInfo.classList.contains('bg-light')) {
			personalInfo.classList.remove('bg-light');
			personalInfo.classList.add(sectionBgColor);
			personalInfo.classList.remove('border-b-gray-200');
			personalInfo.classList.add('border-b-gray-800');

			if (addTransition) {
				personalInfo.classList.add('transition-all');
				personalInfo.classList.add('duration-300');
				personalInfo.classList.add('ease-in-out');
			}
		} else {
			personalInfo.classList.remove(sectionBgColor);
			personalInfo.classList.add('bg-light');
			personalInfo.classList.remove('border-b-gray-800');
			personalInfo.classList.add('border-b-gray-200');
		}
	}

	if (personalInfoInnerBox) {
		if (personalInfoInnerBox.classList.contains('bg-light')) {
			personalInfoInnerBox.classList.remove('bg-light');
			personalInfoInnerBox.classList.add(innerBoxBgColor);

			if (addTransition) {
				personalInfoInnerBox.classList.add('transition-all');
				personalInfoInnerBox.classList.add('duration-300');
				personalInfoInnerBox.classList.add('ease-in-out');
			}
		} else {
			personalInfoInnerBox.classList.remove(innerBoxBgColor);
			personalInfoInnerBox.classList.add('bg-light');
		}
	}

	if (myNameText) {
		if (myNameText.classList.contains('text-gray-950')) {
			myNameText.classList.remove('text-gray-950');
			myNameText.classList.add('text-gray-50');
		} else {
			myNameText.classList.remove('text-gray-50');
			myNameText.classList.add('text-gray-950');
		}
	}

	if (myProfileDescText) {
		if (myProfileDescText.classList.contains('text-gray-950')) {
			myProfileDescText.classList.remove('text-gray-950');
			myProfileDescText.classList.add('text-gray-50');
		} else {
			myProfileDescText.classList.remove('text-gray-50');
			myProfileDescText.classList.add('text-gray-950');
		}
	}

	for (const link of resumeLinks) {
		if (link) {
			if (link.classList.contains('hover:text-gray-900')) {
				link.classList.remove('hover:text-gray-900');
				link.classList.add('hover:text-gray-50');
			} else {
				link.classList.remove('hover:text-gray-50');
				link.classList.add('hover:text-gray-900');
			}
		}
	}
};

const skillsSectionDarkTheme = (
	sectionBgColor: string = 'bg-dark',
	addTransition: boolean = true
): void => {
	const expertise = document.querySelector('#expertise');
	const expertiseHeadText = document.querySelector('#experise-head-text');
	const iconText = document.querySelectorAll('#icon-text');

	if (expertise) {
		if (expertise.classList.contains('bg-light')) {
			expertise.classList.remove('bg-light');
			expertise.classList.add(sectionBgColor);
			expertise.classList.remove('border-b-gray-200');
			expertise.classList.add('border-b-gray-800');

			if (addTransition) {
				expertise.classList.add('transition-all');
				expertise.classList.add('duration-300');
				expertise.classList.add('ease-in-out');
			}
		} else {
			expertise.classList.remove(sectionBgColor);
			expertise.classList.add('bg-light');
			expertise.classList.remove('border-b-gray-800');
			expertise.classList.add('border-b-gray-200');
		}
	}

	if (expertiseHeadText) {
		if (expertiseHeadText.classList.contains('text-gray-950')) {
			expertiseHeadText.classList.remove('text-gray-950');
			expertiseHeadText.classList.add('text-gray-50');
		} else {
			expertiseHeadText.classList.remove('text-gray-50');
			expertiseHeadText.classList.add('text-gray-950');
		}
	}

	if (iconText) {
		for (const text of iconText) {
			if (text.classList.contains('text-gray-950')) {
				text.classList.remove('text-gray-950');
				text.classList.add('text-gray-50');
			} else {
				text.classList.remove('text-gray-50');
				text.classList.add('text-gray-950');
			}
		}
	}
};

const experienceSectionDarkTheme = (
	sectionBgColor: string = 'bg-dark',
	addTransition: boolean = true
): void => {
	const experience = document.querySelector('#experience');
	const experienceHeadText = document.querySelector('#experience-head-text');
	const experienceText = document.querySelectorAll('#experience-text');
	const experienceDurationText = document.querySelectorAll('#experience-duration-text');

	if (experience) {
		if (experience.classList.contains('bg-light')) {
			experience.classList.remove('bg-light');
			experience.classList.add(sectionBgColor);
			experience.classList.remove('border-b-gray-200');
			experience.classList.add('border-b-gray-800');

			if (addTransition) {
				experience.classList.add('transition-all');
				experience.classList.add('duration-300');
				experience.classList.add('ease-in-out');
			}
		} else {
			experience.classList.remove(sectionBgColor);
			experience.classList.add('bg-light');
			experience.classList.remove('border-b-gray-800');
			experience.classList.add('border-b-gray-200');
		}
	}

	if (experienceHeadText) {
		if (experienceHeadText.classList.contains('text-gray-950')) {
			experienceHeadText.classList.remove('text-gray-950');
			experienceHeadText.classList.add('text-gray-50');
		} else {
			experienceHeadText.classList.remove('text-gray-50');
			experienceHeadText.classList.add('text-gray-950');
		}
	}

	if (experienceText) {
		for (const text of experienceText) {
			if (text.classList.contains('text-gray-950')) {
				text.classList.remove('text-gray-950');
				text.classList.add('text-gray-50');
			} else {
				text.classList.remove('text-gray-50');
				text.classList.add('text-gray-950');
			}
		}
	}

	if (experienceDurationText) {
		for (const text of experienceDurationText) {
			if (text.classList.contains('text-gray-950')) {
				text.classList.remove('text-gray-950');
				text.classList.add('text-gray-50');
			} else {
				text.classList.remove('text-gray-50');
				text.classList.add('text-gray-950');
			}
		}
	}
};

const footerSectionDarkTheme = (
	sectionBgColor: string = 'bg-dark',
	addTransition: boolean = true
): void => {
	const footer = document.querySelector('#footer');
	const footerHeadText = document.querySelector('#footer-head-text');

	if (footer) {
		if (footer.classList.contains('bg-light')) {
			footer.classList.remove('bg-light');
			footer.classList.add(sectionBgColor);

			if (addTransition) {
				footer.classList.add('transition-all');
				footer.classList.add('duration-300');
				footer.classList.add('ease-in-out');
			}
		} else {
			footer.classList.remove(sectionBgColor);
			footer.classList.add('bg-light');
		}
	}

	if (footerHeadText) {
		if (footerHeadText.classList.contains('text-gray-950')) {
			footerHeadText.classList.remove('text-gray-950');
			footerHeadText.classList.add('text-gray-50');
		} else {
			footerHeadText.classList.remove('text-gray-50');
			footerHeadText.classList.add('text-gray-950');
		}
	}
};

/**
 * @deprecated Is not being used anymore.
 */
export function scrollToTopAnimation(intervalId: number = 0, scrollTimeOut: number = 12): void {
	const scrollBtn = document.querySelector('.scroll-btn');

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

/**
 * @deprecated Too problematic when transitioning to dark theme.
 */
export function navBgColorTransition(axisY: number = 100, currentScreenWidth: number = 1024): void {
	const navbar = document.querySelector('.my-navbar');

	window.addEventListener('scroll', () => {
		if (navbar) {
			if (window.scrollY > axisY && window.innerWidth >= currentScreenWidth) {
				navbar.classList.add('bg-light');
				navbar.classList.add('shadow-lg');
			} else {
				navbar.classList.remove('bg-light');
				navbar.classList.remove('shadow-lg');
			}
		}
	});
}
