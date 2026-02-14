import "./Issues.css";

import React from "react";
import { useNavigate } from "react-router-dom";
import { usePdf } from "./PdfContextCurrent";

// import { usePdf } from "./PdfContextCurrent";

// 👈 import css



const CurrentIssues = () => {
  const { groupedData, loading } = usePdf();
  const navigate = useNavigate();

  if (loading) {
    return <p className="text-center mt-5">Loading Current Issues...</p>;
  }

  const getIssuePeriod = (issueNo) => {
    switch (Number(issueNo)) {
      case 1:
        return "(January - March)";
      case 2:
        return "(April - June)";
      case 3:
        return "(July - September)";
      case 4:
        return "(October - December)";
      default:
        return "";
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Current Issues</h2>

      {groupedData
        .sort((a, b) => b.year - a.year)
        .map((yearObj) => (
          <div key={yearObj.year} className="mb-4 year-block">
            <div className="year-title">Year {yearObj.year}</div>

            {yearObj.volumes.map((vol) =>
              vol.issues.map((issue) => (
                <div
                  key={`${vol.volume}-${issue.issueNo}`}
                  className="issue-link"
                  onClick={() =>
                    navigate(
                      `/issue/${yearObj.year}/${vol.volume}/${issue.issueNo}`
                    )
                  }
                >
                  <div>
                    <span className="issue-text">
                      Volume {vol.volume}, Issue {issue.issueNo}
                    </span>{" "}
                    <span className="issue-period">
                      {getIssuePeriod(issue.issueNo)}
                    </span>
                  </div>

                  <div className="issue-arrow">→</div>
                </div>
              ))
            )}
          </div>
        ))}
    </div>
  );
};

export default CurrentIssues;
