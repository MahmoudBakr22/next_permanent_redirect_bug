"use client";
import { useEffect } from "react";

export default function CliectRedirect() {
  useEffect(() => {
    history.replaceState("", "", "/");
  }, []);
  return <h1>Redirected</h1>;
}
