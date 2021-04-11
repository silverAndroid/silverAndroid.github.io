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

	type Link = EmailLink | { type: string; icon: IconProp; label: string; link: string };

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
			label: 'LinkedIn'
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
	<h1>Hi, I'm Rushil!</h1>

	<p class="typed-wrapper" aria-label={typedAriaLabel}>
		<TypedComponent options={typedOptions} />
	</p>

	<div class="icon-container">
		{#each links as linkObj}
			{#if isEmailLink(linkObj)}
				<EmailLink />
			{:else}
				<IconLink link={linkObj.link} icon={linkObj.icon} label={linkObj.label} />
			{/if}
		{/each}
	</div>
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

	.icon-container {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin-top: 3.2rem;

		& > :global(.icon-link) {
			padding: 0 1.6rem;
		}
	}
</style>
