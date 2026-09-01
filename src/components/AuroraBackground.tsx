interface AuroraBackgroundProps {
  videoSrc?: string
  className?: string
}

export default function AuroraBackground({ videoSrc = '/videos/hero-loop.mp4', className = '' }: AuroraBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden bg-ink ${className}`}>
      <div className="absolute inset-0 bg-brand-gradient" />

      <div className="absolute -top-32 -left-20 h-[32rem] w-[32rem] rounded-full bg-accent/40 blur-[110px] animate-blob" />
      <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-cyber/20 blur-[110px] animate-blob-slow" />
      <div className="absolute bottom-0 left-1/4 h-[24rem] w-[24rem] rounded-full bg-accent-light/30 blur-[100px] animate-blob" />

      {/* Optional looping brand video — drop an .mp4 at public/videos/hero-loop.mp4 and it takes over automatically. */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-screen"
        autoPlay
        muted
        loop
        playsInline
        onError={(e) => {
          ;(e.currentTarget as HTMLVideoElement).style.display = 'none'
        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-grid-slate bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_75%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" />
    </div>
  )
}
