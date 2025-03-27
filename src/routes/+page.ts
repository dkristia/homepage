import type { RequestEvent } from '@sveltejs/kit';

export const load = ({ url }: RequestEvent) => {
    return {
      recursionLevel: url.searchParams.get('recursion') ? parseInt(url.searchParams.get('recursion') || '0') : 0
    };
  };