import * as React from "react";
import { Provider, Flex, Text, Button, Header } from "@fluentui/react-northstar";
import { useState, useEffect } from "react";
import { useTeams } from "msteams-react-base-component";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import * as microsoftTeams from "@microsoft/teams-js";
import { AppBar } from "./AppBar";
import { DemoHeaderTabConfig } from "./DemoHeaderTabConfig";
import { SecondPage } from "./SecondPage";
import { FirstPage } from "./FirstPage";

/**
 * Implementation of the content page
 */
export const DemoHeaderTab = () => {

    const [{ inTeams, theme, context }] = useTeams();
    const [entityId, setEntityId] = useState<string | undefined>();

    useEffect(() => {
        if (context) {
            setEntityId(context.entityId);
        }
    }, [context]);

    /**
     * The render() method to create the UI of the tab
     */
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/config" component={DemoHeaderTabConfig} />
                <Route exact path="/second-page" component={SecondPage} />
                <Route exact path="/first-page" component={FirstPage} />
                <Redirect to="/first-page" />
            </Switch>
        </BrowserRouter>
    );
};
export default DemoHeaderTab;
