import Vue from 'vue'
import Router from 'vue-router'
import Authority from '../../static/common/js/authority'
import Login from '../Login'
import LoginTheme2 from '../LoginTheme2'
import Index from '../Index'
import Welcome from '../components/common/Welcome'
import Error from '../components/common/Error'
import UserList from '../components/user/UserList'

Vue.use(Router)

//路由
const routers = [
  {
    path: '/',
    name: 'Index',
    redirect: '/Welcome',
    component: Index,
    children: [
      {
        path: '/Welcome',
        name: 'Welcome',
        authority: ['admin', 'user'],
        component: Welcome,
      },
      {
        path: '/UserList',
        name: 'UserList',
        authority: 'admin',
        component: UserList,
      },
      {
        path: '/Error',
        name: 'Error',
        component: Error,
      }
    ]
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/LoginTheme2',
    name: 'LoginTheme2',
    component: LoginTheme2
  },
]

const router = new Router({
  routes: routers
})

router.beforeEach((to, from, next) => {
  let currAuthority = Authority.getAuthority();
  let routerItem = getRouter(routers, to);
  if (routerItem) {
    if (!checkAuthority(routerItem, currAuthority)) {
      next({name: 'Error'});
    } else {
      next();
    }
    return;
  }
  next({name: 'Error'});
})

//查询路由
function getRouter(routers, to) {
  if (routers.length > 0) {
    for (let item of routers) {
      //广度优先便利
      let queue = [];
      queue.push(item);
      while (queue.length > 0) {
        let routerItem = queue[0];
        if (routerItem.name == to.name) {
          return routerItem;
        }
        if (routerItem.children) {
          for (let i = 0; i < routerItem.children.length; i++) {
            queue.push(routerItem.children[i]);
          }
        }
        queue.splice(0, 1);
      }
    }
  }
  return null;
}

//判断权限
function checkAuthority(router, currAuthority) {
  if (router.authority) {
    if (typeof  router.authority == 'string') {
      return currAuthority == router.authority;
    }
    if (router.authority instanceof Array) {
      for (let i = 0; i < router.authority.length; i++) {
        if (currAuthority == router.authority[i]) {
          return true;
        }
      }
      return false;
    }
  }
  return true;
}

export default router;
