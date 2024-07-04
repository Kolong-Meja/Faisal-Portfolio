import { FaisalLogo, FaisalLogoDark, DefaultBgImage, DarkThemeBgImage } from '$lib';

export function scrollToTopAnimation(intervalId: number = 0, scrollTimeOut: number = 12.5): void {
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

/**
 *
 * @deprecated Too problematic when transitioning to dark theme.
 */
export function navBgColorTransition(axisY: number = 100, currentScreenWidth: number = 1024): void {
	const navbar = document.querySelector('.my-navbar');

	window.addEventListener('scroll', () => {
		if (navbar) {
			if (window.scrollY > axisY && window.innerWidth >= currentScreenWidth) {
				navbar.classList.add('bg-gray-50');
				navbar.classList.add('shadow-lg');
			} else {
				navbar.classList.remove('bg-gray-50');
				navbar.classList.remove('shadow-lg');
			}
		}
	});
}

export function changeThemeToggle() {
	// window.document.body.classList.toggle('dark-theme');

	const switchThemeBtn = document.querySelector('#switch-theme-btn');
	const sunIcon = document.querySelector('#sun-icon');
	const moonIcon = document.querySelector('#moon-icon');

	const navText = document.querySelectorAll('.nav-text');

	// change light -> dark | dark -> light icon.
	if (switchThemeBtn) {
		sunIcon?.classList.toggle('hidden');
		moonIcon?.classList.toggle('hidden');
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

	headerSectionDarkTheme();
	personalInfoSectionDarkTheme();
	skillsSectionDarkTheme();
	experienceSectionDarkTheme();
	footerSectionDarkTheme();
}

const headerSectionDarkTheme = (addTransition: boolean = true, addLogo: boolean = true): void => {
	const header = document.getElementById('main-header');
	const logo = document.getElementById('logo');

	// change bg image after switch theme in header section.
	if (header) {
		const currentBgImage = header.style.backgroundImage;

		// give smooth transition.
		if (addTransition) {
			header.classList.add('transition-all');
			header.classList.add('duration-500');
			header.classList.add('ease-in-out');
		}

		if (currentBgImage.includes(DefaultBgImage)) {
			header.style.backgroundImage = `url(${DarkThemeBgImage})`;
		} else {
			header.style.backgroundImage = `url(${DefaultBgImage})`;
		}
	}

	if (logo && addLogo) {
		const currentSrcImage = logo.getAttribute('src');

		if (currentSrcImage === FaisalLogo) {
			logo.setAttribute('src', FaisalLogoDark);
		} else {
			logo.setAttribute('src', FaisalLogo);
		}
	}
};

const personalInfoSectionDarkTheme = (
	sectionBgColor: string = 'bg-[#070F2B]',
	innerBoxBgColor: string = 'bg-[#9290C3]',
	addTransition: boolean = true
): void => {
	const personalInfo = document.querySelector('#personal-info');
	const personalInfoInnerBox = document.querySelector('#personal-info-inner-box');
	const myNameText = document.querySelector('#my-name');
	const myProfileDescText = document.querySelector('#my-profile-desc');

	if (personalInfo) {
		if (personalInfo.classList.contains('bg-gray-50')) {
			personalInfo.classList.remove('bg-gray-50');
			personalInfo.classList.add(sectionBgColor);

			if (addTransition) {
				personalInfo.classList.add('transition-all');
				personalInfo.classList.add('duration-500');
				personalInfo.classList.add('ease-in-out');
			}
		} else {
			personalInfo.classList.remove(sectionBgColor);
			personalInfo.classList.add('bg-gray-50');
		}
	}

	if (personalInfoInnerBox) {
		if (personalInfoInnerBox.classList.contains('bg-yellow-50')) {
			personalInfoInnerBox.classList.remove('bg-yellow-50');
			personalInfoInnerBox.classList.add(innerBoxBgColor);

			if (addTransition) {
				personalInfoInnerBox.classList.add('transition-all');
				personalInfoInnerBox.classList.add('duration-500');
				personalInfoInnerBox.classList.add('ease-in-out');
			}
		} else {
			personalInfoInnerBox.classList.remove(innerBoxBgColor);
			personalInfoInnerBox.classList.add('bg-yellow-50');
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
};

const skillsSectionDarkTheme = (
	sectionBgColor: string = 'bg-[#070F2B]',
	addTransition: boolean = true
): void => {
	const expertise = document.querySelector('#expertise');
	const expertiseHeadText = document.querySelector('#experise-head-text');
	const iconText = document.querySelectorAll('#icon-text');

	if (expertise) {
		if (expertise.classList.contains('bg-gray-50')) {
			expertise.classList.remove('bg-gray-50');
			expertise.classList.add(sectionBgColor);

			if (addTransition) {
				expertise.classList.add('transition-all');
				expertise.classList.add('duration-500');
				expertise.classList.add('ease-in-out');
			}
		} else {
			expertise.classList.remove(sectionBgColor);
			expertise.classList.add('bg-gray-50');
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
	sectionBgColor: string = 'bg-[#070F2B]',
	addTransition: boolean = true
): void => {
	const experience = document.querySelector('#experience');
	const experienceHeadText = document.querySelector('#experience-head-text');
	const experienceText = document.querySelectorAll('#experience-text');
	const experienceDurationText = document.querySelectorAll('#experience-duration-text');

	if (experience) {
		if (experience.classList.contains('bg-gray-50')) {
			experience.classList.remove('bg-gray-50');
			experience.classList.add(sectionBgColor);

			if (addTransition) {
				experience.classList.add('transition-all');
				experience.classList.add('duration-500');
				experience.classList.add('ease-in-out');
			}
		} else {
			experience.classList.remove(sectionBgColor);
			experience.classList.add('bg-gray-50');
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
	sectionBgColor: string = 'bg-[#070F2B]',
	addTransition: boolean = true
): void => {
	const footer = document.querySelector('#footer');
	const footerHeadText = document.querySelector('#footer-head-text');

	if (footer) {
		if (footer.classList.contains('bg-gray-50')) {
			footer.classList.remove('bg-gray-50');
			footer.classList.add(sectionBgColor);

			if (addTransition) {
				footer.classList.add('transition-all');
				footer.classList.add('duration-500');
				footer.classList.add('ease-in-out');
			}
		} else {
			footer.classList.remove(sectionBgColor);
			footer.classList.add('bg-gray-50');
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
