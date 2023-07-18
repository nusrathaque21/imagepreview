const userForm = document.getElementById("userForm");
const msg = document.querySelector(".msg");
const userImg = document.getElementById("user-image");
const imgPrev = document.getElementById("imgPrev");
const gImgs = document.getElementById("gallery-images");
const gPrev = document.getElementById("gPrev");

//User form submit
userForm.onsubmit = (e) => {
  e.preventDefault();

  const form_data = new FormData(e.target);
  const data = Object.fromEntries(form_data);
  console.log(data);

  //validation
  if (!data.name || !data.email || !data.password || !data.phone) {
    msg.innerHTML = creatAlert("All fields Are required!");
  } else if (!isEmail(data.email)) {
    msg.innerHTML = creatAlert("Invalied Email Address!", "warning");
  } else if (!isMobile(data.phone)) {
    msg.innerHTML = creatAlert("Invalied Phone Number!", "info");
  } else {
    msg.innerHTML = creatAlert("Successfully Submitted!", "success");
  }
};

//User photo preview
userImg.onchange = (e) => {
  const imageUrl = URL.createObjectURL(e.target.files[0]);
  imgPrev.setAttribute("src", imageUrl);
  closeBtn.style.display = "block"; // Show the close button
  imgPrev.classList.add("img-thumbnail", "m-2", "bordered");
};

closeBtn.onclick = () => {
  imgPrev.setAttribute("src", "");
  userImg.value = ""; // Clear the file input value
  closeBtn.style.display = "none"; // Hide the close button
};

// gImgs.onchange = (e) => {
//   for (let i = 0; i < e.target.files.length; i++) {
//     e.target.files[i];
//     let imgUrls = "";
//     let imageUrls = URL.createObjectURL(e.target.files[i]);
//     gPrev.setAttribute("src", imageUrls);
//   }
// };
gImgs.onchange = (e) => {
  gPrev.innerHTML = "";

  for (let i = 0; i < e.target.files.length; i++) {
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("d-inline-block", "position-relative");

    const img = document.createElement("img");
    img.src = URL.createObjectURL(e.target.files[i]);
    img.classList.add("img-thumbnail", "m-2"); // Add Bootstrap thumbnail and margin class

    const closeBtn = document.createElement("button");
    closeBtn.innerHTML = ""; // The 'times' symbol (x) for close button
    closeBtn.classList.add(
      "btn-close",
      "position-absolute",
      "top-0",
      "end-0",
      "m-2"
    );
    closeBtn.addEventListener("click", () => removeImage(imgContainer));

    imgContainer.appendChild(img);
    imgContainer.appendChild(closeBtn);
    gPrev.appendChild(imgContainer);
  }
};

function removeImage(container) {
  container.remove();
}
