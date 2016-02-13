Avatar = React.createClass({
    mixins:[ReactMeteorData],
    getMeteorData(){
        var data = {};
        data.usr = Meteor.users.findOne({_id:this.props.user});
        data.img = Images.findOne({_id:data.usr.profile.avatar});
        return data;
    },
    getInitialState(){
        let state = {};
        state.avatar = 'http://placehold.it/60x60';
        return state;
    },
    render(){
        var avatar = this.state.avatar;
        if(this.data.img && this.data.img.url){
            avatar = this.data.img.url();
        }
        return (
            <img className={this.props.klass} src={avatar} alt="Image"/>
        )
    }
});