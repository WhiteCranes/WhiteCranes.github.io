const videoElement = document.getElementById("bgVideo");
const adjustVideoSize = () => {
  // 计算视频的宽高比
  const videoAspectRatio =
    videoElement.videoWidth / videoElement.videoHeight;
  const windowAspectRatio = window.innerWidth / window.innerHeight;
  if (windowAspectRatio < videoAspectRatio) {
    // 如果容器比例大于视频比例
    videoElement.style.width = "auto";
    videoElement.style.height = "100%";
  } else {
    // 如果容器比例小于等于视频比例
    videoElement.style.width = "100%";
    videoElement.style.height = "auto";
  }
};
const imgElement = document.getElementById("bgimg");
const adjustimgSize = () => {
  // 计算视频的宽高比
  const imgAspectRatio = getc("Ratio");
  const windowAspectRatio = window.innerWidth / window.innerHeight;
  if (windowAspectRatio < imgAspectRatio) {
    // 如果容器比例大于视频比例
    imgElement.style.width = "auto";
    imgElement.style.height = "100%";
  } else {
    // 如果容器比例小于等于视频比例
    imgElement.style.width = "100%";
    imgElement.style.height = "auto";
  }
};
// // 每当窗口大小发生变化时进行调整
window.addEventListener("resize", adjustimgSize);
// 当视频的元数据已经加载（包括尺寸和持续时间）时，进行一次调整
videoElement.addEventListener("loadedmetadata", adjustVideoSize);

// // 每当窗口大小发生变化时进行调整
window.addEventListener("resize", adjustVideoSize);