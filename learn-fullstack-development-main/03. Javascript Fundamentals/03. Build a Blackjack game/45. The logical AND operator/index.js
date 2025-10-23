let hasCompletedCourse = false
let givesCertificate = true

if (hasCompletedCourse === true) {
    if (givesCertificate === true) {
        generateCertificate()
    }
}
if (hasCompletedCourse && givesCertificate ) {
    generateCertificate()
}

function generateCertificate() {
    console.log("Generating certificate....")
}


