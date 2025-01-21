import Login from "@/components/login"

export default function BasicLogin() {
    return (
        <div className="flex min-h-screen">

            <div className="hidden md:flex w-1/2 items-center justify-center max-w-80 mx-auto">
                <img src="yourLogoHere.png" alt="logo" />
            </div>

            <div className="w-full md:w-1/2 flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    <Login  />
                </div>
            </div>
        </div>
    )
}
