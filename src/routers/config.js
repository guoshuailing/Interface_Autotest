export default {
    routes:[{path:"/login",component:()=>import('../views/login')},
    {path:"/regist",component:()=>import('../views/regist')},
    {path:"/notf",component:()=>import("../views/notfound")}],
    mode:"history"
}