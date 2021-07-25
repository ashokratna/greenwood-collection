/* eslint-disable import/no-anonymous-default-export */
import { useEffect, useRef, useState } from 'react';

export default ({ root = null, rootMargin, threshold = 0 }) => {
	const [entry, updateEntry] = useState(null);
	const [node, setNode] = useState(null);

	const observer = useRef(
		new window.IntersectionObserver(([entry]) => updateEntry(entry), {
			root,
			rootMargin,
			threshold,
		})
	);

	useEffect(() => {
		const { current: currentObserver } = observer;
		currentObserver.disconnect();

		if (node) currentObserver.observe(node);

		return () => currentObserver.disconnect();
	}, [node]);

	return [setNode, entry];
};
