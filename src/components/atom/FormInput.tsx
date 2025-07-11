interface formInputProps {
  title?: string;
  type: string;
  value?: string;
}

export default function FormInput({ title = "", type, value }: formInputProps) {
  return (
    <div className="w-[500px] flex flex-col gap-1">
      <p className="text-base font-bold">{title}</p>
      <input type={type} value={value} className="w-full h-10 border rounded" />
    </div>
  );
}
