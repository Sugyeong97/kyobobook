interface formInputProps {
  title?: string;
  type: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormInput({
  title = "",
  type,
  value,
  onChange = undefined,
}: formInputProps) {
  return (
    <div className="w-[500px] flex flex-col gap-1">
      <label className="text-base font-black">{title}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-full p-3 border rounded"
      />
    </div>
  );
}
