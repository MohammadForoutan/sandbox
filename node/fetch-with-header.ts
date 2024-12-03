fetch("http://google.com", {
  cache: "default",
  keepalive: true,
  referrer: "http://google.com",
})
  .then((data) => data.text())
  .then((data) => {
    console.log({ data });
  });
