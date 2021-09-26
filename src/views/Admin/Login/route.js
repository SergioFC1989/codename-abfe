import index from './index'

const FEATURE_PATH = '/admin/login';

export default [
  {
    path: `${FEATURE_PATH}`,
    component: index,
    exact: true,
  }
];