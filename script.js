// Page load animation
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Search button
document.getElementById("searchBtn").addEventListener("click", () => {
    alert("Search feature coming soon 🔥");
});
const toggleBtn = document.getElementById("themeToggle");

// عند الضغط
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// تحميل الوضع المحفوظ
window.addEventListener("load", () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }
});


