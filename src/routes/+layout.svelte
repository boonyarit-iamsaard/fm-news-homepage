<script lang="ts">
  import '../app.css';
  import Footer from '../lib/components/Footer.svelte';
  import Header from '../lib/components/Header.svelte';
</script>

<Header />

<main class="container mx-auto max-w-screen-md py-4">
  <slot />
</main>

<Footer />
