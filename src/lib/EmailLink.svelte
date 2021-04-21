<script lang="ts">
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

	import FontAwesomeIcon from './FontAwesomeIcon.svelte';
	import { trackEvent } from './analytics';

	function trackEmailClick() {
		trackEvent('Email: Click');
	}
</script>

<a
	tabindex="0"
	class="icon-link"
	href="mailto:rushil.perera1081@gmail.com"
	on:click={trackEmailClick}
>
	<FontAwesomeIcon icon={faEnvelope} />
	<span>Email</span>
</a>

<style lang="scss">
	.icon-link {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-decoration: underline;
		cursor: pointer;
	}
</style>
