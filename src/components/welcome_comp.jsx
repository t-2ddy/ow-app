import plus from '../assets/images/plus.png';
import you_1_1 from '../assets/images/you_1_1.png';
import you_1_2 from '../assets/images/you_1_2.jpeg';
import defeat_new from '../assets/images/defeat_new.png';

export default function WelcomeComp() {
  return (
    <div className="flex space-x-6 justify-center">
  {/* large items */}
  <ul className="flex flex-row space-x-6">
    <li className="flip-card flip-horizontal w-72 h-96">
      <div className="flip-card-inner">
        <div
          className="flip-card-front rounded-lg flex justify-center shadow-xl cursor-pointer"
          style={{ backgroundColor: 'rgba(203, 213, 225, 0.9)' }}
        >
          <img src={you_1_1} className="w-max h-auto rounded-lg"/>
        </div>
        <div
          className="flip-card-back rounded-lg p-6 text-black text-lg flex flex-col 
          justify-center text-center shadow-xl cursor-pointer"
          style={{ backgroundColor: 'rgba(203, 213, 225, 0.9)' }}
        >
          You played so poorly! You've earned this FREE educational resource! 
          Now you can finally learn how to do more than nothing in your next match!
        </div>
      </div>
    </li>
    <li className="flip-card flip-horizontal w-72 h-96">
      <div className="flip-card-inner">
        <div
          className="flip-card-front rounded-lg flex justify-center shadow-xl cursor-pointer"
          style={{ backgroundColor: 'rgba(203, 213, 225, 0.9)' }}
        >
          <img src={you_1_2} className="w-max h-auto rounded-lg"/>
        </div>
        <div
          className="flip-card-back rounded-lg p-6 text-black text-lg flex flex-col 
          justify-center text-center shadow-xl cursor-pointer"
          style={{ backgroundColor: 'rgba(203, 213, 225, 0.9)' }}
        >
          Feel free to look around each page! This app was made for YOU to get better!
        </div>
      </div>
    </li>
    <li className="flip-card flip-horizontal w-72 h-96">
      <div className="flip-card-inner">
        <div
          className="flip-card-front rounded-lg flex justify-center shadow-xl cursor-pointer"
          style={{ backgroundColor: 'white' }}
        >
          <img src={defeat_new} className="w-max h-60 rounded-lg mt-16"/>
        </div>
        <div
          className="flip-card-back rounded-lg p-6 text-black text-lg flex flex-col 
          justify-center text-center shadow-xl cursor-pointer"
          style={{ backgroundColor: 'rgba(203, 213, 225, 0.9)' }}
        >
          To navigate the site, look right for help or go back to the home page to get all the pages there :D
        </div>
      </div>
    </li>
  </ul>

{/* small items */}
        <ul className="flex flex-col space-y-6 ml-6">
          <li
            className="object-center rounded-lg p-4 text-black text-sm w-52 h-28 flex flex-col 
            justify-end text-center shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
            style={{ backgroundColor: 'rgba(203, 213, 225, 0.9)' }}
          >
            <img src={plus} className="size-8 rounded-md -translate-y-4 translate-x-[72px]" />
            1. Click the plus above
          </li>
          <li
            className="rounded-lg p-4 text-black text-sm w-52 h-28 flex flex-col 
            justify-center text-center shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
            style={{ backgroundColor: 'rgba(203, 213, 225, 0.9)' }}
          >
            2. Navigate to the page you are looking for
          </li>
          <li
            className="rounded-lg p-4 text-black text-sm w-52 h-28 flex flex-col 
            justify-center text-center shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
            style={{ backgroundColor: 'rgba(203, 213, 225, 0.9)' }}
          >
            That's it! The other icons are just for show :3
          </li>
        </ul>
</div>

  );
}
