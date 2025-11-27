import React from "react";

import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useBuilderStore} from "@/store/builderStore";
import {TypeOfDevice} from "@/types/builder";

interface Props {
    deviceId: string;
    deviceType: TypeOfDevice;
}

const DeviceTypeComponent: React.FC<Props> = ({deviceType, deviceId}) => {
    const updateDevice = useBuilderStore((state) => state.updateDevice);
    return (
        <div className="space-y-1">
            <label className="text-sm text-neutral-600">Typ zariadenia</label>

            <Select
                value={deviceType}
                onValueChange={(t) => updateDevice(deviceId, { type: t as TypeOfDevice })}
            >
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Vyber typ" />
                </SelectTrigger>

                <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="lamp">Lamp</SelectItem>
                    <SelectItem value="tv">TV</SelectItem>
                    <SelectItem value="ac">AC</SelectItem>
                    <SelectItem value="camera">Camera</SelectItem>
                    <SelectItem value="speaker">Speaker</SelectItem>
                    <SelectItem value="sensor">Sensor</SelectItem>
                    <SelectItem value="socket">Socket</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

export const DeviceType = React.memo(DeviceTypeComponent)