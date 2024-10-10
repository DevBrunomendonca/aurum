const VideoBanner = () => {
  return (
    <div className="absolute top-0 -z-10 hidden h-auto w-full md:block">
      <video
        src="/banner-video-aurum.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          minHeight: "800px",
        }}
      />
    </div>
  )
}

export default VideoBanner
