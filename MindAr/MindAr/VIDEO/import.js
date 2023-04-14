const scene = new MindAR.Scene();
const video = document.createElement("video");
video.src = "mp4.mp4";
video.autoplay = true;
video.loop = true;
const videoTexture = new MindAR.VideoTexture(video);
const videoPlane = new MindAR.Plane({
  width: 2,
  height: 1.5,
  texture: videoTexture,
});
scene.add(videoPlane);

const tracker = new MindAR.ImageTracker();
const triggerImage = new MindAR.Image("download1.jpg");
tracker.addImage(triggerImage, () => {
  video.play();
  videoPlane.position.copy(triggerImage.position);
  videoPlane.rotation.copy(triggerImage.rotation);
});
scene.add(tracker);
