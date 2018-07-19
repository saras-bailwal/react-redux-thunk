import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import submitForm from "../store/actions";

class Contactform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            email: "",
            message: "",
            errMsg:""
        };
        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }
    onSubmitForm (){
        this.props.onSubmitApp(this.state);
    }
    inputChange (event) {
        if (event.target.id === 'email') {
            const emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/;
            if (emailValidate.test(event.target.value)) {
                this.setState({
                    errMsg: false
                })
            } else {
                this.setState({
                    errMsg: true
                })
            }
        }
        var key = event.target.id;
        var myObj = { [key]: event.target.value};
        this.setState(myObj);
    }
    render() {
        return (
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="card mt-5 p-2">
                            <div className="card-body">
                                <form>
                                    {this.props.app.isSubmiting &&
                                        <div className="form-group row">
                                            <div className="loader"></div>
                                        </div>
                                    }
                                    {this.props.app.errSubmiting &&
                                        <div className="form-group row colorTxt">
                                           Timeout while sending request!
                                        </div>
                                    }
                                    <div className="form-group row">
                                        <label className="col-form-label">Name</label>
                                        <div className="col-lg-10 col-12">
                                            <input disabled={(this.props.app.isSubmiting)? "disabled" : ""} type="text" className="form-control" id="fullName" placeholder="Full Name" value={this.state.fullName} onChange={this.inputChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-form-label">Email</label>
                                        <div className="col-lg-10 col-12">
                                            <input  disabled={(this.props.app.isSubmiting)? "disabled" : ""} type="email" className="form-control" value={this.state.email} id="email" placeholder="Email" onChange={this.inputChange}/>
                                        </div>
                                        {this.state.errMsg &&
                                        <span className="colorTxt">
                                           Incorrect Email
                                        </span>
                                    }
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-form-label">Message</label>
                                        <div className="col-lg-9 col-12">
                                            <textarea disabled={(this.props.app.isSubmiting)? "disabled" : ""} id="message" value={this.state.message} className="form-control" rows="3" onChange={this.inputChange}>
                                            </textarea>
                                        </div>
                                    </div>
                                <button type="button" disabled={(this.props.app.isSubmiting) || (this.state.fullName.length <= 0 || this.state.email.length <= 0 || this.state.errMsg || this.state.message.length <= 0) ? "disabled" : ""} className="btn btn-primary" onClick={()=> { this.onSubmitForm();}}>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Contactform.propTypes = {
    onSubmitApp: PropTypes.func,
};

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        onSubmitApp(data) {
            dispatch(submitForm(data));
      },
    };
  }
export default connect(mapStateToProps, mapDispatchToProps)(Contactform);