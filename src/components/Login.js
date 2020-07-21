import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <main>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-8 col-md-6 col-lg-6 col-xl-6 mr-auto ml-auto mb-3 " style={{marginTop:"10vh",background: "#FFFFFFE6 0% 0% no-repeat padding-box",borderRadius: 10}}>
                        <div className="col-12 pt-5 pb-3" style={{color:"#00A8CC",fontFamily:"Girassol",textAlign:"center"}}>
                            <h1>Patrick Conboy</h1>
                        </div>                    
                        <div className="col-12 mt-3 mb-2"
                            style={{
                                fontFamily: "Libre Baskerville",
                                letterSpacing: "4.2px",
                                color: "#142850",
                                textAlign:"center",
                                }}>
                            <h5>
                                LOGIN
                            </h5>
                        </div>
                        <div style={{
                                fontFamily: "Poppins",
                                color: "#142850",
                                }}>
                            <div className="col-12" style={{textAlign:"center"}}>
                                <p>
                                    Aloha, welcome to Hawai'i Auction Services
                                </p>
                                <p>
                                    Continue logging into your account.                                
                                </p>
                            </div>
                            <div className="row pt-5">
                                
                                <div className="col-md-10 m-auto">
                                        <b>
                                            Email Address
                                        </b>
                                        <input className="underlined" type="email" placeholder="Enter your email address"></input>
                                </div>
                                
                                <div className="col-md-10 m-auto">
                                        <b>
                                            Password
                                        </b>
                                        <input className="underlined" type="password" placeholder="Enter your password"></input>
                                </div>
                                
                                <div className="col-5 pt-3 m-auto pr-5">
                                    <input type="checkbox" style={{backgroundColor:"#00A8CC"}}/> Remember me
                                </div>
                                <div className="col-4 pt-3 m-auto" style={{textAlign:"center", marginBottom:40}}>
                                    <a>
                                        Forgot Password
                                    </a>
                                </div>
                                <div className="m-auto col-12 pt-5 pb-2" style={{textAlign:"center"}}>
                                    <Link to="/dashboard" className="btn" style={{width:"80%",color:"white",backgroundColor:"#142850 ",boxShadow: "0px 4px 12px #1428504D"}}>LOGIN</Link>    
                                </div>
                                <div className="col-12 mt-3" style={{textAlign:"center", marginBottom:40}}>
                                    <p>
                                        Don't have an account?
                                    </p>
                                    <p>
                                        Register <Link to="/" style={{color:"#00A8CC",fontStyle:"none"}}>here</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    <div className="pb-3" style={{textAlign:"center"}}>
                        <p style={{color:"white"}}>© 2020 Patrick Conboy. All rights reserved.</p>
                    </div>
        </main>
    )
}

export default Login
