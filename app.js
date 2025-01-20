require('sucrase/register'); // subset of babel
const express = require('express');
const path = require('path');
const port = process.env.PORT || 3500;
const { engine }  = require('express-handlebars');
const jsxEngine = require('./lib/react-server');

const app = express();
app.engine('.jsx', jsxEngine);
app.engine('handlebars', engine({layoutsDir: path.join(app.settings.views, 'handlebars', 'layouts')}));
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.render('start');
});

/*
* START HERE FOR JSX TEMPLATING
*/
app.get('/jsx', async (req, res) => {

    const data = []

        try {
            const response = await fetch("https://markets-data-api-proxy.ft.com/research/webservices/securities/v1/quotes?symbols=FTSE:FSI,INX:IOM,EURUSD,GBPUSD,IB.1:IEU");
            if (!response.ok) throw new Error('Failed to fetch stock data');
            const json = await response.json();
            if (json.data.items && json.data.items.length > 0) {
                json.data.items.forEach((item) => {
                    data.push(item)
                })
            }
        } catch (e) {
            return console.error(e);
        }

    const templateData = {
        content: data
    };

    res.render('jsx/Main.jsx', templateData);
  });
/*
* END JSX TEMPLATING
*/


/*
* START HERE FOR HANDLEBARS TEMPLATING
*/

app.get('/handlebars', async function (req, res) {
    // This object is passed to the Handlebars template.
    const templateData = {
        pageTitle: 'Home',
        content: 'Hello World!'
    };

    // This renders the Handlebars view at `views/home.handlebars`.
    res.render('handlebars/home', templateData);
});
/*
* END HANDLEBARS TEMPLATING
*/

if(process.env.NODE_ENV !== 'test') {
	app.listen(port, () => {console.log(`Running on http://localhost:${port}`)});
}

// Export the app so that we can test it in `test/app.spec.js`
module.exports = app;
