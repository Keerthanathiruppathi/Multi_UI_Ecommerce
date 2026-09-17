import { useTemplate } from '../templates/useTemplate';

function Contact() {
  const templateName = useTemplate();
  const isTech = templateName === 'tech';
  return (
    <div className={`container section-spacing page-shell contact-page contact-${templateName}`}>
      <div className="content-card">
        <p className="eyebrow">{isTech ? 'COMMS / SUPPORT CHANNEL' : 'Contact'}</p>
        <h1>{isTech ? 'Open a support channel' : 'Talk to our support team'}</h1>
        <p>Email: support@ecommerce.com</p>
        <p>Phone: +91 80 4567 8901</p>
        <p>{isTech ? 'Response window: under 2 hours during active operations' : 'Hours: Mon-Sat, 9:00 AM - 7:00 PM'}</p>
      </div>
    </div>
  );
}

export default Contact;
