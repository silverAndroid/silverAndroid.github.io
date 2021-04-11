<script lang="ts">
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

	import FontAwesomeIcon from './FontAwesomeIcon.svelte';
</script>

<a tabIndex="0" class="icon-link" role="button" aria-label="Click to see my email">
	<FontAwesomeIcon icon={faEnvelope} />
	<span>Email</span>
</a>

<style lang="scss">
	.icon-link {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-decoration: underline;
	}
</style>
