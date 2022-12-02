import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ColorStore from "./store/ColorStore";
import './Index.css';

export const Context = createContext(null as any)
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Context.Provider value={{color: new ColorStore()}}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Context.Provider>
);

