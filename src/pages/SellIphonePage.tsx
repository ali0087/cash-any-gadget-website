import DevicePage from '@/components/DevicePageTemplate';
import { IPHONE_PAGE } from '@/lib/devicePages';
import { IPHONE_FAQS } from '@/lib/content';

export default function SellIphonePage() {
  return <DevicePage content={{ ...IPHONE_PAGE, faqs: IPHONE_FAQS }} />;
}
