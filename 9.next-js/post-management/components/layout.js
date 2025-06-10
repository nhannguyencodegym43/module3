import Link from "next/link";

export default function Layout({ children }) {
    return (
        <div>
            <nav>
                <Link href="/dashboard">Dashboard</Link> | {" "}
                <Link href="/logout">Logout</Link> | {" "}
            </nav>
            <div>{children}</div>
        </div>
    )
}