document.addEventListener('DOMContentLoaded', () => {
    const codeBlocks = document.querySelectorAll('div.highlight');

    codeBlocks.forEach(block => {
        const button = document.createElement('button');
        button.textContent = 'Copy';
        button.style.position = 'absolute';
        button.style.top = '10px';
        button.style.right = '10px';
        button.style.zIndex = '10';
        
        block.style.position = 'relative'; // Để nút được đặt bên trong khối code

        button.onclick = () => {
            const code = block.querySelector('pre').innerText;
            navigator.clipboard.writeText(code).then(() => {
                button.textContent = 'Copied!';
                setTimeout(() => {
                    button.textContent = 'Copy';
                }, 2000);
            });
        };

        block.appendChild(button);
    });
});
