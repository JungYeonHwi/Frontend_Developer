const formData = new FormData();
const photos = document.querySelector('input[type="file"][multiple]');

formData.append("title", "제주도 수학여행");
for (let i = 0; i < photos.files.length; i++) {
  formData.append(`photos_${i}`, photos.files[i]);
}

fetch("https://example.com/posts", {
  method: "POST",
  body: formData,
})
  .then((response) => response.json())
  .then((result) => {
    console.log("성공:", result);
  })
  .catch((error) => {
    console.error("실패:", error);
  });
