import { COLOR_PALETTE } from "../../Palette";
export const Typography = ({ variant, children, colorVariant }) => {
  switch (variant) {
    case "h1":
      return (
        <h1
          style={{
            color:
              colorVariant === "primary"
                ? COLOR_PALETTE.PRODUCT_TITLE
                : COLOR_PALETTE.TEXT_PRIMARY,
          }}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          style={{
            color: COLOR_PALETTE.TEXT_PRIMARY,
          }}
        >
          {children}
        </h2>
      );
    case "h3":
      return <h3 style={{ color: COLOR_PALETTE.TEXT_PRIMARY }}>{children}</h3>;
    case "h4":
      return <h4 style={{ color: COLOR_PALETTE.TEXT_PRIMARY }}>{children}</h4>;
    case "h5":
      return <h5 style={{ color: COLOR_PALETTE.TEXT_PRIMARY }}>{children}</h5>;
    case "h6":
      return <h6 style={{ color: COLOR_PALETTE.TEXT_PRIMARY }}>{children}</h6>;
    case "span":
      return (
        <span
          style={{
            color:
              colorVariant === "primary"
                ? COLOR_PALETTE.TEXT_PRIMARY
                : COLOR_PALETTE.TEXT_SECONDARY,
          }}
        >
          {children}
        </span>
      );
    case "p":
      return (
        <p
          style={{
            color:
              colorVariant === "primary"
                ? COLOR_PALETTE.TEXT_PRIMARY
                : COLOR_PALETTE.TEXT_SECONDARY,
          }}
        >
          {children}
        </p>
      );
    default:
      return (
        <h1
          style={{
            color:
              colorVariant === "primary"
                ? COLOR_PALETTE.PRODUCT_TITLE
                : COLOR_PALETTE.TEXT_PRIMARY,
          }}
        >
          {children}
        </h1>
      );
  }
};
