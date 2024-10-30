// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    let imageIds = ['image1', 'image2', 'image3'];
    let currentIndex = 0;

    document.querySelectorAll('.image-container img').forEach((img, index) => {
        img.addEventListener('click', () => {
            if (currentIndex < imageIds.length) {
                let nextImageId = imageIds[currentIndex];
                let nextImage = document.getElementById(nextImageId);
                nextImage.classList.add('hidden');
                currentIndex++;
            }
        });
    });
});
