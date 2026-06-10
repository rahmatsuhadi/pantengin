import React from "react";

export type TextVariant =
  | "heading-1"
  | "heading-2"
  | "subheader"
  | "base"
  | "caption";

const variantTagMap: Record<TextVariant, React.ElementType> = {
  "heading-1": "h1",
  "heading-2": "h2",
  subheader: "h3",
  base: "p",
  caption: "span",
};

const variantStyleMap: Record<TextVariant, string> = {
  "heading-1": "font-display text-4xl font-bold tracking-tight text-gray-900",
  "heading-2": "font-display text-2xl font-semibold text-gray-800",
  subheader: "text-lg font-medium text-gray-700",
  base: "text-base font-normal text-gray-600 leading-relaxed",
  caption: "text-xs font-light text-secondary",
};

export type TextProps<C extends React.ElementType> = {
  variant?: TextVariant;
  as?: C;
  className?: string;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<C>;

export const Text = <C extends React.ElementType = "p">({
  variant = "base",
  as,
  className = "",
  children,
  ...props
}: TextProps<C>) => {
  const Component = as || variantTagMap[variant] || "p";

  const combineClassName = ` ${variantStyleMap[variant]} ${className}`.trim();

  return (
    <Component className={combineClassName} {...props}>
      {children}
    </Component>
  );
};
