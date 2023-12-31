import React from 'react';
import { renderToString } from 'react-dom/server';
import {StaticRouter} from "react-router-dom";
import Routes from "../client/Routes";
import {Provider} from "react-redux";
import {renderRoutes} from "react-router-config";

export default (req, store) => {
    const content = renderToString(
        <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
        <div>{renderRoutes(Routes)}</div>
        </StaticRouter>
        </Provider>
    );
    return `
     <html>
       <body>
         <div id="root">${content}</div>
         <script src="bandle.js"></script>
       </body>
     </html>
     `
}
