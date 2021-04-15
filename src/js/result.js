import render from './render';
import { alert } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/confirm/dist/PNotifyConfirm.css";
    
const check = {
    result(data) {
        let resultCount = data.length;
        let text = null;
        let type;
        
        if (resultCount === 1) {
            render.CountryCard(data);
            text = `Match found!`;
            type = 'success';
            notification(text, type);
            
        } else if (resultCount > 10) {
            
            text = 'Too many matches found.Please enter a more specific query!'
            type = 'notice'
            notification(text, type);
        } else if (resultCount > 2 && resultCount < 10) {
            render.CountryList(data);
            
        } else {
            text = "Matches not found";
            type = 'error';
            notification(text, type);
        }
    }
    
}

function notification(text, type) {
  alert({
    text:`${text}`,
    type: `${type}`,
    mode: 'light', 
    delay: 3000,
    animation: 'fade',
    });
}
export default check