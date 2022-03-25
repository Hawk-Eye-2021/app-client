"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const icons_material_1 = require("@mui/icons-material");
function Addresses() {
    const addresses = {
        delivery: 12,
        shipping: 8
    };
    return (<material_1.Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={3}>
      <material_1.Grid item xs={12} sm={6}>
        <material_1.Card>
          <material_1.CardHeader title="Delivery Addresses" subheader={addresses.delivery + ' saved addresses'}/>
          <material_1.Divider />
          <material_1.Box p={2}>
            <material_1.Typography variant="caption" fontWeight="bold">
              Favourite
            </material_1.Typography>
            <material_1.Box sx={{ minHeight: { xs: 0, md: 225 } }} p={2}>
              <material_1.Typography variant="h5">Kadin Westervelt</material_1.Typography>
              <material_1.Typography variant="h5" sx={{ py: 1 }} fontWeight="normal">
                714-650-6297
              </material_1.Typography>
              <material_1.Typography variant="subtitle1">
                348 W. Goldfield Street Bethel Park, PA 15102
              </material_1.Typography>
            </material_1.Box>
            <material_1.Button fullWidth variant="outlined" endIcon={<icons_material_1.ArrowForwardTwoTone />}>
              Manage
            </material_1.Button>
          </material_1.Box>
        </material_1.Card>
      </material_1.Grid>
      <material_1.Grid item xs={12} sm={6}>
        <material_1.Card>
          <material_1.CardHeader title="Shipping Addresses" subheader={addresses.shipping + ' saved addresses'}/>
          <material_1.Divider />
          <material_1.Box p={2}>
            <material_1.Typography variant="caption" fontWeight="bold">
              Favourite
            </material_1.Typography>
            <material_1.Box sx={{ minHeight: { xs: 0, md: 225 } }} p={2}>
              <material_1.Typography variant="h5">Kadin Westervelt</material_1.Typography>
              <material_1.Typography variant="h5" sx={{ py: 1 }} fontWeight="normal">
                714-650-6297
              </material_1.Typography>
              <material_1.Typography variant="subtitle1">
                10 E. Wrangler Avenue Sioux Falls, SD 57103
              </material_1.Typography>
            </material_1.Box>
            <material_1.Button fullWidth variant="outlined" endIcon={<icons_material_1.ArrowForwardTwoTone />}>
              Manage
            </material_1.Button>
          </material_1.Box>
        </material_1.Card>
      </material_1.Grid>
    </material_1.Grid>);
}
exports.default = Addresses;
//# sourceMappingURL=Addresses.js.map