"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
function PageHeader() {
    const user = {
        name: 'Catherine Pike',
        avatar: '/static/images/avatars/1.jpg'
    };
    return (<>
      <material_1.Typography variant="h3" component="h3" gutterBottom>
        User Settings
      </material_1.Typography>
      <material_1.Typography variant="subtitle2">
        {user.name},{' '}
        this could be your user settings panel.
      </material_1.Typography>
    </>);
}
exports.default = PageHeader;
//# sourceMappingURL=PageHeader.js.map