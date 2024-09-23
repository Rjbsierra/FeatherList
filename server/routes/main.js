const listRoutes = require('./list-routes')
const userRoutes = require('./user-routes')
const listItemRoutes = require('./list-item-routes')
const commentRoutes = require('./comment-routes')


// BONK IN HEAD: STATIC BEFORE DYNAMIC ROUTES!!

const getRoutes = function(app){
    app.use('/api/v1/list',listRoutes);
    app.use('/api/v1/user',userRoutes);
    app.use('/api/v1/list/item', listItemRoutes);
    app.use('/api/v1/list/comment', commentRoutes);
}

module.exports = {getRoutes};
