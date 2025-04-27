// Kyle Yung's work
import Link from 'next/link';

export default function Main() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen" style={{ backgroundColor: "#2B2B53", color: "#FAF9FF" }}>
             <div className="p-10">
                <h1 className=" text-center text-5xl p-10">Welcome to Space Gatcha!</h1>
                <h2 className="text-center text-3xl p-6">How to Play:</h2>
                <ul className="text-xl space-y-4 list-decimal list-inside text-center">
                    <li>Press the Play Button Below</li>
                    <li>Click the GATCHA Button</li>
                    <li>Profit!</li>
                </ul>
             </div>
             <div className="p-6">
                <Link href="/gatcha" className="p-4 rounded" style={{backgroundColor: "#3E7CB1", color: "#8AF3FF"}}>Play</Link>
            </div>
        </div>
    );
}
  