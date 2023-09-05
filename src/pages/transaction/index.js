import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Balance from "../../components/balance";
import Layout from "../../components/layout";
import TransactionList from "../../components/transactionList";
import { useDispatch, useSelector } from "react-redux";
import { getTransactionHistory } from "../../store/actions/transactionActions";
import { toDateTime } from "../../helpers";
import { MutatingDots } from "react-loader-spinner";

const Transaction = () => {
  const [limitData, setLimitData] = useState(0);
  const { transaction, isLoadingTransaction } = useSelector(
    (state) => state.transaction
  );
  const dispatch = useDispatch();

  const onClickShowMore = () => {
    setLimitData((prev) => prev + 5);
  };

  useEffect(() => {
    dispatch(getTransactionHistory({ limit: 5 + limitData, offset: 0 }));
  }, [dispatch, limitData]);
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Layout>
        <Balance />
        <section className="w-full py-8">
          <h4 className="font-semibold text-sm">Semua Transaksi</h4>
          <div className="py-4 flex flex-col gap-2">
            {isLoadingTransaction && (
              <div className="w-full flex items-center justify-center">
                <MutatingDots
                  height="80"
                  width="80"
                  radius="9"
                  color="#35CE82"
                  ariaLabel="three-dots-loading"
                  wrapperStyle
                  wrapperClass
                />
              </div>
            )}
            {transaction?.data?.records?.map((e, idx) => {
              const dateTime = toDateTime(e?.created_on);
              return (
                <TransactionList
                  key={idx}
                  date={dateTime?.formattedDate}
                  nominal={200000}
                  description={e?.description}
                  time={dateTime?.formattedTime}
                  transaction_type={e?.transaction_type}
                />
              );
            })}
            {!isLoadingTransaction && (
              <button
                onClick={onClickShowMore}
                className="text-primary-color font-bold"
              >
                Show More
              </button>
            )}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Transaction;
