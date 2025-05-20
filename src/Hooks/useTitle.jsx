import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} / shoppity`;
  }, [title]); // run only when title changes

  return null;
};
