

type Props = {
    videoUrl: string;
}

const VideoPlayer = ({videoUrl}: Props) => {
  return (
    <div className="relative">
      <video className="w-[500px] h-[500px] rounded-lg shadow-md" controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default VideoPlayer