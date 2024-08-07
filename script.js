let noClickCount = 0;

function start() {
    document.getElementById('question').classList.remove('hidden');
}

function handleNoClick() {
    noClickCount++;
    const noBtn = document.getElementById('noBtn');
    const message = document.getElementById('message');
    
    if (noClickCount > 5) {
        message.textContent = "PARA DE TENTAR ESTRAGAR O PLANO DE DEUS Kkkkkkk";
        message.style.color = '#ff4444';
        message.style.opacity = '1';
        message.classList.remove('hidden');
    } else {
        const buttonRect = noBtn.getBoundingClientRect();
        
        // Limitar o movimento do botão "Não" a 30% da largura e altura da tela
        const x = Math.random() * (window.innerWidth * 0.3 - buttonRect.width) + window.innerWidth * 0.35;
        const y = Math.random() * (window.innerHeight * 0.3 - buttonRect.height) + window.innerHeight * 0.35;

        noBtn.style.position = 'absolute';
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    }
}

function handleYesClick() {
    document.getElementById('question').classList.add('hidden');
    document.getElementById('video').src = 'https://www.youtube.com/embed/2xcnHn59M_8?autoplay=1';
    document.getElementById('video').classList.remove('hidden');
    
    // Mostrar o GIF
    document.getElementById('gifContainer').classList.remove('hidden');

    // Clear and show hearts and emojis
    document.getElementById('hearts').innerHTML = '';
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.bottom = `0px`;
        heart.style.fontSize = `${Math.random() * 20 + 20}px`;
        heart.style.opacity = '0';
        heart.style.animationDelay = `${Math.random() * 3}s`;
        heart.style.setProperty('--i', i);
        heart.innerHTML = '❤️';
        document.getElementById('hearts').appendChild(heart);
    }
    document.getElementById('hearts').classList.remove('hidden');

    // Show the acceptance message
    document.getElementById('acceptance').classList.remove('hidden');

    // Mostrar mensagem "Vamos ser felizes!"
    const message = document.getElementById('message');
    message.textContent = "KKKKKKKKKKKKK!";
    message.style.color = '#ff4081'; // Cor rosa
    message.style.opacity = '1';
    message.classList.remove('hidden');
}

// Inicia a aplicação
start();
