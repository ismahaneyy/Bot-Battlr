import React, { useState } from "react";
import { BsShieldShaded } from "react-icons/bs";
import { BsFillLightningFill } from "react-icons/bs";
import { ImHeartBroken } from "react-icons/im";

function BotCard({ bot ,showSpecs}) {

function redner() {
let test;
if (bot === undefined) {
console.log("loading...");
} else {
function getId(){
showSpecs(bot)
}
return (test = (
<div onClick={getId} id="bot">
<h3>{bot.name}</h3>
<img src={bot.avatar_url} />
<p>{bot.catchphrase}</p>
<ul>
<li>
<BsShieldShaded/> Armor:{bot.armor}
</li>
<li>
<ImHeartBroken/> Health:{bot.health}</li>
<li>
<BsFillLightningFill/> Damage:{bot.damage}</li>
</ul>
{/*red button removes bot from the army,collection
and server*/}
</div>
));
}
}
return <>{redner()}</>;
}
export default BotCard;
