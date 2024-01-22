import { PageObjectResponse, RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
import { notion } from './client';
import { n2m } from './notionToMarkDown';

export async function searchPost(title: string) {
  let response = await notion.search({ query: title, filter: { property: 'object', value: 'page' } });
  return (response.results as PageObjectResponse[]).map((page) => {
    let coverURL, title;
    let icon = page.icon ? page.icon['emoji'] : '';

    if (page.cover?.type === 'external') {
      coverURL = page.cover.external.url;
    }

    if (page.properties.title.type === 'title') {
      title = page.properties.title.title[0].plain_text;
    }

    return { id: page.id, title: icon + title, coverURL: coverURL };
  });
}

// 根据pageid获取内容 内容由block组成，获取页面的内容就是把 pageid作为父block,获取子block
export async function getPostBlock(id: string) {
  let response = await notion.blocks.children.list({ block_id: id });
  return { title: id, content: JSON.stringify(response.results) };
}

export async function getPost(id: string) {
  let response: PageObjectResponse = (await notion.pages.retrieve({ page_id: id })) as PageObjectResponse;
  let title = response.properties.title as {
    type: 'title';
    title: Array<RichTextItemResponse>;
    id: string;
  };
  let emoji = response.icon ? response.icon['emoji'] : '';
  return { title: emoji + title.title[0].plain_text };
}

export async function getMarkDownWithPost(id: string) {
  try {
    const mdblocks = await n2m.pageToMarkdown(id);
    const mdString = n2m.toMarkdownString(mdblocks);
    return { content: mdString.parent };
  } catch (error) {
    console.log('object :>> ', error);
    return { title: '访问资源失败', content: '请返回主页' };
  }
}
