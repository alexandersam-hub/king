// import logo from './logo.svg';
import st from './NavBar.module.css';
import { Link,BrowserRouter } from 'react-router-dom';

export default function App(props) {
    return(
      <div className={st.wrapper}>
            {props.nav.map((item)=>{
                return <Link className={st.link} to={'/'+item.to}>{item.name}</Link>
            })}
      </div>
    );
}

