import AwesomeDebouncePromise from 'awesome-debounce-promise';
import { IProduct } from 'features/Products/productsSlice';
import { useState } from 'react';
import { useAsyncAbortable } from 'react-async-hook';
import useConstant from 'use-constant';
import { baseBackendUrl } from 'utils/config';

export const fetchSearchedProducts = async (
  phrase: string,
  categories: number[],
  abortSignal?: AbortSignal
): Promise<IProduct[]> => {
  const result = await fetch(
    `${baseBackendUrl}/products/search?order=ASC&offset=0&limit=60&search[phrase][value]=${phrase}&search[categories][value]=[${categories}]`,
    {
      signal: abortSignal,
    }
  );
  if (result.status !== 200) {
    throw new Error('bad status = ' + result.status);
  }

  const json = await result.json();
  return json.data;
};

export const useSearchProducts = () => {
  const [inputText, setInputText] = useState('');
  const [inputCategories, setInputCategories] = useState<number[]>([]);

  // Debounce the original search async function
  const debouncedSearchFunction = useConstant(() =>
    AwesomeDebouncePromise(fetchSearchedProducts, 300)
  );

  const search = useAsyncAbortable(
    async (abortSignal) => {
      return debouncedSearchFunction(inputText, inputCategories, abortSignal);
    },
    // Ensure a new request is made everytime the text changes (even if it's debounced)
    [inputText, inputCategories, setInputCategories]
  );

  return {
    inputText,
    setInputText,
    inputCategories,
    setInputCategories,
    search,
  };
};
