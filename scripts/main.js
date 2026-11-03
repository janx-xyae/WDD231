const courses = [
    {
        
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces the concept of smart devices and programming structural pathways.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces the concepts of layouts via modern styling blocks and structures.',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 3,
        certificate: 'Web and Computer Programming',
        description: 'Functions and variable scoping architectures applied to programming frameworks.',
        technology: ['Python'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 3,
        certificate: 'Web and Computer Programming',
        description: 'Dynamic structure alterations through user-triggered script integrations.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 5,
        certificate: 'Web and Computer Programming',
        description: 'Object-oriented patterns and abstraction models managed systematically.',
        technology: ['C#'],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Web Frontend Development I',
        credits: 5,
        certificate: 'Web and Computer Programming',
        description: 'Building multi-view experiences processing external state changes cleanly.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false
    }
];

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;

    const menuButton = document.getElementById("menuButton");
    const mainNav = document.querySelector("nav");

    menuButton.addEventListener("click", () => {
        mainNav.classList.toggle("open");
        menuButton.innerHTML = mainNav.classList.contains("open") ? "&#10006;" : "&#9776;";
    });

    const container = document.getElementById("courseContainer");
    const creditsCounter = document.getElementById("totalCredits");

    function displayCourses(filteredList) {
        container.innerHTML = "";
        
        filteredList.forEach(course => {
            const card = document.createElement("div");
            card.classList.add("course-card");
            if (course.completed) {
                card.classList.add("completed");
            }

            card.innerHTML = `
                <h3>${course.subject} ${course.number}</h3>
                <p><strong>${course.title}</strong> (${course.credits} Credits)</p>
                <p>${course.description}</p>
            `;
            container.appendChild(card);
        });

        const activeCredits = filteredList.reduce((sum, item) => sum + item.credits, 0);
        creditsCounter.textContent = activeCredits;
    }

    const buttons = document.querySelectorAll(".filter-btn");
    
    function updateButtonUI(activeBtn) {
        buttons.forEach(btn => btn.classList.remove("active-filter"));
        activeBtn.classList.add("active-filter");
    }

    document.getElementById("btnAll").addEventListener("click", (e) => {
        displayCourses(courses);
        updateButtonUI(e.target);
    });

    document.getElementById("btnWdd").addEventListener("click", (e) => {
        const wddCourses = courses.filter(course => course.subject === "WDD");
        displayCourses(wddCourses);
        updateButtonUI(e.target);
    });

    document.getElementById("btnCse").addEventListener("click", (e) => {
        const cseCourses = courses.filter(course => course.subject === "CSE");
        displayCourses(cseCourses);
        updateButtonUI(e.target);
    });

    displayCourses(courses);
});