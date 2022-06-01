const myBody = new Blob();

addEventListener("fetch", function (event) {
  // fetch를 가로채는 ServiceWorker
  event.respondWith(
    new Response(myBody, {
      headers: { "Content-Type": "text/plain" },
    })
  );
});
