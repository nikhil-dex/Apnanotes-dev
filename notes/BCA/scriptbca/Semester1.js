const subjects = [

    { href: "/notes/BCA/subjects1/C.html", name: "C programming" },
    { href: "/notes/BCA/subjects1/DM.html", name: "Discrete Maths" },
    { href: "/notes/BCA/subjects1/FIT.html", name: "FIT" },
    { href: "/notes/BCA/subjects1/TC.html", name: "technical communication" },
    { href: "/notes/BCA/subjects1/WT.html", name: "web technology" },
   
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
