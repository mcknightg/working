Main = React.createClass({
    render(){
        var adobj = {_id:1,text:'My First Ad',title:'Some Company',image:'http://placehold.it/150x150'};

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
                                <Ad ad={adobj}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});