import fs from 'fs';
import dayjs from 'dayjs';
import tailwind from '@astrojs/tailwind';
// import vercel from '@astrojs/vercel/serverless';

import { defineConfig, passthroughImageService } from 'astro/config';
import { parse } from 'node-html-parser';
import { SITE } from './src/config';
import rehypeCustomizeImageSrc from './rehype-customize-image-src.js';

const DEFAULT_FORMAT = 'YYYY/MM/DD';

function getCreateDateFormat(filePath) {
	return dayjs(fs.statSync(filePath).birthtime).format(DEFAULT_FORMAT);
}


function defaultLayoutPlugin() {
	return function (tree, file) {
		const filePath = file.history[0];
		const { frontmatter } = file.data.astro;
		frontmatter.layout = '@layouts/post.astro';
		if (tree.children[0]?.value && !frontmatter.pic) {
			const imageElement = parse(tree.children[0].value).querySelector('img');
			frontmatter.pic = imageElement.getAttribute('src');
		}
		if (tree.children[0]?.type === 'heading' && !frontmatter.title && tree.children[0]?.depth === 1) {
			const h1Text = tree.children[0].children[0].value
			frontmatter.title = h1Text
		}

		if (tree.children[1]?.children[1]?.value) {
			frontmatter.desc = tree.children[1].children[1].value;
		}
		
		frontmatter.desc = frontmatter.desc || SITE.description;
		frontmatter.pic = frontmatter.pic || SITE.pic;

		if (!frontmatter.date) {
			frontmatter.date =
				SITE.repo === getCreateDateFormat(filePath);
		}

		// if (SITE.repo === WEEKLY_REPO_NAME) {
		// 	frontmatter.twitterImg = getTwitterImg(filePath.split('/posts/')[1].split('-')[0]);
		// }
	};
}

export default defineConfig({
	prefetch: true,
	integrations: [tailwind()],
	image: {
		service: passthroughImageService(),
	},
	markdown: {
		remarkPlugins: [defaultLayoutPlugin],
		rehypePlugins: [rehypeCustomizeImageSrc],
	}
});
