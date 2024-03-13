const Vue = require("vue");
Nova.booting((Vue) => {
  Vue.component("DefaultField", require("./components/DefaultField").default);
  Vue.component("PanelItem", require("./components/PanelItem").default);
  Vue.component(
    "DetailHeadingField",
    require("./components/Detail/HeadingField").default
  );
  Vue.component(
    "FormHeadingField",
    require("./components/Form/HeadingField").default
  );
});
