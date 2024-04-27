import React from "react";
import PropTypes from "prop-types";

export const Button = ({
  primary,
  backgroundColor,
  size,
  label,
  onClick,
  disabled,
  className,
  ariaLabel,
  ariaLabelledBy,
  ariaDescribedBy,
  style,
  icon,
  iconPosition,
  showIcon,
  ...props
}: any) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={[
        "storybook-button",
        `storybook-button--${size}`,
        mode,
        className,
      ].join(" ")}
      style={style}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      onClick={onClick}
      {...props}
    >
      {showIcon && icon && iconPosition === "left" && icon}
      {label}
      {showIcon && icon && iconPosition === "right" && icon}
      <style>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};

// Default by storybook
// Button.propTypes = {
//   /**
//    * Is this the principal call to action on the page?
//    */
//   primary: PropTypes.bool,
//   /**
//    * What background color to use
//    */
//   backgroundColor: PropTypes.string,
//   /**
//    * How large should the button be?
//    */
//   size: PropTypes.oneOf(["small", "medium", "large"]),
//   /**
//    * Button contents
//    */
//   label: PropTypes.string.isRequired,
//   /**
//    * Optional click handler
//    */
//   onClick: PropTypes.func,
// };
// ======================================================================
// Added more - John
Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,

  /**
   * What background color to use. Accepts any valid CSS color value.
   */
  backgroundColor: PropTypes.string,

  /**
   * How large should the button be? Defaults to 'medium' if not specified.
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),

  /**
   * Button contents. This prop is required and should be a string.
   */
  label: PropTypes.string.isRequired,

  /**
   * Optional click handler function. Triggered when the button is clicked.
   */
  onClick: PropTypes.func,

  /**
   * Whether the button should be disabled. If true, the button will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Additional CSS classes to apply to the button.
   */
  className: PropTypes.string,

  /**
   * Aria-label for accessibility. Describes the button's function to screen readers when the label is not descriptive enough.
   */
  ariaLabel: PropTypes.string,

  /**
   * Aria-labelledby for accessibility. Links the button to a label element elsewhere in the DOM.
   */
  ariaLabelledBy: PropTypes.string,

  /**
   * Aria-describedby for accessibility. Links the button to an element elsewhere in the DOM that describes its purpose.
   */
  ariaDescribedBy: PropTypes.string,

  /**
   * Custom styles to apply to the button.
   */
  style: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),

  /**
   * Icon to display within the button. This can be a React element or a string representing an icon class.
   */
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),

  /**
   * Position of the icon relative to the label. Can be 'left' or 'right'.
   */
  iconPosition: PropTypes.oneOf(["left", "right"]),

  /**
   * Whether to show the button's icon.
   */
  showIcon: PropTypes.bool,
};

export default Button;
