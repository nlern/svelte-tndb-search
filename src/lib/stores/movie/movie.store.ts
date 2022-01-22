import type { SearchResultItem } from 'src/types';
import { writable } from 'svelte/store';

export const movie = writable<SearchResultItem>(null);
