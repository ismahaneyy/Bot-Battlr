import { createContext, useState } from "react";
import { useEffect } from "react";

//This context stores data that is used to add bots to a users army
//and for that data to be edited
const YourArmyContext = createContext();
const YourArmyContextProvider = (props) => {
  const [botArmy, setBotArmy] = useState(null);
  const [botDelete, setBotDelete] = useState([]);
  useEffect(()=>{
  console.log(botDelete)
  },[botDelete])
  return (
    <YourArmyContext.Provider
      value={{
        botarmy: [botArmy, setBotArmy],
        deletebots: [botDelete, setBotDelete],
      }}
    >
      {props.children}
    </YourArmyContext.Provider>
  );
};
export { YourArmyContext };
export { YourArmyContextProvider };