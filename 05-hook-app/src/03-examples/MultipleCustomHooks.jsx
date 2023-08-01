import { useCounter, useFetch } from "../hooks";
import { Quote, LoadingQuote } from "./";

export const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter();

  const { data, isLoading, hasErrors } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

  const { author, quote } = !!data && data[0];

  return (
    <>
      <div>BreakingBad Quotes</div>
      <hr />

      {
        isLoading
          ? (
            <LoadingQuote />
          )
          : (
            <Quote quote={quote} author={author} />
          )
      }

      <button className="btn btn-primary" onClick={() => increment()}>Next quote</button>
    </>

  )
}