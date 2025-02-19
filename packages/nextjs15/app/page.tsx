import Link from "next/link";

export default function Home() {
    return (
        <div className="home">
            <h1>
                Choose client or server rendering
            </h1><br/>
            <div>
                <Link href="/client">Client</Link><br/><br/>
                <Link href="/server">Server</Link>
            </div>
        </div>
    );
}
