"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const SearchTwoTone_1 = __importDefault(require("@mui/icons-material/SearchTwoTone"));
const FindInPageTwoTone_1 = __importDefault(require("@mui/icons-material/FindInPageTwoTone"));
const ChevronRightTwoTone_1 = __importDefault(require("@mui/icons-material/ChevronRightTwoTone"));
const Transition = (0, react_1.forwardRef)(function Transition(props, ref) {
    return <material_1.Slide direction="down" ref={ref} {...props}/>;
});
const DialogWrapper = (0, styles_1.styled)(material_1.Dialog)(() => `
    .MuiDialog-container {
        height: auto;
    }
    
    .MuiDialog-paperScrollPaper {
        max-height: calc(100vh - 64px)
    }
`);
const SearchInputWrapper = (0, styles_1.styled)(material_1.TextField)(({ theme }) => `
    background: ${theme.colors.alpha.white[100]};

    .MuiInputBase-input {
        font-size: ${theme.typography.pxToRem(17)};
    }
`);
const DialogTitleWrapper = (0, styles_1.styled)(material_1.DialogTitle)(({ theme }) => `
    background: ${theme.colors.alpha.black[5]};
    padding: ${theme.spacing(3)}
`);
function HeaderSearch() {
    const [openSearchResults, setOpenSearchResults] = (0, react_1.useState)(false);
    const [searchValue, setSearchValue] = (0, react_1.useState)('');
    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
        if (event.target.value) {
            if (!openSearchResults) {
                setOpenSearchResults(true);
            }
        }
        else {
            setOpenSearchResults(false);
        }
    };
    const [open, setOpen] = (0, react_1.useState)(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (<>
      <material_1.Tooltip arrow title="Search">
        <material_1.IconButton color="primary" onClick={handleClickOpen}>
          <SearchTwoTone_1.default />
        </material_1.IconButton>
      </material_1.Tooltip>

      <DialogWrapper open={open} TransitionComponent={Transition} keepMounted maxWidth="md" fullWidth scroll="paper" onClose={handleClose}>
        <DialogTitleWrapper>
          <SearchInputWrapper value={searchValue} autoFocus={true} onChange={handleSearchChange} InputProps={{
            startAdornment: (<material_1.InputAdornment position="start">
                  <SearchTwoTone_1.default />
                </material_1.InputAdornment>)
        }} placeholder="Search terms here..." fullWidth label="Search"/>
        </DialogTitleWrapper>
        <material_1.Divider />

        {openSearchResults && (<material_1.DialogContent>
            <material_1.Box sx={{ pt: 0, pb: 1 }} display="flex" justifyContent="space-between">
              <material_1.Typography variant="body2" component="span">
                Search results for{' '}
                <material_1.Typography sx={{ fontWeight: 'bold' }} variant="body1" component="span">
                  {searchValue}
                </material_1.Typography>
              </material_1.Typography>
              <material_1.Link href="#" variant="body2" underline="hover">
                Advanced search
              </material_1.Link>
            </material_1.Box>
            <material_1.Divider sx={{ my: 1 }}/>
            <material_1.List disablePadding>
              <material_1.ListItem button>
                <material_1.Hidden smDown>
                  <material_1.ListItemAvatar>
                    <material_1.Avatar sx={{
                background: (theme) => theme.palette.secondary.main
            }}>
                      <FindInPageTwoTone_1.default />
                    </material_1.Avatar>
                  </material_1.ListItemAvatar>
                </material_1.Hidden>
                <material_1.Box flex="1">
                  <material_1.Box display="flex" justifyContent="space-between">
                    <material_1.Link href="#" underline="hover" sx={{ fontWeight: 'bold' }} variant="body2">
                      Dashboard for Healthcare Platform
                    </material_1.Link>
                  </material_1.Box>
                  <material_1.Typography component="span" variant="body2" sx={{
                color: (theme) => (0, material_1.lighten)(theme.palette.secondary.main, 0.5)
            }}>
                    This page contains all the necessary information for managing all hospital staff.
                  </material_1.Typography>
                </material_1.Box>
                <ChevronRightTwoTone_1.default />
              </material_1.ListItem>
              <material_1.Divider sx={{ my: 1 }} component="li"/>
              <material_1.ListItem button>
                <material_1.Hidden smDown>
                  <material_1.ListItemAvatar>
                    <material_1.Avatar sx={{
                background: (theme) => theme.palette.secondary.main
            }}>
                      <FindInPageTwoTone_1.default />
                    </material_1.Avatar>
                  </material_1.ListItemAvatar>
                </material_1.Hidden>
                <material_1.Box flex="1">
                  <material_1.Box display="flex" justifyContent="space-between">
                    <material_1.Link href="#" underline="hover" sx={{ fontWeight: 'bold' }} variant="body2">
                      Example Projects Application
                    </material_1.Link>
                  </material_1.Box>
                  <material_1.Typography component="span" variant="body2" sx={{
                color: (theme) => (0, material_1.lighten)(theme.palette.secondary.main, 0.5)
            }}>
                    This is yet another search result pointing to a app page.
                  </material_1.Typography>
                </material_1.Box>
                <ChevronRightTwoTone_1.default />
              </material_1.ListItem>
              <material_1.Divider sx={{ my: 1 }} component="li"/>
              <material_1.ListItem button>
                <material_1.Hidden smDown>
                  <material_1.ListItemAvatar>
                    <material_1.Avatar sx={{
                background: (theme) => theme.palette.secondary.main
            }}>
                      <FindInPageTwoTone_1.default />
                    </material_1.Avatar>
                  </material_1.ListItemAvatar>
                </material_1.Hidden>
                <material_1.Box flex="1">
                  <material_1.Box display="flex" justifyContent="space-between">
                    <material_1.Link href="#" underline="hover" sx={{ fontWeight: 'bold' }} variant="body2">
                      Search Results Page
                    </material_1.Link>
                  </material_1.Box>
                  <material_1.Typography component="span" variant="body2" sx={{
                color: (theme) => (0, material_1.lighten)(theme.palette.secondary.main, 0.5)
            }}>
                    Choose if you would like to show or not this typography section here...
                  </material_1.Typography>
                </material_1.Box>
                <ChevronRightTwoTone_1.default />
              </material_1.ListItem>
            </material_1.List>
            <material_1.Divider sx={{ mt: 1, mb: 2 }}/>
            <material_1.Box sx={{ textAlign: 'center' }}>
              <material_1.Button color="primary">View all search results</material_1.Button>
            </material_1.Box>
          </material_1.DialogContent>)}
      </DialogWrapper>
    </>);
}
exports.default = HeaderSearch;
//# sourceMappingURL=index.js.map