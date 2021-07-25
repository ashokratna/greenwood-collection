// @ts-nocheck
import ReactLoadable from 'react-loadable';

const Home = ReactLoadable({
	loader: () => import('./features/home/container/home'),
	modules: ['./features/home/container/home'],
	webpack: () => [require.resolveWeak('./features/home/container/home')],
	loading: () => {
		return null;
	},
});



export {
	Home,
}
