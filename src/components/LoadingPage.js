import React from "react";
import ContentLoader from "react-content-loader";

const LoadingPage = () => (
  <ContentLoader
    speed={2}
    width={450}
    height={600}
    viewBox="0 0 450 500"
    backgroundColor="#6a4dbc"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="3" ry="3" width="50" height="10" />

    <rect x="0" y="30" rx="3" ry="3" width="100" height="100" />
    <rect x="110" y="30" rx="3" ry="3" width="100" height="100" />
    <rect x="220" y="30" rx="3" ry="3" width="100" height="100" />
    <rect x="330" y="30" rx="3" ry="3" width="100" height="100" />

    <rect x="0" y="190" rx="3" ry="3" width="50" height="10" />

    <rect x="0" y="210" rx="3" ry="3" width="100" height="100" />
    <rect x="110" y="210" rx="3" ry="3" width="100" height="100" />
    <rect x="220" y="210" rx="3" ry="3" width="100" height="100" />
    <rect x="330" y="210" rx="3" ry="3" width="100" height="100" />

    <rect x="0" y="320" rx="3" ry="3" width="100" height="100" />
    <rect x="110" y="320" rx="3" ry="3" width="100" height="100" />
    <rect x="220" y="320" rx="3" ry="3" width="100" height="100" />
    <rect x="330" y="320" rx="3" ry="3" width="100" height="100" />
  </ContentLoader>
);

export default LoadingPage;
