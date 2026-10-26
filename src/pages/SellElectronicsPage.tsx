import DevicePage from '@/components/DevicePageTemplate';
import { ELECTRONICS_PAGE } from '@/lib/devicePages';
import { ELECTRONICS_FAQS } from '@/lib/content';

export default function SellElectronicsPage() {
  return <DevicePage content={{ ...ELECTRONICS_PAGE, faqs: ELECTRONICS_FAQS }} />;
}
