// This script loads reusable components and inserts them into the page.

document.addEventListener("DOMContentLoaded", function () {
    // Load the header_subpage.html
    fetch("components/header_subpage.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load header_subpage.html");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("header-subpage").innerHTML = data;
        })
        .catch(error => console.error("Error loading header-subpage:", error));

    // Load the footer.html
    fetch("components/footer.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load footer.html");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));

    // Load the buttons 
    fetch("components/button_CRIRES_retrieval.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load button_CRIRES_retrieval.html");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("button_CRIRES_retrieval").innerHTML = data;
        })
        .catch(error => console.error("Error loading buttons:", error));
    fetch("components/button_Luhman_16_J_band.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load button_Luhman_16_J_band.html");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("button_Luhman_16_J_band").innerHTML = data;
        })
        .catch(error => console.error("Error loading buttons:", error));
    fetch("components/button_NACO_PIPPIN.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load button_NACO_PIPPIN.html");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("button_NACO_PIPPIN").innerHTML = data;
        })
        .catch(error => console.error("Error loading buttons:", error));
    fetch("components/button_VO_line_list.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load button_VO_line_list.html");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("button_VO_line_list").innerHTML = data;
        })
        .catch(error => console.error("Error loading buttons:", error));
});