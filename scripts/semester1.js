const subjects = [
    { href: "/notes/CSE/subjects1/AC.html", name: "Applied Chemistry" },
    { href: "/notes/CSE/subjects1/AM1.html", name: "Applied Mathematics-I" },
    { href: "/notes/CSE/subjects1/AP1.html", name: "Applied Physics-I" },
    { href: "/notes/CSE/subjects1/CS.html", name: "Communication Skills" },
    { href: "/notes/CSE/subjects1/EG.html", name: "Engineering Graphics" },
    { href: "/notes/CSE/subjects1/ES.html", name: "Electrical Science" },
    { href: "/notes/CSE/subjects1/MP.html", name: "Manufacturing Processes" },
    { href: "/notes/CSE/subjects1/C.html", name: "C programming" },
    { href: "/notes/CSE/subjects1/EM.html", name: "Engineering Mechanics" },
    { href: "/notes/CSE/subjects1/EVS.html", name: "Environmental Science" },
    { href: "/notes/CSE/subjects1/HVPE.html", name: "Human Values and Professional Ethics" },
    { href: "/notes/CSE/subjects1/IC.html", name: "Indian Constitution" },
    { href: "/notes/CSE/subjects1/WP.html", name: "Workshop Practice" }
];

const subjectsContainer = document.getElementById('subjects1');

const createSubjectDiv = (subject) => {
    const div = document.createElement('div');
    div.className = 'col-sm-2 mb-3 bg-danger py-4 border rounded container d-flex justify-content-center align-item-center';

    const a = document.createElement('a');
    a.href = subject.href;
    a.className = 'text-decoration-none text-light';
    a.textContent = subject.name;

    div.appendChild(a);
    return div;
};

const createRow = () => {
    const row = document.createElement('div');
    row.className = 'row';
    return row;
};

let row;
subjects.forEach((subject, index) => {
    if (index % 4 === 0) {
        row = createRow();
        subjectsContainer.appendChild(row);
    }
    row.appendChild(createSubjectDiv(subject));
});
