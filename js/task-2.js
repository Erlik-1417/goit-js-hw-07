const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.querySelector('.gallery');

const galleryMarkup = images
  .map(image => `<li class="gallery-item"><img src="${image.url}" alt="${image.alt}" class="gallery-img"></li>`)
  .join('');

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);
galleryList.style.display = 'flex';
galleryList.style.gap = '20px';
galleryList.style.listStyle = 'none';
galleryList.style.padding = '0';
document.querySelectorAll('.gallery-img').forEach(img => {
  img.style.width = '100%';
  img.style.maxHeight = '300px';
  img.style.objectFit = 'cover';
});