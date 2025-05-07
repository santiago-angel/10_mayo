document.addEventListener('DOMContentLoaded', function() {
    // Mostrar mensaje de felicitación al cargar la página
    /* setTimeout(() => {
        alert('¡Feliz Día de las Madres a todas mis compañeras mamás!');
    }, 500); */
      
        // Efecto de máquina de escribir
        const text = "Ser madre es usar el corazón por fuera del cuerpo, es dar todo sin esperar nada a cambio, es el trabajo más importante del mundo.";
        const typingElement = document.getElementById('typing-text');
        let i = 0;
        let dots = 0;
        let typingComplete = false;
        
        function typeWriter() {
            if (i < text.length) {
                // Mostrar texto + puntos animados
                let displayText = text.substring(0, i+1);
                typingElement.innerHTML = displayText + '<span class="typing-dots">' + '.'.repeat(dots % 4) + '</span>';
                
                i++;
                dots++;
                
                // Velocidad de escritura variable (más lento en comas y puntos)
                const speed = text.charAt(i) === ',' || text.charAt(i) === '.' ? 300 : Math.random() * 100 + 50;
                setTimeout(typeWriter, speed);
            } else {
                typingComplete = true;
                typingElement.innerHTML = text; // Quitar los puntos al finalizar
            }
        }
        // Iniciar el efecto de escritura
        setTimeout(typeWriter, 1000);
        
    // Configurar el botón de sorpresa
    const surpriseBtn = document.getElementById('surpriseBtn');
    const flowersContainer = document.getElementById('flowers');
    
    surpriseBtn.addEventListener('click', function() {
        // Cambiar clases para mostrar flores
        flowersContainer.className = 'flowers-visible';
        
        // Generar flores
        const flowers = ['🌸', '🌹', '🌺', '🌻', '🌼', '🌷', '💐', '🥀'];
        let flowersHTML = '';
        
        for (let i = 0; i < 30; i++) {
            const randomFlower = flowers[Math.floor(Math.random() * flowers.length)];
            const randomDelay = Math.random() * 3;
            const randomSize = 1 + Math.random() * 2;
            
            flowersHTML += `<span class="flower" style="
                animation-delay: ${randomDelay}s;
                font-size: ${randomSize}rem;
            ">${randomFlower}</span>`;
        }
        
        flowersContainer.innerHTML = flowersHTML;
        
        // Cambiar el texto del botón
        surpriseBtn.textContent = '¡Eres increíble!';
        surpriseBtn.style.backgroundColor = '#4CAF50';
        
        // Deshabilitar el botón después de hacer clic
        surpriseBtn.disabled = true;
    });
});