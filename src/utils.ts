// Convert to title
export const parseTitle = (currentPage: string, frontMatterTitle?: string) => {
	const [indexPart, defaultTitle] = decodeURIComponent(currentPage.split('/posts/')[1]).split('-');
	// const baseTitle = `第${indexPart}期 - `;
	const titleSuffix = frontMatterTitle ? `${frontMatterTitle}/` : defaultTitle;
	let title = titleSuffix;

	// 移除末尾的斜杠
	if (title.endsWith('/')) {
		title = title.slice(0, -1);
	}
	return title;
};

// Get the current article number.
export const getIndex = (currentPage: string) => {
	const oldTitle = decodeURIComponent(currentPage.split('/posts/')[1]);
	return parseInt(oldTitle.split('-')[0]);
};

// Sort all articles.
export const sortPosts = (allPosts: any) => {
	return allPosts.sort((a, b) => {
		return parseInt(b.url.split('/posts/')[1].split('-')[0]) - parseInt(a.url.split('/posts/')[1].split('-')[0]);
	});
};
