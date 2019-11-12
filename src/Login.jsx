import React,{useState,useEffect} from 'react'
import {message,Icon,Input,Button} from 'antd';
import 'antd/dist/antd.css';


const Login = () => {

    
    const [isLoged,setIsLoged] = useState(false);
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");

    useEffect(() => {

    {/*LIST OF USERS */}
    localStorage.setItem("username1", 'videsh');
    localStorage.setItem("password1", '1234');
    localStorage.setItem("username2", 'test1');
    localStorage.setItem("password2", '12345');
    {/*LIST OF USERS */}

    },[])




    const handleLogin = () => {
        if(userName === (localStorage.getItem('username1')) === true  && (password === localStorage.getItem('password1')) === true || 
        (userName === localStorage.getItem('username2')) === true  && (password === localStorage.getItem('password2')) === true
        )
        {
         
        setIsLoged(true);   
        message.success('login sucessfully');
        }else{
            message.warning("please enter valid user");
            setIsLoged(false);
        }
    }

    const onUserNameChange = e =>{
        //console.log(e.target.value);
        setUserName(e.target.value);
    }

    const onPassChange = e =>{
        //console.log(e.target.value);
        setPassword(e.target.value);
    }
    

        return (
            <div>
                {
                    isLoged === true ? document.location.assign("/profile") : null
                }
                <div className="container" style={{marginTop:"50px"}} >
                    <div style={{maxWidth:"500px",margin:"0px auto",border:"1px solid black",padding:"30px",borderRadius:"5px",background:"#FAFAFA"}}>
                        <div style={{textAlign:"center"}}>
                            <Icon style={{fontSize:"60px"}} type="user" />
                        </div>
                        <div style={{margin:"30px",}}>
                            <Input 
                               onChange={ onUserNameChange}
                               prefix={
                                 <Icon 
                                  type="user" 
                                  style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                  placeholder="username " 
                            />
                        </div>
                        <div style={{margin:"30px"}}>
                            <Input 
                                    onChange={onPassChange}
                                    prefix={
                                      <Icon type="lock" 
                                      style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                            />
                        </div>
                        <div style={{textAlign:"center"}}>
                             <Button 
                               onClick={handleLogin}
                               type="primary"  
                               className="login-form-button">
                                   <Icon type="login" />
                               Log in
                             </Button>
                        </div>
                    </div>
              
</div>
            </div>
        )
}   

export default Login;