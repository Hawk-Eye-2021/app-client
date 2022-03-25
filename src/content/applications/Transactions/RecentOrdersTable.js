"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const date_fns_1 = require("date-fns");
const numeral_1 = __importDefault(require("numeral"));
const prop_types_1 = __importDefault(require("prop-types"));
const material_1 = require("@mui/material");
const Label_1 = __importDefault(require("src/components/Label"));
const EditTwoTone_1 = __importDefault(require("@mui/icons-material/EditTwoTone"));
const DeleteTwoTone_1 = __importDefault(require("@mui/icons-material/DeleteTwoTone"));
const BulkActions_1 = __importDefault(require("./BulkActions"));
const getStatusLabel = (cryptoOrderStatus) => {
    const map = {
        failed: {
            text: 'Failed',
            color: 'error'
        },
        completed: {
            text: 'Completed',
            color: 'success'
        },
        pending: {
            text: 'Pending',
            color: 'warning'
        }
    };
    const { text, color } = map[cryptoOrderStatus];
    return <Label_1.default color={color}>{text}</Label_1.default>;
};
const applyFilters = (cryptoOrders, filters) => {
    return cryptoOrders.filter((cryptoOrder) => {
        let matches = true;
        if (filters.status && cryptoOrder.status !== filters.status) {
            matches = false;
        }
        return matches;
    });
};
const applyPagination = (cryptoOrders, page, limit) => {
    return cryptoOrders.slice(page * limit, page * limit + limit);
};
const RecentOrdersTable = ({ cryptoOrders }) => {
    const [selectedCryptoOrders, setSelectedCryptoOrders] = (0, react_1.useState)([]);
    const selectedBulkActions = selectedCryptoOrders.length > 0;
    const [page, setPage] = (0, react_1.useState)(0);
    const [limit, setLimit] = (0, react_1.useState)(5);
    const [filters, setFilters] = (0, react_1.useState)({
        status: null
    });
    const statusOptions = [
        {
            id: 'all',
            name: 'All'
        },
        {
            id: 'completed',
            name: 'Completed'
        },
        {
            id: 'pending',
            name: 'Pending'
        },
        {
            id: 'failed',
            name: 'Failed'
        }
    ];
    const handleStatusChange = (e) => {
        let value = null;
        if (e.target.value !== 'all') {
            value = e.target.value;
        }
        setFilters((prevFilters) => ({
            ...prevFilters,
            status: value
        }));
    };
    const handleSelectAllCryptoOrders = (event) => {
        setSelectedCryptoOrders(event.target.checked
            ? cryptoOrders.map((cryptoOrder) => cryptoOrder.id)
            : []);
    };
    const handleSelectOneCryptoOrder = (event, cryptoOrderId) => {
        if (!selectedCryptoOrders.includes(cryptoOrderId)) {
            setSelectedCryptoOrders((prevSelected) => [
                ...prevSelected,
                cryptoOrderId
            ]);
        }
        else {
            setSelectedCryptoOrders((prevSelected) => prevSelected.filter((id) => id !== cryptoOrderId));
        }
    };
    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };
    const handleLimitChange = (event) => {
        setLimit(parseInt(event.target.value));
    };
    const filteredCryptoOrders = applyFilters(cryptoOrders, filters);
    const paginatedCryptoOrders = applyPagination(filteredCryptoOrders, page, limit);
    const selectedSomeCryptoOrders = selectedCryptoOrders.length > 0 &&
        selectedCryptoOrders.length < cryptoOrders.length;
    const selectedAllCryptoOrders = selectedCryptoOrders.length === cryptoOrders.length;
    const theme = (0, material_1.useTheme)();
    return (<material_1.Card>
      {selectedBulkActions && (<material_1.Box flex={1} p={2}>
          <BulkActions_1.default />
        </material_1.Box>)}
      {!selectedBulkActions && (<material_1.CardHeader action={<material_1.Box width={150}>
              <material_1.FormControl fullWidth variant="outlined">
                <material_1.InputLabel>Status</material_1.InputLabel>
                <material_1.Select value={filters.status || 'all'} onChange={handleStatusChange} label="Status" autoWidth>
                  {statusOptions.map((statusOption) => (<material_1.MenuItem key={statusOption.id} value={statusOption.id}>
                      {statusOption.name}
                    </material_1.MenuItem>))}
                </material_1.Select>
              </material_1.FormControl>
            </material_1.Box>} title="Recent Orders"/>)}
      <material_1.Divider />
      <material_1.TableContainer>
        <material_1.Table>
          <material_1.TableHead>
            <material_1.TableRow>
              <material_1.TableCell padding="checkbox">
                <material_1.Checkbox color="primary" checked={selectedAllCryptoOrders} indeterminate={selectedSomeCryptoOrders} onChange={handleSelectAllCryptoOrders}/>
              </material_1.TableCell>
              <material_1.TableCell>Order Details</material_1.TableCell>
              <material_1.TableCell>Order ID</material_1.TableCell>
              <material_1.TableCell>Source</material_1.TableCell>
              <material_1.TableCell align="right">Amount</material_1.TableCell>
              <material_1.TableCell align="right">Status</material_1.TableCell>
              <material_1.TableCell align="right">Actions</material_1.TableCell>
            </material_1.TableRow>
          </material_1.TableHead>
          <material_1.TableBody>
            {paginatedCryptoOrders.map((cryptoOrder) => {
            const isCryptoOrderSelected = selectedCryptoOrders.includes(cryptoOrder.id);
            return (<material_1.TableRow hover key={cryptoOrder.id} selected={isCryptoOrderSelected}>
                  <material_1.TableCell padding="checkbox">
                    <material_1.Checkbox color="primary" checked={isCryptoOrderSelected} onChange={(event) => handleSelectOneCryptoOrder(event, cryptoOrder.id)} value={isCryptoOrderSelected}/>
                  </material_1.TableCell>
                  <material_1.TableCell>
                    <material_1.Typography variant="body1" fontWeight="bold" color="text.primary" gutterBottom noWrap>
                      {cryptoOrder.orderDetails}
                    </material_1.Typography>
                    <material_1.Typography variant="body2" color="text.secondary" noWrap>
                      {(0, date_fns_1.format)(cryptoOrder.orderDate, 'MMMM dd yyyy')}
                    </material_1.Typography>
                  </material_1.TableCell>
                  <material_1.TableCell>
                    <material_1.Typography variant="body1" fontWeight="bold" color="text.primary" gutterBottom noWrap>
                      {cryptoOrder.orderID}
                    </material_1.Typography>
                  </material_1.TableCell>
                  <material_1.TableCell>
                    <material_1.Typography variant="body1" fontWeight="bold" color="text.primary" gutterBottom noWrap>
                      {cryptoOrder.sourceName}
                    </material_1.Typography>
                    <material_1.Typography variant="body2" color="text.secondary" noWrap>
                      {cryptoOrder.sourceDesc}
                    </material_1.Typography>
                  </material_1.TableCell>
                  <material_1.TableCell align="right">
                    <material_1.Typography variant="body1" fontWeight="bold" color="text.primary" gutterBottom noWrap>
                      {cryptoOrder.amountCrypto}
                      {cryptoOrder.cryptoCurrency}
                    </material_1.Typography>
                    <material_1.Typography variant="body2" color="text.secondary" noWrap>
                      {(0, numeral_1.default)(cryptoOrder.amount).format(`${cryptoOrder.currency}0,0.00`)}
                    </material_1.Typography>
                  </material_1.TableCell>
                  <material_1.TableCell align="right">
                    {getStatusLabel(cryptoOrder.status)}
                  </material_1.TableCell>
                  <material_1.TableCell align="right">
                    <material_1.Tooltip title="Edit Order" arrow>
                      <material_1.IconButton sx={{
                    '&:hover': {
                        background: theme.colors.primary.lighter
                    },
                    color: theme.palette.primary.main
                }} color="inherit" size="small">
                        <EditTwoTone_1.default fontSize="small"/>
                      </material_1.IconButton>
                    </material_1.Tooltip>
                    <material_1.Tooltip title="Delete Order" arrow>
                      <material_1.IconButton sx={{
                    '&:hover': { background: theme.colors.error.lighter },
                    color: theme.palette.error.main
                }} color="inherit" size="small">
                        <DeleteTwoTone_1.default fontSize="small"/>
                      </material_1.IconButton>
                    </material_1.Tooltip>
                  </material_1.TableCell>
                </material_1.TableRow>);
        })}
          </material_1.TableBody>
        </material_1.Table>
      </material_1.TableContainer>
      <material_1.Box p={2}>
        <material_1.TablePagination component="div" count={filteredCryptoOrders.length} onPageChange={handlePageChange} onRowsPerPageChange={handleLimitChange} page={page} rowsPerPage={limit} rowsPerPageOptions={[5, 10, 25, 30]}/>
      </material_1.Box>
    </material_1.Card>);
};
RecentOrdersTable.propTypes = {
    cryptoOrders: prop_types_1.default.array.isRequired
};
RecentOrdersTable.defaultProps = {
    cryptoOrders: []
};
exports.default = RecentOrdersTable;
//# sourceMappingURL=RecentOrdersTable.js.map