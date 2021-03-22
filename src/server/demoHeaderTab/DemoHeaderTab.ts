import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/demoHeaderTab/index.html")
@PreventIframe("/demoHeaderTab/config.html")
@PreventIframe("/demoHeaderTab/remove.html")
export class DemoHeaderTab {
}
