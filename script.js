
  document.addEventListener("DOMContentLoaded", function() {
    const imageContainer = document.getElementById('imageContainer');
    const loadButton = document.getElementById('loadButton');

    
    const imageData = [
      {"image": "https://picsum.photos/id/237/200/200"},
      {"image": "https://picsum.photos/id/234/200/200"},
      {"image": "https://picsum.photos/id/235/200/200"},
      
      {"image": "https://picsum.photos/id/236/200/200"},
      {"image": "https://picsum.photos/id/239/200/200"},
      {"image": "https://picsum.photos/id/238/200/200"},
      
      {"image": "https://picsum.photos/id/233/200/200"},
      {"image": "https://picsum.photos/id/240/200/200"},
      {"image": "https://picsum.photos/id/231/200/200"},
      
      {"image": "https://picsum.photos/id/232/200/200"},
      {"image": "https://picsum.photos/id/241/200/200"},
      {"image": "https://picsum.photos/id/240/200/200"},
      
      {"image": "https://picsum.photos/id/243/200/200"},
      {"image": "https://picsum.photos/id/240/200/200"},
      {"image": "https://picsum.photos/id/230/200/200"},
      
      {"image": "https://picsum.photos/id/234/200/200"},
      {"image": "https://picsum.photos/id/243/200/200"},
      {"image": "https://picsum.photos/id/242/200/200"},
      
      {"image": "https://picsum.photos/id/255/200/200"},
      
      {"image": "https://picsum.photos/id/247/200/200"},
      {"image": "https://picsum.photos/id/248/200/200"},
      {"image": "https://picsum.photos/id/249/200/200"},
      
      {"image": "https://picsum.photos/id/251/200/200"},
      {"image": "https://picsum.photos/id/250/200/200"},
      {"image": "https://picsum.photos/id/253/200/200"},
    ];

    // Function to create image elements and append them to the container
    function loadImages(images) {
      images.forEach(imageData => {
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('image-container');

        const img = document.createElement('img');
        img.classList.add('user-image');
        img.src = imageData.image;
        img.alt = 'User Image';

        imageDiv.appendChild(img);
        imageContainer.appendChild(imageDiv);
      });
    }

    // Event listener for the button click
    loadButton.addEventListener('click', function() {
      loadImages(imageData);
      loadButton.style.display = 'none'; // Hide the button after clicking
      imageContainer.style.display = 'grid'; // Show the image container
    });
  });
