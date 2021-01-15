import React from "react";
import ContentLoader from "react-content-loader";

export const TagLoader = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={200}
    viewBox="0 0 280 200"
    backgroundColor="#a5e3fd"
    foregroundColor="#2a09a5"
  >
    <rect x="10" y="9" rx="3" ry="3" width="197" height="13" />
    <rect x="12" y="32" rx="3" ry="3" width="105" height="8" />
    <rect x="11" y="77" rx="3" ry="3" width="197" height="13" />
    <rect x="13" y="100" rx="3" ry="3" width="105" height="8" />
    <rect x="9" y="147" rx="3" ry="3" width="197" height="13" />
    <rect x="11" y="170" rx="3" ry="3" width="105" height="8" />
  </ContentLoader>
);
