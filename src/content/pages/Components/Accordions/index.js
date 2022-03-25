"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_helmet_async_1 = require("react-helmet-async");
const PageTitle_1 = __importDefault(require("src/components/PageTitle"));
const PageTitleWrapper_1 = __importDefault(require("src/components/PageTitleWrapper"));
const material_1 = require("@mui/material");
const Accordion_1 = __importDefault(require("@mui/material/Accordion"));
const AccordionSummary_1 = __importDefault(require("@mui/material/AccordionSummary"));
const AccordionDetails_1 = __importDefault(require("@mui/material/AccordionDetails"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const ExpandMore_1 = __importDefault(require("@mui/icons-material/ExpandMore"));
const Footer_1 = __importDefault(require("src/components/Footer"));
function Accordions() {
    return (<>
      <react_helmet_async_1.Helmet>
        <title>Accordions - Components</title>
      </react_helmet_async_1.Helmet>
      <PageTitleWrapper_1.default>
        <PageTitle_1.default heading="Accordions" subHeading="Accordions contain creation flows and allow lightweight editing of an element." docs="https://material-ui.com/components/accordion/"/>
      </PageTitleWrapper_1.default>
      <material_1.Container maxWidth="lg">
        <material_1.Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={3}>
          <material_1.Grid item xs={12}>
            <material_1.Card>
              <material_1.CardHeader title="Basic Example"/>
              <material_1.Divider />
              <material_1.CardContent>
                <Accordion_1.default>
                  <AccordionSummary_1.default expandIcon={<ExpandMore_1.default />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography_1.default>Accordion 1</Typography_1.default>
                  </AccordionSummary_1.default>
                  <AccordionDetails_1.default>
                    <Typography_1.default>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography_1.default>
                  </AccordionDetails_1.default>
                </Accordion_1.default>
                <Accordion_1.default>
                  <AccordionSummary_1.default expandIcon={<ExpandMore_1.default />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography_1.default>Accordion 2</Typography_1.default>
                  </AccordionSummary_1.default>
                  <AccordionDetails_1.default>
                    <Typography_1.default>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                      malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography_1.default>
                  </AccordionDetails_1.default>
                </Accordion_1.default>
                <Accordion_1.default disabled>
                  <AccordionSummary_1.default expandIcon={<ExpandMore_1.default />} aria-controls="panel3a-content" id="panel3a-header">
                    <Typography_1.default>Disabled Accordion</Typography_1.default>
                  </AccordionSummary_1.default>
                </Accordion_1.default>
              </material_1.CardContent>
            </material_1.Card>
          </material_1.Grid>
        </material_1.Grid>
      </material_1.Container>
      <Footer_1.default />
    </>);
}
exports.default = Accordions;
//# sourceMappingURL=index.js.map