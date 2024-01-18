export function sendRequest(data) {
  fetch('/api/post/create', {
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
      console.log('data :>> ', data);
      // setLoading(false);
    });
}
//
export async function getPost(id: string) {
  return await fetch(`/api/post/${id}`, {
    method: 'GET',
    mode: 'no-cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: { 'Content-type': 'application/json' },
  }).then((res) => res.json());
}
// create post
export function createPostWith(title, content) {
  sendRequest({ title, content });
}

export function deletePost(id) {
  fetch('/api/post/delete', {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({ id }), // body data type must match "Content-Type" header
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('deletePost- response- data :>> ', data);
    });
}
