import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),
    kit: {
        adapter: adapter(),
        prerender: {
            handleHttpError: ({ path, referrer, message }) => {
                // Ignore 404s from recursive iframe references
                if (path.includes('recursion=') || referrer?.includes('recursion=')) {
                    return;
                }
                throw new Error(message);
            }
        }
    }
};

export default config;