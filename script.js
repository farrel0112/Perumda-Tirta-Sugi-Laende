window.onload = function() {
    // Menambahkan event listener ke setiap link di navigasi
    let navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            // Cek apakah link menuju ke bagian dalam halaman atau ke halaman lain
            let target = this.getAttribute("href");
            if (target.startsWith("#")) {
                event.preventDefault(); // Mencegah reload halaman

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

            // Simpan ke localStorage sebagai contoh (harusnya ke backend)
            localStorage.setItem("userPhone", phone);
            localStorage.setItem("userPassword", password);
            alert("Registrasi berhasil! Silakan login.");
            window.location.href = "login.html";
        });
    }

    // Form login
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
                window.location.href = "index.html"; // Redirect ke halaman utama
            } else {
                alert("Nomor telepon atau password salah!");
            }
        });
    }
};
