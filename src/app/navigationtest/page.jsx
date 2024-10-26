"use client"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"


const NavigationTestPage = () => {

    // CLIENT SIDE NAVIGATION
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const q = searchParams.get("q")

    console.log(q)

    const handleClick = () => {
        console.log("clicked")
        // router.push("/") 
        router.forward()
        // router.refresh("/")
        // router.back()
    }

    return (
        <div>
            <Link href="/" prefetch={false}>Click here</Link>
            <button onClick={handleClick}>write and redirect</button>
        </div>
    )
}

export default NavigationTestPage