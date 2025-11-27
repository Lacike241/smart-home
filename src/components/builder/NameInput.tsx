"use client";

import React from "react";

import {Input} from "@/components/ui/input";
import {useBuilderStore} from "@/store/builderStore";

interface Props {
    deviceName: string;
    deviceId: string;
}

const NameInputComponent: React.FC<Props> = ({deviceName, deviceId}) =>  {
    const updateDevice = useBuilderStore((s)=>s.updateDevice);

    return (
        <div className="space-y-1">
            <label className="text-sm text-neutral-600">Názov</label>
            <Input
                value={deviceName ?? ""}
                onChange={(e) => updateDevice(deviceId, {name: e.target.value})}
            />
        </div>
    );
}

export const NameInput = React.memo(NameInputComponent)