"use client";

import React from "react";

import {Slider} from "@/components/ui/slider";
import {useBuilderStore} from "@/store/builderStore";

interface Props {
    deviceBrightness: number;
    deviceId: string;
}

const BrightnessSliderComponent: React.FC<Props> = ({deviceBrightness, deviceId}) => {
    const updateDevice = useBuilderStore((state)=> state.updateDevice);

    return (
        <div className="space-y-2">
            <label className="text-sm text-neutral-600">
                Jas ({deviceBrightness}%)
            </label>
            <Slider
                value={[deviceBrightness]}
                min={0}
                max={100}
                step={1}
                onValueChange={(val) =>
                    updateDevice(deviceId, {brightness: val[0]})
                }
            />
        </div>
    );
}
export const BrightnessSlider = React.memo(BrightnessSliderComponent)