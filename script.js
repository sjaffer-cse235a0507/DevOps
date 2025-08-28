const form = document.getElementById("registrationForm");
const popup = document.getElementById("popup");
const popupDetails = document.getElementById("popupDetails");
const closePopup = document.getElementById("closePopup");
const downloadPDF = document.getElementById("downloadPDF");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const readerPhoto = new FileReader();
  const readerSignature = new FileReader();

  const photoFile = document.getElementById("photo").files[0];
  const signatureFile = document.getElementById("signature").files[0];

  readerPhoto.onload = function(e1) {
    readerSignature.onload = function(e2) {
      const details = `
        <p><b>First Name:</b> ${document.getElementById("firstName").value}</p>
        <p><b>Last Name:</b> ${document.getElementById("lastName").value}</p>
        <p><b>Father's Name:</b> ${document.getElementById("fatherName").value}</p>
        <p><b>Mother's Name:</b> ${document.getElementById("motherName").value}</p>
        <p><b>Date of Birth:</b> ${document.getElementById("dob").value}</p>
        <p><b>Gender:</b> ${document.getElementById("gender").value}</p>
        <p><b>Address:</b> ${document.getElementById("address").value}</p>
        <p><b>Qualification:</b> ${document.getElementById("qualification").value}</p>
        <p><b>Mobile Number:</b> ${document.getElementById("mobile").value}</p>
        <p><b>Email:</b> ${document.getElementById("email").value}</p>
        <p><b>Password:</b> ${document.getElementById("password").value}</p>
        <div class="photo-sign">
          <div>
            <p><b>Passport Photo:</b></p>
            <img src="${e1.target.result}">
          </div>
          <div>
            <p><b>Signature:</b></p>
            <img src="${e2.target.result}">
          </div>
        </div>
      `;

      popupDetails.innerHTML = details;
      popup.style.display = "flex";
    }
    readerSignature.readAsDataURL(signatureFile);
  }
  readerPhoto.readAsDataURL(photoFile);
});

// Close popup
closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

// Download as PDF
downloadPDF.addEventListener("click", () => {
  const element = document.getElementById("popupDetails");
  html2pdf().from(element).save("Registration_Details.pdf");
});
