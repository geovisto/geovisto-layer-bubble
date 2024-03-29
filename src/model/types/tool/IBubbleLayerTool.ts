// Geovisto core
import { ILayerTool, IMapToolInitProps } from "geovisto";

import { IBubbleLayerToolConfig } from "./IBubbleLayerToolConfig";
import IBubbleLayerToolDefaults from "./IBubbleLayerToolDefaults";
import IBubbleLayerToolProps from "./IBubbleLayerToolProps";
import IBubbleLayerToolState from "./IBubbleLayerToolState";

/**
 * This intreface declares the bubble layer.
 * 
 * @author Vladimir Korencik
 */
interface IBubbleLayerTool<
    TProps extends IBubbleLayerToolProps = IBubbleLayerToolProps,
    TDefaults extends IBubbleLayerToolDefaults = IBubbleLayerToolDefaults,
    TState extends IBubbleLayerToolState = IBubbleLayerToolState,
    TConfig extends IBubbleLayerToolConfig = IBubbleLayerToolConfig,
    TInitProps extends IMapToolInitProps<TConfig> = IMapToolInitProps<TConfig>
> extends ILayerTool<TProps, TDefaults, TState, TConfig, TInitProps> {
    copy(): IBubbleLayerTool;
}

export default IBubbleLayerTool;
