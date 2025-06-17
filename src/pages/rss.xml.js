import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET() {
  let allPosts = import.meta.glob('./posts/*.md', { eager: true });
  let posts = Object.values(allPosts);

  posts = posts.sort((a, b) => {
    return parseInt(b.url.split('/posts/')[1].split('-')[0]) - parseInt(a.url.split('/posts/')[1].split('-')[0]);
  });

  //只保留12，当前太多了
  posts.splice(12);

  return rss({
    title: 'Skylar wekly',
    description: 'Skylar的周刊，记录Skylar有趣的生活，希望你喜欢',
    site: 'https://skylarweekly-git-main-bluelightskys-projects.vercel.app/',
    customData: ``,
    items: posts.map((item) => {
      const url = item.url;
      const title = item.frontmatter.title;
      return {
        link: url,
        title,
        description: item.frontmatter.desc,
        pubDate: item.frontmatter.date,
      };
    }),
  });
}
