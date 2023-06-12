import React from "react";
import nbaPlayground from "../assets/Games/nba-2k-playgrounds-2.jpg";
import wwe2k18 from "../assets/Games/wwe2k18.jpg"
import sf5 from "../assets/Games/sf5.jpg"
import mk11 from "../assets/Games/mk11.jpg"
import nba2k21 from "../assets/Games/nba2k21.jpg"
import rocketleague from "../assets/Games/rocketleague.jpg"

const games =[{
    id:1,
    src:nbaPlayground
},
{
    id:2,
    src:wwe2k18
},
{
    id:3,
    src:nba2k21
},
{
    id:4,
    src:mk11
},
{
    id:5,
    src:sf5
},{
    id:6,
    src:rocketleague
}]

const Games = () => {
  return (
    <div
      name="Games"
      className="bg-gradient-to-b from-purple-300 to-blue-300 py-40" 
      h-full
      w-full
    >
      <div className="flex flex-col items-center">
        <div className="flex flex-col p-4 justify-center">
          <div>
            <p className="mt-0 text-4xl font-bold text-purple-700 border-blue-400 border-b-4 items-center inline my-7">
              Games
            </p>
          </div>
          <p className="text-purple-700 mt-4"> Check Out Games</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 py-12 sm:px-0 m-2 ">
          {
            games.map(({id,src})=>{
                return <div key = {id } className="shadow-md shadow-purple-400 rounded-lg">
                <img className="rounded-md duraton-300 h-full"src={src} alt="nba" />
                <div><button className="bg-blue-400 rounded-md w-full h-full text-purple-700 items-center cursor-pointer hover:scale-105">Demo</button></div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Games;
