// components/Loader.js
export default function Loader() {
    const squares = [
      { mt: "-6", ml: "-6", delay: "animate-delay-[0ms]" },
      { mt: "-6", ml: "0", delay: "animate-delay-[75ms]" },
      { mt: "-6", ml: "6", delay: "animate-delay-[150ms]" },
      { mt: "0", ml: "-6", delay: "animate-delay-[225ms]" },
      { mt: "0", ml: "0", delay: "animate-delay-[300ms]" },
      { mt: "0", ml: "6", delay: "animate-delay-[375ms]" },
      { mt: "6", ml: "-6", delay: "animate-delay-[450ms]" },
      { mt: "6", ml: "0", delay: "animate-delay-[525ms]" },
      { mt: "6", ml: "6", delay: "animate-delay-[600ms]" },
    ];
  
    return (
      <div className="relative w-12 h-12">
        {squares.map((s, i) => (
          <div
            key={i}
            className={`
              absolute w-2.5 h-2.5 bg-gray-300
              top-1/2 left-1/2
              mt-${s.mt} ml-${s.ml}
              animate-pulse opacity-0
              ${s.delay}
            `}
            style={{
              animationDuration: "675ms",
              animationDirection: "alternate",
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-in-out",
              animationName: "fadeInOut",
            }}
          ></div>
        ))}
  
        {/* Keyframe definition using Tailwind's arbitrary CSS */}
        <style jsx>{`
          @keyframes fadeInOut {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}</style>
      </div>
    );
  }
  