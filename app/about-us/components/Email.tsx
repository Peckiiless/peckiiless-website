interface ContactMeEmailProps {
  name: string;
  emailAddress: string;
  content: string;
}

const ContactMeEmail = ({
  name,
  content,
  emailAddress,
}: ContactMeEmailProps) => {
  const previewText = `${name} has a message`;

  return (
    <div>
      <h1>Contact form submission</h1>
      <p>
        From <strong>{name}</strong> at {emailAddress}
      </p>
      <h2>Message:</h2>
      <p>{content}</p>
    </div>
  );
};

export default ContactMeEmail;
