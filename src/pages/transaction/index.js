import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Balance from "../../components/balance";
import Layout from "../../components/layout";
import TransactionList from "../../components/transactionList";
import { useDispatch, useSelector } from "react-redux";
import { getTransactionHistory } from "../../store/actions/transactionActions";
import { toDateTime } from "../../helpers";

const Transaction = () => {
  const [limitData, setLimitData] = useState(0);
  const { transaction } = useSelector((state) => state.transaction);
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
            <button
              onClick={onClickShowMore}
              className="text-primary-color font-bold"
            >
              Show More
            </button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Transaction;
