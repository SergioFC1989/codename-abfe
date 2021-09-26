import MainRoute from './views/Main/route'
import AdminLoginRoute from './views/Admin/Login/route'
import AdminSigninRoute from './views/Admin/Signin/route'
import AdminDashboardRoute from './views/Admin/Dashboard/route'

export default [
  ...MainRoute,
  ...AdminLoginRoute,
  ...AdminSigninRoute,
  ...AdminDashboardRoute,
];