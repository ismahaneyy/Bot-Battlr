import React, { useState } from "react";

import { BsShieldShaded } from "react-icons/bs";
import { ImHeartBroken } from "react-icons/im";
import { BsFillLightningFill } from "react-icons/bs";
function BotCard({ bot ,showSpecs, handleDelete}) {
  function redner() {
    let test;
    if (bot === undefined) {
      console.log("loading...");
    } else {
        function getId(){
            showSpecs(bot)
        }
        function getDelete(){
          handleDelete(bot)
        }
      return (test = (
        <div onClick={getId} className="single-card">
          <h3>{bot.name}</h3>
          <img src={bot.avatar_url} />
          <p>{bot.catchphrase}</p>
          <ul>
            <li>
              <BsShieldShaded/>Armor:{bot.armor}</li>
            <li>
              <ImHeartBroken/>Health:{bot.health}</li>
            <li>Damage:{bot.damage}</li>
            <li>
              <BsFillLightningFill/>Class:{bot.bot_class}</li>
          </ul>
          <button id="delete-button"onClick={getDelete}>X</button>
          {/*red button removes bot from the army,collection
          and server*/}
        </div>
      ));
    }
  }
  return <>{redner()}</>;
}
export default BotCard;