import Route from '@ember/routing/route';

export default class CollectionsRoute extends Route {
  apiData = [
    {
      category: 'products',
      url: 'https://dummyjson.com/products',
      source: 'dummyjson.com',
      endpoint: '/products',
    },
    {
      category: 'products',
      url: 'https://dummyjson.com/carts',
      source: 'dummyjson.com',
      endpoint: '/carts',
    },
    {
      category: 'users',
      url: 'https://dummyjson.com/users',
      source: 'dummyjson.com',
      endpoint: '/users',
    },
    {
      category: 'users',
      url: 'https://dummyjson.com/posts',
      source: 'dummyjson.com',
      endpoint: '/posts',
    },
    {
      category: 'users',
      url: 'https://dummyjson.com/comments',
      source: 'dummyjson.com',
      endpoint: '/comments',
    },
    {
      category: 'users',
      url: 'https://dummyjson.com/quotes',
      source: 'dummyjson.com',
      endpoint: '/quotes',
    },
    {
      category: 'users',
      url: 'https://dummyjson.com/todos',
      source: 'dummyjson.com',
      endpoint: '/todos',
    },
    {
      category: 'users',
      url: 'https://jsonplaceholder.typicode.com/posts',
      source: 'jsonplaceholder.typicode.com',
      endpoint: '/posts',
    },
    {
      category: 'users',
      url: 'https://jsonplaceholder.typicode.com/comments',
      source: 'jsonplaceholder.typicode.com',
      endpoint: '/comments',
    },
    {
      category: 'users',
      url: 'https://jsonplaceholder.typicode.com/albums',
      source: 'jsonplaceholder.typicode.com',
      endpoint: '/albums',
    },
    {
      category: 'users',
      url: 'https://jsonplaceholder.typicode.com/photos',
      source: 'jsonplaceholder.typicode.com',
      endpoint: '/photos',
    },
    {
      category: 'users',
      url: 'https://jsonplaceholder.typicode.com/users',
      source: 'jsonplaceholder.typicode.com',
      endpoint: '/users',
    },
    {
      category: 'users',
      url: 'https://jsonplaceholder.typicode.com/todos',
      source: 'jsonplaceholder.typicode.com',
      endpoint: '/todos',
    },
    {
      category: 'users',
      url: 'https://reqres.in/api/users',
      source: 'reqres.in',
      endpoint: '/users',
    },
  ];
  async model() {
    return this.apiData;
  }
}
