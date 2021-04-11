<script lang="ts">
	import type { IconProp } from '@fortawesome/fontawesome-svg-core';

	import FontAwesomeIcon from './FontAwesomeIcon.svelte';

	export let link: string;
	export let analytics: string;
	export let icon: IconProp;
	export let label: string;
</script>

<a tabindex="0" href={link} class="icon-link" target="_blank" rel="noreferrer">
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
