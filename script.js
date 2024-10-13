document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Read More';
    toggleButton.style.display = 'block';
    toggleButton.style.margin = '20px auto';
    toggleButton.style.padding = '10px 20px';
    toggleButton.style.fontSize = '1rem';
    toggleButton.style.cursor = 'pointer';

    const informationText = document.querySelector('.information');
    let isExpanded = false;

    toggleButton.addEventListener('click', function() {
        if (isExpanded) {
            informationText.style.display = 'none';
            toggleButton.textContent = 'Read More';
        } else {
            informationText.style.display = 'flex';
            toggleButton.textContent = 'Show Less';
        }
        isExpanded = !isExpanded;
    });

    // Initially hide the information text
    informationText.style.display = 'none';
    
    // Append the button to the container
    const container = document.querySelector('.container');
    container.insertBefore(toggleButton, informationText);
});