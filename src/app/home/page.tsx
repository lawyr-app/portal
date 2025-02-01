"use client";

import { useVirtualizer } from "@tanstack/react-virtual";
import React, { useEffect, useRef, useState } from "react";
import UserCard from "./components/UserCard";
import SearchInput from "@/components/SearchInput";
import { Button } from "@/components/ui/button";
import { ListFilter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { experienceList, genderList, langaugesList } from "@/constant/user";
import { regions } from "@/constant/states";
import { courts } from "@/constant/courts";
import { Input } from "@/components/ui/input";

const Home = () => {
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const handleSearch = () => {};

  return (
    <div className="flex flex-col">
      <div className="flex flex-col w-full items-center">
        <div className="flex flex-row w-3/5 items-center justify-center gap-1">
          <SearchInput
            handleSearch={handleSearch}
            setValue={setSearch}
            value={search}
          />
          <Button variant="ghost" onClick={() => setShowFilters(!showFilters)}>
            <ListFilter
              className={`transition-transform duration-300 ease-in-out ${
                showFilters ? "rotate-180" : "rotate-0"
              }`}
            />
          </Button>
        </div>

        {showFilters && (
          <div className="flex flex-row items-center flex-wrap justify-center gap-2 my-3">
            <GenderFilter />
            <StateFilter />
            <ExperienceFilter />
            <LanguageFilter />
            {/* <TypeFilter /> */}
            <CourtFilter />
          </div>
        )}
      </div>
      <div className="flex flex-row w-full flex-wrap gap-6 items-center justify-center mt-2">
        {new Array(20).fill("").map((m, i) => (
          <UserCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default Home;

const GenderFilter = () => {
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a Gender" />
      </SelectTrigger>
      <SelectContent>
        {genderList.map((m) => (
          <SelectItem key={m.id} value="est">
            {m.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

const StateFilter = () => {
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select Region" />
      </SelectTrigger>
      <SelectContent>
        {regions.map((m) => (
          <SelectItem key={m.regionId} value={m.regionId}>
            {m.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

const ExperienceFilter = () => {
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select Experience" />
      </SelectTrigger>
      <SelectContent>
        {experienceList.map((m) => (
          <SelectItem key={m.id} value={String(m.id)}>
            {m.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

const PracticeAreasFilter = () => {};

const CourtFilter = () => {
  const [selectedCourt, setSelectedCourt] = useState("");
  const [search, setSearch] = useState("");
  const filteredCourts = courts.filter((court) =>
    court.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Select
      onValueChange={(v) => {
        if (v === "NO_VALUE") {
          setSelectedCourt("");
        } else {
          setSelectedCourt(v);
        }
      }}
    >
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select Court" />
      </SelectTrigger>
      <SelectContent>
        <Input
          placeholder="Search court..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 w-full border-b mb-2"
        />
        {filteredCourts.length === 0 && (
          <SelectItem value="NO_VALUE">No court found</SelectItem>
        )}
        {filteredCourts.slice(0, 100).map((m) => (
          <SelectItem key={m.index} value={String(m.name)}>
            {m.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

const LanguageFilter = () => {
  return (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a Language" />
      </SelectTrigger>
      <SelectContent>
        {langaugesList.map((m) => (
          <SelectItem key={m} value={String(m)}>
            {m}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
