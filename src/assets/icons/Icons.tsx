import { SVGAttributes } from "react";

export interface IconsProps extends SVGAttributes<SVGElement> {
  color?: string;
  backgroundColor?: string;
  size?: number;
}

export const IconToastSucess = ({ size, color, ...rest }: IconsProps) => {
  return (
    <>
      <svg
        width={size ? size + 1 : "18"}
        height={size ? size + 1 : "13"}
        viewBox="0 0 18 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <path
          d="M7.15697 9.672L16.349 0.479004L17.764 1.893L7.15697 12.5L0.792969 6.136L2.20697 4.722L7.15697 9.672Z"
          fill={color || "#00BA88"}
        />
      </svg>
    </>
  );
};

export const IconToastWarn = ({ size, color, ...rest }: IconsProps) => {
  return (
    <>
      <svg
        width={size ? size + 1 : "21"}
        height={size ? size + 1 : "21"}
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <path
          d="M10.1562 20.5C4.63325 20.5 0.15625 16.023 0.15625 10.5C0.15625 4.977 4.63325 0.5 10.1562 0.5C15.6792 0.5 20.1562 4.977 20.1562 10.5C20.1562 16.023 15.6792 20.5 10.1562 20.5ZM10.1562 18.5C12.278 18.5 14.3128 17.6571 15.8131 16.1569C17.3134 14.6566 18.1562 12.6217 18.1562 10.5C18.1562 8.37827 17.3134 6.34344 15.8131 4.84315C14.3128 3.34285 12.278 2.5 10.1562 2.5C8.03452 2.5 5.99969 3.34285 4.4994 4.84315C2.9991 6.34344 2.15625 8.37827 2.15625 10.5C2.15625 12.6217 2.9991 14.6566 4.4994 16.1569C5.99969 17.6571 8.03452 18.5 10.1562 18.5ZM9.15625 5.5H11.1562V7.5H9.15625V5.5ZM9.15625 9.5H11.1562V15.5H9.15625V9.5Z"
          fill={color || "#F4B740"}
        />
      </svg>
    </>
  );
};

export const IconToastError = ({ size, color, ...rest }: IconsProps) => {
  return (
    <>
      <svg
        width={size ? size + 1 : "14"}
        height={size ? size + 1 : "13"}
        viewBox="0 0 14 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <path
          d="M7.15697 5.08599L12.107 0.135986L13.521 1.54999L8.57097 6.49999L13.521 11.45L12.107 12.864L7.15697 7.91399L2.20697 12.864L0.792969 11.45L5.74297 6.49999L0.792969 1.54999L2.20697 0.135986L7.15697 5.08599Z"
          fill={color || "#ED2E7E"}
        />
      </svg>
    </>
  );
};

export const IconToastClose = ({ size, color, ...rest }: IconsProps) => {
  return (
    <>
      <svg
        width={size ? size + 1 : "19"}
        height={size ? size + 1 : "20"}
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        <path
          d="M10.1562 20C4.63325 20 0.15625 15.523 0.15625 10C0.15625 4.477 4.63325 0 10.1562 0C15.6792 0 20.1562 4.477 20.1562 10C20.1562 15.523 15.6792 20 10.1562 20ZM10.1562 8.586L7.32825 5.757L5.91325 7.172L8.74225 10L5.91325 12.828L7.32825 14.243L10.1562 11.414L12.9843 14.243L14.3993 12.828L11.5702 10L14.3993 7.172L12.9843 5.757L10.1562 8.586Z"
          fill={color || "#E2E8F0"}
        />
      </svg>
    </>
  );
};
