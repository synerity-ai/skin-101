import { clinicInfo } from '@/content/config';

const WhatsAppButton = () => {
  const whatsappHref = `https://wa.me/${clinicInfo.whatsapp.replace(/\D/g, '')}`;

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-4 z-40 flex items-center rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white shadow-card transition hover:translate-y-[-2px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      aria-label="Chat on WhatsApp"
    >
      <span aria-hidden="true" className="mr-2 text-lg">
        💬
      </span>
      WhatsApp Us
    </a>
  );
};

export default WhatsAppButton;

