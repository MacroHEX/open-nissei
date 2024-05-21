import * as React from "react"

import {cn} from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  suffix?: React.ReactNode
  preffix?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({suffix, preffix, className, type, ...props}, ref,) => {
    return (
      <div className="relative flex items-center w-full">
        {preffix && (
          <div className="absolute inset-y-0 left-3 flex items-center">
            {preffix}
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            {'pl-10': preffix},
            {'pr-10': suffix},
            className
          )}
          ref={ref}
          {...props}
        />
        {suffix && (
          <div className="absolute inset-y-0 right-3 flex items-center">
            {suffix}
          </div>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export {Input}