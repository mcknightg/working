publicRoutes = FlowRouter.group({
    name: 'publicroutes'
});
privateRoutes = FlowRouter.group({
    name: 'privateroutes'
});
publicRoutes.route('/', {
    name: 'Home',
    action: function () {
        ReactLayout.render(Homelayout, {});
    }
});
privateRoutes.route('/dashboard', {
    name: 'Dashboard',
    action: function () {
        ReactLayout.render(Layout, {
            sidebar:<Sidebar/>,
            content:<Main/>
        })
    }
});
publicRoutes.route('/signout',{
    name:'Signout',
    action:function(){
        Meteor.logout(function(){
            FlowRouter.go('/');
        })
    }
});
privateRoutes.route('/profile',{
    name:'Profile',
    action:function(){
        ReactLayout.render(Layout,{
            sidebar:<Sidebar/>,
            content:<Profile/>
        })
    }
});