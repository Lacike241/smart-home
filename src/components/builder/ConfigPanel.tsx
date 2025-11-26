"use client";

import { useBuilderStore } from "@/store/builderStore";

export default function ConfigPanel() {
    const { devices, selectedDeviceId } = useBuilderStore();

    const device = devices.find((d) => d.id === selectedDeviceId);

    if (!device) {
        return (
            <div className="w-64 border-l border-neutral-200 p-4 text-neutral-500">
                Vyber zariadenie 🔎
            </div>
        );
    }

    return (
        <div className="w-64 border-l border-neutral-200 p-4">
            <h2 className="font-semibold text-lg mb-4">{device.type}</h2>

            <div className="space-y-4">

                <div>
                    <label className="text-sm text-neutral-600">Názov</label>
                    {/*TODO: name*/}
                    <input
                        type="text"
                        defaultValue={device.id}
                        className="w-full border rounded-md p-2"
                    />
                </div>

                <div>
                    <label className="text-sm text-neutral-600">Typ</label>
                    <div className="p-2 bg-neutral-100 rounded-md">
                        {device.type}
                    </div>
                </div>

            </div>
        </div>
    );
}