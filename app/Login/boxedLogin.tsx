import Login from "@/components/login"

export default function BoxedLogin() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-300">
            <div className="relative bg-white rounded-2xl shadow-lg w-full max-w-md p-8">

                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-100 rounded-full p-4 shadow-md">
                    <div className="flex items-center justify-center w-20 h-20">
                        <span className="text-center font-bold text-sm">Your Logo Here</span>
                    </div>
                </div>

                <Login />

            </div>
        </div>
    )
}
