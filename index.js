var coll = document.getElementById('collapsible');

coll.addEventListener('click', () => {
    const element = coll.nextElementSibling;
    if (element.style.display === 'block') {
        element.style.display = 'none';
        element.style.maxHeight = null;
    } else {
        element.style.display = 'block';
        element.style.maxHeight = content.scrollHeight + 'px';
    }
});