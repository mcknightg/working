Signupform = React.createClass({
    mixins:[ReactMeteorData],
    getMeteorData(){
        let data = {};
        data.currentUser = Meteor.user();
        return data;
    },
    getInitialState(){
        return{
            message:'',
            messageClass:'hidden'
        }
    },
    displayError(message){
       this.setState({message:message,messageClass:'alert alert-danger registerError'});
    },
    handleSubmit(e){
        e.preventDefault();
        this.setState({message:'',messageClass:'hidden'});
        var that = this;
        var first_name = ReactDOM.findDOMNode(this.refs.first_name).value.trim();
        var last_name = ReactDOM.findDOMNode(this.refs.last_name).value.trim();
        var email = ReactDOM.findDOMNode(this.refs.email).value.trim();
        var password = ReactDOM.findDOMNode(this.refs.password).value.trim();
        var user = {email:email,password:password,profile:{fullname:(first_name + last_name).toLowerCase(),firstname:first_name,lastname:last_name,avatar:'http://placehold.it/150x150',friends:[]}};
        Accounts.createUser(user,function(e){
            FlowRouter.go('/dashboard');
            if(e){
                that.displayError(e.reason);
            }
        })
    },
    render(){
        return (
            <div className="row">
                <div className="signup">
                    <h1>Sign Up</h1>
                    <p className="text-muted">It's free and always will be.</p>
                </div>
                <form onSubmit={this.handleSubmit}>
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
                        <span className={this.state.messageClass}>{this.state.message}</span>
                    </div>
                </form>
            </div>
        )
    }
});