const info:HTMLElement=document.getElementById("info") as any;

document.getElementById("btTest")?.addEventListener("click", () => {
   const URL = "https://rendererdatastorage.blob.core.windows.net/renderdata/data.json?sp=r&st=2023-01-30T08:32:17Z&se=2023-12-31T16:32:17Z&spr=https&sv=2021-06-08&sr=b&sig=D7tzNUh3UNVHCK8BYTOOwM4J8jj6D%2Bvg%2BwlTHMGnKpo%3D";
  fetch(URL, {
    mode: 'cors',
    method: 'GET',
    headers: {
      "Access-Control-Allow-Origin": "https://rendererdatastorage.blob.core.windows.net",
      'Content-Type': "application/json"
    }
  })
    .then(response => response.json())
    .then((data) => {
      info.innerText=JSON.stringify(data);
    }
    ).catch(e =>{ 
      info.innerText=JSON.stringify(e);
    }); 
})

