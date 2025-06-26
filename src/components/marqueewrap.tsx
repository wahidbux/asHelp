import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const reviews = [
  {
    name: "Hitesh",
    username: "@hitesh",
    body: "Lowkey didn't expect much but omg it's fire 🔥",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Nishant",
    username: "@femb",
    body: "“Ngl, this kinda ate. Might be their best work yet .",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Vaibhav",
    username: "@vaibhav",
    body: "I was struggling and then I saw theirs… instant inspo. Came in clutch fr",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Siddharth",
    username: "@siddharth",
    body: "If I hadn't ordered their assignment, I probably would've missed the deadline ",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Vasu",
    username: "@vasu",
    body: "Saw the reviews, gave it a shot — not disappointed at all.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Aayush",
    username: "@ayush",
    body: "Lowkey didn't think they'd pull it off but they nailed it .",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "bg-black/50 text-white border-gray-800",
        "backdrop-blur-md"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/60">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-white/90">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-black">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-black"></div>
    </div>
  );
}
