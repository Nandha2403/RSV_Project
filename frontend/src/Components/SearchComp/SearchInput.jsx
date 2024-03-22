import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useState } from "react";

const SearchInput = ({ setResults }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data

  const dataFetching = (value) => {
    const data = [
      { id: 1, name: "Solutions", path: "/Solutions" },
      { id: 2, name: "Services", path: "/Services" },
      { id: 3, name: "Products", path: "/Products" },
      { id: 4, name: "Career", path: "/Career" },
      { id: 5, name: "Case Study", path: "/CaseStudy" },
      {
        id: 6,
        name: "AI In ClinicalTrial",
        path: "/CaseStudy/AI-In-ClinicalTrial",
      },
      {
        id: 7,
        name: "AI In Dermatology",
        path: "CaseStudy/AI-In-Dermatology",
      },
      {
        id: 8,
        name: "Query Management",
        path: "/CaseStudy/Query-Management",
      },
      {
        id: 9,
        name: "Adverse Event Module",
        path: "/CaseStudy/Adverse-Event-Module",
      },
      // {
      //   id: 10,
      //   name: "Business Intelligence",
      //   path: "/CaseStudy/Business-Intelligence",
      // },
      // {
      //   id: 11,
      //   name: "Oncology Workflow",
      //   path: "/CaseStudy/Oncology-Workflow",
      // },
      // {
      //   id: 12,
      //   name: "Electronic Data Capture",
      //   path: "/CaseStudy/Electronic-Data-Capture",
      // },
      // {
      //   id: 13,
      //   name: "Hand Scintigraphy",
      //   path: "/CaseStudy/Hand-Scintigraphy",
      // },
      // {
      //   id: 14,
      //   name: "Paired Reads",
      //   path: "/CaseStudy/Paired-Reads",
      // },
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
