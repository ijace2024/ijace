import React, {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

import PdfApi from "./PdfApi";

const PdfContextPrevious = createContext();

export const usePdfPrevious = () => useContext(PdfContextPrevious);

export const PdfProviderPrevious = ({ children }) => {
  const [rawData, setRawData] = useState([]);
  const [groupedData, setGroupedData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPdfs = async () => {
    try {
      const response = await PdfApi.get("");

      // ✅ STRICT FILTER
      const filtered = response.data.filter(
        (pdf) =>
          
          pdf.source?.toLowerCase() === "ijace"
      );

      // ✅ Group Year → Volume → Issue
      const grouped = filtered.reduce((acc, pdf) => {
        const year = pdf.pubYear;
        const { volume, issueNo } = pdf;

        if (!acc[year]) acc[year] = {};
        if (!acc[year][volume]) acc[year][volume] = {};
        if (!acc[year][volume][issueNo]) acc[year][volume][issueNo] = [];

        acc[year][volume][issueNo].push(pdf);
        return acc;
      }, {});

      const formatted = Object.entries(grouped).map(([year, volumes]) => ({
        year: Number(year),
        volumes: Object.entries(volumes).map(([volume, issues]) => ({
          volume: Number(volume),
          issues: Object.entries(issues).map(([issueNo, pdfs]) => ({
            issueNo: Number(issueNo),
            pdfs,
          })),
        })),
      }));

      setRawData(filtered);
      setGroupedData(formatted);
    } catch (err) {
      console.error("❌ Previous PDF fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPdfs();
  }, []);

  return (
    <PdfContextPrevious.Provider value={{ rawData, groupedData, loading }}>
      {children}
    </PdfContextPrevious.Provider>
  );
};
