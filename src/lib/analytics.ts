import PlausibleFn from 'plausible-tracker';

console.log(PlausibleFn);
// Building the app returns PlausibleFn as part of an object { default: Plausible }
// but the dev server returns the function directly
const Plausible = PlausibleFn.default || PlausibleFn;
const plausible = Plausible({
	domain: 'rushilperera.me',
	trackLocalhost: false,
});

export function init(): () => void {
	const { enableAutoPageviews } = plausible;

	const pageViewsCleanup = enableAutoPageviews();

	return () => {
		pageViewsCleanup();
	};
}

export const { trackEvent } = plausible;

export function trackLink(link: string): void {
	trackEvent('Outbound Link: Click', { props: { url: link } });
}
