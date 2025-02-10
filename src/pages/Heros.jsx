import React, { useEffect, useState } from 'react';
import havana from '../assets/images/havana.jpg';
import { useNavigate } from 'react-router-dom';

export default function Heros() {
  const [heroesByRole, setHeroesByRole] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const apiUrl = 'https://overfast-api.tekrop.fr/heroes';

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Group heroes by their role
        const groupedHeroes = data.reduce((groups, hero) => {
          const role = hero.role;
          if (!groups[role]) {
            groups[role] = [];
          }
          groups[role].push(hero);
          return groups;
        }, {});
        setHeroesByRole(groupedHeroes);
      })
      .catch((error) => {
        console.error('Error fetching heroes:', error);
      });
  }, []);

  const handleHeroClick = (heroName) => {
    navigate(`/hero/${heroName}`);
  };
  
  return (

    <div className={`absolute w-screen h-full bg-cover bg-center backdrop-blur-sm`}
      style={{ backgroundImage: `url(${havana})`}} >
      {/* <div
        className="absolute inset-0 bg-cover blur-sm scale-130 -z-10"
        style={{ backgroundImage: `url(${havana})` }}
      ></div> */}
      <div className="flex justify-between backdrop-blur-sm h-full w-full">
        {Object.keys(heroesByRole).map((role) => (
          <div key={role} className={`text-left px-4 ${role.toLowerCase() === "damage" ? "flex-[3]" : "flex-[2]"}`}>
            <h2 className="mt-40 text-4xl drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)] text-white font-owRegular mb-4">
              {role}
            </h2>
            <div className={`grid justify-center gap-1 ${role.toLowerCase() === "damage" ? "grid-cols-5": "grid-cols-4" }`}>
              {heroesByRole[role].map((hero) => (
                <div
                  key={hero.id}
                  className="flex flex-col items-center font-owOblique text-lg bg-slate-300 py-[2px] rounded-lg cursor-pointer duration-200 hover:scale-125"
                  onClick={() => handleHeroClick(hero.name)}
                >
                  <img
                    src={hero.portrait}
                    alt={`${hero.name}'s portrait`}
                    className="w-16 h-16 rounded-sm"
                  />
                  <span className="mt-2">{hero.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
