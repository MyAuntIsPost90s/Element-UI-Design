const loaderUtil = require('loader-utils')

module.exports=function (source) {
    var options = loaderUtil.getOptions(this);
    if(options == null){
        options = {};
    }
    source = source.replace('#WebHead#',options.WebHead);
    source = source.replace('#UrlHead#',options.UrlHead);
    source = source.replace('#UploadUrlHead#',options.UploadUrlHead);
    return source;
}