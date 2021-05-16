import React from "react";
import st from './LoginListName.module.css'
const LoginListName = (props)=>{
    return(
        <div className={st.wrapper}>
            <select name="selectName" id="selectName">
                {
                    props.listNames.map((item)=>{
                      return <option value={'commamds'+item.id} id={'commamds'+item.id}>{item.name}</option>
                    })
                }
            </select>
        </div>
    )
}

export default LoginListName;