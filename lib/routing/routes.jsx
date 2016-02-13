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
            sidebar: <div>Sidebar</div>
        })
    }
});