import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET() {
  let allPosts = import.meta.glob("./posts/*.md", { eager: true });
  let posts = Object.values(allPosts);

  posts = posts.sort((a, b) => {
    const getPostNumber = (url) =>
      parseInt(url.split("/posts/")[1].split("-")[0]);
    return getPostNumber(b.url) - getPostNumber(a.url);
  });

  // Only 12 are kept
  posts = posts.slice(0, 12);

 // 处理 Markdown 内容，返回不过滤的标签的原始内容
 const processContent = async (item) => {
  const content = await item.compiledContent();
  return content;
};
  return rss({
    title: 'Skylar wekly',
    description: 'Skylar的周刊，记录Skylar有趣的生活，希望你喜欢',
    site: 'https://skylarweekly-git-main-bluelightskys-projects.vercel.app/',
    customData: ``,
    items: await Promise.all(
      posts.map(async (item) => {
        return {
          link: item.url,
          title: item.frontmatter.title,
          description: await processContent(item),
          pubDate: item.frontmatter.date,
        };
      }),
    ),
  });
}
