import React from "react";

import {ColorPicker} from "@/components/builder/ColorPicker";
import {useBuilderStore} from "@/store/builderStore";
import {PresetColor} from "@/types/builder";

interface Props {
    deviceId: string;
    deviceColor: PresetColor;
}

const LightColorComponent: React.FC<Props> = ({deviceColor, deviceId}) => {
    const updateDevice = useBuilderStore((state) => state.updateDevice);
    return (
        <div className="space-y-2">
            <label className="text-sm text-neutral-600">Farba svetla</label>
            <ColorPicker
                color={deviceColor}
                onChange={(c) => updateDevice(deviceId, {color: c})}
            />
        </div>
    )
}

export const LightColor = React.memo(LightColorComponent)