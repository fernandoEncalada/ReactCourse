import { useCounter, useFetch } from "../hooks";
import { Quote, LoadingQuote } from "../03-examples";

export const Layout = () => {

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