export function Textarea({ className = "", ...props }) {
  return (
    <textarea
      {...props}
      className={`border border-gray-300 rounded p-2 resize-none ${className}`}
    />
  );
}
