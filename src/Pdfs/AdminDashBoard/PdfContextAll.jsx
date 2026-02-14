import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

import PdfApi from "./PdfApi";

const PdfContextAll = createContext();

export const usePdfAll = () => useContext(PdfContextAll);

export const PdfProviderAll = ({ children }) => {
  const [rawData, setRawData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPdfs = async () => {
    try {
      const response = await PdfApi.get("");
      setRawData(response.data); // ✅ store all PDFs once
    } catch (error) {
      console.error("❌ Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPdfs();
  }, []);

  // ⚡ Memoized grouped data (FAST)
  const groupedData = useMemo(() => {
    if (!rawData.length) return [];

    const grouped = rawData.reduce((acc, pdf) => {
      const year = pdf.pubYear;
      const { volume, issueNo } = pdf;

      if (!acc[year]) acc[year] = {};
      if (!acc[year][volume]) acc[year][volume] = {};
      if (!acc[year][volume][issueNo]) acc[year][volume][issueNo] = [];

      acc[year][volume][issueNo].push(pdf);
      return acc;
    }, {});

    return Object.entries(grouped).map(([year, volumes]) => ({
      year,
      volumes: Object.entries(volumes).map(([volume, issues]) => ({
        volume,
        issues: Object.entries(issues).map(([issueNo, pdfs]) => ({
          issueNo,
          pdfs,
        })),
      })),
    }));
  }, [rawData]);

  return (
    <PdfContextAll.Provider
      value={{
        rawData,       // all pdfs
        groupedData,   // structured
        loading,
        fetchPdfs,     // manual refresh
        setRawData     // live updates
      }}
    >
      {children}
    </PdfContextAll.Provider>
  );
};
