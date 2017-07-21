module.exports = function(env){
    var configfile = './webpack/webpack.' + env + '.js';
    return require(configfile);
};