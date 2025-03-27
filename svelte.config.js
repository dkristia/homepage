import adapter from '@sveltejs/adapter-static'; // Switch back to adapter-static
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({
            // Output directory - similar to the old 'dist' folder
            // This will create a directory you can serve with NGINX
            pages: 'build',
            assets: 'build',
            fallback: 'index.html', // For SPA-style routing if needed
            precompress: true // Optional: pre-gzip files for better performance
        }),
        // Fix the URL parameters issue during prerendering
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