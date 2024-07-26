<script lang="ts">
	import { onMount } from 'svelte';
	import {
		changeTheme,
		navbarScrollAnimation,
		smoothScrollAnimation
	} from '$lib/services/animation';

	export let fontFamily: 'font-bodoni' | 'font-lato' = 'font-lato';
	export let fontSize: 'sm' | 'base' | 'lg' | 'xl' = 'sm';

	let navClass: string = `my-navbar hidden z-10 w-full bg-light ${fontFamily}`;
	let navLinkTextClass: string = `nav-text text-${fontSize} text-gray-950`;

	function toggleMenu() {
		const menu = document.getElementById('mobile-menu');
		menu?.classList.toggle('hidden');
	}

	onMount(() => {
		const navbar = document.querySelector('.my-navbar');

		navbarScrollAnimation(navbar as Element);
		smoothScrollAnimation();
	});
</script>

<nav class={navClass}>
	<div class="container mx-auto flex justify-between items-center p-4 md:p-5">
		<button
			on:click={changeTheme}
			id="switch-theme-btn"
			class="bg-blue-100/50 p-2 rounded-full lg:rounded-xl"
		>
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
		<ul class="hidden md:flex flex-row items-center space-x-6">
			<li class="list-none">
				<a href={'#personal-info'} class="link">
					<span class={navLinkTextClass}>Personal Info</span>
				</a>
			</li>
			<li class="list-none">
				<a href={'#expertise'} class="link">
					<span class={navLinkTextClass}>Strength & Expertise</span>
				</a>
			</li>
			<li class="list-none">
				<a href={'#experience'} class="link">
					<span class={navLinkTextClass}>Professional Experience</span>
				</a>
			</li>
		</ul>
		<button id="menu-bar" class="text-gray-950 md:hidden lg:hidden" on:click={toggleMenu}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16m-7 6h7"
				/>
			</svg>
		</button>
	</div>
	<!-- Mobile Menu -->
	<div
		id="mobile-menu"
		class="hidden bg-light border-t border-t-gray-100 md:border-t-0 lg:border-t-0 md:hidden lg:hidden"
	>
		<ul class="flex flex-col items-center space-y-4 p-4">
			<li class="list-none">
				<a href={'#personal-info'} class="link">
					<span class={navLinkTextClass}>Personal Info</span>
				</a>
			</li>
			<li class="list-none">
				<a href={'#expertise'} class="link">
					<span class={navLinkTextClass}>Strength & Expertise</span>
				</a>
			</li>
			<li class="list-none">
				<a href={'#experience'} class="link">
					<span class={navLinkTextClass}>Professional Experience</span>
				</a>
			</li>
		</ul>
	</div>
</nav>
