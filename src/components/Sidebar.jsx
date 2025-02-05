import { Car, Heart, Home } from "lucide-react"
import { Link } from "react-router-dom"


const Sidebar = () => {
    return (
        <>
            <DesktopSidebar />
            <MobileSidebar />

        </>
    )
}

export default Sidebar


const DesktopSidebar = () => {
    return <div className='p-3 md:p-10 border-r min-h-screen w-24 md:w-64 hidden sm:block'>
        <div className="flex flex-col gap- sticky top-10 left-0">
            <div className='w-full'>
                <img src="/logo_cap.svg" alt="logo" className="hidden md:block" />
                <img src="/mobile_logo.svg" alt="logo" className="block md:hidden" />
               
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            
            <ul className="=flex flex-col items-center md:items-start gap-8 space-x-3 space-y-6 " >
                <Link to={"/"} className="flex gap-1">
                    <Home size={"24"} />
                    <span className="font-bold hidden md:block">Inicio</span>
                </Link>
                <Link to={"/favoritos"} className="flex gap-1">
                    <Heart size={"24"} />
                    <span className="font-bold hidden md:block">Favoritos</span>
                </Link>
                <Link to={"/pruebas"} className="flex gap-1">
                    <Car size={"24"} />
                    <span className="font-bold hidden md:block">Prueba</span>
                </Link>
            </ul>
        </div>
    </div>
}

const MobileSidebar = () =>{
    return (
        <div className="flex justify-center gap-10 border-t fixed w-full bottom-0 left-0 bg-white z-10 p-2 sm:hidden">
            <Link to={"/"} ><Home size={"24"} className='cursor-pointer'/></Link>
            
            <Link to={"/favoritos"} ><Heart size={"24"} className='cursor-pointer'/></Link>
            
            <Link to={"/pruebas"} ><Car size={"24"} className='cursor-pointer'/></Link>
            

        </div>
    )

}
