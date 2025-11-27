import ConfigPanel from "@/components/builder/ConfigPanel";
import RoomCanvas from "@/components/builder/RoomCanvas";
import Sidebar from "@/components/builder/Sidebar";

export default function BuilderPage() {
    return (
        <div className="flex h-screen">
            <Sidebar />

            <div className="flex flex-1 items-center justify-center text-neutral-500">
                <RoomCanvas />
            </div>
            <ConfigPanel />
        </div>
    );
}