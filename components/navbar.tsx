import { Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar(){
    return (
        <nav>
            <div>
                <Link href="/" className="flex item-center gap-2 text-xl font-semibold text-primary">
                <Briefcase  />
                JOb Tracker</Link>

                
                <div>
                    <Link href='/sign-in'>
                    <Button variant="ghost" className="text-gray-700 hover:text-black">Log in</Button></Link>

                    <Link href='/sign-up'>
                    <Button className="bg-primary hover:bg-primary/90">Sign up</Button></Link>
                </div>
            </div>
        </nav>
    )
}