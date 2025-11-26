"use client";

import React from "react";
import {
    DndContext,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent,
    DragOverlay,
} from "@dnd-kit/core";
import {restrictToParentElement} from "@dnd-kit/modifiers";
import {useBuilderStore} from "@/store/builderStore";
import {DraggableDevice} from "@/components/builder/DraggableDevice";
import {OverlayDevice} from "@/components/builder/OverlayDevice";

function snapToGrid(x: number, y: number, grid: number) {
    const snappedX = Math.round(x / grid) * grid;
    const snappedY = Math.round(y / grid) * grid;
    return { x: snappedX, y: snappedY };
}

export default function RoomCanvas() {
    const devices = useBuilderStore((s) => s.devices);
    const roomSize = useBuilderStore((s) => s.roomSize);
    const selectedDeviceId = useBuilderStore((s) => s.selectedDeviceId);
    const selectDevice = useBuilderStore((s) => s.selectDevice);
    const moveDevice = useBuilderStore((s) => s.moveDevice);
    const [activeId, setActiveId] = React.useState<string | null>(null);

    // senzory pre dnd-kit (pointer = myš + touch)
    const sensors = useSensors(useSensor(PointerSensor, {activationConstraint: {distance: 4}}));

    const GRID = 20;

    console.log(roomSize.width, roomSize.height, `w-[${roomSize.width}px] h-[${roomSize.height}px]`)

    return (
        <div className="flex-1 flex items-center justify-center overflow-auto p-4">
            <DndContext
                modifiers={[restrictToParentElement]}
                onDragStart={(event) => {
                    setActiveId(event.active.id as string);
                }}
                onDragEnd={(e) => {
                    const id = e.active.id;
                    const device = devices.find((d) => d.id === id);
                    if (!device) return;

                    const t = e.delta;

                    const snapped = snapToGrid(device.x + t.x, device.y + t.y, GRID)

                    moveDevice(id, snapped.x, snapped.y);
                    setActiveId(null)
                }}
                onDragCancel={() => setActiveId(null)}
            >
                <div
                    // ref={setParentRef}
                    className={`relative border bg-neutral-100`}
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                        width: roomSize.width,
                        height: roomSize.height,
                    }}
                >
                    {devices.map((d) => (
                        <DraggableDevice
                            key={d.id}
                            device={d}
                            isSelected={d.id === selectedDeviceId}
                            onSelect={() => selectDevice(d.id)}
                        />
                    ))}
                </div>
                <DragOverlay zIndex={1000}>
                    {activeId ? (
                        <OverlayDevice id={activeId} devices={devices}/>
                    ) : null}
                </DragOverlay>
            </DndContext>
        </div>
    );
}