import { useEffect } from "react";

export default function ApplyButton(props) {
  const loadApplyNowScript = () => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    document.body.appendChild(script);
  };

  useEffect(() => {
    window.onload = loadApplyNowScript();
  }, []);

  return (
    <div
      className="apply-button"
      data-hackathon-slug="utkalhacks2021"
      data-button-theme="dark-inverted"
      style={{ height: "32px", width: "112px" }}
    ></div>
    
  );
}
