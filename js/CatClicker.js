var cats = {
    'Skittles': "img/cat.jpg",
    'Brownies': "img/cat2.jpg"
};
var listArea = $('#listArea');
var catArea = $('#catArea');

$.each(cats, function (name, source) {
    var elem = document.createElement('li');
    elem.textContent = name;

    elem.click(function (sourceCopy) {
        return function() {
            console.log('list item clicked');
            catArea.empty();
            catArea.append('<img src=' + sourceCopy + '>');
        };
    }(source));

    listArea.append(elem);
});