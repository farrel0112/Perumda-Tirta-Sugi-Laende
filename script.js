function toggleSidebar() {
	document.getElementById('sidebar').classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function() {
    const user = JSON.parse(localStorage.getItem("user"));
    const loginBtn = document.getElementById("loginBtn");

    if (user && loginBtn) {
        loginBtn.innerHTML = '<i class="fas fa-user"></i>';
        loginBtn.href = "profil.html";
    }
});

document.addEventListener("DOMContentLoaded", function() {
		let elements = document.querySelectorAll('.animate');
		elements.forEach(el => el.classList.add('show'));
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".fitur-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3
  });

  cards.forEach((card) => {
    observer.observe(card);
  });
});

function checkLoginRedirect() {
	const user = JSON.parse(localStorage.getItem("user"));
	if (!user) {
		alert("Anda harus login terlebih dahulu.");
		window.location.href = "login.html";
	}
}

window.onload = function() {
    let navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            let target = this.getAttribute("href");
            if (target.startsWith("#")) {
                event.preventDefault();

                let section = document.querySelector(target);
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                }
            }
            console.log("Navigasi ke:", target);
        });
    });
	let registerForm = document.getElementById("register-form");
    if (registerForm) {
        registerForm.addEventListener("submit", function(event) {
            event.preventDefault();
            let phone = document.getElementById("phone").value;
            let password = document.getElementById("password").value;
            let confirmPassword = document.getElementById("confirm-password").value;

            if (password !== confirmPassword) {
                alert("Password tidak cocok!");
                return;
            }
            localStorage.setItem("userPhone", phone);
            localStorage.setItem("userPassword", password);
            alert("Registrasi berhasil! Silakan login.");
            window.location.href = "login.html";
        });
    }

    let loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            let phone = document.getElementById("phone").value;
            let password = document.getElementById("password").value;

            let storedPhone = localStorage.getItem("userPhone");
            let storedPassword = localStorage.getItem("userPassword");

            if (phone === storedPhone && password === storedPassword) {
                alert("Login berhasil!");
                window.location.href = "index.html";
            } else {
                alert("Nomor telepon atau password salah!");
            }
        });
    }
};
