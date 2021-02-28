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
      data-hackathon-slug="acm-c2c"
      data-button-theme="dark"
      style={{ height: "32px", width: "112px" }}
    ></div>
    
  );
}
