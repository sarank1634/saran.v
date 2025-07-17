import { EyeIcon } from "lucide-react";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export type StartupCardType = {
  _id: string | number;
  _createAt: Date | string;
  views: number;
  author: { _id: string | number; name: string };
  title: string;
  image: string;
  category: string;
  description: string;
};

export default function StartupCard({ post }: { post: StartupCardType }) {
  const {
    _createAt,
    views,
    author: { _id: authorId, name },
    title,
    _id,
    image,
    category,
    description,
  } = post;

  return (
    <li className="startup-card group flex flex-col gap-2">
      {/* Row 1: Date + Views */}
      <div className="flex-between items-center">
        <p className="start_card_date">{formatDate(_createAt)}</p>
        <div className="flex items-center gap-1.5">
          <EyeIcon className="size-5 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      {/* Row 2: Author */}
      <Link href={`/user/${authorId}`}>
        <p className="text-16-medium line-clamp-1">{name}</p>
      </Link>

      {/* Row 3: Title */}
      <Link href={`/startup/${_id}`}>
        <h3 className="text-26-semibold line-clamp-2">{title}</h3>
      </Link>

      <Link href={`/startup/${_id}`}>
        <p className="startup-card-desc">
          {description}
        </p>
        <img
          src={image || `https://source.unsplash.com/random/800x600?wallpaper&sig=${_id}`}
          alt="startup hero"
          className="startup-card-img"
        />
      </Link>

      <div className="flex-between gap-5 mt-5">
        <Link href={`/?query=${category.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button className="startup-card-btn asChild">
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
}