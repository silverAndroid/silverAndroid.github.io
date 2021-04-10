<script lang="ts">
	import Typed from 'typed.js';
	import type { TypedOptions } from 'typed.js';
	import { onMount } from 'svelte';

	export let options: TypedOptions;
	export let ariaLabel: string;

	let typedElem;
	let typed: Typed;

	onMount(() => {
		typed = new Typed(typedElem, options);

		return () => {
			typed.destroy();
		};
	});
</script>

<span bind:this={typedElem} aria-label={ariaLabel} />

<style lang="scss">
</style>
