$(function () {
    MyApp.home = function (params) {
        var viewModel = {
            categoriesList: { categories: [
                { category: 'Esophagus', color: 'red', action: '#category/0/red', image: 'esophagus.png' },
                { category: 'Stomach', color: 'orange', action: '#category/1/orange', image: 'stomach.jpg' },
                { category: 'Small Intestine', color: 'yellow', action: '#category/2/yellow', image: 'small_intestine.jpg' },
                { category: 'Colon', color: 'green', action: '#category/3/green', image: 'colon.jpg' },
                { category: 'Biliary', color: 'blue', action: '#category/4/blue', image: 'biliary.jpg' },
                { category: 'Pancreas', color: 'purple', action: '#category/5/purple', image: 'pancreas.jpg' }]
            }
        };

        return viewModel;
    };
});
