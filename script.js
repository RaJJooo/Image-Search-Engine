let search = document.getElementById("search");
let btn = document.getElementById("btn");
const image_container = document.querySelector(".image-container");
const showmore = document.querySelector(".showmore");
const showmorediv = document.querySelector(".showmorediv");

let page = 1;

btn.addEventListener("click", async() => {
  image_container.innerHTML = "";
  page = 1;
  await fetchimage();
});

async function fetchimage() {
  const search_value = search.value;
  if (search_value === "") {
    alert("Please Enter a Search");
    return;
  } else {
    const key = "vnMCGavgnTjaf_415K0UdnROwSbIEkg88Q_dXtpASVQ";
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${search_value}&client_id=${key}&per_page=15`;
    let data = await fetch(url);
    data = await data.json();
    display(data);
    showmore.style.display = "block";
    console.log(showmorediv);
    showmorediv.style.alignItems = "center";
  }
}

function display(data) {
  data.results.forEach((element) => {
    const img = document.createElement("img");
    img.src = element.urls.regular;
    image_container.appendChild(img);
  });
}
showmore.addEventListener("click", () => {
  page++;
  fetchimage();
});
