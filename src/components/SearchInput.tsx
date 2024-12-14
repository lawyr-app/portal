import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

type SearchInputProps = React.FC<{
  value: String;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
}>;

const SearchInput: SearchInputProps = ({ value, setValue, handleSearch }) => {
  return (
    <span className="flex flex-row w-10/12">
      <Input
        type="search"
        value={String(value)}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        placeholder="Searh by description"
        className="rounded-tr-none rounded-br-none"
      />
      <Button
        className="rounded-tl-none rounded-bl-none"
        onClick={() => {
          handleSearch();
        }}
      >
        Search
      </Button>
    </span>
  );
};

export default SearchInput;
