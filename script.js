document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Crear el enlace mailto
    const mailtoLink = `mailto:aldoarturo132@gmail.com?subject=Mensaje de ${name}&body=Nombre: ${name}%0AEmail: ${email}%0AMensaje: ${message}`;

    // Abrir el cliente de correo predeterminado del usuario
    window.location.href = mailtoLink;

    // Mostrar mensaje de confirmación
    const confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.style.display = 'block';  // Muestra el mensaje

    // Limpiar el formulario
    document.getElementById('contact-form').reset();
});
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            guessedLetters[i] = letter;
            correctGuess = true;
        }
    }

    if (!correctGuess) {
        attempts--;
        drawHangman();
    }

    attemptsElement.textContent = attempts;
    wordDisplay.innerHTML = guessedLetters.map(letter => `<span>${letter}</span>`).join('');

    if (guessedLetters.join('') === word) {
        messageElement.textContent = '¡Ganaste!';
        disableLetters();
    } else if (attempts === 0) {
        messageElement.textContent = `Perdiste. La palabra era: ${word}`;
        disableLetters();
    }
}

function disableLetters() {
    const buttons = lettersContainer.querySelectorAll('button');
    buttons.forEach(button => button.disabled = true);
}

function drawHangman() {
    if (attempts === 5) {
        ctx.beginPath();
        ctx.moveTo(10, 190);
        ctx.lineTo(100, 190);
        ctx.stroke();
    } else if (attempts === 4) {
        ctx.moveTo(55, 190);
        ctx.lineTo(55, 20);
        ctx.stroke();
    } else if (attempts === 3) {
        ctx.moveTo(55, 20);
        ctx.lineTo(130, 20);
        ctx.stroke();
    } else if (attempts === 2) {
        ctx.moveTo(130, 20);
        ctx.lineTo(130, 40);
        ctx.stroke();
    } else if (attempts === 1) {
        ctx.beginPath();
        ctx.arc(130, 60, 20, 0, Math.PI * 2);
        ctx.stroke();
    } else if (attempts === 0) {
        ctx.moveTo(130, 80);
        ctx.lineTo(130, 130);
        ctx.stroke();
        ctx.moveTo(130, 100);
        ctx.lineTo(110, 120);
        ctx.stroke();
        ctx.moveTo(130, 100);
        ctx.lineTo(150, 120);
        ctx.stroke();
        ctx.moveTo(130, 130);
        ctx.lineTo(110, 160);
        ctx.stroke();
        ctx.moveTo(130, 130);
        ctx.lineTo(150, 160);
        ctx.stroke();
    }
}

startGameBtn.onclick = () => {
    if (wordInput.value.trim() === '') {
        alert('Por favor, introduce una palabra válida.');
        return;
    }
    document.getElementById('setup-game').style.display = 'none';
    gameSection.style.display = 'block';
    initGame();
};