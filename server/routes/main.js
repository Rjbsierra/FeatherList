const listRoutes = require('./list-routes')
const userRoutes = require('./user-routes')
const listItemRoutes = require('./list-item-routes')
const commentRoutes = require('./comment-routes')

const getRoutes = function(app){
    app.use('/api/list',listRoutes);
    app.use('/api/user',userRoutes);
    app.use('/api/list_item', listItemRoutes);
    app.use('/api/comment', commentRoutes);
}

module.exports = {getRoutes};
