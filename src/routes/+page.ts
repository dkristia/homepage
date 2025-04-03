import type { RequestEvent } from '@sveltejs/kit';

export const load = ({ url }: RequestEvent) => {
  try {
    // Try to safely get the recursion parameter
    const recursionParam = url.searchParams.get('recursion');
    return {
      recursionLevel: recursionParam ? parseInt(recursionParam) : 0
    };
  } catch (e) {
    // Fall back to 0 if there's any error (like during prerendering)
    return {
      recursionLevel: 0
    };
  }
}