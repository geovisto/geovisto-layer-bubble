// Geovisto core
import { ILayerToolProps } from "geovisto";

import IBubbleLayerToolDimensions from "./IBubbleLayerToolDimensions";

/**
 * This type provides the specification of the bubble layer tool props model.
 * 
 * @author Vladimir Korencik
 */
type IBubbleLayerToolProps = ILayerToolProps & {
    dimensions?: IBubbleLayerToolDimensions;
};

export default IBubbleLayerToolProps;
