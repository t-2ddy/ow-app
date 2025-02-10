import leSe_bg from '../assets/images/leSe_bg.jpg';
import WelcomeComp from '../components/welcome_comp';

export default function Welcome() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover blur-sm scale-110"
        style={{ backgroundImage: `url(${leSe_bg})` }}
      ></div>     
      <div className="mt-52">
        <WelcomeComp />
      </div>
    </div>
  );
}