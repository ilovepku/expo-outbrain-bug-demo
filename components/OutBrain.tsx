import { OutbrainWidget } from "outbrain-react-native";
import { Platform } from "react-native";

const widgetId = Platform.OS === "ios" ? "MB_1" : "MB_2";
const partnerKey =
  Platform.OS === "ios"
    ? "DEINS1PD0JFK0LB8BMIQG6OB0"
    : "DEINS237HPCM2CQ7GAP4M240B";

export const OutbrainComponent = ({ articleUrl }: { articleUrl: string }) => (
  <OutbrainWidget
    widgetId={widgetId}
    widgetIndex={0}
    articleUrl={articleUrl}
    partnerKey={partnerKey}
    handler={{
      onHeightChange: (newHeight: number) => {
        console.log("🚀 ~ newHeight:", newHeight);
      },
      onRecClick: (url: string) => {
        console.log("🚀 ~ url:", url);
      },
      onOrganicRecClick: (url: string) => {
        console.log("🚀 ~ url:", url);
      },
      onWidgetEvent: (eventName: string, data: { [key: string]: any }) => {
        console.log("🚀 ~ eventName:", eventName, data);
      },
    }}
  />
);
