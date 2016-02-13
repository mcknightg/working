Main = React.createClass({
    render(){
        return (
            <div className="col-sm-9 col-sm-11" id="main">
                <div>
                    <div className="full col-sm-9">
                        <div className="row">
                            <div className="col-sm-9">
                                <Statusform/>
                                <Post/>
                                <button className="btn btn-md">More</button>
                            </div>
                            <div className="col-sm-3">
                                Ads
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});