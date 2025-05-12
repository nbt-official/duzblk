const id = window.location.pathname.split("/").pop();
fetch('/details.json')
  .then(res => res.json())
  .then(data => {
    const file = data[id];
    if (!file) return document.body.innerHTML = 'File not found.';

    document.getElementById('title').textContent = file.title;
    document.getElementById('size').textContent = "Size: " + file.size;
    document.getElementById('quality').textContent = "Quality: " + file.quality;
    document.getElementById('downloadBtn').href = `https://pixeldrain.com/api/file/${file.pixeldrain_id}?download`;
  });
