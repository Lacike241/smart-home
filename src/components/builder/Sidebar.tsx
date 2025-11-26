"use client";

import { useBuilderStore } from "@/store/builderStore";
import { Button } from "@/components/ui/button";

import {
    Lightbulb,
    Rss,
    Monitor,
    Video,
    Power,
} from "lucide-react";

const devices = [
    { label: "Light", type: "light", icon: Lightbulb },
    { label: "Sensor", type: "sensor", icon: Rss },
    { label: "TV", type: "tv", icon: Monitor },
    { label: "Camera", type: "camera", icon: Video },
    { label: "Socket", type: "socket", icon: Power },
] as const;

export default function Sidebar() {
    const addDevice = useBuilderStore((s) => s.addDevice);

    return (
        <aside className="w-56 border-r bg-white p-4 flex flex-col gap-3">
            <h2 className="text-lg font-semibold mb-2">Devices</h2>

            {devices.map((item) => {
                const Icon = item.icon;

                return (
                    <Button
                        key={item.type}
                        variant="outline"
                        className="justify-start gap-2"
                        onClick={() => addDevice(item.type)}
                    >
                        <Icon className="w-4 h-4" />
                        {item.label}
                    </Button>
                );
            })}
        </aside>
    );
}