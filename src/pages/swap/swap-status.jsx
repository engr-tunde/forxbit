import SwapStatusPageBody from "../../components/swap/SwapStatusPageBody";
import { useParams } from "react-router-dom";
import { changeNowFetcherMutate, useFetchChangeNow } from "../../api/changeNow";
import Loader from "../../components/globals/Loader";
import SwapStatusFinishedBody from "../../components/swap/SwapStatusFinishedBody";

const SwapStatusPage = () => {
  const { id } = useParams();

  const { data, loading, error, mutate } = changeNowFetcherMutate(
    `v2/exchange/by-id?id=${id}`
  );
  //   const { data, loading, error } = useFetchChangeNow(
  //     `v2/exchange/by-id?id=${id}`
  //   );
  mutate();

  console.log("data", data);

  return (
    <div className="col-span-1 md:col-span-3">
      {data && data?.status == "finished" ? (
        <SwapStatusFinishedBody trade={data} />
      ) : (
        <SwapStatusPageBody trade={data} />
      )}
      {loading && <Loader />}
    </div>
  );
};

export default SwapStatusPage;
