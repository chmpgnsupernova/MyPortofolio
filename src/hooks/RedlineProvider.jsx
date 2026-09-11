import { useState, useCallback, useMemo } from "react";
import { RedlineContext } from "./redlineContext";

// Lapisan anotasi redline. Mati secara default — halaman harus
// terbaca bersih tanpanya. Menyalakannya memperlihatkan cara
// halaman ini disusun: nama komponen, radius, spacing.

export function RedlineProvider({ children }) {
  const [on, setOn] = useState(false);
  const toggle = useCallback(() => setOn((v) => !v), []);
  const value = useMemo(() => ({ on, toggle }), [on, toggle]);

  return (
    <RedlineContext.Provider value={value}>{children}</RedlineContext.Provider>
  );
}
