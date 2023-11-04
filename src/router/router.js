import { createRouter, createWebHistory } from "vue-router";

import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import Blog from '../components/Blog.vue'
import BlogPost from '../components/BlogPost.vue'
import SideBar from '../components/SideBar.vue'
import Login from '../components/Login.vue'
import Protected from '../components/Protected.vue'


const routes = [

    {
        path: '/',
        components: {
            default: Home,
            LeftSideBar: SideBar
        }
    },

    {
        path: '/about',
        components: {
            default: About,
            LeftSideBar: SideBar
        }
    },

    {
        path: '/contact',
        components: {
            default: Contact,
            LeftSideBar: SideBar
        }
    },
    {
        path: '/blog',
        components: {
            default: Blog,
            LeftSideBar: SideBar
        }
    },
    {
        path: '/blogpost/:id',
        components: {
            default: BlogPost,
            LeftSideBar: SideBar
        },
        name: 'post',
    },
    {
        path: '/protected',
        components: {
            default: Protected,
            LeftSideBar: SideBar
        },
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        components: {
            default: Login,
            LeftSideBar: SideBar
        }
    },


]

const isAuthenticated = () => {
    return localStorage.getItem('token') == '123'
}


const router = createRouter({
    history: createWebHistory(),
    routes
})




router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !isAuthenticated()) {
        next('/login')
    } else {
        next()
    }
})



export default router