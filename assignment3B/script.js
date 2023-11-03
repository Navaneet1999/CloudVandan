function submitForm() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const dob = document.getElementById("dob").value;
  const country = document.getElementById("country").value;
  const genderCheckboxes = document.getElementsByName("gender");
  const gender = Array.from(genderCheckboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value)
    .join(", ");
  const profession = document.getElementById("profession").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;

  if (!validateName(firstName)) {
    alert("Please enter a valid first name.");
    return;
  }

  if (!validateName(lastName)) {
    alert("Please enter a valid last name");
    return;
  }

  if (!validateDate(dob)) {
    alert("Please enter a valid date of birth");
    return;
  }

  if (country === "") {
    alert("Please select a country.");
    return;
  }

  if (!validateInputs(gender)) {
    alert("Please select a gender");
    return;
  }

  if (!validateInputs(profession)) {
    alert("Please enter a valid profession");
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email");
    return;
  }

  if (!validateMobile(mobile)) {
    alert("Please enter a valid mobile number");
    return;
  }

  if (
    firstName &&
    lastName &&
    dob &&
    country &&
    gender &&
    profession &&
    email &&
    mobile
  ) {
    const popupData = document.getElementById("popupData");
    popupData.innerHTML = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Profession:</strong> ${profession}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Mobile Number:</strong> ${mobile}</p>
            <button type="button" class="close-popup" onclick="closePopup()">Close</button>
        `;

    const popup = document.getElementById("popup");
    popup.style.display = "block";
  }
}

function validateName(name) {
    return /^[A-Za-z\s]+$/.test(name);
}

function validateDate(date) {
    return /^(\d{4})-(\d{2})-(\d{2})$/.test(date);
}

function validateInputs(input) {
    return input != '';
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateMobile(mobile) {
    return /^\d{10}$/.test(mobile);
}

function resetForm() {
  document.getElementById("surveyForm").reset();
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
  resetForm();
}
