CKEDITOR.plugins.add('nbsp', {
    init: function(editor) {
        const path = this.path;

        // Insert &nbsp; if Ctrl+Space is pressed:
        editor.addCommand('insertNbsp', {
            exec: editor => {
                editor.insertHtml('&nbsp;', 'text');
            }
        });

        editor.ui.addButton('Nbsp', {
            label: 'Insert a non-breaking space',
            command: 'insertNbsp',
            icon: path + 'images/nbsp.png'
        });

        // Insert &nbsp; if Ctrl+Space is pressed:
        editor.setKeystroke(CKEDITOR.CTRL + 32 /* space */, 'insertNbsp');
    }
});
