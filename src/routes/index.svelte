<script lang="ts">
	import TypedComponent from '$lib/Typed.svelte';
	import type { TypedOptions } from 'typed.js';

	const strings = [
		'making web apps using Angular and React.js',
		'playing volleyball and badminton',
		'writing backends using Node.js',
		'watching anime',
		'developing mobile apps (native or cross-platform)',
		'trying new technologies like React Native and Nest.js'
	];

	const typedAriaLabel =
		'I love ' +
		strings.map((str, i) => `${i === strings.length - 1 ? 'and ' : ''}${str}`).join(', ');

	const typedStrings = strings.map((str) => 'I love ' + str);

	const typedOptions: TypedOptions = {
		strings: typedStrings,
		typeSpeed: 30,
		loop: true,
		backSpeed: 50,
		backDelay: 5000
	};
</script>

<main>
	<h1>Hi, I'm Rushil!</h1>

	<p class="typed-wrapper" aria-label={typedAriaLabel}>
		<TypedComponent options={typedOptions} />
	</p>
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

	.typed-wrapper {
		margin-top: 0;
	}
</style>
