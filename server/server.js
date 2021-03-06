Meteor.methods({
    'Posts.insert':function(message,imageurl){
        var post = {
            user:Meteor.user(),
            createdAt:new Date(),
            imageurl:imageurl,
            message:message,
            likes:[],
            comments:[]
        };
        Posts.insert(post);
    },
    'changeAvatar':function(user,fileid){
        var file = 'http://placehold.it/150x150';
        if(fileid){
            file = Images.findOne({_id:fileid});
        }
        var data = file._id;
        Meteor.users.update(Meteor.userId(),{$set:{'profile.avatar':data}})
    },
    'likePost':function(userid,postid){
        Posts.update(postid,{$addToSet:{likes:userid}});
    }
});