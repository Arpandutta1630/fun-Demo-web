// Define imagesWithNames globally
const imagesWithNames = [
    { url: 'Ar.jpg', name: 'Arpan' },
    { url: 'Tu.jpg', name: 'Tumin' },
    { url: 'pk.jpg', name: 'Pritam' },
    { url: 'ju.jpg', name: 'Jubo' },
    // Add more images with names as needed
];

document.addEventListener('DOMContentLoaded', function () {
    const imageRow = document.getElementById('imageRow');
    const selectedImage = document.getElementById('selectedImage');
    const selectedImageName = document.getElementById('selectedImageName');
    const voteButton = document.getElementById('voteButton');

    // Create image elements and append them to the row
    imagesWithNames.forEach((data, index) => {
        const img = document.createElement('img');
        img.src = data.url;
        img.alt = data.name;
        img.className = 'animated-image'; // Add a class for additional styling or animation

        // Add a click event listener to select the image
        img.addEventListener('click', function () {
            // Hide the selected image and name
            selectedImage.style.display = 'none';
            selectedImageName.style.display = 'none';

            // Show the image name below the clicked image
            selectedImageName.textContent = data.name;
            selectedImageName.style.display = 'block';

            // Store the index for reference
            selectedImageName.dataset.index = index;

            // Show the "Vote" button
            voteButton.removeAttribute('hidden');
        });

        imageRow.appendChild(img);
    });
});

function voteForImage() {
    const selectedImageName = document.getElementById('selectedImageName');
    const selectedIndex = selectedImageName.dataset.index;

    if (selectedIndex !== undefined) {
        // Perform the voting logic (e.g., send data to a server or update local data)
        alert(`Voted for ${imagesWithNames[selectedIndex].name}`);
    } else {
        alert('Please select an image before voting.');
    }
}
