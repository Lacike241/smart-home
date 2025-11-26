import { create } from "zustand";
import { nanoid } from "nanoid";

export type DeviceType = "light" | "sensor" | "camera" | "tv" | "socket";

export interface Device {
    id: string;
    type: DeviceType;
    x: number;
    y: number;
    rotation?: number;
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
    addDevice: (type: DeviceType) => void;
    updateDevice: (id: string, updates: Partial<Device>) => void;
    updateDeviceConfig: (
        id: string,
        config: Partial<Device["config"]>
    ) => void;
    moveDevice: (id: string, x: number, y: number) => void;
    removeDevice: (id: string) => void;
    selectDevice: (id: string | null) => void;
}

export const useBuilderStore = create<BuilderState>((set) => ({
    roomSize: { width: 800, height: 500 },
    devices: [],
    selectedDeviceId: null,

    addDevice: (type) =>
        set((state) => ({
            devices: [
                ...state.devices,
                {
                    id: nanoid(),
                    type,
                    x: 100,
                    y: 100,
                    rotation: 0,
                    config: {
                        isOn: false,
                        brightness: 80,
                        color: "#22c55e", // tvoje zelené 🎉
                    },
                },
            ],
        })),

    updateDevice: (id, updates) =>
        set((state) => ({
            devices: state.devices.map((d) =>
                d.id === id ? { ...d, ...updates } : d
            ),
        })),

    updateDeviceConfig: (id, cfg) =>
        set((state) => ({
            devices: state.devices.map((d) =>
                d.id === id ? { ...d, config: { ...d.config, ...cfg } } : d
            ),
        })),

    moveDevice: (id, x, y) =>
        set((state) => ({
            devices: state.devices.map((d) =>
                d.id === id ? { ...d, x, y } : d
            ),
        })),

    removeDevice: (id) =>
        set((state) => ({
            devices: state.devices.filter((d) => d.id !== id),
            selectedDeviceId: null,
        })),

    selectDevice: (id) => {
        console.log("Selected device:", id);
        set({selectedDeviceId: id})
    },
}));