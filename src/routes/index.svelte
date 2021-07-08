<script lang="ts">
	import type { TypedOptions } from 'typed.js';
	import type { IconProp } from '@fortawesome/fontawesome-svg-core';

	import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
	import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

	import TypedComponent from '$lib/Typed.svelte';
	import EmailLink from '$lib/EmailLink.svelte';
	import IconLink from '$lib/IconLink.svelte';

	interface EmailLink {
		type: 'email';
	}

	type Link =
		| EmailLink
		| { type: string; icon: IconProp; label: string; link: string; aria?: string };

	const strings = [
		'making web apps using Angular and React',
		'playing volleyball and badminton',
		'writing backends using Node.js',
		'watching anime',
		'developing mobile apps (native or cross-platform)',
		'using technologies like React Native, Svelte, Typescript and more'
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

	function isEmailLink(link: Link): link is EmailLink {
		return link.type === 'email';
	}

	const links: Link[] = [
		{
			type: 'email'
		},
		{
			type: 'github',
			icon: faGithub,
			link: 'https://github.com/silverAndroid',
			label: 'Github'
		},
		{
			type: 'linkedin',
			icon: faLinkedin,
			link: 'https://www.linkedin.com/in/rushil-perera',
			label: 'LinkedIn',
			aria: 'Linked In'
		},
		{
			type: 'resume',
			icon: faFilePdf,
			link: 'https://drive.google.com/open?id=1HbxbdiziN2KJHyQQS83ricXH69iSnClx',
			label: 'Resume'
		}
	];
</script>

<main>
	<h1>Rushil Perera</h1>

	<p class="typed-wrapper" aria-label={typedAriaLabel}>
		<TypedComponent options={typedOptions} />
	</p>

	<div class="icon-container">
		{#each links as linkObj}
			{#if isEmailLink(linkObj)}
				<EmailLink />
			{:else}
				<IconLink link={linkObj.link} icon={linkObj.icon} label={linkObj.label} ariaLabel={linkObj.aria} />
			{/if}
		{/each}
	</div>
</main>

<style lang="scss">
	$main-color: #65d5fd;
	$accent-color: #802200;
	main {
		background: $main-color;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
		padding: 8px;
		text-align: center;
	}

	h1 {
		color: $accent-color;
	}

	.typed-wrapper {
		margin-top: 0;
		min-height: 1.4375rem;

		& :global(.typed-string) {
			color: $accent-color;
		}
	}

	.icon-container {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		flex-wrap: wrap;
		// 3.2rem - 2rem so that when flex row wraps, there's still 2rem space in between rows
		margin-top: 1.2rem;

		& > :global(.icon-link) {
			padding: 0 1.6rem;
			color: $accent-color;
			margin-top: 2rem;
		}
	}
</style>
