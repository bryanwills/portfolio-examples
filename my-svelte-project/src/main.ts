import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: ', Bryan',
		gender: 'male'
	}
});

export default app;