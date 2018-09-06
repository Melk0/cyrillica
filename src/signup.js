import React, {Component} from 'react';
import './body.css';
import './style_input.css';
//import './fonts.css';




class Signup extends Component {
    constructor(props) {
        super(props);
        this.state={
            First_Name: "",
            Last_Name: "",
            Password:"",
            Email:"",
        }
    };

    Registration = () => {

            fetch(`http://k.creativityprojectcenter.ru/api.php?mode=registration&email=${this.state.Email}&password=${this.state.Password}
            &first_name=${this.state.First_Name}&last_name=${this.state.Last_Name}`)
                .catch((err) => {});
        console.log('Запрос ушёл а точнее:' )
        console.log(this.state.Email)
        console.log(this.state.Password)
        console.log(this.state.First_Name)
        console.log(this.state.Last_Name)

        }


     inputEmail =(e) => {
        this.setState({Email:e.target.value});

    };
    inputPassword =(e) => {
        this.setState({Password:e.target.value});

    };
    inputFirstName =(e) => {
        this.setState({First_Name:e.target.value});

    };
    inputLastName =(e) => {
        this.setState({Last_Name:e.target.value});

    };

    render() {

        return (
            <div className="container">
                <div className="title_text">
                    <p className="heading">Регистрация</p>
                    <p className="heading_3">в личном кабинете</p>
                </div>
                <div id="input">
                    <form name="modal_form" id="modal_form" method="post" >
                        <div className="modal_form_group">
                            <label htmlFor="login-email">Почта</label><br/>
                            <input type="email" name="email"  id="login-email" onInput={this.inputEmail}/>
                        </div>
                        <div className="modal_form_group">
                            <label htmlFor="login-password">Пароль</label><br/>
                            <input type="password" name="password" id="login-password" onInput={this.inputPassword}/>
                        </div>
                        <div className="modal_form_group">
                            <label htmlFor="First_Name">Имя</label><br/>
                            <input type="text" name="First_Name"  id="First_Name" onInput={this.inputFirstName}/>
                        </div>
                        <div className="modal_form_group">
                            <label htmlFor="Last_Name">Фамилия</label><br/>
                            <input type="text" name="Last_Name"  id="Last_Name" onInput={this.inputLastName}/>
                        </div>
                    </form>
                    <button onClick={this.Registration}>Регистрация</button>
                </div>
            </div>
        );
    }
};



export default Signup;




