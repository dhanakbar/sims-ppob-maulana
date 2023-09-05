import React from "react";
import { Helmet } from "react-helmet";
import Balance from "../../components/balance";
import Layout from "../../components/layout";
import TransactionList from "../../components/transactionList";

const Transaction = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Layout>
        <Balance username={"Nama Pengguna"} balance={"2000000"} />
        <section className="w-full py-8">
          <h4 className="font-semibold text-sm">Semua Transaksi</h4>
          <div className="py-4 flex flex-col gap-2">
            <TransactionList
              date={"20 November 2023"}
              nominal={200000}
              status={"Top Up Saldo"}
              time={"17:50"}
            />
            <TransactionList
              date={"20 November 2023"}
              nominal={200000}
              status={"Prabayar"}
              time={"17:50"}
            />
            <TransactionList
              date={"20 November 2023"}
              nominal={200000}
              status={"Prabayar"}
              time={"17:50"}
            />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Transaction;
