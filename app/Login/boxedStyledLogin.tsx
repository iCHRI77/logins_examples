import Login from "@/components/login"

export default function BoxedStyledLogin() {
    return (
        <div className="flex items-center justify-center min-h-screen" style={{ backgroundImage: "url(Abstract.gif)", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>  
            <div className="relative rounded-xl shadow-lg w-full max-w-md p-8 isolate aspect-video bg-white/50  ring-1 ring-black/5">

                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-100 rounded-full p-4 shadow-md">
                    <div className="flex items-center justify-center w-20 h-20">
                        <span className="text-center font-bold text-sm">Your Logo Here</span>
                    </div>
                </div>

                <Login />

            </div>
            <p className="fixed top-0  right-0 p-4 text-white text-sm">
                <a target="_blank" href="https://www.freepik.es/video-gratis/estructura-geometrica-abstracta-tres-dimensiones_3544919#fromView=search&page=1&position=3&uuid=4bda22b7-18ca-4c53-a1fe-c1ad25b16af0">Video from BaldasaridStock</a>
            </p>
        </div>
    )
}
