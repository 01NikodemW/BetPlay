import toast from "react-hot-toast";
import { QueryClient } from "@tanstack/react-query";
import { ErrorType } from "./api-error";
import { t } from "i18next";

export function queryErrorHandler(error: unknown): void {
  if (error && typeof error === "object" && "errorSimpleMessage" in error) {
    const splitStringBySemicolon = (inputString: string) => {
      return inputString.split(" ; ");
    };

    const errorType = error as ErrorType;

    const title = errorType.errorSimpleMessage;

    const resultArray = splitStringBySemicolon(title);

    resultArray.forEach((element: string) => {
      toast.error(t(element));
    });
  } else {
    toast.error(t("No server connection"));
  }
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: queryErrorHandler,
      refetchOnWindowFocus: false,
      staleTime: 60 * 1000,
    },
  },
});
