import { createContext, useContext } from "react";

// Context dan hook dipisah dari komponen provider supaya fast refresh
// tetap bekerja — file yang mengekspor komponen tidak boleh
// mengekspor apa pun selain komponen.

export const RedlineContext = createContext({ on: false, toggle: () => {} });

export const useRedlines = () => useContext(RedlineContext);
