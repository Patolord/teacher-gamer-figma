import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function MyApp() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "training-session" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  return (
    <button
      type="button"
      data-cal-namespace="training-session"
      data-cal-link="up-craft-crew/training-session"
      data-cal-config='{"layout":"month_view"}'
      className="bg-yellow-500 text-black px-4 py-2 rounded-md text-center w-full"
    >
      Agende sua Sessão
    </button>
  );
}
