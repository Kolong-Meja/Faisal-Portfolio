<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="bg-gray-50 font-lato min-h-screen max-w-full">
	<div class="flex h-screen justify-center items-center">
		<div class="flex flex-col space-y-4">
			{#if $page.status === 404}
				<h1 class="text-gray-900 text-3xl font-semibold md:text-4xl lg:text-5xl">
					{$page.status}
					{$page.error?.message}
				</h1>
				<p class="text-gray-900 text-base font-normal md:text-lg">
					<span class="underline underline-offset-2 font-semibold">{$page.url.pathname}</span> path is
					not exist.
				</p>
			{/if}

			{#if $page.status === 500}
				<h1 class="text-gray-900 text-5xl font-semibold md:text-4xl lg:text-5xl">
					{$page.status}
					{$page.error?.message}
				</h1>
				<p class="text-gray-900 text-base font-normal md:text-lg">
					There's an issue with our server. Please wait until we fix it.
				</p>
			{/if}
		</div>
	</div>
</div>
