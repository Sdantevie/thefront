module.exports = function(env){
    var configfile = './webpack.' + env + '.js';
    return require(configfile);
};