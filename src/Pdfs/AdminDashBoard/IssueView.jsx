import React, { useMemo } from "react";

import { GrDocumentPdf } from "react-icons/gr";
import { useParams } from "react-router-dom";
import { usePdf } from "./PdfContextCurrent";

const IssueView = () => {
  const { year, volume, issueNo } = useParams();
  const { rawData, loading } = usePdf();

  const articles = useMemo(() => {
    return rawData.filter(
      (pdf) =>
        pdf.pubYear == year &&
        pdf.volume == volume &&
        pdf.issueNo == issueNo &&
        pdf.issueType === "Current_Issue"
    );
  }, [rawData, year, volume, issueNo]);

  if (loading) {
    return <p className="text-center mt-5">Loading Issue...</p>;
  }

  return (
    <div className="container mt-5">
      <h3>
        Volume: {volume} Issue: {issueNo} ({year})
      </h3>

      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Article Information</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((pdf, index) => (
            <tr key={pdf.id}>
              <td>{index + 1}</td>
              <td>

                 <a
                    id="anchor"
                    href={`https://api.ijmsabc.org/api/ijmsabc/pdfs/view/${pdf.id}`}
                    target="_self"
                    rel="noreferrer">
                                        
                   <div>
                   <strong>{pdf.title}</strong>
                    <br />By {pdf.author}</div>
                     <div>
                 <GrDocumentPdf id="icon" />
                  </div>
                 </a>
                 

                {/* <a
                  href={`https://api.ijmsabc.org/api/ijmsabc/pdfs/view/${pdf.id}`}
                  target="_self"
                  className="btn btn-sm btn- mt-2"
                >
                  <strong>{pdf.title}</strong><br/>
                  <GrDocumentPdf /> View PDF
                </a> */}
                
                {/* <b>Author(s):</b> {pdf.author}<br/> */}
                {/* <b>Country:</b> {pdf.country}<br/> */}
                {/* <b>Research Area:</b> {pdf.researchArea}<br/> */}
                {/* <b>Page No:</b> {pdf.pageNo}<br/> */}
                {/* <b>DOI:</b> {pdf.doi}<br/> */}

                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IssueView;
