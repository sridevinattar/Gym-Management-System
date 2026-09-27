/* ========================================
   FITZONE GYM MANAGEMENT SYSTEM
   MAIN JAVASCRIPT
======================================== */


/* ========================================
   LOGIN STATUS
======================================== */

function checkLogin() {

    const isLoggedIn =
        localStorage.getItem("fitzoneLoggedIn");

    const currentPage =
        window.location.pathname
            .split("/")
            .pop();


    const publicPages = [
        "",
        "index.html",
        "login.html"
    ];


    if (
        !publicPages.includes(currentPage) &&
        isLoggedIn !== "true"
    ) {

        window.location.href = "login.html";

    }

}


/* ========================================
   LOGIN
======================================== */

function loginUser(email, password) {

    if (!email || !password) {

        alert("Please enter email and password.");

        return false;

    }


    /*
       Demo login credentials.
       This is a frontend-only project.
    */

    const savedEmail =
        localStorage.getItem("fitzoneAdminEmail")
        || "admin@fitzone.com";


    const savedPassword =
        localStorage.getItem("fitzoneAdminPassword")
        || "admin123";


    if (
        email === savedEmail &&
        password === savedPassword
    ) {

        localStorage.setItem(
            "fitzoneLoggedIn",
            "true"
        );

        return true;

    }


    alert(
        "Invalid email or password."
    );

    return false;

}


/* ========================================
   LOGOUT
======================================== */

function logoutUser() {

    localStorage.removeItem(
        "fitzoneLoggedIn"
    );

    window.location.href =
        "login.html";

}


/* ========================================
   SIDEBAR TOGGLE
======================================== */

function toggleSidebar() {

    const sidebar =
        document.getElementById("sidebar");


    if (!sidebar) return;


    sidebar.classList.toggle(
        "sidebar-open"
    );

}


/* ========================================
   DARK MODE
======================================== */

function enableDarkMode() {

    document.body.classList.add(
        "dark-mode"
    );

}


function disableDarkMode() {

    document.body.classList.remove(
        "dark-mode"
    );

}


function toggleDarkMode() {

    const isDark =
        document.body.classList.toggle(
            "dark-mode"
        );


    localStorage.setItem(
        "fitzoneDarkMode",
        isDark
    );

}


/* ========================================
   LOAD DARK MODE
======================================== */

function loadDarkMode() {

    const darkMode =
        localStorage.getItem(
            "fitzoneDarkMode"
        );


    if (darkMode === "true") {

        document.body.classList.add(
            "dark-mode"
        );

    }

}


/* ========================================
   PROFILE DATA
======================================== */

function getProfile() {

    return JSON.parse(
        localStorage.getItem(
            "fitzoneProfile"
        )
    ) || {

        name: "Admin",

        email: "admin@fitzone.com",

        phone: "+91 98765 43210",

        address:
            "FitZone Gym & Fitness Center",

        photo: ""

    };

}


/* ========================================
   SAVE PROFILE
======================================== */

function saveProfile(profile) {

    localStorage.setItem(
        "fitzoneProfile",
        JSON.stringify(profile)
    );

}


/* ========================================
   LOAD ADMIN NAME
======================================== */

function loadAdminName() {

    const profile =
        getProfile();


    const name =
        profile.name || "Admin";


    const topName =
        document.getElementById(
            "topName"
        );


    const topAvatar =
        document.getElementById(
            "topAvatar"
        );


    if (topName) {

        topName.textContent =
            name;

    }


    if (topAvatar) {

        if (profile.photo) {

            topAvatar.innerHTML = `
                <img
                    src="${profile.photo}"
                    alt="Profile"
                >
            `;

        } else {

            topAvatar.textContent =
                name
                    .charAt(0)
                    .toUpperCase();

        }

    }

}


/* ========================================
   TODAY'S DATE
======================================== */

function getToday() {

    const today =
        new Date();


    const year =
        today.getFullYear();


    const month =
        String(
            today.getMonth() + 1
        ).padStart(2, "0");


    const day =
        String(
            today.getDate()
        ).padStart(2, "0");


    return `${year}-${month}-${day}`;

}


/* ========================================
   FORMAT DATE
======================================== */

function formatDate(date) {

    if (!date) return "-";


    const parts =
        date.split("-");


    if (parts.length !== 3) {

        return date;

    }


    return `
        ${parts[2]}-${parts[1]}-${parts[0]}
    `;

}


/* ========================================
   FORMAT CURRENCY
======================================== */

function formatCurrency(amount) {

    return "₹" +
        Number(amount || 0)
            .toLocaleString("en-IN");

}


/* ========================================
   ESCAPE HTML
======================================== */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* ========================================
   GENERATE ID
======================================== */

function generateId(prefix = "ID") {

    return (
        prefix +
        "-" +
        Date.now().toString().slice(-6)
    );

}


/* ========================================
   LOCAL STORAGE HELPERS
======================================== */

function getData(key) {

    return JSON.parse(
        localStorage.getItem(key)
    ) || [];

}


function saveData(key, data) {

    localStorage.setItem(
        key,
        JSON.stringify(data)
    );

}


/* ========================================
   MEMBERS
======================================== */

function getMembers() {

    return getData(
        "fitzoneMembers"
    );

}


function saveMembers(members) {

    saveData(
        "fitzoneMembers",
        members
    );

}


/* ========================================
   TRAINERS
======================================== */

function getTrainers() {

    return getData(
        "fitzoneTrainers"
    );

}


function saveTrainers(trainers) {

    saveData(
        "fitzoneTrainers",
        trainers
    );

}


/* ========================================
   MEMBERSHIPS
======================================== */

function getMemberships() {

    return getData(
        "fitzoneMemberships"
    );

}


function saveMemberships(memberships) {

    saveData(
        "fitzoneMemberships",
        memberships
    );

}


/* ========================================
   ATTENDANCE
======================================== */

function getAttendance() {

    return getData(
        "fitzoneAttendance"
    );

}


function saveAttendance(attendance) {

    saveData(
        "fitzoneAttendance",
        attendance
    );

}


/* ========================================
   PAYMENTS
======================================== */

function getPayments() {

    return getData(
        "fitzonePayments"
    );

}


function savePaymentsData(payments) {

    saveData(
        "fitzonePayments",
        payments
    );

}


/* ========================================
   WORKOUT / DIET PLANS
======================================== */

function getPlans() {

    return getData(
        "fitzonePlans"
    );

}


function savePlans(plans) {

    saveData(
        "fitzonePlans",
        plans
    );

}


/* ========================================
   GYM INFORMATION
======================================== */

function getGymInfo() {

    return JSON.parse(
        localStorage.getItem(
            "fitzoneGymInfo"
        )
    ) || {

        name:
            "FitZone Gym & Fitness Center",

        email:
            "info@fitzone.com",

        phone:
            "+91 98765 43210",

        hours:
            "05:00 AM - 10:00 PM",

        address:
            "Tirupati, Andhra Pradesh, India"

    };

}


function saveGymInfo(info) {

    localStorage.setItem(
        "fitzoneGymInfo",
        JSON.stringify(info)
    );

}


/* ========================================
   NOTIFICATION
======================================== */

function showNotificationMessage() {

    alert(
        "You have no new notifications."
    );

}


/* ========================================
   MOBILE SIDEBAR
======================================== */

document.addEventListener(
    "click",
    function (event) {

        const sidebar =
            document.getElementById(
                "sidebar"
            );


        const menuButton =
            document.querySelector(
                ".menu-toggle"
            );


        if (!sidebar || !menuButton) {
            return;
        }


        if (
            window.innerWidth <= 768 &&
            sidebar.classList.contains(
                "sidebar-open"
            ) &&
            !sidebar.contains(event.target) &&
            !menuButton.contains(event.target)
        ) {

            sidebar.classList.remove(
                "sidebar-open"
            );

        }

    }
);


/* ========================================
   ACTIVE SIDEBAR LINK
======================================== */

function setActiveSidebarLink() {

    const currentPage =
        window.location.pathname
            .split("/")
            .pop();


    const links =
        document.querySelectorAll(
            ".sidebar-menu a"
        );


    links.forEach(link => {

        const href =
            link.getAttribute("href");


        if (
            href &&
            href === currentPage
        ) {

            link.classList.add(
                "active"
            );

        }

    });

}


/* ========================================
   PAGE INITIALIZATION
======================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        checkLogin();

        loadDarkMode();

        loadAdminName();

        setActiveSidebarLink();

    }
);