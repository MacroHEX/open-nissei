import {FieldValues, UseFormReturn} from "react-hook-form";
import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Eye, EyeOff} from "lucide-react";
import {Link} from "react-router-dom";
import React from "react";

interface FormFieldComponentProps<T extends FieldValues> {
  name: keyof T;
  label: string;
  type?: string;
  form: UseFormReturn<T>;
  showPassword?: boolean;
  togglePassword?: () => void;
  link?: string;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
}

const FormFieldComponent = <T extends FieldValues>({
                                                     name,
                                                     label,
                                                     type = "text",
                                                     form,
                                                     showPassword,
                                                     togglePassword,
                                                     link,
                                                     onBlur,
                                                   }: FormFieldComponentProps<T>) => (
  <FormField
    control={form.control}
    name={name as any}
    render={({field}) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input
            type={type === "password" && showPassword ? "text" : type}
            {...field}
            onBlur={onBlur}
            suffix={
              type === "password" && (showPassword ? (
                <Eye onClick={togglePassword} className='text-emerald-600 hover:text-emerald-800 cursor-pointer'/>
              ) : (
                <EyeOff onClick={togglePassword} className='text-emerald-600 hover:text-emerald-800 cursor-pointer'/>
              ))
            }
          />
        </FormControl>
        {link && <FormDescription><Link to={link}>¿Olvidaste tu contraseña?</Link></FormDescription>}
        <FormMessage/>
      </FormItem>
    )}
  />
);

export default FormFieldComponent;
