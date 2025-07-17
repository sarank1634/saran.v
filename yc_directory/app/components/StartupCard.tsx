import { EyeIcon } from "lucide-react";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

export default function StartupCard({post}: {post: StartupType}) {
    const {_createAt,views, author: {_id: authorId, name}, title,category,description,_id,} = post
    return (
        <div>
            <li className="startup-card group">
            <div className="flex-between">
                <p className="start_card_date">
                    {formatDate(_createAt)}
                </p>
                <div className="flex gap-1.5">
                    <EyeIcon className="size-6 text-primary"/>
                        <span className="text-16-medium">{views}</span>
                </div>

                <div className="flex-between mt-5 gap-5">
                    <div className="flex-1.5">
                        <Link href= {`/user/${authorId}`}>
                            <p className="text-16-medium line-clamp-1">{name}</p>
                        </Link>
                        <link href={`/startup/${post._id}`}>
                            <h3 className="text-26-semibold line-clamp-2"></h3>
                        </link>
                    </div>
                    <link href={`/user/${authorId}`}>
                        <image src="https://placehold.co/600*400" alt="placeholder"
                         width={48} height={48} className="rounded-full"/>
                    </link>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
                </div>
            </div>
            </li>
           
        </div>
    )
}