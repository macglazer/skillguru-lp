import {useEffect, useState} from 'react';

// Returns current window sizes
const useWindowSize = () => {
	const isClient = typeof window === 'object';

	const getScroll = () => (isClient ? window.scrollY : 0);

	const [windowScroll, setWindowScroll] = useState(getScroll());

	useEffect(() => {
		if (!isClient) {
			return;
		}

		const handleScroll = () => {
			setWindowScroll(getScroll());
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.addEventListener('scroll', handleScroll);
		};
	}, []);

	return windowScroll;
};

export default useWindowSize;
