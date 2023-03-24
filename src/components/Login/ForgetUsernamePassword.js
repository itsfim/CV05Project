import React, { Component } from 'react';
import '../../App.css'
import './ForgetUsernamePassword.css'

class ForgetUsernamePassword extends Component {
    render() {
        return(
            <div className='pageIntro'>
            <h1>Recover username / password</h1>
            <div className='WrapperLog'>
                <div className="box1">
                    <main className=''>
                        <div className="App">
                            <form className="form" onSubmit={this.handleSubmit}>
                                <div className="input-group">
                                    <label>Memorable Question</label>
                                        <select className = "recoverAcc">
                                        <option value="default">Please select your question below</option>
                                        <option value="Q1">What city you were born in? </option>
                                        <option value="Q2">What was your favorite subject in high school?</option>
                                        <option value="Q3">In what city or town did your mother and father meet?</option>
                                        <option value="Q4">What was the first exam you failed?</option>
                                        </select>
                                     </div>
                                    <div className="input-group">
                                    <br></br>
                                    <label for="memorableAnswer">Memorable Answer</label> <br></br>
                                    <input className = "recoverAcc" type="memorableAnswer" name="memorableAnswer" placeholder="Answer..." />
                                </div>
                                <br></br>
                                <button className="primary">Continue</button>
                            </form>
                        </div>
                    </main>
                </div>
            </div>
            </div>
        );
    }
}
export default ForgetUsernamePassword;