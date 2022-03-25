"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_helmet_async_1 = require("react-helmet-async");
const PageTitle_1 = __importDefault(require("src/components/PageTitle"));
const react_1 = require("react");
const PageTitleWrapper_1 = __importDefault(require("src/components/PageTitleWrapper"));
const material_1 = require("@mui/material");
const Footer_1 = __importDefault(require("src/components/Footer"));
const Box_1 = __importDefault(require("@mui/material/Box"));
const TextField_1 = __importDefault(require("@mui/material/TextField"));
const MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
const colors_1 = require("@mui/material/colors");
const Checkbox_1 = __importDefault(require("@mui/material/Checkbox"));
const Radio_1 = __importDefault(require("@mui/material/Radio"));
const RadioGroup_1 = __importDefault(require("@mui/material/RadioGroup"));
const FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
const FormControl_1 = __importDefault(require("@mui/material/FormControl"));
const FormLabel_1 = __importDefault(require("@mui/material/FormLabel"));
const Stack_1 = __importDefault(require("@mui/material/Stack"));
const Slider_1 = __importDefault(require("@mui/material/Slider"));
const VolumeDown_1 = __importDefault(require("@mui/icons-material/VolumeDown"));
const VolumeUp_1 = __importDefault(require("@mui/icons-material/VolumeUp"));
const Switch_1 = __importDefault(require("@mui/material/Switch"));
const label = { inputProps: { 'aria-label': 'Switch demo' } };
const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];
function Forms() {
    const [currency, setCurrency] = (0, react_1.useState)('EUR');
    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    const [value, setValue] = (0, react_1.useState)(30);
    const handleChange2 = (event, newValue) => {
        setValue(newValue);
    };
    return (<>
      <react_helmet_async_1.Helmet>
        <title>Forms - Components</title>
      </react_helmet_async_1.Helmet>
      <PageTitleWrapper_1.default>
        <PageTitle_1.default heading="Forms" subHeading="Components that are used to build interactive placeholders used for data collection from users." docs="https://material-ui.com/components/text-fields/"/>
      </PageTitleWrapper_1.default>
      <material_1.Container maxWidth="lg">
        <material_1.Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={3}>
          <material_1.Grid item xs={12}>
            <material_1.Card>
              <material_1.CardHeader title="Input Fields"/>
              <material_1.Divider />
              <material_1.CardContent>
                <Box_1.default component="form" sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }} noValidate autoComplete="off">
                  <div>
                    <TextField_1.default required id="outlined-required" label="Required" defaultValue="Hello World"/>
                    <TextField_1.default disabled id="outlined-disabled" label="Disabled" defaultValue="Hello World"/>
                    <TextField_1.default id="outlined-password-input" label="Password" type="password" autoComplete="current-password"/>
                    <TextField_1.default id="outlined-read-only-input" label="Read Only" defaultValue="Hello World" InputProps={{
            readOnly: true,
        }}/>
                    <TextField_1.default id="outlined-number" label="Number" type="number" InputLabelProps={{
            shrink: true,
        }}/>
                    <TextField_1.default id="outlined-search" label="Search field" type="search"/>
                    <TextField_1.default id="outlined-helperText" label="Helper text" defaultValue="Default Value" helperText="Some important text"/>
                  </div>
                  <div>
                    <TextField_1.default required id="filled-required" label="Required" defaultValue="Hello World" variant="filled"/>
                    <TextField_1.default disabled id="filled-disabled" label="Disabled" defaultValue="Hello World" variant="filled"/>
                    <TextField_1.default id="filled-password-input" label="Password" type="password" autoComplete="current-password" variant="filled"/>
                    <TextField_1.default id="filled-read-only-input" label="Read Only" defaultValue="Hello World" InputProps={{
            readOnly: true,
        }} variant="filled"/>
                    <TextField_1.default id="filled-number" label="Number" type="number" InputLabelProps={{
            shrink: true,
        }} variant="filled"/>
                    <TextField_1.default id="filled-search" label="Search field" type="search" variant="filled"/>
                    <TextField_1.default id="filled-helperText" label="Helper text" defaultValue="Default Value" helperText="Some important text" variant="filled"/>
                  </div>
                  <div>
                    <TextField_1.default required id="standard-required" label="Required" defaultValue="Hello World" variant="standard"/>
                    <TextField_1.default disabled id="standard-disabled" label="Disabled" defaultValue="Hello World" variant="standard"/>
                    <TextField_1.default id="standard-password-input" label="Password" type="password" autoComplete="current-password" variant="standard"/>
                    <TextField_1.default id="standard-read-only-input" label="Read Only" defaultValue="Hello World" InputProps={{
            readOnly: true,
        }} variant="standard"/>
                    <TextField_1.default id="standard-number" label="Number" type="number" InputLabelProps={{
            shrink: true,
        }} variant="standard"/>
                    <TextField_1.default id="standard-search" label="Search field" type="search" variant="standard"/>
                    <TextField_1.default id="standard-helperText" label="Helper text" defaultValue="Default Value" helperText="Some important text" variant="standard"/>
                  </div>
                </Box_1.default>
              </material_1.CardContent>
            </material_1.Card>
          </material_1.Grid>
          <material_1.Grid item xs={12}>
            <material_1.Card>
              <material_1.CardHeader title="Select Inputs"/>
              <material_1.Divider />
              <material_1.CardContent>
                <Box_1.default component="form" sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }} noValidate autoComplete="off">
                  <div>
                    <TextField_1.default id="outlined-select-currency" select label="Select" value={currency} onChange={handleChange} helperText="Please select your currency">
                      {currencies.map((option) => (<MenuItem_1.default key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem_1.default>))}
                    </TextField_1.default>
                    <TextField_1.default id="outlined-select-currency-native" select label="Native select" value={currency} onChange={handleChange} SelectProps={{
            native: true,
        }} helperText="Please select your currency">
                      {currencies.map((option) => (<option key={option.value} value={option.value}>
                          {option.label}
                        </option>))}
                    </TextField_1.default>
                  </div>
                  <div>
                    <TextField_1.default id="filled-select-currency" select label="Select" value={currency} onChange={handleChange} helperText="Please select your currency" variant="filled">
                      {currencies.map((option) => (<MenuItem_1.default key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem_1.default>))}
                    </TextField_1.default>
                    <TextField_1.default id="filled-select-currency-native" select label="Native select" value={currency} onChange={handleChange} SelectProps={{
            native: true,
        }} helperText="Please select your currency" variant="filled">
                      {currencies.map((option) => (<option key={option.value} value={option.value}>
                          {option.label}
                        </option>))}
                    </TextField_1.default>
                  </div>
                  <div>
                    <TextField_1.default id="standard-select-currency" select label="Select" value={currency} onChange={handleChange} helperText="Please select your currency" variant="standard">
                      {currencies.map((option) => (<MenuItem_1.default key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem_1.default>))}
                    </TextField_1.default>
                    <TextField_1.default id="standard-select-currency-native" select label="Native select" value={currency} onChange={handleChange} SelectProps={{
            native: true,
        }} helperText="Please select your currency" variant="standard">
                      {currencies.map((option) => (<option key={option.value} value={option.value}>
                          {option.label}
                        </option>))}
                    </TextField_1.default>
                  </div>
                </Box_1.default>
              </material_1.CardContent>
            </material_1.Card>
          </material_1.Grid>
          <material_1.Grid item xs={12}>
            <material_1.Card>
              <material_1.CardHeader title="Switches"/>
              <material_1.Divider />
              <material_1.CardContent>
                <Switch_1.default {...label} defaultChecked/>
                <Switch_1.default {...label}/>
                <Switch_1.default {...label} disabled defaultChecked/>
                <Switch_1.default {...label} disabled/>
              </material_1.CardContent>
            </material_1.Card>
          </material_1.Grid>
          <material_1.Grid item xs={12}>
            <material_1.Card>
              <material_1.CardHeader title="Checkboxes &amp; Radios"/>
              <material_1.Divider />
              <material_1.CardContent>
                <Checkbox_1.default {...label} defaultChecked/>
                <Checkbox_1.default {...label} defaultChecked color="secondary"/>
                <Checkbox_1.default {...label} defaultChecked color="success"/>
                <Checkbox_1.default {...label} defaultChecked color="default"/>
                <Checkbox_1.default {...label} defaultChecked sx={{
            color: colors_1.pink[800],
            '&.Mui-checked': {
                color: colors_1.pink[600],
            },
        }}/>
                <material_1.Divider sx={{ my: 5 }}/>
                <FormControl_1.default component="fieldset">
                  <FormLabel_1.default component="legend">Gender</FormLabel_1.default>
                  <RadioGroup_1.default row aria-label="gender" name="row-radio-buttons-group">
                    <FormControlLabel_1.default value="female" control={<Radio_1.default />} label="Female"/>
                    <FormControlLabel_1.default value="male" control={<Radio_1.default />} label="Male"/>
                    <FormControlLabel_1.default value="other" control={<Radio_1.default />} label="Other"/>
                    <FormControlLabel_1.default value="disabled" disabled control={<Radio_1.default />} label="other"/>
                  </RadioGroup_1.default>
                </FormControl_1.default>
              </material_1.CardContent>
            </material_1.Card>
          </material_1.Grid>
          <material_1.Grid item xs={12}>
            <material_1.Card>
              <material_1.CardHeader title="Sliders"/>
              <material_1.Divider />
              <material_1.CardContent>
                <Box_1.default sx={{ width: 200 }}>
                  <Stack_1.default spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                    <VolumeDown_1.default />
                    <Slider_1.default aria-label="Volume" value={value} onChange={handleChange2}/>
                    <VolumeUp_1.default />
                  </Stack_1.default>
                  <Slider_1.default disabled defaultValue={30} aria-label="Disabled slider"/>
                </Box_1.default>
              </material_1.CardContent>
            </material_1.Card>
          </material_1.Grid>
        </material_1.Grid>
      </material_1.Container>
      <Footer_1.default />
    </>);
}
exports.default = Forms;
//# sourceMappingURL=index.js.map