import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActivee,
  onChangeName,
}) {
  const [isEditing, setIsEditing] = useState(false);

  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    if(isEditing){
    onChangeName(symbol, playerName);
  }
    // setIsEditing((editing) => !editing); => edit button instantly updates to false so it doesnt work -- good practice
    //!isEditing cannot be used
    // setIsEditing(!isEditing); =>scheduled a state update to true
    // setIsEditing(!isEditing); => schedules a state update to true
  }

  function handleChange(event) {
    console.log(event.target.value);
    setPlayerName(event.target.value); //to get access to user name inputted
    // we use target.value , event is by default passed by onChange event
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  //   let btnCaption = 'Edit';

  if (isEditing === true) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    // btnCaption = 'Save'
  }

  return (
    <li className={isActivee ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
