const ReadText = require('text-from-image')
const term = require('terminal-kit').terminal;

term.magenta("Enter your image URL: ");
term.inputField(
    function(error, input) {
        ReadText(input).then(text => {
            term(`\n${text}`);
            process.exit()
        }).catch(err => {
            console.log(err);
        })
    }
)