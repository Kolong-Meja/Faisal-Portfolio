<script lang="ts">
	export let bgColor: 'light' | 'dark' = 'light';
</script>

<button
	title="back to the top"
	class={bgColor == 'light'
		? 'scroll-btn hidden bg-gray-50 text-gray-950 p-2.5 z-10 rounded-full fixed bottom-8 right-8 lg:block'
		: 'scroll-btn hidden bg-gray-950 text-gray-50 p-2.5 z-10 rounded-full fixed bottom-8 right-8 lg:block'}
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="currentColor"
		class="bi bi-arrow-up-short w-10 h-10"
		viewBox="0 0 16 16"
	>
		<path
			fill-rule="evenodd"
			d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"
		/>
	</svg>
</button>
