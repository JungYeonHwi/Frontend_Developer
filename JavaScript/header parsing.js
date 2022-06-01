fetch(myRequest)
  .then((response) => {
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new TypeError("앗, JSON이 아닙니다!");
    }
    return response.json();
  })
  .then((data) => {
    /* 데이터 처리 */
  })
  .catch((error) => console.error(error));
