Meteor.methods({
    'Posts.insert':function(message,imageid,imageurl){
        var post = {
            user:Meteor.user(),
            createdAt:new Date(),
            image:imageid,
            imageurl:imageurl,
            message:message,
            likes:[],
            comments:[]
        };
        Posts.insert(post);
    }
});