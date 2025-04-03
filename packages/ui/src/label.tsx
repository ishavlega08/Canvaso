import { forwardRef, LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

const labelBaseClass =
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";

const Label = forwardRef<HTMLLabelElement, LabelProps>(({ className = "", ...props }, ref) => {
  return <label ref={ref} className={`${labelBaseClass} ${className}`} {...props} />;
});

Label.displayName = "Label";

export { Label };
