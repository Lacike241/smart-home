import {create} from "zustand";
import {nanoid} from "nanoid";

import {TypeOfDevice, PresetColor} from "@/types/builder";
import {persist} from "zustand/middleware";

export interface Device {
    id: string;
    name: string
    type: TypeOfDevice;
    x: number;
    y: number;
    on: boolean;
    brightness: number;
    color: PresetColor;
    rotation: number;
    config: {
        isOn?: boolean;
        brightness?: number;
        color?: string;
    };
}

interface BuilderState {
    roomSize: { width: number; height: number };
    devices: Device[];
    selectedDeviceId: string | null;

    // actions
    addDevice: (type: TypeOfDevice) => void;
    updateDevice: (id: string, updates: Partial<Device>) => void;
    updateDeviceConfig: (
        id: string,
        config: Partial<Device["config"]>
    ) => void;
    duplicateDevice: (id: string | null) => void;
    moveDevice: (id: string, x: number, y: number) => void;
    removeDevice: (id: string | null) => void;
    selectDevice: (id: string | null) => void;
}

export const useBuilderStore = create<BuilderState>()(
    persist(
        (set) => ({
            roomSize: {width: 800, height: 500},
            devices: [],
            selectedDeviceId: null,

            addDevice: (type) =>
                set((state) => ({
                    devices: [
                        ...state.devices,
                        {
                            id: nanoid(),
                            type,
                            name: '',
                            x: 100,
                            y: 100,
                            on: false,
                            color: "#ffffff",
                            brightness: 100,
                            rotation: 0,
                            config: {
                                isOn: false,
                                brightness: 80,
                                color: "#22c55e",
                            },
                        },
                    ],
                })),

            updateDevice: (id, updates) =>
                set((state) => ({
                    devices: state.devices.map((d) =>
                        d.id === id ? {...d, ...updates} : d
                    ),
                })),

            updateDeviceConfig: (id, cfg) =>
                set((state) => ({
                    devices: state.devices.map((d) =>
                        d.id === id ? {...d, config: {...d.config, ...cfg}} : d
                    ),
                })),

            moveDevice: (id, x, y) =>
                set((state) => ({
                    devices: state.devices.map((d) =>
                        d.id === id ? {...d, x, y} : d
                    ),
                })),

            removeDevice: (id) => {
                if (id) {
                    set((state) => ({
                        devices: state.devices.filter((d) => d.id !== id),
                        selectedDeviceId: null,
                    }))
                }
            },
            selectDevice: (id) => {
                set({selectedDeviceId: id})
            },
            duplicateDevice: (id) => {
                if (id) {
                    set((state) => {
                        const original = state.devices.find((d) => d.id === id);
                        if (!original) return {};

                        const copy = {
                            ...original,
                            id: nanoid(),
                            x: original.x + 20,
                            y: original.y + 20,
                            name: original.name + " copy"
                        };

                        return {
                            devices: [...state.devices, copy],
                            selectedDeviceId: copy.id,
                        };
                    })
                }
            }
        }), {
            name: 'builder-storage',
        },)
);