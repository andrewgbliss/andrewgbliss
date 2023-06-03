import { forwardRef, type Ref } from "react";

interface Props {
  id?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
  value?: string;
}

const TextField = (props: Props, ref: Ref<HTMLInputElement>) => {
  const { label, error, ...rest } = props;
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-gray-700">
        {label}
      </label>
      <input
        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        ref={ref}
        {...rest}
      />
      {error && <p className="text-xs italic text-red-500">{error}</p>}
    </div>
  );
};
TextField.displayName = "TextField";

export default forwardRef(TextField);
