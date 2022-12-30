import { ILayerToolProps } from "geovisto";
import IBubbleLayerToolDimensions from "./IBubbleLayerToolDimensions";

type IBubbleLayerToolProps = ILayerToolProps & {
    dimensions?: IBubbleLayerToolDimensions;
};

export default IBubbleLayerToolProps;
