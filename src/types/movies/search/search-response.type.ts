import type { SearchResultItem } from './search-result-item.type';

export type SearchResponse = {
	page: number;
	results: SearchResultItem[];
	total_pages: number;
	total_results: number;
};
