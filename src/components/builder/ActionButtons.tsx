import React from "react";

import {Button} from "@/components/ui/button";
import {useBuilderStore} from "@/store/builderStore";

const ActionButtonsComponent = () => {
    const selectedDeviceId = useBuilderStore((state) => state.selectedDeviceId);
    const removeDevice = useBuilderStore((state) => state.removeDevice);
    const duplicateDevice = useBuilderStore((state) => state.duplicateDevice);

    return (
        <div className="pt-4 flex flex-col gap-2">
            <Button
                variant="destructive"
                onClick={() => removeDevice(selectedDeviceId)}
            >
                Delete device
            </Button>

            <Button
                variant="secondary"
                onClick={() => duplicateDevice(selectedDeviceId)}
            >
                Duplicate device
            </Button>
        </div>
    )
}

export const ActionButtons = React.memo(ActionButtonsComponent);