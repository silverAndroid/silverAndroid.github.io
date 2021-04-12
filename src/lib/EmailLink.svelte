<script lang="ts">
	import { faEnvelope, faTimes } from '@fortawesome/free-solid-svg-icons';
	import { DialogOverlay, DialogContent } from 'svelte-accessible-dialog';

	import FontAwesomeIcon from './FontAwesomeIcon.svelte';
	import { trackEvent } from './analytics';

	let isOpen = false;

	function openDialog() {
		isOpen = true;
	}

	function closeDialog() {
		isOpen = false;
	}

	function trackEmailClick() {
		trackEvent('Email: Click');
	}

	function onKeyDown(shouldOpenDialog: boolean) {
		return (e: KeyboardEvent) => {
			if (e.code === 'Enter' || e.code === 'Space') {
				if (shouldOpenDialog) {
					openDialog();
				} else {
					closeDialog();
				}
			}
		};
	}
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a
	tabIndex="0"
	class="icon-link"
	role="button"
	aria-label="Click to see my email"
	on:click={openDialog}
	on:keydown={onKeyDown(true)}
>
	<FontAwesomeIcon icon={faEnvelope} />
	<span>Email</span>
</a>

<DialogOverlay {isOpen} onDismiss={closeDialog}>
	<DialogContent aria-label="Email address">
		<FontAwesomeIcon
			icon={faTimes}
			class="close-icon"
			tabindex="0"
			on:click={closeDialog}
			on:keydown={onKeyDown(false)}
		/>
		<p id="email-content">
			My email is <a
				class="email-link"
				href="mailto:rushil.perera1081@gmail.com"
				on:click={trackEmailClick}>rushil.perera1081@gmail.com</a
			>
		</p>
	</DialogContent>
</DialogOverlay>

<style lang="scss">
	.icon-link {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-decoration: underline;
		cursor: pointer;
	}

	#email-content {
		overflow-wrap: break-word;
	}

	:global {
		.close-icon {
			height: 24px;
		}
	}
</style>
