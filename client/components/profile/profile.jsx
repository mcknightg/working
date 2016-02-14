Profile = React.createClass({
    mixins:[ReactMeteorData],
    getMeteorData(){
        let data = {};
        data.currentUser = Meteor.user();
        return data;
    },
    getInitialState(){
        return {
            klass:'img-circle img-responsive custom-input-file',
            editmode:false,
            email:this.data && this.data.currentUser && this.data.currentUser.emails ? this.data.currentUser.emails[0].address:'you@youremail.com'
        }
    },
    toggleEdit(){
        this.setState({editmode:!this.state.editmode,email:this.data.currentUser ? Meteor.user().emails[0].address:''})
    },
    changeEmail(e){
        e.preventDefault();
        Meteor.call('changeEmail',e.target.value);
        this.toggleEdit();
        this.setState({email:e.target.value});
    },
    componentDidMount(){
        this.setState({email:this.data.currentUser ? Meteor.user().emails[0].address:''});
    },
    uploadFile(e){
        e.preventDefault();
        var that = this;
        var image;
        FS.Utility.eachFile(e,function(file){
            Images.insert(file,function(err,fileObj){
                Meteor.call('changeAvatar',Meteor.user(),fileObj._id);
                setTimeout(function(){
                    that.setState({klass:'img-circle img-responsive custom-input-file updated'})
                },100)
            });
        })
    },
    render(){
        var editmode = <input ref="email" defaultValue={this.state.email} onBlur={this.changeEmail} type="text"/>
        var emaillink = this.data.currentUser && this.data.currentUser.emails ?'mailto:' + this.data.currentUser.emails[0].address:'';
        var mailblock = !this.state.editmode ? <a href={emaillink}>{this.state.email}</a>:editmode;
        return (
            <div className="row">
                <div align="center" className="col-md-2 hidden-xs">
                  <Avatar user={this.data.currentUser ? this.data.currentUser._id:''} klass={this.state.klass}/>
                    <div>
                        <label>
                            <div className="inputWrapper">
                                <input onChange={this.uploadFile} id="avatar" name="avatar" type="file" className="fileInput change-avatar"/>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="col-md-9 col-xs-9">
                    <h2>George Mcknight</h2>
                    <table className="table table-user-information">
                        <tbody>
                        <tr>
                            <td onClick={this.toggleEdit}>Email</td>
                            <td>{mailblock}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
});