const notyf = new Notyf({
    duration: 4000,
    position: {
        x: 'center',
        y: 'top',
    },
    types: [
        {
            type: 'warning',
            background: 'orange',
            icon: {
                className: 'material-icons',
                tagName: 'i',
                text: 'warning'
            }
        },
        {
            type: 'success',
            background: 'forestgreen',
            duration: 4000,
            dismissible: true
        },
        {
            type: 'error',
            background: 'indianred',
            duration: 2000,
            dismissible: true
        }
    ]
});
function editSuccess() {
    notyf.success('Your changes have been successfully saved!');
}
function addedToBasket() {
    notyf.success('Your product have been successfully added to your basket!');
}
