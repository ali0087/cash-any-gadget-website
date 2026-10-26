import DevicePage from '@/components/DevicePageTemplate';
import { CONSOLE_PAGE } from '@/lib/devicePages';
import { CONSOLE_FAQS } from '@/lib/content';

export default function SellConsolePage() {
  return <DevicePage content={{ ...CONSOLE_PAGE, faqs: CONSOLE_FAQS }} />;
}
