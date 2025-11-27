import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {PRESET_COLORS} from "@/constants/builder";
import {PresetColor} from "@/types/builder";

export function ColorPicker({ color, onChange }: { color: string; onChange: (c: PresetColor) => void }) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <div
                    className="w-10 h-10 rounded-md border cursor-pointer"
                    style={{ background: color }}
                />
            </PopoverTrigger>

            <PopoverContent className="w-60">
                <div className="grid grid-cols-5 gap-2">
                    {PRESET_COLORS.map((c) => (
                        <button
                            key={c}
                            className="w-8 h-8 rounded-md border"
                            style={{ background: c }}
                            onClick={() => onChange(c)}
                        />
                    ))}
                </div>
            </PopoverContent>
        </Popover>
    );
}