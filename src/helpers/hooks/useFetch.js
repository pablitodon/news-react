var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useEffect, useState } from "react";
export const useFetch = (fetchFunction, params) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    // т.к строки сравнивать легче:
    const stringParams = params ? new URLSearchParams(params).toString() : "";
    useEffect(() => {
        (() => __awaiter(void 0, void 0, void 0, function* () {
            try {
                setIsLoading(true); // Устанавливаем isLoading в true перед началом запроса
                const result = yield fetchFunction(params);
                setData(result);
            }
            catch (error) {
                setError(error);
            }
            finally {
                setIsLoading(false);
            }
        }))();
    }, [fetchFunction, stringParams]);
    return { data, error, isLoading };
};
