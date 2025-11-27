"use client";

import {ActionButtons} from "@/components/builder/ActionButtons";
import {BrightnessSlider} from "@/components/builder/BrightnessSlider";
import {DeviceType} from "@/components/builder/DeviceType";
import {LightColor} from "@/components/builder/LightColor";
import {NameInput} from "@/components/builder/NameInput";
import {SwitchOn} from "@/components/builder/OnSwitch";
import {PickDevice} from "@/components/builder/PickDevice";
import {useBuilderStore} from "@/store/builderStore";
import {DeviceRotation} from "@/components/builder/DeviceRotation";

export default function ConfigPanel() {
    const {devices, selectedDeviceId} = useBuilderStore();

    const device = devices.find((d) => d.id === selectedDeviceId);

    return !device ? (<PickDevice/>) : (
        <div className="w-64 border-l border-neutral-200 p-4 space-y-4">
            <h2 className="font-semibold text-lg">{device.type}</h2>

            <div className="space-y-1">
                <label className="text-sm text-neutral-600">Typ</label>
                <div className="p-2 bg-neutral-100 rounded-md text-sm text-neutral-700">
                    {device.type}
                </div>
            </div>

            <NameInput deviceName={device.name} deviceId={device.id}/>
            <SwitchOn deviceOn={device.on} deviceId={device.id}/>
            <BrightnessSlider deviceBrightness={device.brightness} deviceId={device.id}/>
            {(device.type === "light" || device.type === "lamp") && (
                <LightColor deviceColor={device.color} deviceId={device.id}/>
            )}
            <DeviceType deviceId={device.id} deviceType={device.type}/>
            <DeviceRotation deviceId={device.id} deviceRotation={device.rotation} />
            <ActionButtons/>
        </div>
    );
}