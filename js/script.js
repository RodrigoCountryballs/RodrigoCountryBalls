// Menu interativo para mobile (opcional)
const btn = document.getElementById("menu-btn");
const links = document.getElementById("menu-links");

if(btn && links){
  btn.addEventListener("click", () => {
    links.classList.toggle("show");
  });
}

// Galeria de vídeos dinâmica (para videos.html)
const videoContainer = document.querySelector(".video-list");

if(videoContainer){
  const videos = [
    { titulo: "Vídeo 1", url: "https://www.youtube.com/watch?v=ID_DO_VIDEO1" },
    { titulo: "Vídeo 2", url: "https://www.youtube.com/watch?v=ID_DO_VIDEO2" },
    { titulo: "Vídeo 3", url: "https://www.youtube.com/watch?v=ID_DO_VIDEO3" }
  ];

  videos.forEach(video => {
    const a = document.createElement("a");
    a.href = video.url;
    a.target = "_blank";
    a.textContent = video.titulo;
    videoContainer.appendChild(a);
  });
}
