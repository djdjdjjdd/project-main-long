import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
class Login extends React.Component {

    state = {
        passWold:'',
        nameUser:'',
    }
    handleChangePassWold = (event) => {
        this.setState({
            passWold: event.target.value
        })
    }
    handleChangeNameUser = (event) => {
        this.setState({
            nameUser: event.target.value,
        })
    }
    handleLogin = (event) =>{
        event.preventDefault();
        console.log('>>> check',this.state);
    }
    render() {
        return (
            <>
                <div className="globalContainer row d-flex justify-content-center" id='content'>
                    <header className="header bg-body-secondary col-xl-3 col-lg-4 col-md-6 col-sm-12" style={{ backgroundColor: '#e8eded', width: '1472.8px', height: '508.89px' }}>
                        <div className="title_header my-3">
                            <img src='https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg' alt='facebook' style={{ width: '240px', height: '79.26px', marginLeft: '600px', marginRight: '400px', marginTop: '50px', }} />
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-4 bg-light-subtle rounded-3 shadow-sm" style={{ width: '397px', height: '313px', display: 'flex', }}>
                                <div className="py-2">
                                    <div className=" mx-xl-5 py-3">
                                        <span style={{ fontFamily: 'inherit', fontSize: '18px', lineHeight: '22px', marginLeft: ' 50px' }} >Login in to Facebook</span>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control mx-2" placeholder="Email adress or phone number" style={{ width: '363px', height: '51px' }} 
                                            value={this.state.nameUser}
                                            onChange={(event) => this.handleChangeNameUser(event)}
                                        />
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control mx-2" placeholder="Passworld" style={{ width: '363px', height: '51px', color: '#ebf0f0' }} 
                                            value={this.state.passWold}
                                            onChange={(event) => this.handleChangePassWold(event)}
                                        />
                                    </div>
                                    <button class="btn btn-primary mx-2" type="Login" style={{ width: '364px', height: '48px', fontSize: '25px' , fontWeight:'bold'}} value='Submit'
                                        onClick={(event) => this.handleLogin(event)}
                                        >
                                            Login</button>
                                     <div className="row d-flex">
                                        <div className="col-5">
                                            <Link to=''>Forgotten account?</Link>
                                        </div>
                                        <div className="col-6">
                                            <Link to=''>Sign up for Facebook</Link>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            </>
        );
    }
}

export default Login;

