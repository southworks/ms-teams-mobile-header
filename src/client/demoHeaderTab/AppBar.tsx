import * as React from "react";
import {
    ChevronStartIcon,
    Breadcrumb,
    ChevronEndMediumIcon,
    Flex,
    Image,
    Text,
    Divider
} from "@fluentui/react-northstar";
import { useHistory } from "react-router-dom";
import "./AppBar.css";

export function AppBar(props: AppBarProps) {
    const history = useHistory();
    const handleGameClick = () => {
        switch (props.depth) {
            case 0:
                return null;
            default:
                return history.go(props.depth * -1);
        }
    };

    const handleCategoryClick = () => {
        switch (props.depth) {
            case 0:
            case 1:
                return null;
            default:
                return history.go((props.depth - 1) * -1);
        }
    };

    const handleBucketClick = () => {
        switch (props.depth) {
            case 0:
            case 1:
            case 2:
                return null;
            default:
                return history.go((props.depth - 2) * -1);
        }
    };

    const getTitle = () => {
        if (props.powerbi) {
            return "Reports";
        }
        switch (props.depth) {
            case 0:
                return "Categories view";
            case 1:
                return "Timeline to Kickoff";
            case 2:
                return "Tasks view";
            default:
                return "";
        }
    };

    return (
        <div>
            <div className="appbar-container">
                <div className="tools-section">
                    <Breadcrumb aria-label="breadcrumb">
                        <Breadcrumb.Item
                            onClick={handleGameClick}
                            active={props.depth === 0 || props.powerbi}
                        >
                            <Breadcrumb.Link className="breadcrumb-link clickable">
                                { "First Tab" }
                            </Breadcrumb.Link>
                        </Breadcrumb.Item>
                        {props.categoryName && (
                            <>
                                <Breadcrumb.Divider>
                                    <ChevronEndMediumIcon />
                                </Breadcrumb.Divider>
                                <Breadcrumb.Item
                                    onClick={handleCategoryClick}
                                    active={props.depth <= 1}
                                >
                                    <Breadcrumb.Link className="breadcrumb-link clickable">
                                        {"Second Tab"}
                                    </Breadcrumb.Link>
                                </Breadcrumb.Item>
                            </>
                        )}
                        {props.categoryName && props.bucketName && (
                            <>
                                <Breadcrumb.Divider>
                                    <ChevronEndMediumIcon />
                                </Breadcrumb.Divider>
                                <Breadcrumb.Item
                                    onClick={handleBucketClick}
                                    active={props.depth <= 2}
                                >
                                    <Breadcrumb.Link className="breadcrumb-link clickable">
                                        {props.bucketName.length > 30
                                            ? `${props.bucketName.substring(0, 30)}...`
                                            : props.bucketName}
                                    </Breadcrumb.Link>
                                </Breadcrumb.Item>
                            </>
                        )}
                        {props.categoryName && props.bucketName && props.taskName && (
                            <>
                                <Breadcrumb.Divider>
                                    <ChevronEndMediumIcon />
                                </Breadcrumb.Divider>
                                <Breadcrumb.Item active>
                                    <Breadcrumb.Link className="breadcrumb-link">
                                        {props.taskName.length > 30
                                            ? `${props.taskName.substring(0, 30)}...`
                                            : props.taskName}
                                    </Breadcrumb.Link>
                                </Breadcrumb.Item>
                            </>
                        )}
                    </Breadcrumb>
                </div>
                <div className="appbar-title">{getTitle()}</div>
            </div>
            <div className="mobile-appbar-container">
                <div
                    className="tools-section"
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                        if (props.depth > 0) history.go(-1);
                    }}
                >
                    {props.depth > 0 && <ChevronStartIcon />}
                </div>
                <Flex column style={{ margin: "5px 10px", flexGrow: 1 }}>
                    <Text size="medium" weight="semibold" content={getTitle()} />
                </Flex>
            </div>
            <Divider fitted size={2} />
        </div>
    );
}

interface AppBarProps {
  categoryName?: string;
  bucketName?: string;
  taskName?: string;
  depth: number; // depth on properties
  powerbi?: boolean;
}
