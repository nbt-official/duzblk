const path = location.hash.substring(1); // get path after #
const parts = path.split("/");

const mode = parts[0]; // "play" or movie ID
const id = parts[1] || parts[0]; // e.g., "nbt"

fetch("details.json")
  .then(res => res.json())
  .then(data => {
    const movie = data[id];
    if (!movie) {
      document.getElementById("content").innerHTML = "<h2>Movie not found.</h2>";
      return;
    }

    if (mode === "play") {
      document.getElementById("video-container").style.display = "block";
      document.getElementById("video").src = `https://pixeldrain.com/api/file/${movie.id}`;
      document.getElementById("title").textContent = "Now Playing: " + movie.title;
    } else {
      document.getElementById("title").textContent = movie.title;
      document.getElementById("quality").textContent = "Quality: " + movie.quality;
      document.getElementById("size").textContent = "Size: " + movie.size;
      document.getElementById("download-btn").href = `https://pixeldrain.com/api/file/${movie.id}?download`;
    }
  });
