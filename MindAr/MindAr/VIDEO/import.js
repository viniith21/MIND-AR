const MindAR = require("mind-ar-sdk");

// Load the video file
const videoFile = "mp4.mp4";
const video = new MindAR.Video(videoFile);

// Set up the AR marker
const arMarkerFile = "download1.jpg";
const arMarker = new MindAR.ARMarker(arMarkerFile);

// Create a new AR project
const project = new MindAR.ARProject();

// Add the video and AR marker to the project
project.addVideo(video);
project.addMarker(arMarker);

// Set up the trigger to play the video when the AR marker is scanned
project.addTrigger(arMarker, function () {
  video.play();
});

// Start the Mind AR app and scan the AR marker to play the video
MindAR.startApp(project);
