// create an AR scene
const scene = new MindAR.Scene();

// add a video element to the scene
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

// detect a trigger image and play the video when detected
const tracker = new MindAR.ImageTracker();
const triggerImage = new MindAR.Image("download1.jpg");
tracker.addImage(triggerImage, () => {
  video.play();
  videoPlane.position.copy(triggerImage.position);
  videoPlane.rotation.copy(triggerImage.rotation);
});
scene.add(tracker);
