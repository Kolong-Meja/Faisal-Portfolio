<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<!-- Navigation -->
<Navbar fontFamily="font-lato" fontSize="base" />

<slot />

<!-- Footer -->
<Footer fontFamily="font-lato" />
