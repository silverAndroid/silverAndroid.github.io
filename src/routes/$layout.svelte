<script>
	import { init as analyticsInit } from '$lib/analytics';
	import { onMount } from 'svelte';

	import '../app.scss';

	onMount(() => {
		const analyticsCleanup = analyticsInit();

		return () => {
			analyticsCleanup();
		};
	});
</script>

<slot />
