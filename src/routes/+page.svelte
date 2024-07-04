<script>
	// svelte tools
	import { Popover } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import {
		scrollToTopAnimation,
		navBgColorTransition,
		smoothScrollAnimation,
		zoomEffect,
		changeThemeToggle,
		LaravelLogo,
		GoLogo,
		MySQLLogo,
		FastAPILogo,
		SvelteLogo,
		CitiasiaLogo,
		MTGLogo,
		FaisalLogo,
		FourthPaint,
		FifthPaint,
		SixthPaint,
		SeventhPaint,
		EightPaint,
		NinthPaint,
		DefaultBgImage,
	} from '$lib/index';

	// components
	import FloatButton from '$lib/components/FloatButton.svelte';

	// additional dependencies
	import anime from 'animejs/lib/anime.min';

	onMount(() => {
		scrollToTopAnimation();
		smoothScrollAnimation();

		let vueIconAnimation = anime({
			targets: '.vueIcon',
			translateY: -8,
			direction: 'alternate',
			loop: true,
			delay: 50,
			easing: 'easeInOutQuad',
			autoplay: false
		});

		let ionicIconAnimation = anime({
			targets: '.ionicIcon',
			translateY: -8,
			direction: 'alternate',
			loop: true,
			easing: 'easeInOutQuad',
			delay: 75,
			autoplay: false
		});

		let javascriptIconAnimation = anime({
			targets: '.javascriptIcon',
			translateY: -8,
			direction: 'alternate',
			loop: true,
			easing: 'easeInOutQuad',
			delay: 25,
			autoplay: false
		});

		let javaIconAnimation = anime({
			targets: '.javaIcon',
			translateY: -8,
			direction: 'alternate',
			loop: true,
			easing: 'easeInOutQuad',
			delay: 100,
			autoplay: false
		});

		let pythonIconAnimation = anime({
			targets: '.pythonIcon',
			translateY: -8,
			direction: 'alternate',
			loop: true,
			easing: 'easeInOutQuad',
			delay: 150,
			autoplay: false
		});

		let nestJSIconAnimation = anime({
			targets: '.nestJSIcon',
			translateY: -8,
			direction: 'alternate',
			loop: true,
			easing: 'easeInOutQuad',
			delay: 100,
			autoplay: false
		});

		let springIconAnimation = anime({
			targets: '.springIcon',
			translateY: -8,
			direction: 'alternate',
			loop: true,
			easing: 'easeInOutQuad',
			delay: 25,
			autoplay: false
		});

		let typescriptIconAnimation = anime({
			targets: '.typescriptIcon',
			translateY: -8,
			direction: 'alternate',
			loop: true,
			easing: 'easeInOutQuad',
			delay: 75,
			autoplay: false
		});

		let laravelIconAnimation = anime({
			targets: '.laravelIcon',
			translateY: -8,
			direction: 'alternate',
			loop: true,
			easing: 'easeInOutQuad',
			delay: 125,
			autoplay: false
		});

		let golangIconAnimation = anime({
			targets: '.golangIcon',
			translateY: -8,
			direction: 'alternate',
			loop: true,
			easing: 'easeInOutQuad',
			delay: 150,
			autoplay: false
		});

		let postgreSQLIconAnimation = anime({
			targets: '.postgreSQLIcon',
			translateY: -8,
			direction: 'alternate',
			loop: true,
			easing: 'easeInOutQuad',
			delay: 75,
			autoplay: false
		});

		let MySQLIconAnimation = anime({
			targets: '.mySQLIcon',
			translateY: -8,
			direction: 'alternate',
			loop: true,
			easing: 'easeInOutQuad',
			delay: 125,
			autoplay: false
		});

		let dockerIconAnimation = anime({
			targets: '.dockerIcon',
			translateY: -8,
			direction: 'alternate',
			loop: true,
			easing: 'easeInOutQuad',
			delay: 50,
			autoplay: false
		});

		let FastAPIIconAnimation = anime({
			targets: '.fastAPIIcon',
			translateY: -8,
			direction: 'alternate',
			loop: true,
			easing: 'easeInOutQuad',
			delay: 150,
			autoplay: false
		});

		let tailwindCSSIconAnimation = anime({
			targets: '.tailwindIcon',
			translateY: -8,
			direction: 'alternate',
			loop: true,
			easing: 'easeInOutQuad',
			delay: 25,
			autoplay: false
		});

		let gitIconAnimation = anime({
			targets: '.gitIcon',
			translateY: -8,
			direction: 'alternate',
			loop: true,
			easing: 'easeInOutQuad',
			delay: 100,
			autoplay: false
		});

		let svelteIconAnimation = anime({
			targets: '.svelteIcon',
			translateY: -8,
			direction: 'alternate',
			loop: true,
			easing: 'easeInOutQuad',
			delay: 50,
			autoplay: false
		});

		let cameraPaintAnimation = anime({
			targets: '.cameraPicture',
			translateY: -6,
			direction: 'alternate',
			loop: true,
			easing: 'easeInOutQuad',
			delay: 0,
			autoplay: false
		});

		let flowerPaintAnimation = anime({
			targets: '.flowerPicture',
			translateY: -6,
			direction: 'alternate',
			loop: true,
			easing: 'easeInOutQuad',
			delay: 0,
			autoplay: false
		});

		/**
		 *
		 * @param {number} time
		 *
		 * @returns {void} nothing
		 */
		function loop(time) {
			vueIconAnimation.tick(time);
			ionicIconAnimation.tick(time);
			javascriptIconAnimation.tick(time);
			javaIconAnimation.tick(time);
			pythonIconAnimation.tick(time);
			nestJSIconAnimation.tick(time);
			springIconAnimation.tick(time);
			typescriptIconAnimation.tick(time);
			laravelIconAnimation.tick(time);
			golangIconAnimation.tick(time);
			postgreSQLIconAnimation.tick(time);
			MySQLIconAnimation.tick(time);
			dockerIconAnimation.tick(time);
			FastAPIIconAnimation.tick(time);
			tailwindCSSIconAnimation.tick(time);
			gitIconAnimation.tick(time);
			svelteIconAnimation.tick(time);
			cameraPaintAnimation.tick(time);
			flowerPaintAnimation.tick(time);

			requestAnimationFrame(loop);
		}

		requestAnimationFrame(loop);
	});
</script>

<nav
	class="my-navbar absolute bg-transparent top-0 z-10 w-full transition-all duration-150 ease-in-out lg:bg-gray-600/[.06]"
>
	<div class="flex justify-end lg:justify-center p-5">
		<ul class="flex space-x-6">
			<button on:click={changeThemeToggle} id="switch-theme-btn" class="bg-blue-100/50 p-2 rounded-full lg:rounded-xl">
				<svg
					id="sun-icon"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					class="bi bi-sun-fill w-5 h-5"
					viewBox="0 0 16 16"
				>
					<path
						d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"
					/>
				</svg>
				<svg
					id="moon-icon"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					class="bi bi-moon-stars-fill hidden w-5 h-5 text-gray-50"
					viewBox="0 0 16 16"
				>
					<path
						d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"
					/>
					<path
						d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"
					/>
				</svg>
			</button>
			<li class="hidden list-none lg:block">
				<a href={'#personal-info'} class="link">
					<span class="nav-text font-dancing-script text-lg text-gray-950">Personal Info</span>
				</a>
			</li>
			<li class="hidden list-none lg:block">
				<a href={'#expertise'} class="link">
					<span class="nav-text font-dancing-script text-lg text-gray-950"
						>Strength & Expertise</span
					>
				</a>
			</li>
			<li class="hidden list-none lg:block">
				<a href={'#experience'} class="link">
					<span class="nav-text font-dancing-script text-lg text-gray-950"
						>Professional Experience</span
					>
				</a>
			</li>
		</ul>
	</div>
</nav>

<FloatButton bgColor="light" />

<header
	id="main-header"
	class="bg-cover bg-fixed bg-center font-roboto"
	style="background-image: url({DefaultBgImage});"
>
	<div class="container mx-auto">
		<div class="py-10 px-5 max-w-screen-xl lg:py-20 lg:px-10">
			<div class="flex flex-col items-center">
				<img
					id="logo"
					src={FaisalLogo}
					alt="Faisal Logo"
					class="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]"
				/>
			</div>
		</div>
	</div>
</header>

<section id="personal-info" class="bg-gray-50 font-roboto">
	<div class="container mx-auto">
		<div class="py-8 px-4 max-w-screen-xl lg:py-56 lg:px-28">
			<div
				id="personal-info-inner-box"
				class="flex flex-col p-6 lg:bg-yellow-50 lg:rounded-tl-2xl lg:rounded-br-2xl lg:p-12"
			>
				<img
					src={FourthPaint}
					alt="Paint Illustration"
					class="hidden absolute h-64 w-40 right-16 -bottom-96 -rotate-12 xl:block"
				/>
				<h1
					id="my-name"
					class="text-5xl text-wrap font-bold text-left tracking-normal text-gray-950 lg:text-8xl"
				>
					Faisal Ramadhan
				</h1>
				<p id="my-profile-desc" class="mt-8 text-md font-normal text-left text-gray-950 lg:text-xl">
					I am an Entry Level <a
						id="first-popover"
						href={'#'}
						class="underline underline-offset-4 font-semibold"
					>
						Fullstack Developer</a
					> with a strong focus on achieving results, have leading expertise in analyzing, designing
					and developing applications and websites and mastering REST API systems. I have demonstrated
					extraordinary programming skills when participating in an internship program at one of the
					well- known companies in the East Jakarta area. I have a proven track record in goods distribution
					application development, optimizing REST API performance, and database management.
				</p>
				<img
					src={FifthPaint}
					alt="Paint Illustration"
					class="hidden absolute h-48 w-64 left-16 -bottom-[700px] xl:block"
				/>
			</div>
			<Popover
				triggeredBy="#first-popover"
				class="w-72 text-sm font-normal text-gray-950 bg-gray-50 border-none shadow-lg shadow-gray-400/50 lg:w-96 lg:text-md"
				placement="bottom-start"
				transition={fade}
			>
				<div class="p-3 space-y-2">
					<h3 class="font-bold text-gray-950">Fullstack Developer</h3>
					A full-stack developer is a developer or engineer who can build both the front end and the
					back end of a website. The front end (the parts of a website a user sees and interacts with)
					and the back end (the behind-the-scenes data storage and processing) require different skill
					sets. Since full-stack developers are involved with all aspects of the development process,
					they must have expertise in both.
				</div>
			</Popover>
		</div>
	</div>
</section>

<section id="expertise" class="bg-gray-50 font-roboto">
	<div class="container mx-auto">
		<div class="py-8 px-4 max-w-screen-xl lg:py-16 lg:px-8">
			<img
				src={EightPaint}
				alt="Eight Paint"
				class="cameraPicture hidden absolute w-48 h-48 right-16 -bottom-[870px] xl:block"
			/>
			<div class="flex flex-col">
				<p
					id="experise-head-text"
					class="text-2xl text-gray-950 lg:text-4xl font-semibold text-center"
				>
					Strength and Expertise
				</p>
				<div
					class="grid grid-cols-3 gap-2 gap-y-4 mt-8 justify-items-center lg:grid-cols-5 lg:gap-3 lg:gap-y-6 lg:mt-10"
				>
					<div class="flex flex-col space-y-2 items-center">
						<svg
							class="vueIcon w-10 h-10 lg:h-12 lg:w-12"
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							viewBox="0 0 48 48"
						>
							<polygon fill="#81c784" points="23.987,17 18.734,8 2.974,8 23.987,44 45,8 29.24,8"
							></polygon><polygon
								fill="#455a64"
								points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8"
							></polygon>
						</svg>
						<p
							id="icon-text"
							class="text-md text-gray-950 font-normal text-center text-wrap lg:text-lg"
						>
							Vue.js
						</p>
					</div>
					<div class="flex flex-col space-y-2 items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							viewBox="0 0 48 48"
							class="ionicIcon w-10 h-10 lg:h-12 lg:w-12"
						>
							<circle cx="24" cy="24" r="9" fill="#448aff"></circle><circle
								cx="37"
								cy="11"
								r="4"
								fill="#448aff"
							></circle><path
								fill="#448aff"
								d="M41.706,14.715c-0.842,1.064-2.034,1.836-3.405,2.139C39.379,19.007,40,21.429,40,24	c0,8.837-7.163,16-16,16S8,32.837,8,24S15.163,8,24,8c2.571,0,4.993,0.621,7.145,1.699c0.303-1.371,1.075-2.564,2.139-3.405	C30.509,4.835,27.354,4,24,4C12.954,4,4,12.954,4,24c0,11.046,8.954,20,20,20s20-8.954,20-20C44,20.646,43.165,17.491,41.706,14.715	z"
							></path>
						</svg>
						<p id="icon-text" class="text-md text-gray-950 font-normal text-center lg:text-lg">
							Ionic
						</p>
					</div>
					<div class="flex flex-col space-y-2 items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							viewBox="0 0 48 48"
							class="javascriptIcon w-10 h-10 lg:h-12 lg:w-12"
						>
							<path fill="#f7df1e" d="M6,42V6h36v36H6z"></path><path
								fill="#000001"
								d="M29.538,32.947c0.692,1.124,1.444,2.201,3.037,2.201c1.338,0,2.04-0.665,2.04-1.585 c0-1.101-0.726-1.492-2.198-2.133l-0.807-0.344c-2.329-0.988-3.878-2.226-3.878-4.841c0-2.41,1.845-4.244,4.728-4.244 c2.053,0,3.528,0.711,4.592,2.573l-2.514,1.607c-0.553-0.988-1.151-1.377-2.078-1.377c-0.946,0-1.545,0.597-1.545,1.377 c0,0.964,0.6,1.354,1.985,1.951l0.807,0.344C36.452,29.645,38,30.839,38,33.523C38,36.415,35.716,38,32.65,38 c-2.999,0-4.702-1.505-5.65-3.368L29.538,32.947z M17.952,33.029c0.506,0.906,1.275,1.603,2.381,1.603 c1.058,0,1.667-0.418,1.667-2.043V22h3.333v11.101c0,3.367-1.953,4.899-4.805,4.899c-2.577,0-4.437-1.746-5.195-3.368 L17.952,33.029z"
							></path>
						</svg>
						<p id="icon-text" class="text-md text-gray-950 font-normal text-center lg:text-lg">
							Javascript
						</p>
					</div>
					<div class="flex flex-col space-y-2 items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							viewBox="0 0 48 48"
							class="javaIcon w-10 h-10 lg:h-12 lg:w-12"
						>
							<path
								fill="#F44336"
								d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"
							></path><path
								fill="#F44336"
								d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"
							></path><g
								><path
									fill="#1565C0"
									d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"
								></path><path
									fill="#1565C0"
									d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"
								></path><path
									fill="#1565C0"
									d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"
								></path><path
									fill="#1565C0"
									d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"
								></path><path
									fill="#1565C0"
									d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"
								></path></g
							>
						</svg>
						<p id="icon-text" class="text-md text-gray-950 font-normal text-center lg:text-lg">
							Java
						</p>
					</div>
					<div class="flex flex-col space-y-2 items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							viewBox="0 0 48 48"
							class="pythonIcon w-10 h-10 lg:h-12 lg:w-12"
						>
							<path
								fill="#0277BD"
								d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"
							></path><path
								fill="#FFC107"
								d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"
							></path>
						</svg>
						<p id="icon-text" class="text-md text-gray-950 font-normal text-center lg:text-lg">
							Python
						</p>
					</div>
					<div class="flex flex-col space-y-2 items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							viewBox="0 0 48 48"
							class="nestJSIcon w-10 h-10 lg:h-12 lg:w-12"
						>
							<path
								fill="#f50057"
								d="M24.5,32.88c0,0-0.01-0.04-0.02-0.12C24.5,32.84,24.5,32.88,24.5,32.88z"
							></path><path
								fill="#f50057"
								d="M27.375,8.625c0,0-0.375-1.375,0.125-2.5s0.5-1.875-0.5-3c2-0.125,2.75,1.25,2.75,1.25l0.025,0.159 c0.118,0.766-0.278,1.494-0.946,1.888C28.219,6.781,27.563,7.437,27.375,8.625z"
							></path><path
								fill="#f50057"
								d="M41.63,36.24c0.02-0.21,0.34-3.04-0.38-4.36c-1.5,4.24-3,8.12-7.37,10.87 c0.62-1.25,1.62-3.25,2.62-6.25c-3,4-9,8-13.5,8.25c3.04-1.68,4.75-3.84,5.5-5.25c0,0-1.75,0.5-3.88,0.75 c2.88-1.75,4.88-4.87,3.88-9.75c-2,6.25-4.75,8.25-8.38,8.62c-3.62,0.38-6.87-1.5-6.87-1.5l1.25-0.12c0,0-3.25-2.5-2.12-5.75 c0.05-0.16,0.11-0.31,0.18-0.45c0.82-1.82,3.61-0.9,3.32,1.07v0.01c0,0,0.87,2.37,3.24,1.74c0.76-1.24,1.26-2.5,1.26-2.5l0.37,1.63 c0,0,1.75-0.75,1.75-2.13c1.5,0.57,1.88,1.28,1.97,1.59c-0.26-1.4-2.52-11.03-14.49-10.89l-2.09,1.94 c-0.14,0.13-0.36,0.02-0.34-0.16L7.71,22l0.14-0.14c-0.04,0.01-0.09,0-0.13,0L7.71,22l-0.82,0.76c-0.14,0.13-0.36,0.02-0.34-0.16 l0.1-1.02c-1.74-0.74-1.9-2.7-1.9-2.7S2.58,18.27,3.5,15.5C4,14,5.2,13.85,5.71,13.97c0.65,0.15,1.32,0.16,1.94-0.09 c0.9-0.36,2.05-1.05,2.85-2.38C12,9,14.25,8,19.12,8c6.45,0,9.05,1.98,9.35,2.22c-0.18-0.21-1.27-1.66,1.03-3.84 c2.27-2.16,1.86-2.67,1.77-2.75c0.34,0.1,4.75,1.6,5.23,7.37c0.5,6-6.5,7.25-6.5,7.25s9,1.75,9.12-6.75 c1.76,1,5.38,4.75,5.88,12.88C45.49,32.26,41.84,36.03,41.63,36.24z"
							></path><path
								fill="#f50057"
								d="M7.85,21.86L7.71,22l0.01-0.14C7.76,21.86,7.81,21.87,7.85,21.86z"
							></path><path
								fill="#f50057"
								d="M7.85,21.86L7.71,22l0.01-0.14C7.76,21.86,7.81,21.87,7.85,21.86z"
							></path>
						</svg>
						<p id="icon-text" class="text-md text-gray-950 font-normal text-center lg:text-lg">
							NestJS
						</p>
					</div>
					<div class="flex flex-col space-y-2 items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							viewBox="0 0 48 48"
							class="springIcon w-10 h-10 lg:h-12 lg:w-12"
						>
							<path
								fill="#8bc34a"
								d="M43.982,23.635c0.069-4.261-0.891-9.328-2.891-15.273l-1.568-4.662l-2.13,4.433 c-0.114,0.237-0.244,0.469-0.38,0.698C33.514,5.827,28.974,4,24,4C12.954,4,4,12.954,4,24c0,11.046,8.954,20,20,20s20-8.954,20-20 C44,23.877,43.984,23.758,43.982,23.635z"
							></path><path
								fill="#fff"
								d="M39.385 32.558c-3.123 4.302-8.651 4.533-13.854 4.442H18.75h-1.938c4.428-1.593 7.063-1.972 9.754-3.4 5.068-2.665 10.078-8.496 11.121-14.562-1.93 5.836-7.779 10.85-13.109 12.889-3.652 1.393-10.248 2.745-10.248 2.745l-.267-.145C9.573 32.268 9.437 22.214 17.6 18.968c3.574-1.423 6.993-.641 10.854-1.593 4.122-1.012 8.89-4.208 10.83-8.375C41.456 15.667 44.07 26.106 39.385 32.558L39.385 32.558zM15.668 38.445C15.386 38.795 14.955 39 14.505 39c-.823 0-1.495-.677-1.495-1.5s.677-1.5 1.495-1.5c.341 0 .677.118.941.336C16.086 36.855 16.186 37.805 15.668 38.445L15.668 38.445z"
							></path>
						</svg>
						<p id="icon-text" class="text-md text-gray-950 font-normal text-center lg:text-lg">
							Spring
						</p>
					</div>
					<div class="flex flex-col space-y-2 items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							viewBox="0 0 48 48"
							class="typescriptIcon w-10 h-10 lg:h-12 lg:w-12"
						>
							<rect width="36" height="36" x="6" y="6" fill="#1976d2"></rect><polygon
								fill="#fff"
								points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"
							></polygon><path
								fill="#fff"
								d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"
							></path>
						</svg>
						<p id="icon-text" class="text-md text-gray-950 font-normal text-center lg:text-lg">
							Typescript
						</p>
					</div>
					<div class="flex flex-col space-y-2 items-center">
						<img
							src={LaravelLogo}
							alt="Laravel Logo SVG"
							class="laravelIcon w-10 h-10 lg:h-12 lg:w-12"
						/>
						<p id="icon-text" class="text-md text-gray-950 font-normal text-center lg:text-lg">
							Laravel
						</p>
					</div>
					<div class="flex flex-col space-y-2 items-center">
						<img
							src={GoLogo}
							alt="Go Language Logo SVG"
							class="golangIcon w-10 h-10 lg:h-12 lg:w-12"
						/>
						<p id="icon-text" class="text-md text-gray-950 font-normal text-center lg:text-lg">
							Golang
						</p>
					</div>
					<div class="flex flex-col space-y-2 items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							viewBox="0 0 48 48"
							class="postgreSQLIcon w-10 h-10 lg:h-12 lg:w-12"
						>
							<path
								fill="#fff"
								d="M44.083,29.79c-0.183-0.829-0.935-1.796-2.452-1.796c-0.31,0-0.649,0.039-1.035,0.119c-0.708,0.146-1.311,0.217-1.842,0.241c4.133-7.04,6.816-16.819,4.159-20.214c-3.501-4.473-8.214-5.141-10.711-5.141L31.967,3c-0.929,0.015-1.893,0.129-2.863,0.339l-3.583,0.774C25.033,4.052,24.536,4.009,24.018,4l-0.03,0l-0.016,0l-0.152-0.001c-1.593,0-3.046,0.338-4.341,0.973l-1.251-0.493c-1.72-0.678-4.308-1.485-6.868-1.485c-0.144,0-0.287,0.003-0.431,0.008C8.407,3.093,6.241,4.05,4.664,5.769C2.696,7.915,1.8,11.054,2.003,15.1C2.013,15.309,4.461,36,11.4,36h0.025l0.064-0.001c0.901-0.022,1.76-0.384,2.563-1.077c0.613,0.46,1.406,0.732,2.145,0.84c0.488,0.115,1.366,0.278,2.418,0.278c1.284,0,2.442-0.263,3.44-0.738c-0.001,0.88-0.006,1.994-0.016,3.418l-0.001,0.075l0.005,0.075c0.097,1.419,0.342,2.698,0.711,3.701c1.051,2.859,2.866,4.434,5.111,4.434c0.093,0,0.188-0.003,0.284-0.009c1.846-0.114,3.717-1.151,5.004-2.772c1.393-1.755,1.715-3.607,1.839-5.026L35,39.111v-0.088v-4.079l0.103,0.01l0.436,0.038l0.042,0.004l0.042,0.002c0.124,0.006,0.252,0.008,0.381,0.008c1.507,0,3.362-0.391,4.616-0.974C41.819,33.476,44.559,31.948,44.083,29.79z"
							></path><path
								fill="#0277bd"
								d="M33,34c0-0.205,0.012-0.376,0.018-0.565C33.008,33.184,33,33,33,33s0.012-0.009,0.032-0.022c0.149-2.673,0.886-3.703,1.675-4.29c-0.11-0.153-0.237-0.318-0.356-0.475c-0.333-0.437-0.748-0.979-1.192-1.674l-0.082-0.158c-0.067-0.164-0.229-0.447-0.435-0.819c-1.183-2.14-3.645-6.592-1.96-9.404c0.738-1.232,2.122-1.942,4.121-2.117C33.986,11.718,30.925,6.115,23.985,6c-0.002,0-0.004,0-0.006,0c-6.041-0.098-8.026,5.392-8.672,8.672c0.89-0.377,1.906-0.606,2.836-0.606c0.014,0,0.029,0,0.043,0c2.29,0.017,3.865,1.239,4.323,3.354c0.335,1.552,0.496,2.91,0.492,4.153c-0.01,2.719-0.558,4.149-1.042,5.411l-0.154,0.408c-0.124,0.334-0.255,0.645-0.379,0.937c-0.126,0.298-0.237,0.563-0.318,0.802c0.484,0.11,0.864,0.265,1.125,0.38l0.151,0.066c0.047,0.02,0.094,0.043,0.137,0.069c0.848,0.516,1.376,1.309,1.489,2.233c0.061,0.498,0.051,3.893,0.03,6.855c0.087,1.285,0.305,2.364,0.593,3.146c0.409,1.114,1.431,3.241,3.394,3.119c1.37-0.085,2.687-0.919,3.561-2.019c0.938-1.181,1.284-2.487,1.414-3.958V34z"
							></path><path
								fill="#0277bd"
								d="M15.114 28.917c-1.613-1.683-2.399-3.947-2.104-6.056.285-2.035.124-4.027.037-5.098-.029-.357-.048-.623-.047-.77 0-.008.002-.015.003-.023 0-.004-.002-.007-.002-.011.121-3.021 1.286-7.787 4.493-10.62C15.932 5.724 13.388 4.913 11 5 7.258 5.136 3.636 7.724 4 15c.137 2.73 3.222 19.103 7.44 19 .603-.015 1.229-.402 1.872-1.176 1.017-1.223 2.005-2.332 2.708-3.104C15.705 29.481 15.401 29.217 15.114 28.917zM37.023 14.731c.015.154.002.286-.022.408.031.92-.068 1.813-.169 2.677-.074.636-.15 1.293-.171 1.952-.021.645.07 1.282.166 1.956.225 1.578.459 3.359-.765 5.437.225.296.423.571.581.837 4.61-7.475 6.468-16.361 4.695-18.626C38.655 5.944 34.941 4.952 31.999 5c-.921.015-1.758.139-2.473.294C34.602 7.754 36.863 13.026 37.023 14.731zM41 30.071c-2.665.55-3.947.257-4.569-.126-.1.072-.2.133-.293.19-.372.225-.961.583-1.105 2.782.083.016.156.025.246.044L35.714 33c1.32.06 3.049-.31 4.063-.781C41.962 31.205 43.153 29.627 41 30.071zM22.023 32.119c-.037-.298-.198-.539-.492-.732l-.108-.047C21.062 31.181 20.653 31 20 31h-.004c-.127.01-.253.019-.38.019-.052 0-.103-.007-.155-.009-.474.365-1.148.647-2.816.99-2.98.759-1.221 1.655-.078 1.794 1.106.277 3.735.614 5.481-.809C22.043 32.537 22.035 32.229 22.023 32.119z"
							></path><path
								fill="#0277bd"
								d="M20.681 18.501c-.292.302-.753.566-1.262.484-.828-.134-1.463-1.133-1.417-1.508h0c.044-.374.751-.569 1.578-.435.287.047.548.128.768.228-.32-.688-.899-1.085-1.782-1.182-1.565-.174-3.226.644-3.56 1.097.007.11.02.251.033.417.093 1.147.265 3.284-.05 5.537-.208 1.485.393 3.169 1.567 4.395.757.79 1.641 1.29 2.513 1.438.111-.478.309-.944.513-1.425.113-.265.233-.547.346-.852l.162-.427c.443-1.155.9-2.35.909-4.703C21.003 20.66 20.892 19.627 20.681 18.501zM34.847 22.007c-.104-.729-.211-1.484-.185-2.303.023-.742.105-1.442.184-2.119.062-.533.11-1.045.138-1.55-1.289.107-2.145.479-2.551 1.108.168-.057.358-.102.568-.129.892-.116 1.543.141 1.618.637.055.363-.253.705-.388.836-.277.269-.626.442-.981.488-.064.008-.129.012-.192.012-.353 0-.69-.121-.949-.3.112 1.973 1.567 4.612 2.283 5.907.153.277.271.498.369.688C35.154 24.163 35.009 23.143 34.847 22.007z"
							></path>
						</svg>
						<p id="icon-text" class="text-md text-gray-950 font-normal text-center lg:text-lg">
							PostgreSQL
						</p>
					</div>
					<div class="flex flex-col space-y-2 items-center">
						<img src={MySQLLogo} alt="MySQL Logo SVG" class="mySQLIcon w-10 h-10 lg:h-12 lg:w-12" />
						<p id="icon-text" class="text-md text-gray-950 font-normal text-center lg:text-lg">
							MySQL
						</p>
					</div>
					<div class="flex flex-col space-y-2 items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							viewBox="0 0 48 48"
							class="dockerIcon w-10 h-10 lg:h-12 lg:w-12"
						>
							<path
								fill="#2395ec"
								d="M47.527,19.847c-0.13-0.102-1.345-1.007-3.908-1.007c-0.677,0.003-1.352,0.06-2.019,0.171 c-0.496-3.354-3.219-4.93-3.345-5.003l-0.688-0.392l-0.453,0.644c-0.567,0.866-1.068,1.76-1.311,2.763 c-0.459,1.915-0.18,3.713,0.806,5.25C35.417,22.928,33.386,22.986,33,23H1.582c-0.826,0.001-1.496,0.66-1.501,1.474 c-0.037,2.733,0.353,5.553,1.306,8.119c1.089,2.818,2.71,4.894,4.818,6.164C8.567,40.184,12.405,41,16.756,41 c1.965,0.006,3.927-0.169,5.859-0.524c2.686-0.487,5.271-1.413,7.647-2.74c1.958-1.119,3.72-2.542,5.219-4.215 c2.505-2.798,3.997-5.913,5.107-8.682c0.149,0,0.298,0,0.442,0c2.743,0,4.429-1.083,5.359-1.99 c0.618-0.579,1.101-1.284,1.414-2.065L48,20.216L47.527,19.847z"
							></path><path
								fill="#2395ec"
								d="M8,22H5c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C9,21.552,8.552,22,8,22z"
							></path><path
								fill="#2395ec"
								d="M14,22h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C15,21.552,14.552,22,14,22z"
							></path><path
								fill="#2395ec"
								d="M20,22h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C21,21.552,20.552,22,20,22z"
							></path><path
								fill="#2395ec"
								d="M26,22h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C27,21.552,26.552,22,26,22z"
							></path><path
								fill="#2395ec"
								d="M14,16h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C15,15.552,14.552,16,14,16z"
							></path><path
								fill="#2395ec"
								d="M20,16h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C21,15.552,20.552,16,20,16z"
							></path><path
								fill="#2395ec"
								d="M26,16h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C27,15.552,26.552,16,26,16z"
							></path><path
								fill="#2395ec"
								d="M26,10h-3c-0.552,0-1-0.448-1-1V6c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C27,9.552,26.552,10,26,10z"
							></path><path
								fill="#2395ec"
								d="M32,22h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C33,21.552,32.552,22,32,22z"
							></path>
						</svg>
						<p id="icon-text" class="text-md text-gray-950 font-normal text-center lg:text-lg">
							Docker
						</p>
					</div>
					<div class="flex flex-col space-y-2 items-center">
						<img
							src={FastAPILogo}
							alt="FastAPI Logo SVG"
							class="fastAPIIcon w-10 h-10 lg:h-12 lg:w-12"
						/>
						<p id="icon-text" class="text-md text-gray-950 font-normal text-center lg:text-lg">
							FastAPI
						</p>
					</div>
					<div class="flex flex-col space-y-2 items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							viewBox="0 0 48 48"
							class="tailwindIcon w-10 h-10 lg:h-12 lg:w-12"
						>
							<path
								fill="#00acc1"
								d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"
							></path>
						</svg>
						<p id="icon-text" class="text-md text-gray-950 font-normal text-center lg:text-lg">
							Tailwind CSS
						</p>
					</div>
					<div class="flex flex-col space-y-2 items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							viewBox="0 0 48 48"
							class="gitIcon w-10 h-10 lg:h-12 lg:w-12"
						>
							<path
								fill="#F4511E"
								d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"
							></path>
						</svg>
						<p id="icon-text" class="text-md text-gray-950 font-normal text-center lg:text-lg">
							Git
						</p>
					</div>
					<div class="flex flex-col space-y-2 items-center">
						<img
							src={SvelteLogo}
							alt="Svelte Logo SVG"
							class="svelteIcon w-10 h-10 lg:h-12 lg:w-12"
						/>
						<p id="icon-text" class="text-md text-gray-950 font-normal text-center lg:text-lg">
							Svelte
						</p>
					</div>
				</div>
				<img
					src={SeventhPaint}
					alt="Sevent Paint"
					class="hidden absolute w-80 h-48 left-16 -bottom-[1550px] xl:block"
				/>
			</div>
		</div>
	</div>
</section>

<section id="experience" class="bg-gray-50 font-roboto">
	<div class="container mx-auto">
		<div class="py-8 px-4 max-w-screen-xl lg:py-16 lg:px-8">
			<div class="flex flex-col">
				<p
					id="experience-head-text"
					class="text-2xl text-gray-950 lg:text-4xl font-semibold text-center"
				>
					Professional Experience
				</p>
				<div
					class="grid grid-cols-1 gap-2 gap-y-4 mt-8 justify-items-center lg:gap-3 lg:gap-y-6 lg:grid-cols-2 lg:mt-10"
				>
					<div class="flex flex-col space-y-2 items-center">
						<a href={'https://citiasiainc.id/'} title="Citiasia Inc.">
							<img src={CitiasiaLogo} alt="Citiasia inc. Logo SVG" class="w-80 h-80" />
						</a>
						<p id="experience-text" class="text-md text-gray-950 font-bold text-center lg:text-lg">
							<a id="second-popover" href={'#'} class="underline underline-offset-4">
								Fullstack Engineer Internship
							</a>
						</p>
						<p
							id="experience-duration-text"
							class="text-sm text-gray-950 font-normal text-center lg:text-md"
						>
							Feb 2023 - Jun 2023 (5 Months)
						</p>
					</div>
					<Popover
						triggeredBy="#second-popover"
						class="w-72 text-sm font-normal text-gray-950 bg-gray-50 shadow-lg shadow-gray-400/50 lg:w-96 lg:text-md"
						placement="bottom-start"
						transition={fade}
					>
						<div class="p-2 space-y-2">
							<h3 class="font-bold text-gray-950">Assignments:</h3>
							Developing the backend system (REST API) for SurveyAsia services using the Laravel and
							NestJS frameworks. I also took part in developing and updating the frontend appearance
							of this service using the Vue.js framework and Laravel Blade.
						</div>
					</Popover>
					<div class="flex flex-col space-y-2 items-center">
						<a href={'https://www.marthatilaargroup.com/'} title="Martha Tilaar Group">
							<img src={MTGLogo} alt="MTG Logo SVG" class="w-80 h-80" />
						</a>
						<p id="experience-text" class="text-md text-gray-950 font-bold text-center lg:text-lg">
							<a id="third-popover" href={'#'} class="underline underline-offset-4">
								IT (Information Technology) Internship
							</a>
						</p>
						<p
							id="experience-duration-text"
							class="text-sm text-gray-950 font-normal text-center lg:text-md"
						>
							Feb 2024 - Jun 2024 (5 Months)
						</p>
					</div>
					<Popover
						triggeredBy="#third-popover"
						class="w-72 text-sm font-normal text-gray-950 bg-gray-50 shadow-lg shadow-gray-400/50 lg:w-96 lg:text-md"
						placement="bottom-start"
						transition={fade}
					>
						<div class="p-2 space-y-2">
							<h3 class="font-bold text-gray-950">Assignments:</h3>
							Create and develop the SGS Sales Distributor (SIDIA) application using the Vue.js and Ionic
							framework. I also took part in creating and developing the backend system (REST API) for
							this application using the Laravel framework version 11. For the development stage, I used
							Docker and Vite to speed up application development to completion.
						</div>
					</Popover>
				</div>
			</div>
		</div>
	</div>
</section>

<section id="footer" class="bg-gray-50 font-roboto">
	<div class="container mx-auto">
		<div class="py-8 px-4 max-w-screen-xl lg:py-16">
			<div class="flex flex-col">
				<div class="grid grid-rows-2 justify-items-center gap-3">
					<p
						id="footer-head-text"
						class="text-3xl text-gray-950 font-bold lg:text-4xl font-dancing-script"
					>
						Follow me on:
					</p>
					<div class="grid grid-cols-3 justify-items-center gap-3">
						<a href={'https://github.com/Kolong-Meja'} title="Github">
							<div class="text-gray-50 bg-gray-800 p-3 rounded-full" use:zoomEffect>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="21"
									height="21"
									fill="currentColor"
									class="bi bi-github"
									viewBox="0 0 16 16"
								>
									<path
										d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
									/>
								</svg>
							</div>
						</a>
						<a href={'https://www.linkedin.com/in/faisal-ramadhan-9ab18a269/'} title="Linkedin">
							<div class="text-gray-50 bg-blue-500 p-3 rounded-full" use:zoomEffect>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="21"
									height="21"
									fill="currentColor"
									class="bi bi-linkedin"
									viewBox="0 0 16 16"
								>
									<path
										d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
									/>
								</svg>
							</div>
						</a>
						<a href={'https://medium.com/@faisalramadhan1299'} title="Medium">
							<div class="text-gray-50 bg-zinc-900 p-3 rounded-full" use:zoomEffect>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="21"
									height="21"
									fill="currentColor"
									class="bi bi-medium"
									viewBox="0 0 16 16"
								>
									<path
										d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8m4.95 0c0 2.34-1.01 4.236-2.256 4.236S9.463 10.339 9.463 8c0-2.34 1.01-4.236 2.256-4.236S13.975 5.661 13.975 8M16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795"
									/>
								</svg>
							</div>
						</a>
					</div>
				</div>
			</div>
			<img
				src={NinthPaint}
				alt="Ninth Paint"
				class="flowerPicture hidden absolute h-40 w-40 left-12 -bottom-[2100px] xl:block"
			/>
			<img
				src={SixthPaint}
				alt="Sixth Paint Illustration"
				class="hidden absolute h-40 w-40 right-8 -bottom-[2220px] xl:block"
			/>
		</div>
	</div>
</section>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
