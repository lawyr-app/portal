/* eslint-disable @typescript-eslint/no-unused-vars */
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

type SelectRegionProps = React.FC<{
  region: string;
  setRegion: React.Dispatch<React.SetStateAction<string>>;
}>;

const SelectRegion: SelectRegionProps = ({ region, setRegion }) => {
  return (
    <>
      <Select
        value={region}
        onValueChange={(val) => {
          setRegion(val);
        }}
      >
        <SelectTrigger className="w-[150px] dark:bg-background dark:text-foreground dark:border-border">
          <SelectValue placeholder="Select Region" />
        </SelectTrigger>
        <SelectContent className={`  border-neutral-800`}>
          <SelectGroup>
            <SelectItem key={0} value={String(0)}>
              Select Region
            </SelectItem>
            {regions.map((m) => (
              <SelectItem key={m.id} value={String(m.regionId)}>
                {m.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};

export default SelectRegion;
