import { EyeIcon } from "lucide-react";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

export type StartupCardType = {
  _id: string | number;
  _createAt: Date | string;
  views: number;
  author: { _id: string | number; name: string };
  title: string;
};

export default function StartupCard({ post }: { post: StartupCardType }) {
  const {
    _createAt,
    views,
    author: { _id: authorId, name },
    title,
    _id,
  } = post;

  return (
    <li className="startup-card group flex flex-col gap-2">
      {/* Row 1: Date */}
      <p className="start_card_date">{formatDate(_createAt)}</p>

      {/* Row 2: Author */}
      <Link href={`/user/${authorId}`}>
        <p className="text-16-medium line-clamp-1">{name}</p>
      </Link>

      {/* Row 3: Views */}
      <div className="flex items-center gap-1.5">
        <EyeIcon className="size-5 text-primary" />
        <span className="text-16-medium">{views}</span>
      </div>

      {/* Row 4: Title */}
      <Link href={`/startup/${_id}`}>
        <h3 className="text-26-semibold line-clamp-2">{title}</h3>
      </Link>
    </li>
  );
}