import React from "react";
import st from './Loader.module.css';
import loader from './spinner.gif';
export default function Loader () {
    return(
        <div className={st.windows8}>
            <div className={st.wBall} id={st.wBall_1}>
                <div className={st.wInnerBall}></div>
            </div>
            <div className={st.wBall} id={st.wBall_2}>
                <div className={st.wInnerBall}></div>
            </div>
            <div className={st.wBall} id={st.wBall_3}>
                <div className={st.wInnerBall}></div>
            </div>
            <div className={st.wBall} id={st.wBall_4}>
                <div className={st.wInnerBall}></div>
            </div>
            <div className={st.wBall} id={st.wBall_5}>
                <div className={st.wInnerBall}></div>
            </div>
        </div>    )
}