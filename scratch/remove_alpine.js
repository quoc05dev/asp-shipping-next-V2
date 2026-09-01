const fs = require('fs');
const path = 'C:/Users/Administrator/Downloads/ASP_MIGRATION/asp-shipping-next/app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Remove x-data=""
content = content.replace(/ x-data=""/g, '');

// Remove x-init=""
content = content.replace(/ x-init=""/g, '');

// Remove x-collapse="{ show: false, disabled: \$mq\.min\('md'\), hash: false }"
content = content.replace(/ x-collapse="\{ show: false, disabled: \$mq\.min\('md'\), hash: false \}"/g, '');

// Remove x-effect="__collapseDisable = \$mq\.min\('md'\)"
content = content.replace(/ x-effect="__collapseDisable = \$mq\.min\('md'\)"/g, '');

fs.writeFileSync(path, content, 'utf8');
console.log('Alpine directives removed.');
