const common = `  
  --require setup/hooks.js 
  --require step_definitions/**/*.steps.js
  `;

module.exports = {
  default: `${common} features/**/*.feature`
};