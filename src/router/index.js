import VueRouter from "vue-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Search from "../pages/Search";

// 重写push方法
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, resolve, reject) {
  if (resolve && reject) {
    originalPush.call(this, location, resolve, reject);
  } 
  else {
    originalPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }

  //   return originalPush.call(this, location).catch(err => err)
};

// 重写replace方法
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location, resolve, reject) {
  if (resolve && reject) {
    originalReplace.call(this, location, resolve, reject);
  } 
  else {
    originalReplace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
}


export default new VueRouter({
  routes: [
    {
      path: "/home",
      component: Home,
      meta: {
        show: true,
      },
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/register",
      component: Register,
    },
    {
      name: "search",
      path: "/search",
      component: Search,
      meta: {
        show: true,
      },
    },
    {
      path: "/",
      redirect: "/home",
    },
  ],
});
