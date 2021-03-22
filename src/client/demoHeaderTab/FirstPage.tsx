import * as React from "react";
import { Provider, Flex, Text, Button, Header } from "@fluentui/react-northstar";
import { useState, useEffect } from "react";
import { useTeams } from "msteams-react-base-component";
import { Link } from "react-router-dom";
import * as microsoftTeams from "@microsoft/teams-js";
import { AppBar } from "./AppBar";

/**
 * Implementation of the content page
 */
export const FirstPage = () => {

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
        <div>
            <AppBar depth={0} />
            <Link to="/second-page">Home</Link>
        </div>
    );
};
