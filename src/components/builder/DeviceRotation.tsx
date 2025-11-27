import React from "react";

import {useBuilderStore} from "@/store/builderStore";
import {Button} from "@/components/ui/button";
import {Slider} from "@/components/ui/slider";

interface Props {
    deviceRotation: number;
    deviceId: string;
}

const DeviceRotationComponent: React.FC<Props> = ({deviceRotation, deviceId}) => {
    const updateDevice = useBuilderStore((state)=> state.updateDevice);

    return (
        <div className="space-y-2 flex flex-col gap-2">
            <label className="text-sm text-neutral-600">
                Rotácia ({deviceRotation}°)
            </label>

            <Button
                variant="secondary"
                onClick={() =>
                    updateDevice(deviceId, {
                        rotation: (deviceRotation + 45) % 360,
                    })
                }
            >
                Rotate 45°
            </Button>

            <Slider
                value={[deviceRotation]}
                min={0}
                max={360}
                step={1}
                onValueChange={(val) =>
                    updateDevice(deviceId, { rotation: val[0] })
                }
            />
        </div>
    )
}

export const DeviceRotation = React.memo(DeviceRotationComponent)