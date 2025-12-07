import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function Calendar() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "training-session" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  return (
    <Cal
      namespace="training-session"
      calLink="up-craft-crew/training-session"
      style={{
        width: "100%",
        height: "100%",
      }}
      config={{ layout: "month_view" }}
    />
  );
}
