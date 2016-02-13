Homelayout = React.createClass({
    render(){
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            Features
                        </div>
                        <div className="col-md-5 col-md-offset-1">
                            <Signupform/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});