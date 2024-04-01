"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function UserTabs() {
    const path = usePathname();
    return (
        <div className="flex mx-auto gap-2 tabs justify-center flex-wrap">
            <Link
                className={path === '/profile' ? 'active' : ''}
                href={'/profile'}
            >
                Profile
            </Link>
            <Link
                className={path === '/orders' ? 'active' : ''}
                href={'/orders'}
            >
                Orders
            </Link>
        </div>
    )
}
