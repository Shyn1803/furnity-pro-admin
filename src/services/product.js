import request from '@/utils/request';
// import { request } from 'umi';

export async function getProducts() {
  return request('/api/products', {
    method: 'GET',
  });
};

export async function updateProduct(params) {
  return request(`/api/products/${params?.id}`, {
    method: 'PUT',
    params,
  });
};

