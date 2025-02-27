"use client";
import { ContributionCalendar } from "@/types";
import React, { useEffect, useState } from "react";

const GitHistory = () => {
  const [contributions, setContributions] = useState<
    undefined | ContributionCalendar
  >();

  const gitHistoryPlaceholder = Array.from({ length: 100 }, (_, rowIndex) =>
    Array.from(
      { length: 7 },
      (_, colIndex) => `${rowIndex + 1}-${colIndex + 1}`
    )
  );

  const fetchGitHubData = async () => {
    const query = `
    query {
      user(login: "RakibulBh") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
      }
    }
  `;

    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();
    console.log(data);
    setContributions(
      data.data.user.contributionsCollection.contributionCalendar
    );
  };

  useEffect(() => {
    fetchGitHubData();
  }, []);

  return (
    <div className="w-full text-white p-2 space-y-1">
      <h1 className="hidden md:block text-md text-gray-200 ">
        {contributions ? contributions.totalContributions : 0} Contributions in
        the last year (Present - Past)
      </h1>
      <h1 className="block md:hidden text-xs text-gray-200 ">Git History</h1>
      <div className="flex gap-1 sm:-mt-1 no-scrollbar">
        {contributions &&
          [...contributions.weeks].reverse().map((week, index) => (
            <div key={index} className="flex flex-col gap-[0.12rem]">
              {week.contributionDays.map((day, i) => (
                <div
                  key={i}
                  className="w-[0.4rem] md:w-[0.55rem] lg:w-[0.65rem]  aspect-square rounded-sm"
                  style={{
                    backgroundColor:
                      day.contributionCount / 10 !== 0
                        ? `rgba(46, 164, 79, ${day.contributionCount / 10})`
                        : `#1e1e1e`,
                  }}
                  title={`${day.date}: ${day.contributionCount} contributions`}
                />
              ))}
            </div>
          ))}
        {/* Placeholder whilst github is loading */}
        {!contributions &&
          [...gitHistoryPlaceholder].map((week, index) => (
            <div key={index} className="flex flex-col gap-[0.12rem]">
              {week.map((day, i) => (
                <div
                  key={i}
                  className="w-[0.65rem] h-[0.65rem] rounded-sm"
                  style={{
                    backgroundColor: "#1e1e1e",
                  }}
                />
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default GitHistory;
