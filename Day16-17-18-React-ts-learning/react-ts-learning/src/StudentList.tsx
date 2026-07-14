function StudentList() {

    const students = [
        "Toko",
        "Universe",
        "Yuzhou",
        "Nakul"
    ];

    return (
        <>
            <h1>Students</h1>

            <ul>
                {students.map((student, index) => (
                    <li key={index}>{student}</li>
                ))}
            </ul>
        </>
    );
}

export default StudentList;