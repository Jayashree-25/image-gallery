document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    
    galleryItems.forEach(item => {
        item.addEventListener('click',() => {
            lightboxImage.src = item.src;
            lightbox.classList.add('show');
        });
    });
    lightbox.addEventListener('click', () => {
        lightbox.classList.remove('show');
    });
});