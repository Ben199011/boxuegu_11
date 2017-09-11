// 解释location.search:
//传一个参数返回指定的key值，不传参数返回解释成对象后的值
//首先把头部去掉，通过&符号劈成一组key=val这样的字符串组成的数组
function getSearch(key) {
    var searchStr = location.search.slice(1);
    var searchArr = searchStr.split("&");
    var searchObj = {},
        tempArr;
    for (var i = 0; i < searchArr.length; i++) {
        tempArr = searchArr[i].split("=");
        searchObj[tempArr[0]] = tempArr[1];
    }
    return key == null ? searchObj : searchObj[key];
}

module.exports.getSearch = getSearch;