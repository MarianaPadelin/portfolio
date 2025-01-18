import { createContext, useState } from "react";

export const IdiomaContext = createContext();

const IdiomaContextProvider = ({ children }) => {
const [idioma, setIdioma] = useState(true);

const handleSpanish = () => {
  setIdioma(true);
};

const handleEnglish = () => {
  setIdioma(false);
};

let data = {
    idioma, 
    handleSpanish,
    handleEnglish
}
    
  return <IdiomaContext.Provider value={ data }>{children}</IdiomaContext.Provider>;
};

export default IdiomaContextProvider;
