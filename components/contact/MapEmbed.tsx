export default function MapEmbed() {
  return (
    <div className="h-[400px] w-full overflow-hidden rounded-2xl shadow-card">
      <iframe
        title="MD Works Office Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63700.98!2d36.8172!3d-1.2864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1620000000000"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}