"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const material_1 = require("@mui/material");
const VisibilityTwoTone_1 = __importDefault(require("@mui/icons-material/VisibilityTwoTone"));
const DeleteTwoTone_1 = __importDefault(require("@mui/icons-material/DeleteTwoTone"));
const AddTwoTone_1 = __importDefault(require("@mui/icons-material/AddTwoTone"));
const applyFilters = (rows, columns, filterValue) => {
    if (filterValue) {
        return rows.filter((row) => {
            // @ts-ignore
            return Object.values(row).some((cellValue) => cellValue.includes ? cellValue.includes(filterValue) : false);
        });
    }
    return rows;
};
const applyPagination = (rows, page, limit) => {
    return rows.slice(page * limit, page * limit + limit);
};
const MyTable = ({ rows, columns, title, addAction, deleteAction, viewAction }) => {
    const [page, setPage] = (0, react_1.useState)(0);
    const [limit, setLimit] = (0, react_1.useState)(5);
    const [filterValue, setFilterValue] = (0, react_1.useState)("");
    const [filteredData, setFilteredData] = (0, react_1.useState)(rows);
    const [paginatedData, setPaginatedData] = (0, react_1.useState)(rows);
    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };
    const handleLimitChange = (event) => {
        setLimit(parseInt(event.target.value));
    };
    (0, react_1.useEffect)(() => {
        setFilteredData(applyFilters(rows, columns, filterValue));
    }, [rows, columns, filterValue]);
    (0, react_1.useEffect)(() => {
        setPaginatedData(applyPagination(filteredData, page, limit));
    }, [filteredData, page, limit]);
    const theme = (0, material_1.useTheme)();
    return (<material_1.Card>
            <material_1.CardHeader action={<material_1.Box width={200} display={"flex"} gap={1}>
                        <material_1.FormControl fullWidth variant="outlined">
                            <material_1.TextField value={filterValue} onChange={(e) => {
                setFilterValue(e.target.value);
            }} label="Filtrar">
                            </material_1.TextField>
                        </material_1.FormControl>
                        <material_1.Tooltip title="Agregar" arrow>
                            <material_1.IconButton sx={{
                '&:hover': {
                    background: theme.colors.success.lighter
                },
                color: theme.palette.success.dark
            }} color="inherit" size="medium" onClick={addAction}>
                                <AddTwoTone_1.default fontSize="large"/>
                            </material_1.IconButton>
                        </material_1.Tooltip>
                    </material_1.Box>} title={title}/>
            <material_1.Divider />
            <material_1.TableContainer>
                <material_1.Table>
                    <material_1.TableHead>
                        <material_1.TableRow>
                            {columns.map((col) => {
            return (<material_1.TableCell key={`col-${col.title}`}>
                                            {col.title}
                                        </material_1.TableCell>);
        })}
                            <material_1.TableCell align="right">Acciones</material_1.TableCell>
                        </material_1.TableRow>
                    </material_1.TableHead>
                    <material_1.TableBody>
                        {paginatedData.map((row, index) => {
            return (<material_1.TableRow hover key={`table-row-${index}`}>
                                    {columns.map((col, cellIndex) => {
                    return (<material_1.TableCell key={`cell-${index}-${cellIndex}`}>
                                                    <material_1.Typography variant="body1" fontWeight="bold" color="text.primary" gutterBottom noWrap>
                                                        {paginatedData[index][col.key] || ""}
                                                    </material_1.Typography>
                                                </material_1.TableCell>);
                })}
                                    <material_1.TableCell align="right">
                                        <material_1.Tooltip title="Ver" arrow>
                                            <material_1.IconButton sx={{
                    '&:hover': {
                        background: theme.colors.primary.lighter
                    },
                    color: theme.palette.primary.main
                }} color="inherit" size="small" onClick={() => viewAction(paginatedData[index])}>
                                                <VisibilityTwoTone_1.default fontSize="small"/>
                                            </material_1.IconButton>
                                        </material_1.Tooltip>
                                        <material_1.Tooltip title="Borrar" arrow>
                                            <material_1.IconButton sx={{
                    '&:hover': { background: theme.colors.error.lighter },
                    color: theme.palette.error.main
                }} color="inherit" size="small" onClick={() => deleteAction(paginatedData[index])}>
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
                <material_1.TablePagination component="div" count={filteredData.length} onPageChange={handlePageChange} onRowsPerPageChange={handleLimitChange} page={page} rowsPerPage={limit} rowsPerPageOptions={[5, 10, 25, 30]} labelDisplayedRows={({ from, to, count }) => {
            return `${from}-${to} de ${count !== -1 ? count : `mas de ${to}`}`;
        }} labelRowsPerPage={'Filas por página:'}/>
            </material_1.Box>
        </material_1.Card>);
};
MyTable.propTypes = {
    rows: prop_types_1.default.array.isRequired,
    columns: prop_types_1.default.array.isRequired,
    title: prop_types_1.default.string.isRequired,
    addAction: prop_types_1.default.func.isRequired,
    deleteAction: prop_types_1.default.func.isRequired,
    viewAction: prop_types_1.default.func.isRequired
};
exports.default = MyTable;
//# sourceMappingURL=index.js.map