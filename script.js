document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll("nav ul li a");

  menuLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      menuLinks.forEach((link) => link.classList.remove("active"));
      this.classList.add("active");
    });
  });

  const currentHash = window.location.hash;
  if (currentHash) {
    const activeLink = document.querySelector(
      `nav ul li a[href="${currentHash}"]`
    );
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }
});

// Ambil elemen gambar profil dan modal
var profilePicture = document.getElementById("profilePicture");
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImage");
var span = document.getElementsByClassName("close")[0];

// Ketika gambar profil diklik, tampilkan modal dengan gambar yang sama
profilePicture.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};

// Ketika tombol close diklik, sembunyikan modal
span.onclick = function () {
  modal.style.display = "none";
};

// Tambahkan kode JavaScript berikut pada file script.js Anda
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName("gambar");

// Create a function to open the modal
function openModal() {
  modal.style.display = "block";
  modalImg.src = this.src;
  var caption = document.getElementById("caption");
  caption.innerHTML = this.alt;
}

// Add event listeners to the images
for (var i = 0; i < img.length; i++) {
  img[i].addEventListener("click", openModal);
}
