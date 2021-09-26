import index from './index'

const FEATURE_PATH = '/admin/signin';

export default [
  {
    path: `${FEATURE_PATH}`,
    component: index,
    exact: true,
  }
];