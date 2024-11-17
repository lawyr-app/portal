import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { regions } from "@/constant/states";

export function SelectTerrortory() {
  return (
    <Select>
      <SelectTrigger className={`w-[150px]`}>
        <SelectValue placeholder="terrortory" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem key={0} value={String(0)}>
            No terrortory
          </SelectItem>
          {regions.map((m) => (
            <SelectItem key={m.id} value={String(m.id)}>
              {m.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
