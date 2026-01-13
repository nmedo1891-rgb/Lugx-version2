// Page load animation
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Search button
// ================= DARK MODE LOGIC =================
window.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("themeToggle");
    const darkIcon = document.getElementById("darkIcon");
    const lightIcon = document.getElementById("lightIcon");

    // لو الصفحة مفيهاش زرار الدارك مود
    if (!toggleBtn || !darkIcon || !lightIcon) return;

    // تحميل الوضع المحفوظ
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        darkIcon.style.display = "none";
        lightIcon.style.display = "block";
    } else {
        document.body.classList.remove("dark");
        darkIcon.style.display = "block";
        lightIcon.style.display = "none";
    }

    // عند الضغط على الزرار
    toggleBtn.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark");

        localStorage.setItem("theme", isDark ? "dark" : "light");

        darkIcon.style.display = isDark ? "none" : "block";
        lightIcon.style.display = isDark ? "block" : "none";
    });
});


// تحميل الوضع المحفوظ
window.addEventListener("load", () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }
});











