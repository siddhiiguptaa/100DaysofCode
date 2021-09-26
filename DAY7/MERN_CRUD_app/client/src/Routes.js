import React from 'react'
import { BrowserRouter, Switch, Router } from 'react-router-dom'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes