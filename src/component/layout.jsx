import Footer from "./footer"
import Navbar from "./header"

const Layout = ({children}) =>{
    return(
    <div className="flex flex-col min-h-screen">
        <Navbar/>
        <main className="flex justify-center items-center min-h-auto bg-[#FAFAFA] grow">
        {children}
        </main>
        <Footer/>
    </div>
    )
} 

export default Layout;