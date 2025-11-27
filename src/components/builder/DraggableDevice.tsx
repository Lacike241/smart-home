import { useDraggable } from "@dnd-kit/core";
import {Lightbulb} from "lucide-react";

import {DEVICE_ICONS} from "@/constants/builder";
import {Device, useBuilderStore} from "@/store/builderStore";
import React from "react";

interface DraggableDeviceProps {
    device: Device;
    isSelected: boolean;
}

const DraggableDeviceComponent: React.FC<DraggableDeviceProps> = ({ device, isSelected }) => {
    const { setNodeRef, listeners, attributes, isDragging } =
        useDraggable({ id: device.id });
    const selectDevice = useBuilderStore((s)=> s.selectDevice);

    const opacity = device.on ? device.brightness / 100 : 0.3;
    const grayscale = device.on ? "grayscale-0" : "grayscale";

    const Icon = DEVICE_ICONS[device.type] ?? Lightbulb;
    return (
        <div
            ref={setNodeRef}
            {...attributes}
            style={{
                position: "absolute",
                left: device.x,
                top: device.y,
                transform: `
                    translate(${isDragging ? "-50% -50%" : "0"})
                    rotate(${device.rotation}deg)
                    ${isDragging ? "scale(0.8)" : ""}
                `,
                opacity:  isDragging ? 0.4 : opacity,
                transition: "opacity 0.1s, transform 0.1s",
                zIndex: isDragging ? 50 : 20,
                    backgroundColor: device.color,

            }}
            className={`p-1 bg-white  ${grayscale} rounded-md shadow-md cursor-grab ${isSelected ? 'border-green-300 border-2': ''}`}
        >
            <div
                {...isSelected ? listeners : {}}
                onClick={(e) => {
                    selectDevice(device.id);
                    e.stopPropagation()
                }}
                className={"p-1 cursor-grab active:cursor-grabbing w-[100px] flex items-center gap-2 touch-none"}
            >
                <Icon size={14} className={`${isSelected ? 'text-green-500' : ''}`} />
                <span className="font-medium capitalize">{device.type}</span>
            </div>
        </div>
    );
}
export const DraggableDevice = React.memo(DraggableDeviceComponent)