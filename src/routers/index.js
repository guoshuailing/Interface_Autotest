import Vue from 'vue'
import VueRouter from "vue-router"
// import login from "../views/login"
// import regist from "../views/regist"
import notf from "../views/notfound"

Vue.use(VueRouter)
var router=new VueRouter({
  mode:"history",
  routes:[{path:"/login",component:()=>import('../views/login')},
        {path:"/regist",component:()=>import('../views/regist')},
        {path:"/notf",component:()=>import("../views/notfound")}]
})

export default router