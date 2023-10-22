"use client";
import React from "react";

import { HomePageFilters } from "@/constants/filters";
import { Button } from "../ui/button";
import clsx from "clsx";

const HomeFilters = () => {
  const active = "frequent";

  return (
    <div className="mt-10 flex-wrap gap-3 md:flex">
      {HomePageFilters.map((item) => (
        <Button
          key={item.value}
          onClick={() => {}}
          className={clsx(
            "body-medium rounded-lg px-6 py-3 capitalize shadow-none",
            {
              "bg-primary-100 text-primary-500": active === item.value,
              "dark:text-light-500 bg-light-800 text-light-500 dark:bg-dark-300 hover:opacity-80 transition":
                active !== item.value,
            }
          )}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilters;
