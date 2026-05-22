// ========== CONFIGURATION ==========
const TIMER_HOURS = 0;
const TIMER_MINUTES = 2;
const TIMER_SECONDS = 2;
const CORRECT_PIN = "2323";

// ========== VARIABLES ==========
let timerInterval;
let currentPin = "";
let timerEnded = false;

// ========== TIMER FUNCTIONALITY ==========
function startTimer() {
    let hours = TIMER_HOURS;
    let minutes = TIMER_MINUTES;
    let seconds = TIMER_SECONDS;

    timerInterval = setInterval(() => {
        // Update display
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

        // Countdown
        if (seconds > 0) {
            seconds--;
        } else if (minutes > 0) {
            minutes--;
            seconds = 59;
        } else if (hours > 0) {
            hours--;
            minutes = 59;
            seconds = 59;
        } else {
            // Timer finished
            clearInterval(timerInterval);
            timerEnded = true;
            showLockScreen();
            playSound('timer-end');
            return;
        }
    }, 1000);
}

function showLockScreen() {
    document.getElementById('timerScreen').classList.remove('active');
    document.getElementById('lockScreen').classList.add('active');
}

// ========== PIN/LOCK FUNCTIONALITY ==========
function addPin(digit) {
    if (currentPin.length < 6) {
        currentPin += digit;
        updatePinDisplay();
        checkPin();
    }
}

function deletePin() {
    if (currentPin.length > 0) {
        currentPin = currentPin.slice(0, -1);
        updatePinDisplay();
        clearError();
    }
}

function clearPin() {
    currentPin = "";
    updatePinDisplay();
    clearError();
}

function updatePinDisplay() {
    const display = currentPin.replace(/./g, '•');
    document.getElementById('pinDisplay').textContent = display || '••••';
}

function checkPin() {
    if (currentPin === CORRECT_PIN) {
        // Correct PIN
        document.getElementById('lockScreen').classList.remove('active');
        showCelebration();
        playSound('unlock');
    } else if (currentPin.length === 4) {
        // Wrong PIN (after 4 digits)
        showError("❌ Wrong PIN! Try again.");
        shakeScreen();
        currentPin = "";
        updatePinDisplay();
        setTimeout(() => clearError(), 2000);
    }
}

function showError(message) {
    document.getElementById('lockError').textContent = message;
}

function clearError() {
    document.getElementById('lockError').textContent = "";
}

function shakeScreen() {
    const lockScreen = document.getElementById('lockScreen');
    lockScreen.classList.add('shake');
    setTimeout(() => {
        lockScreen.classList.remove('shake');
    }, 500);
}

// ========== CELEBRATION FUNCTIONALITY ==========
function showCelebration() {
    document.getElementById('celebrationScreen').classList.add('active');
    startConfetti();
    playSound('celebration');
}

function startConfetti() {
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#ff6b6b', '#4d7fd6', '#ffff00', '#00ff00', '#9933ff', '#ff0000'];

    // Create particles
    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: -10,
            vx: (Math.random() - 0.5) * 8,
            vy: Math.random() * 5 + 3,
            size: Math.random() * 8 + 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.2
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p, index) => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.1; // gravity
            p.rotation += p.rotationSpeed;

            // Draw particle
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation);
            ctx.fillStyle = p.color;
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            ctx.restore();

            // Remove if out of bounds
            if (p.y > canvas.height) {
                particles.splice(index, 1);
            }
        });

        if (particles.length > 0) {
            requestAnimationFrame(animate);
        }
    }

    animate();
}

// ========== SOUND EFFECTS ==========
function playSound(type) {
    // Create a simple beep using Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    switch (type) {
        case 'timer-end':
            oscillator.frequency.value = 800;
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);
            break;
        
        case 'unlock':
            oscillator.frequency.value = 1000;
            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
            break;
        
        case 'celebration':
            for (let i = 0; i < 3; i++) {
                const osc = audioContext.createOscillator();
                const gain = audioContext.createGain();
                osc.connect(gain);
                gain.connect(audioContext.destination);
                
                osc.frequency.value = 800 + (i * 200);
                gain.gain.setValueAtTime(0.2, audioContext.currentTime + (i * 0.2));
                gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + (i * 0.2) + 0.3);
                osc.start(audioContext.currentTime + (i * 0.2));
                osc.stop(audioContext.currentTime + (i * 0.2) + 0.3);
            }
            break;
    }
}

// ========== INITIALIZE ==========
window.addEventListener('load', () => {
    startTimer();
    updatePinDisplay();
});

// Handle window resize for confetti canvas
window.addEventListener('resize', () => {
    const canvas = document.getElementById('confetti');
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});