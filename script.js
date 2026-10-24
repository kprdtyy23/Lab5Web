function toggleElemen() {
    const elemen = document.getElementById("pesan");

    if (elemen.style.display === "none") {
        elemen.style.display = "block";
    } else {
        elemen.style.display = "none";
    }
}