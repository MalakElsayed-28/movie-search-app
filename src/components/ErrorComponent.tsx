interface ErrorComponentProps {
  message: string;
}

export default function ErrorComponent({ message }: ErrorComponentProps) {
  return (
    <div >
      <p>{message}</p>
    </div>
  );
}
