/**
 * Makes it easier to create glamorous components that
 * accept props to enable/disable certain styles.
 *
 * Accepts an object where the key is a prop and the value is
 * the styles object that should be applied if that prop is passed.
 * Returns a function which you pass to a glamorousComponentFactory.
 *
 * Inspiration: https://codesandbox.io/s/AGRRMl63 by @kentcdodds
 *
 * @param {Object} styles - An object mapping props to styles
 * @return {Function} - A dynamic styles function
 */
function propStyles(styles) {
  return function dynamicStyles(props) {
    return Object.keys(props).map(function(key) {
      if (props[key]) {
        return typeof styles[key] === 'function'
          ? styles[key](props)
          : styles[key];
      }
      return null;
    });
  };
}

module.exports = propStyles;
