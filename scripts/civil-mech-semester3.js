const subjects = [
    { href: "/notes/CIVIL/subjects3/CM.html", name: "Computaional Mothed" },
    { href: "/notes/CIVIL/subjects3/IKS.html", name: "Indian Knowledge System" },

];

const subjectsContainer = document.getElementById('subjects3');

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
