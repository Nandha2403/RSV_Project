import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useState } from "react";

const SearchInput = ({ setResults }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Sample data

  const dataFetching = (value) => {
    const data = [
      { id: 1, name: "Apple" },
      { id: 2, name: "Banana" },
      { id: 3, name: "Orange" },
      { id: 4, name: "Grapes" },
      { id: 5, name: "Mango" },
    ];
    const results = data.filter(
      (el) => value && el && el.name && el.name.toLowerCase().includes(value)
    );

    setResults(results);
  };
  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    dataFetching(value);
  };
  return (
    <div>
      <InputGroup>
        <InputLeftElement pointerEvents="none" color={"white"}>
          <Search2Icon fontSize={"sm"} color="white" mb={"6px"} />
        </InputLeftElement>
        <Input
          size={"sm"}
          type="text"
          border={"2px solid white"}
          outline={"none"}
          _focus={{ boxShadow: "none !important" }}
          _focusVisible={"none"}
          borderRadius={"15px"}
          color={"white"}
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </InputGroup>
    </div>
  );
};

export default SearchInput;
