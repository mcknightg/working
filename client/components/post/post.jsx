Post = React.createClass({
    mixins:[ReactMeteorData],
    getMeteorData(){
        return {
            currentUser:Meteor.userId()
        }
    },
    likePost(e){
        e.preventDefault();
        var postid = this.props.post._id;
        Meteor.call('likePost',this.data.currentUser,postid);
    },
    renderLikes(){
        var likes = '';
        var likesub = 0;
        var currentUser = String(Meteor.userId());
        if(this.props.post.likes.indexOf(currentUser) !== -1){
            likes = 'You and ';
            likesub = 1;
        }
        switch(this.props.post.likes.length - likesub){
            case 0:
                return likesub > 0 ? 'You like this':'';
            case 1:
                return likesub > 0 ? likes + '1 other person likes this':'1 person likes this';
                break;
            default:
                return likes + (this.props.post.likes.length - likesub) + ' people like this';
            break;
        }
    },
    render(){
        var dimage = '';
        if(this.props.post.imageurl){
            dimage = (
                <div>
                    <div className="panel-thumbnail">
                        <img src={this.props.post.imageurl} className="img-responsive postimage img-thumbnail"/>
                    </div>
                </div>
            );
        }

        return (
            <div className="col-sm-12">
                <div className="panel panel-white post panel-shadow">
                    <div className="post-heading">
                        <div className="pull-left image">
                            <Avatar klass="img-circle avatar" user={this.props.post.user._id}/>
                        </div>
                        <div className="pull-left meta">
                            <div className="title h5">
                                <b><Fullname user={this.props.post.user._id}/></b>&nbsp;
                                made a post.
                            </div>
                            <h6 className="text-muted time">An hour ago</h6>
                        </div>
                    </div>
                    <div className="col-md-12 post-description">
                        <h3>{this.props.post.message}</h3>
                        <br/>
                    </div>
                    <div className="col-md-12">
                        {dimage}
                        <br/>
                    </div>
                    <div className="actions">
                        <a onClick={this.likePost} href="#" className="btn btn-default stat-item">
                            <i className="fa fa-thumbs-up icon"></i>
                        </a>&nbsp;
                        {this.renderLikes(this.props.post.likes.length)}
                    </div>
                </div>
            </div>
        )
    }
});