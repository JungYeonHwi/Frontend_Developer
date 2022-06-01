fetch("flowers.jpg")
  .then((response) => {
    if (!response.ok) {
      throw new Error("네트워크 응답이 올바르지 않습니다.");
    }
    return response.blob();
  })
  .then((myBlob) => {
    myImage.src = URL.createObjectURL(myBlob);
  })
  .catch((error) => {
    console.error("fetch에 문제가 있었습니다.", error);
  });
