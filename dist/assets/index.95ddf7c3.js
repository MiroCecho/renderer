var _a;
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
const info = document.getElementById("info");
(_a = document.getElementById("btTest")) == null ? void 0 : _a.addEventListener("click", () => {
  const URL = "https://rendererdatastorage.blob.core.windows.net/renderdata/data.json?sp=r&st=2023-01-30T08:32:17Z&se=2023-12-31T16:32:17Z&spr=https&sv=2021-06-08&sr=b&sig=D7tzNUh3UNVHCK8BYTOOwM4J8jj6D%2Bvg%2BwlTHMGnKpo%3D";
  fetch(URL, {
    mode: "cors",
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "https://rendererdatastorage.blob.core.windows.net",
      "Content-Type": "application/json"
    }
  }).then((response) => response.json()).then(
    (data) => {
      info.innerText = JSON.stringify(data);
    }
  ).catch((e) => {
    info.innerText = JSON.stringify(e);
  });
});
//# sourceMappingURL=index.95ddf7c3.js.map
