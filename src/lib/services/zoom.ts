export function zoomEffect(node: HTMLDivElement, scale: number = 1.1) {
	node.style.transition = '0.8s';

	function zoomIn() {
		node.style.transform = `scale(${scale})`;
	}

	function zoomOut() {
		node.style.transform = 'scale(1)';
	}

	node.addEventListener('mouseenter', zoomIn);
	node.addEventListener('mouseleave', zoomOut);

	return {
		destroy() {
			node.removeEventListener('mouseenter', zoomIn);
			node.removeEventListener('mouseleave', zoomOut);
		}
	};
}
