const id = window.location.pathname.split("/").pop();
fetch('/details.json')
  .then(res => res.json())
  .then(data => {
    const file = data[id];
    if (!file) return document.body.innerHTML = 'File not found.';

    document.getElementById('video').src = `https://pixeldrain.com/api/file/${file.pixeldrain_id}`;
  });
