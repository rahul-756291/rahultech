// Downlaod CV

const link = document.createElement('a');
link.href = "/Resume/Rahul%20Ranjan.pdf";
link.download = "Rahul_CV.pdf";
const downloadButton = document.querySelector('.btns.btn-1');
downloadButton.addEventListener('click', function () {
    link.click();
});

// Nav Bar
const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');

// manu Icons //
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});


// Massage Alert //

function showCustomMessage() {
    document.getElementById('messageBox').style.display = 'block';
}

function closeMessage() {
    document.getElementById('messageBox').style.display = 'none';
}
