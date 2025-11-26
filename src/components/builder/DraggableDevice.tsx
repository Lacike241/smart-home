import { useDraggable } from "@dnd-kit/core";
import {Move} from "lucide-react";

interface DraggableDeviceProps {
    device: any;
    isSelected: boolean;
    onSelect: () => void;
}

export const DraggableDevice: React.FC<DraggableDeviceProps> = ({ device, isSelected, onSelect }) => {
    const { setNodeRef, listeners, attributes, isDragging } =
        useDraggable({ id: device.id });

    return (
        <div
            ref={setNodeRef}
            {...attributes}
            style={{
                position: "absolute",
                left: device.x,
                top: device.y,
                transform: isDragging
                    ? `scale(0.9)`
                    : "none",
                opacity: isDragging ? 0.4 : 1,
                transition: "opacity 0.1s, transform 0.1s",
                zIndex: isDragging ? 50 : 20,
            }}
            onClick={(e) => {
                e.stopPropagation();
                onSelect();
            }}
            className="p-1 bg-white rounded-md shadow-md cursor-grab"
        >
            <div
                {...listeners}
                onClick={(e) => e.stopPropagation()}
                className="p-1 cursor-grab active:cursor-grabbing w-[100px] flex items-center gap-2 touch-none"
            >
                <Move size={14} />
                <span className="font-medium capitalize">{device.type}</span>
            </div>
        </div>
    );
}