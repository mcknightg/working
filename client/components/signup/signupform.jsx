Signupform = React.createClass({
    render(){
        return (
            <div className="row">
                <div className="signup">
                    <h1>Sign Up</h1>
                    <p className="text-muted">It's free and always will be.</p>
                </div>
                <form>
                    <div className="col-sm-9">
                        <div className="row">
                            <div className="col-sm-6 form-group">
                                <input placeholder="First Name" type="text" ref="first_name" className="form-control"/>
                            </div>
                            <div className="col-sm-6 form-group">
                                <input placeholder="Last Name" type="text" ref="last_name" className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="email" ref="email" placeholder="Email or Mobile Number" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <input type="password" ref="password" placeholder="New Password" className="form-control"/>
                        </div>
                        <button className="btn btn-md btn-success">Sign Up</button>
                        <span className="msg"></span>
                    </div>
                </form>
            </div>
        )
    }
});