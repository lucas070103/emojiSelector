import useEmoji from "./useEmoji";
import "./emojiSelector.css";

export default function EmojiSelector(){
    const {handleChange,
    handleClickEmoji,
    setTextValue,
    setIsOpen,
    value,
    isOpen,
    showEmojis,
    textValue} = useEmoji();

return(
    <div className="emojiApp">
      <div className="emojiSelector">
      <div className="textEmoji">
        <input className="text" placeholder="message" type="text" value={textValue} onChange={(e)=>setTextValue(e.target.value)}/>
        <button className="openEmoji" onClick={()=>{setIsOpen(!isOpen)}}>🫥</button>
      </div>
        {isOpen?
             <div className="search">
                <input placeholder="search" className="searchEmoji" type="text"
                value={value}
                onChange={handleChange}/>

                <div className="emojis">
                {showEmojis.map(emoji => 
                <button className="emojiBtn" onClick={()=>handleClickEmoji(emoji.symbol)}
                key={emoji.name}>{emoji.symbol}</button>)}
                </div>
            </div>:
         ''}
      </div>
    </div>
  );
};