

type Props = {
    videoUrl: string;
}

const VideoPlayer = ({videoUrl}: Props) => {
  return (
    <div className="relative">
      <video className="w-full h-auto object-cover  rounded-lg border-black shadow-2xl" controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default VideoPlayer