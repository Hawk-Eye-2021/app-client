"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const DeleteTwoTone_1 = __importDefault(require("@mui/icons-material/DeleteTwoTone"));
const AddTwoTone_1 = __importDefault(require("@mui/icons-material/AddTwoTone"));
const AvatarAddWrapper = (0, styles_1.styled)(material_1.Avatar)(({ theme }) => `
        background: ${theme.colors.alpha.black[5]};
        color: ${theme.colors.primary.main};
        width: ${theme.spacing(8)};
        height: ${theme.spacing(8)};
`);
const CardLogo = (0, styles_1.styled)('img')(({ theme }) => `
      border: 1px solid ${theme.colors.alpha.black[30]};
      border-radius: ${theme.general.borderRadius};
      padding: ${theme.spacing(1)};
      margin-right: ${theme.spacing(2)};
      background: ${theme.colors.alpha.white[100]};
`);
const CardAddAction = (0, styles_1.styled)(material_1.Card)(({ theme }) => `
        border: ${theme.colors.primary.main} dashed 1px;
        height: 100%;
        color: ${theme.colors.primary.main};
        box-shadow: none;
        
        .MuiCardActionArea-root {
          height: 100%;
          justify-content: center;
          align-items: center;
          display: flex;
        }
        
        .MuiTouchRipple-root {
          opacity: .2;
        }
        
        &:hover {
          border-color: ${theme.colors.alpha.black[100]};
        }
`);
const IconButtonError = (0, styles_1.styled)(material_1.IconButton)(({ theme }) => `
     background: ${theme.colors.error.lighter};
     color: ${theme.colors.error.main};
     padding: ${theme.spacing(0.5)};

     &:hover {
      background: ${(0, material_1.lighten)(theme.colors.error.lighter, 0.4)};
     }
`);
const CardCc = (0, styles_1.styled)(material_1.Card)(({ theme }) => `
     border: 1px solid ${theme.colors.alpha.black[30]};
     background: ${theme.colors.alpha.black[5]};
     box-shadow: none;
`);
function MyCards() {
    const data = {
        savedCards: 7
    };
    const [selectedValue, setSelectedValue] = (0, react_1.useState)('a');
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const handleDelete = () => {
    };
    return (<material_1.Card>
      <material_1.CardHeader subheader={data.savedCards + ' saved cards'} title="Cards"/>
      <material_1.Divider />
      <material_1.Box p={3}>
        <material_1.Grid container spacing={3}>
          <material_1.Grid item xs={12} sm={6}>
            <CardCc sx={{ px: 2, pt: 2, pb: 1 }}>
              <material_1.Box display="flex" alignItems="center">
                <CardLogo src="/static/images/placeholders/logo/visa.png" alt="Visa"/>
                <material_1.Box>
                  <material_1.Typography variant="h3" fontWeight="normal">
                    •••• 6879
                  </material_1.Typography>
                  <material_1.Typography variant="subtitle2">
                    Expires:{' '}
                    <material_1.Typography component="span" color="text.primary">
                      12/24
                    </material_1.Typography>
                  </material_1.Typography>
                </material_1.Box>
              </material_1.Box>
              <material_1.Box pt={3} display="flex" alignItems="center" justifyContent="space-between">
                <material_1.FormControlLabel value="a" control={<material_1.Radio checked={selectedValue === 'a'} onChange={handleChange} value="a" color="primary" name="primary-card"/>} label="Primary"/>
                <material_1.Tooltip arrow title="Remove this card">
                  <IconButtonError onClick={() => handleDelete()}>
                    <DeleteTwoTone_1.default fontSize="small"/>
                  </IconButtonError>
                </material_1.Tooltip>
              </material_1.Box>
            </CardCc>
          </material_1.Grid>
          <material_1.Grid item xs={12} sm={6}>
            <CardCc sx={{ px: 2, pt: 2, pb: 1 }}>
              <material_1.Box display="flex" alignItems="center">
                <CardLogo src="/static/images/placeholders/logo/mastercard.png" alt="Visa"/>
                <material_1.Box>
                  <material_1.Typography variant="h3" fontWeight="normal">
                    •••• 4634
                  </material_1.Typography>
                  <material_1.Typography variant="subtitle2">
                    Expires:{' '}
                    <material_1.Typography component="span" color="text.primary">
                      6/22
                    </material_1.Typography>
                  </material_1.Typography>
                </material_1.Box>
              </material_1.Box>
              <material_1.Box pt={3} display="flex" alignItems="center" justifyContent="space-between">
                <material_1.FormControlLabel value="b" control={<material_1.Radio checked={selectedValue === 'b'} onChange={handleChange} value="b" color="primary" name="primary-card"/>} label="Primary"/>
                <material_1.Tooltip arrow title="Remove this card">
                  <IconButtonError onClick={() => handleDelete()}>
                    <DeleteTwoTone_1.default fontSize="small"/>
                  </IconButtonError>
                </material_1.Tooltip>
              </material_1.Box>
            </CardCc>
          </material_1.Grid>
          <material_1.Grid item xs={12} sm={6}>
            <material_1.Tooltip arrow title="Click to add a new card">
              <CardAddAction>
                <material_1.CardActionArea sx={{ px: 1 }}>
                  <material_1.CardContent>
                    <AvatarAddWrapper>
                      <AddTwoTone_1.default fontSize="large"/>
                    </AvatarAddWrapper>
                  </material_1.CardContent>
                </material_1.CardActionArea>
              </CardAddAction>
            </material_1.Tooltip>
          </material_1.Grid>
        </material_1.Grid>
      </material_1.Box>
    </material_1.Card>);
}
exports.default = MyCards;
//# sourceMappingURL=MyCards.js.map