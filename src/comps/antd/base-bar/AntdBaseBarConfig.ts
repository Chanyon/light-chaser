import {AbstractConfig} from "../../../interf/AbstractConfig";
import {getDefaultMenuList} from "../../../designer/right/util";
import {ClassType} from "react";
import AntdBaseBarConfigContent from "./AntdBaseBarConfigContent";
import BaseInfo from "../../../lib/config/info/BaseInfo";
import {MenuInfo} from "../../../types/MenuType";

export default class AntdBaseBarConfig extends AbstractConfig {
    getMenuList(): Array<MenuInfo> {
        return getDefaultMenuList();
    }

    getMenuToConfigContentMap(): { [key: string]: ClassType<any, any, any> } {
        return {
            'info': BaseInfo,
            'style': AntdBaseBarConfigContent,
            'data': BaseInfo,
            'animation': BaseInfo,
            'theme': BaseInfo
        };
    }
}