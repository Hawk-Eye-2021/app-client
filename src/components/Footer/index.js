"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const FooterWrapper = (0, styles_1.styled)(material_1.Box)(({ theme }) => `
        border-radius: 0;
        margin: ${theme.spacing(3)} 0;
`);
function Footer() {
    return (<FooterWrapper>
      <material_1.Container maxWidth="lg">
        <material_1.Box py={3} display={{ xs: 'block', md: 'flex' }} alignItems="center" textAlign={{ xs: 'center', md: 'left' }} justifyContent="space-between">
          <material_1.Box>
            <material_1.Typography variant="subtitle1">
              &copy; 2021 - Tokyo Free White React Admin Dashboard
            </material_1.Typography>
          </material_1.Box>
          <material_1.Typography sx={{ pt: { xs: 2, md: 0 } }} variant="subtitle1">
            Crafted by <material_1.Link href="https://bloomui.com" target="_blank" rel="noopener noreferrer">BloomUI.com</material_1.Link>
          </material_1.Typography>
        </material_1.Box>
      </material_1.Container>
    </FooterWrapper>);
}
exports.default = Footer;
//# sourceMappingURL=index.js.map