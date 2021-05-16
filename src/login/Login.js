import React from "react";
import st from './login.module.css'
import LoginListName from "./LoginListName/LoginListName";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Loader from "../loader/Loader";
import NavBar from "../NavBar/NavBar";
import globalState from "../GlobalState";

class Login extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         nav:[
    //             // {
    //             //     name:'Home',
    //             //     to:""
    //             // },
    //             // {
    //             //     name:'Roster',
    //             //     to:"roster"
    //             // },
    //             {
    //                 name:'exit',
    //                 to:"login"
    //             }
    //         ],
    //         name:'Царь горы',
    //         currentPage:'login'
    //     }
    // }
    constructor(props) {
        super(props);
        this.state = {
            globalState,
            nav:[ {name:'exit',
                to:"login"}],
            loadState:false,
            viewPassword:false,
            namesList:[
                {
                    id:'1',
                    name:'Команда1'
                },
                {
                    id:'2',
                    name:'Команда2'
                }
            ]
        };

    }

    componentDidMount() {

        const headers = new Headers({
            'Authorization': '0ZHJadMU0KI6',
            // 'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36',
            // 'upgrade-insecure-requests': '1',
            // 'cookie': 'mos_id=CllGxlx+PS20pAxcIuDnAgA=; session-cookie=158b36ec3ea4f5484054ad1fd21407333c874ef0fa4f0c8e34387efd5464a1e9500e2277b0367d71a273e5b46fa0869a; NSC_WBS-QUBG-jo-nptsv-WT-443=ffffffff0951e23245525d5f4f58455e445a4a423660; rheftjdd=rheftjddVal; _ym_uid=1552395093355938562; _ym_d=1552395093; _ym_isad=2'

        });
        fetch(this.state.globalState.serverAPI, headers)
            .then(response => response.text()
            )
            .then((text)=> {
                console.log('request: ',text);
            })
            .catch(function(error) {
                console.log('Request failed: ', error)
            });
    }

    checkViewPassword=()=>{
        this.setState({viewPassword: !this.state.viewPassword});
        //this.state.viewPassword = !this.state.viewPassword
        console.log(this.state);
    }
    clickSetButton(){
        window.location.assign('/')
        console.log('Click!!');
    }

    render() {
        return (
        <div>
            <NavBar nav={this.state.nav} name={this.state.globalState.name}/>
            <div className={st.wrapper}>
                <LoginListName listNames={this.state.namesList} />
                <input  type={ this.state.viewPassword?"text":"password"} placeholder= 'Введите пароль'/>
                <label><input type="checkbox" className="password-checkbox" onClick={this.checkViewPassword}/> Показать пароль</label>
                <button onClick={this.clickSetButton}>Войти</button>
                <Loader/>
            </div>
         </div>
        )
    }
}

export default Login;