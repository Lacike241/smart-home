"use client";

import React from "react";

import {Switch} from "@/components/ui/switch";
import {useBuilderStore} from "@/store/builderStore";

interface Props {
    deviceOn: boolean;
    deviceId: string;
}

const SwitchOnComponent: React.FC<Props> = ({deviceOn, deviceId}) => {
    const updateDevice = useBuilderStore((state)=> state.updateDevice);

    return (
        <div className="flex items-center justify-between">
            <label className="text-sm text-neutral-600">Zapnuté</label>
            <Switch
                checked={deviceOn}
                onCheckedChange={(val) => updateDevice(deviceId, {on: val})}
            />
        </div>
    );
}

export const SwitchOn = React.memo(SwitchOnComponent)