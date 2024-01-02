interface ContactFormEmailProps {
  name: string;
  emailAddress: string;
  content: string;
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  emailAddress,
  content,
}) => (
  <div>
    <h1>Contact form submission</h1>
    <p>
      From <strong>{name}</strong> at {emailAddress}
    </p>
    <h2>Message:</h2>
    <p>{content}</p>
  </div>
);

export default ContactFormEmail;
