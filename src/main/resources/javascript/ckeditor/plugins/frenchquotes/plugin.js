CKEDITOR.plugins.add('frenchquotes', {
    init: function (editor) {
        const path = this.path;

        editor.addCommand('insertLaquo', {
            exec: editor => {
                editor.insertHtml('&laquo;', 'text');
            }
        });
        editor.addCommand('insertRaquo', {
            exec: editor => {
                editor.insertHtml('&raquo;', 'text');
            }
        });

        editor.ui.addButton('Laquo', {
            label: 'Insert laquo',
            command: 'insertLaquo',
            icon: `${path}images/laquo.png`
        });

        editor.ui.addButton('Raquo', {
            label: 'Insert raquo',
            command: 'insertRaquo',
            icon: `${path}images/raquo.png`
        });
    }
});
