import React from "react";
import st from './Loader.module.css';
import loader from './spinner.gif';
export default function Loader () {
    return(
        <div id={st.fountainG}>
            <div id={st.fountainG_1} className={st.fountainG}></div>
            <div id={st.fountainG_2} className={st.fountainG}></div>
            <div id={st.fountainG_3} className={st.fountainG}></div>
            <div id={st.fountainG_4} className={st.fountainG}></div>
            <div id={st.fountainG_5} className={st.fountainG}></div>
            <div id={st.fountainG_6} className={st.fountainG}></div>
            <div id={st.fountainG_7} className={st.fountainG}></div>
            <div id={st.fountainG_8} className={st.fountainG}></div>
        </div>  )
}