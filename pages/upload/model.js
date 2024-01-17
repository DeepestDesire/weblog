

export function sendRequest(data) {
  fetch('/api/post/create',{
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
    .then((res) => res.json())
    .then((data) => {
      // setData(data);
      // setLoading(false);
    });
}


export function dealWithData(title, content) {
  sendRequest({title, content});
}

export function deletePost(id) {
  fetch('/api/post/delete' ,{
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({id}), // body data type must match "Content-Type" header
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('deletePost- response- data :>> ', data);
    });

}


export function downloadImage() {
  fetch('https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F7b9cfc66-9c0d-4d8c-904c-4f72a8875a37%2Fd352a7ae-5952-4789-aa97-a0960f7e5556%2FUntitled.png?table=block&id=086c26e3-8d4b-4023-8a2b-46f70782aa19&spaceId=7b9cfc66-9c0d-4d8c-904c-4f72a8875a37&width=1150&userId=d9c69f30-43dc-4054-832f-746557add337&cache=v2', {
    'headers': {
      'accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
      'accept-language': 'en,zh-CN;q=0.9,zh;q=0.8',
      'cache-control': 'no-cache',
      'pragma': 'no-cache',
      'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'image',
      'sec-fetch-mode': 'no-cors',
      'sec-fetch-site': 'same-origin',
      'Access-Control-Allow-Origin': '*',
    },
    'referrer': 'https://www.notion.so/Google-Devtools-Memory-c0126cb42cc448f9bbd0fdcee48f6747',
    'body': null,
    'method': 'GET',
    'mode': 'cors',
    'credentials': 'include'
  });
}

const data =  [ {
  id: 'clr4jficb0001nfxw8z59tx8r',
  title: '2',
  content: '231231123',
  published: false,
  authorId: null
},
{
  id: 'clr4jfqx40002nfxwzhk6vmo9',
  title: '2',
  content: '23123112312312',
  published: false,
  authorId: null
},
{
  id: 'clr4jgjow0003nfxw2g6qk3bu',
  title: '2',
  content: '2312311231231212312',
  published: false,
  authorId: null
}];
