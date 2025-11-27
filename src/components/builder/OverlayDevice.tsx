import {Move} from "lucide-react";
import {useBuilderStore} from "@/store/builderStore";

interface Props {
    id: string;
}

export function OverlayDevice({ id }: Props) {
    const devices = useBuilderStore((s) => s.devices);
    const device = devices.find((d) => d.id === id);
    if (!device) return null;

    return (
        <div
            className="px-3 py-2 rounded-md bg-white shadow-md opacity-80
                 flex items-center gap-2 pointer-events-none w-[100px]"
        >
            <Move size={14} className="text-neutral-500" />
            <span className="font-medium capitalize">{device.type}</span>
        </div>
    );
}