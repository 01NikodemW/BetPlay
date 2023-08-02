import {
  Box,
  Pagination,
  PaginationItem,
  styled,
  useTheme,
} from "@mui/material";
import {
  DataGrid,
  useGridApiContext,
  useGridSelector,
  gridPageSelector,
  gridPageCountSelector,
} from "@mui/x-data-grid";
import { Next } from "@/icons/next";
import { Previous } from "@/icons/previous";
import { rem } from "@/utils/px-to-rem";

export const StyledDataGrid = styled(DataGrid)<{
  showBorderBetweenRows?: boolean;
}>(({ theme, showBorderBetweenRows }) => ({
  border: "none",

  "& .MuiDataGrid-virtualScroller": {
    overflow: "scroll",
  },

  "& .MuiDataGrid-columnHeaders": {
    color: theme.palette.text.primary,
    fontWeight: 500,
    fontSize: rem(14),
    borderBottom: showBorderBetweenRows ? `1px solid #e0e0e0` : "none",
  },
  "& .MuiDataGrid-cell": {
    color: theme.palette.text.primary,
    fontSize: rem(14),
    fontWeight: 400,
    borderBottom: showBorderBetweenRows ? `1px solid #e0e0e0` : "none",
  },

  "&.MuiDataGrid-cell:focus": {
    outline: "none",
  },

  "& .MuiDataGrid-cell:focus-within": {
    outline: "none",
  },
  "& .MuiDataGrid-columnHeader:focus-within": {
    outline: "none",
  },
}));

export const CustomPagination = () => {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  const theme = useTheme();

  const RedSelectedPaginationItem = styled(PaginationItem)(({ theme }) => ({
    "&.Mui-selected": {
      backgroundColor: theme.palette.menu.main,
      color: theme.palette.background.paper,
      "&:hover": {
        backgroundColor: theme.palette.menu.main,
      },
    },
  }));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: theme.spaces.medium,
      }}
    >
      <Pagination
        count={pageCount}
        hidden={pageCount === 1}
        page={page + 1}
        renderItem={(item) => (
          <RedSelectedPaginationItem
            slots={{ previous: Previous, next: Next }}
            {...item}
          />
        )}
        shape="rounded"
        onChange={(event: React.ChangeEvent<unknown>, value: number) =>
          apiRef.current.setPage(value - 1)
        }
      />
    </Box>
  );
};
