import React, { useEffect } from "react";
import { useState, useContext } from "react";
import BotCard from "../components/BotCard";
import YourBotArmy from "../components/YourBotArmy";
import { BotContext } from "../data/BotsContext";
import { YourArmyContext } from "../data/YourArmyContext";
import SortBar from "./SortBar";
import BotFilter from "./BotFilter";
import axios from "axios";
//This component creates all the bots that are currently in the server using the BotArmy component
//It also provides functionality to delete the bots and to sort them 
function BotCollection({}) {
  //get data from BotContext store
  const botsContext = useContext(BotContext);
  //sets an initial state of an empty array
  const [bots, setBots] = useState([]);
  const [botsFilter, setBotsFilter] = useState([]);
  const [classStore, setClassStore] = useState([]);
  const { botarmy, deletebots } = useContext(YourArmyContext);
  const [botDelete, setBotDelete] = deletebots;
  //allows a user to delete a bot from the page persistently
  function handleDelete(bot) {
    axios.delete(`http://localhost:3000/bots/${bot.id}`);
    axios.get("http://localhost:3000/bots").then((d) => {
      setBots(
        d.data?.map((bot) => {
          return (
            <div >
            <BotCard
              key={bot.id}
              bot={bot}
              showSpecs={showSpecs}
              handleDelete={handleDelete}
            />
            </div>
          );
        })
      );
    });
      if(botDelete.length === 0){
        console.log("run I have")
        setBotDelete([bot.id]);
      }
      else{
        console.log("I have run")
        setBotDelete([...botDelete, bot.id])
      }
  }
  //Allows a user to filter the bots according to their clasees
  function filterBots(value) {
    setClassStore([...classStore, value]);
    setBotsFilter(
      botsContext.filter((botClass) => classStore.includes(botClass.bot_class))
    );
  }
  useEffect(() => {
    setBots(
      botsFilter.map((bot) => {
        return (
          <div>
          <BotCard
            key={bot.catchphrase}
            bot={bot}
            showSpecs={showSpecs}
            handleDelete={handleDelete}
          />
          </div>
        );
      })
    );
  }, [classStore]);

  //Allows  a user to sort the bots in BotCollection according to their health,armor or damage
  function sortBots(value) {
    console.log(value);
    if (value === "health") {
      let sorted = botsContext.sort((a, b) => {
        if (a.health < b.health) {
          return 1;
        } else if (a.health > b.health) {
          return -1;
        } else {
          return 0;
        }
      });
      setBots(
        sorted.map((bot) => {
          return (
            <div>
            <BotCard
              key={bot.catchphrase}
              bot={bot}
              showSpecs={showSpecs}
              handleDelete={handleDelete}
            />
            </div>
          );
        })
      );
    } else if (value === "armor") {
      let sorted = botsContext.sort((a, b) => {
        if (a.armor < b.armor) {
          return 1;
        } else if (a.armor > b.armor) {
          return -1;
        } else {
          return 0;
        }
      });
      setBots(
        sorted.map((bot) => {
          return (
            <div>
            <BotCard
              key={bot.catchphrase}
              bot={bot}
              showSpecs={showSpecs}
              handleDelete={handleDelete}
            />
            </div>
          );
        })
      );
    } else if (value === "damage") {
      let sorted = botsContext.sort((a, b) => {
        if (a.damage < b.damage) {
          return 1;
        } else if (a.damage > b.damage) {
          return -1;
        } else {
          return 0;
        }
      });
      setBots(
        sorted.map((bot) => {
          return (
            <div >
            <BotCard
              key={bot.catchphrase}
              bot={bot}
              showSpecs={showSpecs}
              handleDelete={handleDelete}
            />
            </div>
          );
        })
      );
    }
  }
  useEffect(() => {
    //sets the state to use botsContext after its value has data from the fetch
    //completing in BotsContext
    setBots(
      botsContext.map((bot) => {
        return (
          <div className="botCardsContainer">
          <BotCard
            key={bot.catchphrase}
            bot={bot}
            showSpecs={showSpecs}
            handleDelete={handleDelete}
          />
          </div>
        );
      })
    );
  }, [botsContext]);
  //gets data for which bot is clicked,making displaying only one bot by clicking on it
  //possible
  const [botArmy, setBotArmy] = botarmy;
  function showSpecs(singleBot) {
    setBotArmy(singleBot);
    //   setBots(<h3>{singleBot.name}</h3>);
  }
  function removeBotDOM(){
  }
  removeBotDOM()
  return (
    <div>
      <SortBar sortBots={sortBots} />
      <BotFilter filterBots={filterBots} />
      <div id="bot">
      {bots}
      </div>
    </div>
  );
}
export default BotCollection;