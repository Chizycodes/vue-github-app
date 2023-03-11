import {createRouter, createWebHistory} from "vue-router";
import Layout from "../components/Layout.vue"
import Home from "../views/Home.vue"
import RepoDetails from "../views/RepoDetails.vue"
import RepoList from "../views/RepoList.vue"

const routes = [
	{
		path: '/',
		name: 'layout',
        component: Layout,
		children: [
			{
				path: '/',
				name: 'repo-list',
				component: RepoList,
			},
			{
				path: '/repo/:name',
				name: 'repo-details',
				component: RepoDetails,
			},
		],
	},
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;