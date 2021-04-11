<script lang="ts">
	/**
	 * Ported minimal version of React component (https://github.com/FortAwesome/react-fontawesome) to Svelte
	 */
	import type { IconLookup, IconProp } from '@fortawesome/fontawesome-svg-core';
	import { icon as transformIcon } from '@fortawesome/fontawesome-svg-core';

	export let icon: IconProp;
	export const classes: string[] = [];

	function isIconLookup(iconProp: IconProp): iconProp is IconLookup {
		return (
			typeof iconProp === 'object' &&
			!Array.isArray(iconProp) &&
			!!iconProp.prefix &&
			!!iconProp.iconName
		);
	}

	function normalizeIconArgs(icon: IconProp | null): IconLookup | null {
		// if the icon is null, there's nothing to do
		if (icon === null) {
			return null;
		}

		// if the icon is an object and has a prefix and an icon name, return it
		if (isIconLookup(icon)) {
			return icon;
		}

		// if it's an array with length of two
		if (Array.isArray(icon) && icon.length === 2) {
			// use the first item as prefix, second as icon name
			return { prefix: icon[0], iconName: icon[1] };
		}

		// if it's a string, use it as the icon name
		if (typeof icon === 'string') {
			return { prefix: 'fas', iconName: icon };
		}
	}

	const iconHtml = transformIcon(normalizeIconArgs(icon), { classes: ['icon', ...classes] }).html;
</script>

{@html iconHtml}

<style lang="scss">
	:global(.icon) {
		height: 48px;
		width: auto !important;
	}
</style>
