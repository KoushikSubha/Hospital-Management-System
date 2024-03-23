let patients = [];
let doctors = [];

function showAddPatientForm() {
    document.getElementById('add-patient-form').style.display = 'block';
}

function admitPatient() {
    const patientName = document.getElementById('patient-name').value;
    const patientCondition = document.getElementById('patient-condition').value;
    const patient = { name: patientName, condition: patientCondition };
    patients.push(patient);
    renderPatientList();
    document.getElementById('add-patient-form').style.display = 'none';
}

function renderPatientList() {
    const patientList = document.getElementById('patient-list');
    patientList.innerHTML = '';
    patients.forEach(patient => {
        const patientItem = document.createElement('div');
        patientItem.textContent = `${patient.name} - ${patient.condition}`;
        patientList.appendChild(patientItem);
    });
}

function showAddDoctorForm() {
    document.getElementById('add-doctor-form').style.display = 'block';
}

function addDoctor() {
    const doctorName = document.getElementById('doctor-name').value;
    const doctorSpecialty = document.getElementById('doctor-specialty').value;
    const doctor = { name: doctorName, specialty: doctorSpecialty };
    doctors.push(doctor);
    renderDoctorList();
    document.getElementById('add-doctor-form').style.display = 'none';
}

function renderDoctorList() {
    const doctorList = document.getElementById('doctor-list');
    doctorList.innerHTML = '';
    doctors.forEach(doctor => {
        const doctorItem = document.createElement('div');
        doctorItem.textContent = `${doctor.name} - ${doctor.specialty}`;
        doctorList.appendChild(doctorItem);
    });
}
