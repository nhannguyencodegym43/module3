import Link from "next/link";

export default function Layout({children}) {
    return (
        <>
            <h1>Toolbars</h1>
            <ul>
                <li>
                    <Link href="/bai1/home">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/bai1/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/bai1/contact">
                        Contact
                    </Link>
                </li>
            </ul>
            <div>{children}</div>
        </>
    )
}