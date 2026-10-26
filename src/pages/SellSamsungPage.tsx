import DevicePage from '@/components/DevicePageTemplate';
import { SAMSUNG_PAGE } from '@/lib/devicePages';
import { SAMSUNG_FAQS } from '@/lib/content';

export default function SellSamsungPage() {
  return <DevicePage content={{ ...SAMSUNG_PAGE, faqs: SAMSUNG_FAQS }} />;
}
