<script lang="ts">
	import type { IconProp } from '@fortawesome/fontawesome-svg-core';

	import FontAwesomeIcon from './FontAwesomeIcon.svelte';
	import { trackEvent } from './analytics';

	export let link: string;
	export let icon: IconProp;
	export let label: string;

	function trackLink() {
		trackEvent('Main Links: Click', { props: { url: link } });
	}

	function onKeyDown(e: KeyboardEvent) {
		if (e.code === 'Enter' || e.code === 'Space') {
			trackLink();
		}
	}
</script>

<a
	tabindex="0"
	href={link}
	class="icon-link"
	target="_blank"
	rel="noreferrer"
	on:click={trackLink}
	on:keydown={onKeyDown}
>
	<FontAwesomeIcon {icon} />
	{label}
</a>

<style lang="scss">
	.icon-link {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-decoration: underline;
	}
</style>
