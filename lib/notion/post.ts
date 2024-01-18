import { notion } from './client';
import { n2m } from './notionToMarkDown';

export async function searchPost(title: string) {
  let response = await notion.search({ query: title, filter: { property: 'object', value: 'page' } });
  let temp = {};
  response.results.map((result) => {
    temp = { title: result.id, content: result.id };
  });
  return temp;
}

// 根据pageid获取内容 内容由block组成，获取页面的内容就是把 pageid作为父block,获取子block
export async function getPostBlock(id: string) {
  let response = await notion.blocks.children.list({ block_id: id });
  return { title: id, content: JSON.stringify(response.results) };
}
export async function getPost(id: string) {
  let response = await notion.pages.retrieve({ page_id: id });
  return response;
}

export async function getMarkDownWithPost(id: string) {
  const mdblocks = await n2m.pageToMarkdown(id);
  const mdString = n2m.toMarkdownString(mdblocks);
  return { title: id, content: mdString.parent };
}
