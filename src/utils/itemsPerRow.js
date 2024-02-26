export default (container, itemWidth) => {
    const element = document?.querySelector(container)
    if (window && window?.getComputedStyle && element) {
        const compStyles = window.getComputedStyle(element);
        const width = compStyles?.getPropertyValue("width");
        return Math.floor(parseInt(width, 10)/itemWidth);
    }
    return null;
};