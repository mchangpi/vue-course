/* directives */

export const vAutofocus = {
  mounted: (el) => {
    console.log('"vAutofocus" is converted to "v-autofocus" in <template/>');
    el.focus();
  },
};
