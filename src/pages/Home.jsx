import SideBar from '../components/sidebar.jsx';
import leSe_bg from '../assets/images/leSe_bg.jpg';

export default function Home(){
    return(
        <div
            className="relative overflow-hidden bg-cover bg-no-repeat w-screen h-screen "
            style={{ backgroundImage: `url(${leSe_bg})`}}
        >
            <div className='py-40'>
                <SideBar />
            </div>
        </div>
    );
}
