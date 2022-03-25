"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const EditTwoTone_1 = __importDefault(require("@mui/icons-material/EditTwoTone"));
const DoneTwoTone_1 = __importDefault(require("@mui/icons-material/DoneTwoTone"));
const Text_1 = __importDefault(require("src/components/Text"));
const Label_1 = __importDefault(require("src/components/Label"));
function EditProfileTab() {
    return (<material_1.Grid container spacing={3}>
      <material_1.Grid item xs={12}>
        <material_1.Card>
          <material_1.Box p={3} display="flex" alignItems="center" justifyContent="space-between">
            <material_1.Box>
              <material_1.Typography variant="h4" gutterBottom>
                Personal Details
              </material_1.Typography>
              <material_1.Typography variant="subtitle2">
                Manage informations related to your personal details
              </material_1.Typography>
            </material_1.Box>
            <material_1.Button variant="text" startIcon={<EditTwoTone_1.default />}>
              Edit
            </material_1.Button>
          </material_1.Box>
          <material_1.Divider />
          <material_1.CardContent sx={{ p: 4 }}>
            <material_1.Typography variant="subtitle2">
              <material_1.Grid container spacing={0}>
                <material_1.Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <material_1.Box pr={3} pb={2}>
                    Name:
                  </material_1.Box>
                </material_1.Grid>
                <material_1.Grid item xs={12} sm={8} md={9}>
                  <Text_1.default color="black">
                    <b>Craig Donin</b>
                  </Text_1.default>
                </material_1.Grid>
                <material_1.Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <material_1.Box pr={3} pb={2}>
                    Date of birth:
                  </material_1.Box>
                </material_1.Grid>
                <material_1.Grid item xs={12} sm={8} md={9}>
                  <Text_1.default color="black">
                    <b>15 March 1977</b>
                  </Text_1.default>
                </material_1.Grid>
                <material_1.Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <material_1.Box pr={3} pb={2}>
                    Address:
                  </material_1.Box>
                </material_1.Grid>
                <material_1.Grid item xs={12} sm={8} md={9}>
                  <material_1.Box sx={{ maxWidth: { xs: 'auto', sm: 300 } }}>
                    <Text_1.default color="black">
                      1749 High Meadow Lane, SEQUOIA NATIONAL PARK, California,
                      93262
                    </Text_1.default>
                  </material_1.Box>
                </material_1.Grid>
              </material_1.Grid>
            </material_1.Typography>
          </material_1.CardContent>
        </material_1.Card>
      </material_1.Grid>
      <material_1.Grid item xs={12}>
        <material_1.Card>
          <material_1.Box p={3} display="flex" alignItems="center" justifyContent="space-between">
            <material_1.Box>
              <material_1.Typography variant="h4" gutterBottom>
                Account Settings
              </material_1.Typography>
              <material_1.Typography variant="subtitle2">
                Manage details related to your account
              </material_1.Typography>
            </material_1.Box>
            <material_1.Button variant="text" startIcon={<EditTwoTone_1.default />}>
              Edit
            </material_1.Button>
          </material_1.Box>
          <material_1.Divider />
          <material_1.CardContent sx={{ p: 4 }}>
            <material_1.Typography variant="subtitle2">
              <material_1.Grid container spacing={0}>
                <material_1.Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <material_1.Box pr={3} pb={2}>
                    Language:
                  </material_1.Box>
                </material_1.Grid>
                <material_1.Grid item xs={12} sm={8} md={9}>
                  <Text_1.default color="black">
                    <b>English (US)</b>
                  </Text_1.default>
                </material_1.Grid>
                <material_1.Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <material_1.Box pr={3} pb={2}>
                    Timezone:
                  </material_1.Box>
                </material_1.Grid>
                <material_1.Grid item xs={12} sm={8} md={9}>
                  <Text_1.default color="black">
                    <b>GMT +2</b>
                  </Text_1.default>
                </material_1.Grid>
                <material_1.Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <material_1.Box pr={3} pb={2}>
                    Account status:
                  </material_1.Box>
                </material_1.Grid>
                <material_1.Grid item xs={12} sm={8} md={9}>
                  <Label_1.default color="success">
                    <DoneTwoTone_1.default fontSize="small"/>
                    <b>Active</b>
                  </Label_1.default>
                </material_1.Grid>
              </material_1.Grid>
            </material_1.Typography>
          </material_1.CardContent>
        </material_1.Card>
      </material_1.Grid>
      <material_1.Grid item xs={12}>
        <material_1.Card>
          <material_1.Box p={3} display="flex" alignItems="center" justifyContent="space-between">
            <material_1.Box>
              <material_1.Typography variant="h4" gutterBottom>
                Email Addresses
              </material_1.Typography>
              <material_1.Typography variant="subtitle2">
                Manage details related to your associated email addresses
              </material_1.Typography>
            </material_1.Box>
            <material_1.Button variant="text" startIcon={<EditTwoTone_1.default />}>
              Edit
            </material_1.Button>
          </material_1.Box>
          <material_1.Divider />
          <material_1.CardContent sx={{ p: 4 }}>
            <material_1.Typography variant="subtitle2">
              <material_1.Grid container spacing={0}>
                <material_1.Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <material_1.Box pr={3} pb={2}>
                    Email ID:
                  </material_1.Box>
                </material_1.Grid>
                <material_1.Grid item xs={12} sm={8} md={9}>
                  <Text_1.default color="black">
                    <b>example@demo.com</b>
                  </Text_1.default>
                  <material_1.Box pl={1} component="span">
                    <Label_1.default color="success">Primary</Label_1.default>
                  </material_1.Box>
                </material_1.Grid>
                <material_1.Grid item xs={12} sm={4} md={3} textAlign={{ sm: 'right' }}>
                  <material_1.Box pr={3} pb={2}>
                    Email ID:
                  </material_1.Box>
                </material_1.Grid>
                <material_1.Grid item xs={12} sm={8} md={9}>
                  <Text_1.default color="black">
                    <b>demo@example.com</b>
                  </Text_1.default>
                </material_1.Grid>
              </material_1.Grid>
            </material_1.Typography>
          </material_1.CardContent>
        </material_1.Card>
      </material_1.Grid>
    </material_1.Grid>);
}
exports.default = EditProfileTab;
//# sourceMappingURL=EditProfileTab.js.map