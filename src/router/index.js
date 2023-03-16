import { createRouter, createWebHistory } from 'vue-router';
import Layout from '../components/Layout.vue';
import Home from '../views/Home.vue';
import RepoDetails from '../views/RepoDetails.vue';
import RepoList from '../views/RepoList.vue';
import NotFound from '../components/NotFound.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/repos/',
		name: 'layout',
		component: Layout,
		children: [
			{
				path: ':username',
				name: 'repo-list',
				component: RepoList,
			},
			{
				path: 'repo/:name',
				name: 'repo-details',
				component: RepoDetails,
			},
			{
				path: ':pathMatch(.*)*',
				name: 'not-found',
				component: NotFound,
			},
		],
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'not-found',
		component: NotFound,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
