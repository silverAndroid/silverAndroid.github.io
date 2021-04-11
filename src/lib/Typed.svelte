<script lang="ts">
	import type { TypedOptions } from 'typed.js';

	import Typed from 'typed.js';
	import { onMount } from 'svelte';

	export let options: TypedOptions;
	export let ariaLabel: string;

	let typedElem;
	let typed: Typed;
	let shouldCursorBlink = false;
	let showCursor = false;

	onMount(() => {
		typed = new Typed(typedElem, options);
		showCursor = true;

		const [typedCursorElem] = Array.from(document.getElementsByClassName('typed-cursor'));
		const observer = new MutationObserver(() => {
			shouldCursorBlink = typedCursorElem.className.includes('typed-cursor--blink');
		});
		observer.observe(typedCursorElem, { attributes: true, attributeFilter: ['class'] });

		return () => {
			typed.destroy();
			observer.disconnect();
		};
	});
</script>

<span
	class="typed-string"
	class:blink={shouldCursorBlink}
	class:show-cursor={showCursor}
	bind:this={typedElem}
	aria-label={ariaLabel}
/>

<style lang="scss">
	.typed-string {
		&::after {
			content: '| ';
		}

		&.blink::after {
			animation: cursor-blink 0.7s infinite;
		}
	}

	@keyframes cursor-blink {
		0%,
		100% {
			opacity: 1;
		}

		50% {
			opacity: 0;
		}
	}

	:global {
		.typed-cursor {
			display: none;
		}
	}
</style>
