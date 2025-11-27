import {
    Lightbulb,
    Lamp,
    Tv,
    Wind,
    Volume2,
    Rss,
    Power,
    Video,
} from "lucide-react";
import {TypeOfDevice, PresetColor} from "@/types/builder";

export const PRESET_COLORS : PresetColor[] = [
    "#ffffff",
    "#ffeb3b",
    "#ff9800",
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#3f51b5",
    "#2196f3",
    "#4caf50",
];

export const DEVICE_ICONS: Record<TypeOfDevice, any> = {
    light: Lightbulb,
    lamp: Lamp,
    tv: Tv,
    ac: Wind,
    camera: Video,
    speaker: Volume2,
    sensor: Rss,
    socket: Power,
};