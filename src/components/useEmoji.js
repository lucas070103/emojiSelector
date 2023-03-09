import { useState } from "react";
import {data as emojiList} from './data'; 


 const useEmoji = () =>{
    const [emojis, setEmojis] = useState(emojiList);
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState('');
    const [showEmojis, setShowEmojis] = useState(emojis);
    const [textValue, setTextValue] = useState('');

    function handleChange(e){
        const q = e.target.value;
        setValue(q);
        const newEmojis = emojis.filter(emoji =>{
            return(
                emoji.name.toLowerCase().includes(q.toLowerCase())||
                emoji.keywords.toLowerCase().includes(q.toLowerCase())
            );
        });
        setShowEmojis(newEmojis);
    };

    function handleClickEmoji(emoji){
        const newText = textValue + emoji;
        setTextValue(newText);
        //console.log(newText);
    }

    return{
        handleClickEmoji,
        handleChange,
        setTextValue,
        setIsOpen,
        isOpen,
        value,
        showEmojis,
        textValue
    };
};

export default useEmoji;